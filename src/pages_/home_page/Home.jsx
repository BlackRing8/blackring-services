import * as React from "react";
import CursorEffect from "../../komponen/cursorEffect/CursorEffect";
import { LoaderHome } from "../../komponen/Loader/LoaderHome";
import { motion } from "framer-motion";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Home = () => {
  return (
    <>
      <LoaderHome />
      <CursorEffect />
      {/* body utama */}
      <div className="flex bg-black w-full h-auto sm:h-screen sm:items-center justify-center">
        {/* kontener pertama */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col-reverse h-[720px] w-[350px] sm:flex sm:flex-row gap-3 sm:w-[1000px] sm:h-[450px] pb-10 pt-20 sm:pt-0">
          <div className="flex w-[350px] h-full sm:w-[320px] sm:h-full border-2 border-orange-500 rounded-xl"></div>

          {/* Kontener ke dua */}
          <div className="grid w-[350px] gap-3 sm:w-[680px] h-full">
            <div className="flex  w-full h-full rounded-xl border-red-600 border-2"></div>

            {/* kontener ke 3 */}
            <div className="flex gap-3 w-full">
              <div className="flex w-1/2 h-full rounded-xl border-blue-700 border-2"></div>
              <div className="flex w-1/2 h-full rounded-xl border-yellow-500 border-2"></div>
            </div>
            {/*  */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
