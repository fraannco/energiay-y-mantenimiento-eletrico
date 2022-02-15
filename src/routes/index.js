import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/About us";

const EYM_ROUTES = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EYM_ROUTES;
