import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InConstruction from "../components/InConstruction";

const EYM_ROUTES = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<InConstruction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EYM_ROUTES;
