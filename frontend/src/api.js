
/* =========================
   BANKFLOW - ETAPA 8
   API REST
========================= */

export const API_URL =
  import.meta.env.VITE_API_URL ??
  "http://localhost:3001";

/* =========================
   FUNCTIE COMUNA REQUEST
========================= */

async function request(path, options = {}) {

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}

/* =========================
   GET - TOATE CONTURILE
========================= */

export function fetchConturi() {
  return request("/conturi");
}

/* =========================
   GET - UN SINGUR CONT
   NOU IN ETAPA 8
========================= */

export function fetchCont(id) {
  return request(`/conturi/${encodeURIComponent(id)}`);
}

/* =========================
   POST - ADAUGARE CONT
========================= */

export function createCont(cont) {
  return request("/conturi", {
    method: "POST",
    body: JSON.stringify(cont)
  });
}

/* =========================
   PATCH - MODIFICARE CONT
========================= */

export function updateCont(id, changes) {
  return request(`/conturi/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes)
  });
}

/* =========================
   DELETE - STERGERE CONT
========================= */

export function deleteCont(id) {
  return request(`/conturi/${id}`, {
    method: "DELETE"
  });
}
