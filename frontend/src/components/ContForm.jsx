
import { useState, useRef } from "react";

/* =========================
   ETAPA 7 - BANKFLOW
   FORMULAR CONT BANCAR
========================= */

const TIPURI_CONT = [
  {
    value: "Current",
    label: "Cont curent",
    tip: "curent"
  },
  {
    value: "Savings",
    label: "Cont economii",
    tip: "economii"
  },
  {
    value: "Deposit",
    label: "Cont depozit",
    tip: "depozit"
  }
];

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
      await onAdd({
        nume: nume.trim(),
        tip: tipSelectat.tip,
        activ: true
      });

      // Golim doar dupa salvarea reusita
      setNume("");
      setAccountType("Current");

    } catch (err) {
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
      className="cont-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >

      <label>
        Numele contului

        <input
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

      <label>
        Tipul contului

        <select
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

      {eroare && (
        <p
          className="error"
          data-testid="form-error"
        >
          {eroare}
        </p>
      )}

      <button
        type="submit"
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salvează..." : "Adaugă cont"}
      </button>

    </form>
  );
}
