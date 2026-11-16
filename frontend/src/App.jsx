
import { useEffect, useState } from "react";

import "./App.css";


import ContList from "./components/ContList.jsx";
import ContForm from "./components/ContForm.jsx";

import {
  fetchConturi,
  createCont,
  updateCont,
  deleteCont
} from "./api.js";

/* =========================
   ETAPA 7 - BANKFLOW
========================= */

const TIPURI_API = {
  curent: "Current",
  economii: "Savings",
  depozit: "Deposit"
};

const TIPURI_INTERFATA = {
  Current: "curent",
  Savings: "economii",
  Deposit: "depozit"
};

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
   TEMA INITIALA
========================= */

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/* =========================
   COMPONENTA PRINCIPALA
========================= */

export default function App() {

  const [conturi, setConturi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

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
     APLICAREA TEMEI
  ========================= */

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

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

    // Mai intai salvam pe server
    const creat = await createCont(datePentruServer);

    // Folosim obiectul returnat de server
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

      // Stergem mai intai de pe server
      await deleteCont(id);

      // Eliminam contul din interfata
      setConturi((prev) =>
        prev.filter((c) => c.id !== id)
      );

    } catch (err) {
      setError(err.message);
    }
  }

  /* =========================
     SCHIMBAREA TEMEI
  ========================= */

  function handleTema() {
    setTema((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  }

  /* =========================
     NUMAR CONTURI ACTIVE
  ========================= */

  const active = conturi.filter(
    (cont) => cont.activ === true
  ).length;

  /* =========================
     INTERFATA BANKFLOW
  ========================= */

  return (
    <>

      <header className="app-header">

        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark"
            ? "Mod luminos"
            : "Mod întunecat"}
        </button>

        <h1>BankFlow</h1>

        <p>
          Aplicație pentru gestionarea conturilor bancare.
        </p>

        <p className="app-count">
          {conturi.length} conturi bancare,
          dintre care {active} active
        </p>

      </header>

      <main className="container">

        {/* FORMULAR ADAUGARE CONT */}

        <section className="panel">

          <h2>Adaugă cont bancar</h2>

          <ContForm onAdd={handleAdd} />

        </section>

        {/* LISTA CONTURILOR */}

        <section className="panel">

          <h2>Conturile mele</h2>

          {loading && (
            <p
              className="info"
              data-testid="loading"
            >
              Se încarcă conturile bancare...
            </p>
          )}

          {error && (
            <p
              className="error"
              role="alert"
              data-testid="error"
            >
              Eroare: {error}
            </p>
          )}

          {!loading && (
            <ContList
              conturi={conturi}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}

        </section>

      </main>

    </>
  );
}
