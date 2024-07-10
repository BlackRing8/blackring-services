import React from "react";
import { motion } from "framer-motion";

const ContainerTiga = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.7 } }} className="flex w-1/2 h-full rounded-xl bg-red-600 "></motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.9 } }} className="grid flex-wrap w-1/2 h-full rounded-xl bg-[#F5F7F8] ">
        {/* <div className=" bg-[#F5F7F8] w-full h-full col rounded-xl c3 flex-col">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.2 } }} className="fi bg-[#F5F7F8] flex sm:w-40 h-8 w-28 sm:h-10 border-2 border-black justify-center mt-5 ml-4 rounded-md items-center">
            <h1 className="sm:text-3xl text-sm font-bold">Free Icon</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.6 } }} className="fi2 bg-[#F5F7F8] flex w-40 h-10 border-2 border-black justify-center items-center mt-5 ml-4 rounded-md">
            <h1 className="text-sm font-bold">Free Asset illustration</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.9 } }} className="fi3 bg-[#F5F7F8] flex w-40 h-10 border-2 border-black justify-center mt-5 ml-4 rounded-md">
            <h1 className="text-3xl font-bold">Follow us</h1>
          </motion.div>
        </div> */}
        <div className="flex w-full h-full ">
          <div className=" w-1/3 h-full justify-center mt-3 ml-5 sm:ml-0 flex text-center">
            <h1 className="text-xs sm:text-md font-semibold">For More Question?</h1>
          </div>
          <div className=" w-2/3 h-full justify-end flex p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="arrow">
              <g fill="#000">
                <path d="M22.044 2H30v8z"></path>
                <path d="M15.482 13.528l9.244-9.236 2.994 2.994-9.246 9.236zM9.686 19.414l2.9-2.896 2.896 2.898-2.9 2.894zM3.892 25.202l2.9-2.894 2.894 2.896-2.9 2.896z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="grid w-full h-auto items-end">
          <h1 className="font-extrabold text-md sm:text-3xl mb-5 ml-5">Contact Us</h1>
        </div>
      </motion.div>
    </>
  );
};

export default ContainerTiga;
