import React from "react";
import { useState, useEffect } from "react";
import "./styleLab.css";

const LabPage = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const phrases = ["Belum ada apa-apa disini"];
  const phrases2 = ["Silahkan Pindah ke Halaman lain"];

  const [curPhraseIndex, setCurPhraseIndex] = useState(0);
  const [curWord, setCurWord] = useState("");

  const sleepTime = 35;
  const sleepTime2 = 1500;

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

        await sleep(sleepTime2);

        while (i > 0) {
          setCurWord(curWord2.substring(0, i - 1));
          await sleep(sleepTime);
          i--;
        }
      }
    };

    writeLoop();
  }, [curPhraseIndex]);
  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <span className="wrap text6 text-xl" id="el">
        {curWord}
      </span>
      <span className="cursor text-2xl">|</span>
    </div>
  );
};

export default LabPage;
