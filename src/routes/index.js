import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/About us";
import PricingContent from "../components/prueba"
import HomePage from "../pages/Homepage";
import Article from "../pages/Article/Article";

const EYM_ROUTES = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/prueba" element={<PricingContent />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EYM_ROUTES;
