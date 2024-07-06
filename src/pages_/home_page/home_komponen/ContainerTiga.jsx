import React from "react";
import { motion } from "framer-motion";

const ContainerTiga = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.7 } }} className="flex w-1/2 h-full rounded-xl  c3 "></motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.9 } }} className="flex w-1/2 h-full rounded-xl bg-[#F5F7F8] c3">
        <div className=" bg-[#F5F7F8] w-full h-full col rounded-xl c3 flex-col">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.2 } }} className="fi bg-[#F5F7F8] flex sm:w-40 h-8 w-28 sm:h-10 border-2 border-black justify-center mt-5 ml-4 rounded-md items-center">
            <h1 className="sm:text-3xl text-sm font-bold">Free Icon</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.6 } }} className="fi2 bg-[#F5F7F8] flex w-40 h-10 border-2 border-black justify-center items-center mt-5 ml-4 rounded-md">
            <h1 className="text-sm font-bold">Free Asset illustration</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.9 } }} className="fi3 bg-[#F5F7F8] flex w-40 h-10 border-2 border-black justify-center mt-5 ml-4 rounded-md">
            <h1 className="text-3xl font-bold">Follow us</h1>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ContainerTiga;
