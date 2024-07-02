import React from "react";
import Home from "./pages_/home_page/Home";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="flex h-screen w-full">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
