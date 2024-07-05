import React from "react";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";
import "./LoaderStyle.css";

export const LoaderHome = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const phrases = ["Web loading.."];
  const phrases2 = ["Welcome back Client"];

  const [curPhraseIndex, setCurPhraseIndex] = useState(0);
  const [curWord, setCurWord] = useState("");

  const sleepTime = 35;
  const sleepTime2 = 150;

  useEffect(() => {
    const writeLoop = async () => {
      while (true) {
        let i = 0;
        let curWord = phrases[curPhraseIndex];
        let curWord2 = phrases2[curPhraseIndex];

        while (i < curWord.length) {
          setCurWord(curWord.substring(0, i + 1));
          await sleep(sleepTime);
          i++;
        }

        await sleep(sleepTime2);

        while (i > 0) {
          setCurWord(curWord.substring(0, i - 1));
          await sleep(sleepTime);
          i--;
        }

        await sleep(sleepTime);

        while (i < curWord2.length) {
          setCurWord(curWord2.substring(0, i + 1));
          await sleep(sleepTime);
          i++;
        }

        await sleep(sleepTime2 * 8);
      }
    };

    writeLoop();
  }, [curPhraseIndex]);

  return (
    <TrackVisibility>
      {/* <motion.section
        initial={{ y: 0, opacity: 1 }}
        animate={{
          x: -1000,
          transition: {
            duration: 1,
            delay: 3,
          },
        }}
        exit={{ y: window.innerWidth }}
        className="flex bg-black h-screen w-3/4 justify-center items-center absolute test"
      >
        <span className="wrap text6 text-xl" id="el">
          {curWord}
        </span>
        <span className="cursor text-2xl">|</span>
      </motion.section> */}
      <div className="flex w-full h-screen bg-transparent left-0 absolute z-10 ">
        <div className="flex w-1/2 h-screen bg-green-500 relative anm1"></div>
        <motion.section
          initial={{ y: 0, opacity: 1 }}
          animate={{
            x: 2000,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
          exit={{ x: window.innerWidth }}
          className="flex bg-red-500 h-screen w-1/2 justify-center items-center relative test"
        >
          {/* <span className="wrap text6 text-xl" id="el">
            {curWord}
          </span>
          <span className="cursor text-2xl">|</span> */}
        </motion.section>
      </div>
    </TrackVisibility>
  );
};
