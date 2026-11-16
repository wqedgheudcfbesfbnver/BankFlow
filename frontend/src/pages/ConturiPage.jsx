
import { useEffect, useState } from "react";

import ContList from "../components/ContList.jsx";
import ContForm from "../components/ContForm.jsx";

import {
  fetchConturi,
  createCont,
  updateCont,
  deleteCont
} from "../api.js";

import {
  TIPURI_API,
  TIPURI_INTERFATA
} from "../constants.js";

import styles from "./ConturiPage.module.css";

/* =========================
   BANKFLOW - ETAPA 8
   PAGINA PRINCIPALA
========================= */

/* =========================
   ADAPTAREA DATELOR DIN API
========================= */

function adapteazaCont(cont) {
  return {
    ...cont,
    nume: cont.accountName ?? cont.nume,
    activ: cont.active ?? cont.activ ?? false,
    tip: TIPURI_INTERFATA[cont.accountType] ?? cont.tip
  };
}

/* =========================
   COMPONENTA CONTURIPAGE
========================= */

export default function ConturiPage() {

  const [conturi, setConturi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* =========================
     GET - INCARCARE CONTURI
  ========================= */

  useEffect(() => {
    let ignore = false;

    async function loadConturi() {
      try {
        const data = await fetchConturi();

        if (!Array.isArray(data)) {
          throw new Error(
            "API-ul nu a returnat o lista de conturi."
          );
        }

        const conturiAdaptate = data.map(adapteazaCont);

        if (!ignore) {
          setConturi(conturiAdaptate);
          setError(null);
        }

      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }

      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadConturi();

    return () => {
      ignore = true;
    };
  }, []);

  /* =========================
     POST - ADAUGARE CONT
  ========================= */

  async function handleAdd(contNou) {

    const utilizator =
      conturi.find((cont) => cont.user)?.user ??
      "Utilizator";

    const datePentruServer = {
      accountName: contNou.nume,
      accountType: TIPURI_API[contNou.tip],
      active: contNou.activ,
      category: "Personal",
      user: utilizator
    };

    const creat = await createCont(datePentruServer);

    setConturi((prev) => [
      ...prev,
      adapteazaCont(creat)
    ]);

    setError(null);
  }

  /* =========================
     PATCH - ACTIVARE / DEZACTIVARE
  ========================= */

  async function handleToggle(id) {

    const cont = conturi.find((c) => c.id === id);

    if (!cont) return;

    try {
      setError(null);

      const actualizat = await updateCont(id, {
        active: !cont.activ
      });

      const contAdaptat = adapteazaCont(actualizat);

      setConturi((prev) =>
        prev.map((c) =>
          c.id === id ? contAdaptat : c
        )
      );

    } catch (err) {
      setError(err.message);
    }
  }

  /* =========================
     DELETE - STERGERE CONT
  ========================= */

  async function handleDelete(id) {

    try {
      setError(null);

      await deleteCont(id);

      setConturi((prev) =>
        prev.filter((c) => c.id !== id)
      );

    } catch (err) {
      setError(err.message);
    }
  }

  /* =========================
     NUMAR CONTURI ACTIVE
  ========================= */

  const active = conturi.filter(
    (cont) => cont.activ === true
  ).length;

  /* =========================
     INTERFATA PAGINII
  ========================= */

  return (
    <div className={styles.grid}>

      {/* FORMULAR ADAUGARE CONT */}

      <section className="panel">

        <h2>Adaugă cont bancar</h2>

        <ContForm onAdd={handleAdd} />

      </section>

      {/* LISTA CONTURILOR */}

      <section className="panel">

        <h2>Conturile mele</h2>

        {/* CONTOR CONTURI */}

        <p className={styles.summary}>
          {conturi.length} conturi bancare,
          dintre care {active} active
        </p>

        {/* INCARCARE */}

        {loading && (
          <p
            className="info"
            data-testid="loading"
          >
            Se încarcă conturile bancare...
          </p>
        )}

        {/* EROARE */}

        {error && (
          <p
            className="error"
            role="alert"
            data-testid="error"
          >
            Eroare: {error}
          </p>
        )}

        {/* AFISARE LISTA */}

        {!loading && (
          <ContList
            conturi={conturi}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}

      </section>

    </div>
  );
}
