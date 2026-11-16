
import { Link } from "react-router-dom";

/* =========================
   BANKFLOW - ETAPA 8
   PAGINA 404
========================= */

export default function NotFoundPage() {

  return (
    <section
      className="panel"
      data-testid="not-found"
    >

      {/* MESAJ 404 */}

      <h2>404 – Pagina nu există</h2>

      <p className="info">
        Pagina pe care încerci să o accesezi
        nu există în aplicația BankFlow.
      </p>

      <p>
        Verifică adresa introdusă sau
        întoarce-te la pagina principală.
      </p>

      {/* LINK CATRE PAGINA PRINCIPALA */}

      <Link to="/">
        Înapoi la conturile bancare
      </Link>

    </section>
  );
}
