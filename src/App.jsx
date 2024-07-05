import React from "react";
import LabPage from "./pages_/lab_page/labPage";
import Home from "./pages_/home_page/Home";
import { SideBar } from "./components/sidebar/SideBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CursorEffect from "./components/cursorEffect/CursorEffect";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="flex h-screen w-full max-w-screen">
        <CursorEffect />
        <SideBar />
        <div className="flex  h-auto w-full ">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/lab" element={<LabPage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
