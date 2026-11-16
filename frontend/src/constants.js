
/* =========================
   BANKFLOW - ETAPA 8
   CONSTANTELE APLICATIEI
========================= */

/* =========================
   TIPURI DE CONT BANCAR
========================= */

export const TIPURI_CONT = [
  {
    value: "Current",
    label: "Cont curent",
    tip: "curent"
  },
  {
    value: "Savings",
    label: "Cont economii",
    tip: "economii"
  },
  {
    value: "Deposit",
    label: "Cont depozit",
    tip: "depozit"
  }
];

/* =========================
   ETICHETE PENTRU CARDURI
========================= */

export const ETICHETE_TIP = {
  curent: "Curent",
  economii: "Economii",
  depozit: "Depozit"
};

/* =========================
   CONVERSIE SPRE API
========================= */

export const TIPURI_API = {
  curent: "Current",
  economii: "Savings",
  depozit: "Deposit"
};

/* =========================
   CONVERSIE DIN API
========================= */

export const TIPURI_INTERFATA = {
  Current: "curent",
  Savings: "economii",
  Deposit: "depozit"
};
