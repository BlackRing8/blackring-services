import * as React from "react";
// import CursorEffect from "../../components/cursorEffect/CursorEffect";
// import { LoaderHome } from "../../components/Loader_home/LoaderHome";
import ContainerTiga from "./home_komponen/ContainerTiga";
import ContainerSatu from "./home_komponen/ContainerSatu";
import ContainerDua from "./home_komponen/ContainerDua";
import { motion, AnimatePresence } from "framer-motion";

const Home = ({ isVisible }) => {
  return (
    <>
      {/* <LoaderHome /> */}
      {/* <CursorEffect /> */}

      {/* body utama */}
      <div className="flex w-full h-auto sm:items-center justify-center ">
        {/* kontener pertama */}
        <div className="flex flex-col h-[750px] w-[350px] sm:flex sm:flex-row gap-3 sm:w-[1000px] sm:h-[450px] pb-10 pt-10 sm:pt-0">
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }} className="flex w-[350px] h-full sm:w-[350px] sm:h-full rounded-xl">
              <ContainerSatu />
            </motion.div>

            {/* Kontener ke dua */}
            <div className="flex-col gap-3 w-[350px] sm:w-[680px] h-full">
              <ContainerDua />

              {/* kontener ke 3 */}
              <div className="flex gap-3 w-full h-1/2 ">
                <ContainerTiga />
              </div>
              {/*  */}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Home;
