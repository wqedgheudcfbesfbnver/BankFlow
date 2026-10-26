/* =========================
   COMPONENTA UNUI CONT BANCAR
========================= */

const ETICHETE_TIP = {
  curent: "Curent",
  economii: "Economii",
  depozit: "Depozit"
};

export default function ContCard({ cont, onToggle, onDelete }) {

  return (
    <li className={cont.activ ? "item-card" : "item-card done"}>

      {/* CHECKBOX SI INFORMATII CONT */}

      <label className="item-main">

        <input
          type="checkbox"
          checked={cont.activ}
          onChange={() => onToggle(cont.id)}
        />

        <div>
          <h3>{cont.nume}</h3>

          <span className={`badge badge-${cont.tip}`}>
            Tip: {ETICHETE_TIP[cont.tip]}
          </span>
        </div>

      </label>

      {/* STATUS CONT */}

      <span className="status">
        {cont.activ ? "Activ" : "Inactiv"}
      </span>

      {/* BUTON STERGERE */}

      <button
        className="btn-danger"
        onClick={() => onDelete(cont.id)}
        aria-label={`Sterge ${cont.nume}`}
      >
        Șterge
      </button>

    </li>
  );
}