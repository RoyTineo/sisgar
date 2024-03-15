import React from "react";
import { Routes, Route } from "react-router-dom";

import TramiteDocumentario from "../pages/tramiteDocumentario/TramiteDocumentario";
import Programacion from "../pages/Programacion";
import NotFound from "../pages/NotFound";

import Dashboard from "../pages/Dashboard";

import Content from "../components/Content";

function RoutesIndex() {
  return (
   
      <Routes>
        <Route path="/*" element={<Content />} >
            <Route path="inicio" element={<Dashboard />} />
            <Route path="tramiteDocumentario" element={<TramiteDocumentario />} />
            <Route path="programacion" element={<Programacion />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  );
}

export default RoutesIndex;
