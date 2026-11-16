
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

/* =========================
   BANKFLOW - ETAPA 8
   LAYOUT COMUN
========================= */

/* =========================
   TEMA INITIALA
========================= */

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/* =========================
   STIL LINK ACTIV
========================= */

function navClass({ isActive }) {
  return isActive
    ? `${styles.link} ${styles.active}`
    : styles.link;
}

/* =========================
   COMPONENTA LAYOUT
========================= */

export default function Layout() {

  const [tema, setTema] = useState(temaInitiala);

  /* =========================
     APLICAREA TEMEI
  ========================= */

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  /* =========================
     SCHIMBAREA TEMEI
  ========================= */

  function handleTema() {
    setTema((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  }

  return (
    <div className={styles.layout}>

      {/* ANTET BANKFLOW */}

      <header className={styles.header}>

        <div className={styles.inner}>

          <NavLink
            to="/"
            className={styles.logo}
          >
            BankFlow
          </NavLink>

          {/* MENIU NAVIGARE */}

          <nav
            className={styles.nav}
            data-testid="nav"
          >

            <NavLink
              to="/"
              end
              className={navClass}
            >
              Conturile mele
            </NavLink>

            <NavLink
              to="/despre"
              className={navClass}
            >
              Despre
            </NavLink>

          </nav>

          {/* MOD LUMINOS / INTUNECAT */}

          <button
            type="button"
            className={styles.themeToggle}
            onClick={handleTema}
            aria-pressed={tema === "dark"}
          >
            {tema === "dark"
              ? "Mod luminos"
              : "Mod întunecat"}
          </button>

        </div>

      </header>

      {/* PAGINA CURENTA */}

      <main className={styles.main}>
        <Outlet />
      </main>

      {/* SUBSOL */}

      <footer className={styles.footer}>
        BankFlow | Proiect Tehnologii Web
      </footer>

    </div>
  );
}
