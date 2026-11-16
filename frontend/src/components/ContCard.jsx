
import { Link } from "react-router-dom";

import { ETICHETE_TIP } from "../constants.js";

import styles from "./ContCard.module.css";

/* =========================
   BANKFLOW - ETAPA 8
   COMPONENTA CONTCARD
========================= */

export default function ContCard({
  cont,
  onToggle,
  onDelete
}) {

  return (
    <li
      className={
        cont.activ
          ? styles.card
          : `${styles.card} ${styles.done}`
      }
      data-testid="item"
      data-id={cont.id}
    >

      {/* CONTINUT CARD */}

      <div className={styles.main}>

        {/* ACTIVARE / DEZACTIVARE */}

        <input
          type="checkbox"
          className={styles.checkbox}
          checked={Boolean(cont.activ)}
          onChange={() => onToggle(cont.id)}
          aria-label={`Activează sau dezactivează ${cont.nume}`}
          data-testid="item-toggle"
        />

        <div className={styles.details}>

          {/* LINK CATRE DETALIILE CONTULUI */}

          <Link
            to={`/conturi/${cont.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            <span data-testid="item-title">
              {cont.nume}
            </span>
          </Link>

          {/* TIPUL CONTULUI */}

          <div className={styles.badgeRow}>

            <span
              className={`badge badge-${cont.tip}`}
            >
              {ETICHETE_TIP[cont.tip] ?? cont.tip}
            </span>

          </div>

          {/* STAREA CONTULUI */}

          <p className={styles.status}>
            {cont.activ ? "Activ" : "Inactiv"}
          </p>

        </div>

      </div>

      {/* BUTON STERGERE */}

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
