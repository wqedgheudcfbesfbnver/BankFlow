
import ContCard from "./ContCard.jsx";

/* =========================
   ETAPA 7 - BANKFLOW
   COMPONENTA CONTLIST
========================= */

export default function ContList({
  conturi,
  onToggle,
  onDelete
}) {

  /* =========================
     VERIFICARE LISTA GOALA
  ========================= */

  if (conturi.length === 0) {
    return (
      <p
        className="empty"
        data-testid="empty"
      >
        Nu există niciun cont bancar.
        Adaugă primul cont folosind formularul.
      </p>
    );
  }

  /* =========================
     AFISAREA CONTURILOR
  ========================= */

  return (
    <ul className="item-list">

      {conturi.map((cont) => (

        <ContCard
          key={cont.id}
          cont={cont}
          onToggle={onToggle}
          onDelete={onDelete}
        />

      ))}

    </ul>
  );
}
