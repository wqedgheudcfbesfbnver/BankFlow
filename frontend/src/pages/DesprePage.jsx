
/* =========================
   BANKFLOW - ETAPA 8
   PAGINA DESPRE
========================= */

export default function DesprePage() {

  return (
    <section className="panel">

      {/* TITLUL PAGINII */}

      <h2>Despre BankFlow</h2>

      {/* PREZENTAREA APLICATIEI */}

      <p>
        BankFlow este o aplicație web pentru
        gestionarea conturilor bancare, dezvoltată
        în cadrul proiectului de semestru la
        disciplina Tehnologii Web.
      </p>

      <p>
        Aplicația permite administrarea conturilor
        printr-o interfață modernă, intuitivă
        și ușor de utilizat.
      </p>

      {/* FUNCTIONALITATI */}

      <h3>Funcționalități principale</h3>

      <ul>
        <li>
          Vizualizarea conturilor bancare
        </li>

        <li>
          Adăugarea conturilor prin formular
        </li>

        <li>
          Validarea datelor introduse
        </li>

        <li>
          Activarea și dezactivarea conturilor
        </li>

        <li>
          Ștergerea conturilor bancare
        </li>

        <li>
          Salvarea datelor prin API REST
        </li>

        <li>
          Vizualizarea detaliilor fiecărui cont
        </li>

        <li>
          Navigarea între pagini cu React Router
        </li>

        <li>
          Utilizarea modului luminos și întunecat
        </li>
      </ul>

      {/* TEHNOLOGII */}

      <h3>Tehnologii utilizate</h3>

      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>Vite</li>
        <li>React Router</li>
        <li>CSS Modules</li>
        <li>JSON Server</li>
        <li>REST API</li>
        <li>Git și GitHub</li>
      </ul>

      {/* INFORMATII PROIECT */}

      <h3>Informații despre proiect</h3>

      <p>
        <strong>Proiect:</strong> BankFlow
      </p>

      <p>
        <strong>Student:</strong> Nițu Ana Maria
      </p>

      <p>
        <strong>Disciplina:</strong> Tehnologii Web
      </p>

      <p>
        <strong>An universitar:</strong> 2026–2027
      </p>

      <p>
        <strong>Etapa:</strong> 8 – Navigare și
        stilizare pe componente
      </p>

    </section>
  );
}
