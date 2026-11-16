
import { useState, useRef } from "react";

import { TIPURI_CONT } from "../constants.js";

import styles from "./ContForm.module.css";

/* =========================
   BANKFLOW - ETAPA 8
   FORMULAR CONT BANCAR
========================= */

const NUME_MAX = 100;

export default function ContForm({ onAdd }) {

  const [nume, setNume] = useState("");
  const [accountType, setAccountType] = useState("Current");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  const trimitereInCurs = useRef(false);

  /* =========================
     VALIDAREA FORMULARULUI
  ========================= */

  function valideaza() {

    const numeCuratat = nume.trim();

    if (numeCuratat === "") {
      return "Numele contului este obligatoriu.";
    }

    if (numeCuratat.length > NUME_MAX) {
      return `Numele poate avea maximum ${NUME_MAX} de caractere.`;
    }

    if (!TIPURI_CONT.some((t) => t.value === accountType)) {
      return "Selectează un tip de cont valid.";
    }

    return "";
  }

  /* =========================
     TRIMITERE FORMULAR
  ========================= */

  async function handleSubmit(e) {

    e.preventDefault();

    // Prevenim trimiterea dubla
    if (trimitereInCurs.current) {
      return;
    }

    const mesaj = valideaza();

    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    const tipSelectat = TIPURI_CONT.find(
      (t) => t.value === accountType
    );

    setEroare("");
    setTrimite(true);
    trimitereInCurs.current = true;

    try {

      // Adaugarea se face prin API
      await onAdd({
        nume: nume.trim(),
        tip: tipSelectat.tip,
        activ: true
      });

      // Golim formularul doar dupa succes
      setNume("");
      setAccountType("Current");

    } catch (err) {

      // Afisam eroarea fara sa pierdem textul
      setEroare(err.message);

    } finally {

      setTrimite(false);
      trimitereInCurs.current = false;

    }
  }

  /* =========================
     INTERFATA FORMULARULUI
  ========================= */

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >

      {/* NUMELE CONTULUI */}

      <label htmlFor="account-name">
        Numele contului

        <input
          id="account-name"
          type="text"
          value={nume}
          onChange={(e) => {
            setNume(e.target.value);
            setEroare("");
          }}
          placeholder="Ex: Cont salariu"
          maxLength={NUME_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      {/* TIPUL CONTULUI */}

      <label htmlFor="account-type">
        Tipul contului

        <select
          id="account-type"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          data-testid="form-accountType"
        >
          {TIPURI_CONT.map((t) => (
            <option
              key={t.value}
              value={t.value}
            >
              {t.label}
            </option>
          ))}
        </select>
      </label>

      {/* MESAJ EROARE */}

      {eroare && (
        <p
          className="error"
          role="alert"
          data-testid="form-error"
        >
          {eroare}
        </p>
      )}

      {/* BUTON ADAUGARE */}

      <button
        type="submit"
        className={`btn ${styles.submit}`}
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salvează..." : "Adaugă cont"}
      </button>

    </form>
  );
}
