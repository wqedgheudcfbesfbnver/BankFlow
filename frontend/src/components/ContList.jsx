/* =========================
   COMPONENTA LISTEI DE CONTURI
========================= */

import ContCard from "./ContCard.jsx";

export default function ContList({ conturi, onToggle, onDelete }) {

  // Verificam daca lista este goala
  if (conturi.length === 0) {
    return (
      <p className="empty">
        Nu exista niciun cont bancar.
      </p>
    );
  }

  // Generam automat cardurile din array
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