
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";

import ConturiPage from "./pages/ConturiPage.jsx";
import ContDetaliuPage from "./pages/ContDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

/* =========================
   BANKFLOW - ETAPA 8
   CONFIGURAREA RUTELOR
========================= */

export default function App() {

  return (
    <Routes>

      {/* LAYOUT COMUN TUTUROR PAGINILOR */}

      <Route element={<Layout />}>

        {/* PAGINA PRINCIPALA */}

        <Route
          path="/"
          element={<ConturiPage />}
        />

        {/* PAGINA DETALII CONT BANCAR */}

        <Route
          path="/conturi/:id"
          element={<ContDetaliuPage />}
        />

        {/* PAGINA DESPRE BANKFLOW */}

        <Route
          path="/despre"
          element={<DesprePage />}
        />

        {/* PAGINA 404 */}

        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Route>

    </Routes>
  );
}
