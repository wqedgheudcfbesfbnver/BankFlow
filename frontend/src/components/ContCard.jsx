
/* =========================
   COMPONENTA UNUI CONT BANCAR
========================= */

const ETICHETE_TIP = {
  curent: "Curent",
  economii: "Economii",
  depozit: "Depozit"
};

export default function ContCard({ cont }) {
  return (
    <li className={cont.activ ? "item-card" : "item-card done"}>
      <div>
        <h3>{cont.nume}</h3>

        <span className={`badge badge-${cont.tip}`}>
          Tip: {ETICHETE_TIP[cont.tip]}
        </span>
      </div>

      <span className="status">
        {cont.activ ? "Activ" : "Inactiv"}
      </span>
    </li>
  );
}
