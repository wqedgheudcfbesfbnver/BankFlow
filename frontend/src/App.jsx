/* =========================
   IMPORTURI
========================= */

import { useState } from "react";
import ContList from "./components/ContList.jsx";

/* =========================
   DATELE INITIALE ALE CONTURILOR
========================= */

const CONTURI_INITIALE = [
  {
    id: 1,
    nume: "Cont curent",
    activ: true,
    tip: "curent"
  },
  {
    id: 2,
    nume: "Cont economii",
    activ: true,
    tip: "economii"
  },
  {
    id: 3,
    nume: "Depozit vacanta",
    activ: false,
    tip: "depozit"
  }
];

/* =========================
   TEMA INITIALA
========================= */

// Detectam tema sistemului de operare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/* =========================
   COMPONENTA PRINCIPALA
========================= */

export default function App() {

  // State pentru conturile bancare
  const [conturi, setConturi] = useState(CONTURI_INITIALE);

  // State pentru tema aplicatiei
  const [tema, setTema] = useState(temaInitiala);

  /* =========================
     ACTIVARE / DEZACTIVARE CONT
  ========================= */

  function handleToggle(id) {
    setConturi((prev) =>
      prev.map((cont) =>
        cont.id === id
          ? { ...cont, activ: !cont.activ }
          : cont
      )
    );
  }

  /* =========================
     STERGERE CONT
  ========================= */

  function handleDelete(id) {
    setConturi((prev) =>
      prev.filter((cont) => cont.id !== id)
    );
  }

  /* =========================
     SCHIMBAREA TEMEI
  ========================= */

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";

    // Actualizam state-ul
    setTema(noua);

    // Aplicam tema pe elementul HTML
    document.documentElement.dataset.theme = noua;
  }

  /* =========================
     NUMAR CONTURI ACTIVE
  ========================= */

  const active = conturi.filter(
    (cont) => cont.activ === true
  ).length;

  return (
    <>
      {/* ANTETUL APLICATIEI */}

      <header className="app-header">

        {/* BUTON LIGHT / DARK MODE */}

        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <h1>BankFlow</h1>

        <p>
          Aplicatie pentru gestionarea conturilor bancare.
        </p>

        <p className="app-count">
          {conturi.length} conturi bancare,
          dintre care {active} active
        </p>

      </header>

      {/* CONTINUTUL PRINCIPAL */}

      <main className="container">

        <section className="panel">

          <h2>Conturile mele</h2>

          <ContList
            conturi={conturi}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

        </section>

      </main>
    </>
  );
}