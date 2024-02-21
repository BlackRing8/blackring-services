import React from "react";
import Home from "../pages_/home_page/Home";
import Portofolio from "../pages_/porto_page/Portofolio";
import Jasa from "../pages_/jasa_page/Jasa";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimasiRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/jasa" element={<Jasa />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimasiRoute;
