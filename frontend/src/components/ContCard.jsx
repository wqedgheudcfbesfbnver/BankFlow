
/* =========================
   ETAPA 7 - BANKFLOW
   COMPONENTA CONTCARD
========================= */

const ETICHETE_TIP = {
  curent: "Curent",
  economii: "Economii",
  depozit: "Depozit"
};

export default function ContCard({
  cont,
  onToggle,
  onDelete
}) {

  return (
    <li
      className={
        cont.activ
          ? "item-card"
          : "item-card done"
      }
      data-testid="item"
      data-id={cont.id}
    >

      {/* ACTIVARE / DEZACTIVARE */}

      <label className="item-main">

        <input
          type="checkbox"
          checked={Boolean(cont.activ)}
          onChange={() => onToggle(cont.id)}
          aria-label={`Activează sau dezactivează ${cont.nume}`}
          data-testid="item-toggle"
        />

        <div className="item-details">

          {/* NUMELE CONTULUI */}

          <h3 data-testid="item-title">
            {cont.nume}
          </h3>

          {/* TIPUL CONTULUI */}

          <span
            className={`badge badge-${cont.tip}`}
          >
            {ETICHETE_TIP[cont.tip] ?? cont.tip}
          </span>

          {/* STAREA CONTULUI */}

          <p className="item-status">
            {cont.activ ? "Activ" : "Inactiv"}
          </p>

        </div>

      </label>

      {/* STERGERE CONT */}

      <button
        type="button"
        className="btn-danger"
        onClick={() => onDelete(cont.id)}
        aria-label={`Șterge ${cont.nume}`}
        data-testid="item-delete"
      >
        Șterge
      </button>

    </li>
  );
}
