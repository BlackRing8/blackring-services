import * as React from "react";
import NavBar from "../komponen/NavBar";
import CursorEffect from "../komponen/CursorEffect";

const Home = () => {
  return (
    <>
      <CursorEffect />
      {/* body utama */}
      <div className="flex bg-black w-full h-auto sm:h-screen sm:items-center justify-center">
        {/* kontener pertama */}
        <div className="flex flex-col-reverse h-[720px] w-[350px] sm:flex sm:flex-row gap-3 sm:w-[1000px] sm:h-[450px] pb-10 pt-20">
          <div className="flex w-[350px] h-full sm:w-[320px] sm:h-full border-2 border-white rounded-xl"></div>

          {/* Kontener ke dua */}
          <div className="grid w-[350px] gap-3 sm:w-[680px] h-full">
            <div className="flex  w-full h-full rounded-xl border-white border-2"></div>

            {/* kontener ke 3 */}
            <div className="flex gap-3 w-full">
              <div className="flex w-1/2 h-full rounded-xl border-white border-2"></div>
              <div className="flex w-1/2 h-full rounded-xl border-white border-2"></div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
