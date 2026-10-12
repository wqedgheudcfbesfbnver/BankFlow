
/* =========================
   DATELE CONTURILOR BANCARE
   Preluate din Etapa 2
========================= */

const conturi = [
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
   COMPONENTA PRINCIPALA
========================= */

export default function App() {

  // Calculam numarul conturilor active
  const active = conturi.filter(
    (cont) => cont.activ === true
  ).length;

  return (
    <>
      {/* ANTETUL APLICATIEI */}

      <header className="app-header">
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

          {/* Etapa 3: afisam temporar datele JSON */}

          <pre>
            {JSON.stringify(conturi, null, 2)}
          </pre>

        </section>

      </main>
    </>
  );
}
