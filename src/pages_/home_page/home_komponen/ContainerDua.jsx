import React from "react";
import { motion } from "framer-motion";

const ContainerDua = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="flex w-full h-auto rounded-xl bg-[#F5F7F8]  mb-[15px] ">
      <div className="flex flex-wrap w-full h-[190px] rounded-xl"></div>
    </motion.div>
  );
};

export default ContainerDua;
