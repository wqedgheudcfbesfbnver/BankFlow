
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchCont } from "../api.js";
import { ETICHETE_TIP, TIPURI_INTERFATA } from "../constants.js";

import styles from "./ContDetaliuPage.module.css";

/* =========================
   BANKFLOW - ETAPA 8
   PAGINA DETALII CONT
========================= */

export default function ContDetaliuPage() {

  // Preluam ID-ul contului din adresa
  const { id } = useParams();

  const [rezultat, setRezultat] = useState({
    id: null,
    cont: null,
    error: null
  });

  const loading = rezultat.id !== id;
  const cont = rezultat.cont;
  const error = rezultat.error;

  /* =========================
     GET - DETALII CONT
  ========================= */

  useEffect(() => {
    let ignore = false;

    async function loadCont() {
      try {
        const data = await fetchCont(id);

        if (!ignore) {
          setRezultat({
            id,
            cont: data,
            error: null
          });
        }

      } catch (err) {
        if (!ignore) {
          setRezultat({
            id,
            cont: null,
            error: err.message
          });
        }
      }
    }

    loadCont();

    return () => {
      ignore = true;
    };

  }, [id]);

  /* =========================
     INCARCARE
  ========================= */

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile contului...
      </p>
    );
  }

  /* =========================
     EROARE SERVER SAU ID INEXISTENT
  ========================= */

  if (error || !cont) {
    return (
      <section className="panel">

        <p className="error" data-testid="error">
          Contul bancar nu a putut fi încărcat:
          {" "}
          {error || "Cont inexistent."}
        </p>

        <Link to="/" className={styles.back}>
          Înapoi la conturi
        </Link>

      </section>
    );
  }

  /* =========================
     ADAPTAREA DATELOR
  ========================= */

  const nume = cont.accountName ?? cont.nume;
  const activ = cont.active ?? cont.activ ?? false;

  const tip =
    TIPURI_INTERFATA[cont.accountType] ??
    cont.tip ??
    "necunoscut";

  const etichetaTip = ETICHETE_TIP[tip] ?? tip;

  /* =========================
     AFISAREA DETALIILOR
  ========================= */

  return (
    <section
      className={`panel ${styles.detail}`}
      data-testid="detail"
    >

      <Link to="/" className={styles.back}>
        Înapoi la conturi
      </Link>

      <h2
        className={styles.title}
        data-testid="detail-title"
      >
        {nume}
      </h2>

      <p className={styles.subtitle}>
        Informațiile contului bancar
      </p>

      <dl className={styles.fields}>

        <dt>Numele contului</dt>
        <dd>{nume}</dd>

        <dt>Tipul contului</dt>
        <dd>
          <span className={`badge badge-${tip}`}>
            {etichetaTip}
          </span>
        </dd>

        <dt>Stare</dt>
        <dd>
          <span
            className={
              activ
                ? styles.active
                : styles.inactive
            }
          >
            {activ ? "Activ" : "Inactiv"}
          </span>
        </dd>

        <dt>Categorie</dt>
        <dd>{cont.category ?? "Nespecificată"}</dd>

        <dt>Utilizator</dt>
        <dd>{cont.user ?? "Nespecificat"}</dd>

        <dt>ID cont</dt>
        <dd>{cont.id}</dd>

      </dl>

    </section>
  );
}
