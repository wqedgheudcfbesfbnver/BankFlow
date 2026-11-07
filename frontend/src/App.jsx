
import { useEffect, useState } from "react";
import { fetchConturi } from "./api.js";
import ContList from "./components/ContList.jsx";

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

  // Conturile vor fi incarcate din API
  const [conturi, setConturi] = useState([]);

  // Starea de incarcare
  const [loading, setLoading] = useState(true);

  // Starea de eroare
  const [error, setError] = useState(null);

  // Tema aplicatiei
  const [tema, setTema] = useState(temaInitiala);

  /* =========================
     ETAPA 6 - INCARCARE API
  ========================= */

  useEffect(() => {
    let ignore = false;

    async function loadConturi() {
      try {
        const data = await fetchConturi();

        if (!Array.isArray(data)) {
          throw new Error("API-ul nu a returnat o lista de conturi.");
        }

        // Adaptam datele API la componentele BankFlow
        const conturiAdaptate = data.map((cont) => {
          const tipuri = {
            Current: "curent",
            Savings: "economii",
            Deposit: "depozit"
          };

          return {
            ...cont,
            nume: cont.nume ?? cont.accountName,
            activ: cont.activ ?? cont.active,
            tip: tipuri[cont.accountType] ?? cont.tip
          };
        });

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
     INTERFATA APLICATIEI
  ========================= */

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
          {tema === "dark"
            ? "Mod luminos"
            : "Mod întunecat"}
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

          {/* STAREA DE INCARCARE */}

          {loading && (
            <p className="info">
              Se încarcă conturile bancare...
            </p>
          )}

          {/* STAREA DE EROARE */}

          {error && (
            <p className="error" role="alert">
              Nu am putut încărca datele: {error}.
              Verifică dacă serverul API este pornit
              folosind comanda npm run api.
            </p>
          )}

          {/* AFISAREA CONTURILOR */}

          {!loading && !error && (
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
