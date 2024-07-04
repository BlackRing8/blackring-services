import * as React from "react";
// import CursorEffect from "../../components/cursorEffect/CursorEffect";
// import { LoaderHome } from "../../components/Loader_home/LoaderHome";
import ContainerTiga from "./home_komponen/ContainerTiga";
import ContainerSatu from "./home_komponen/ContainerSatu";
import ContainerDua from "./home_komponen/ContainerDua";

const Home = () => {
  return (
    <>
      {/* <LoaderHome /> */}
      {/* <CursorEffect /> */}

      {/* body utama */}
      <div className="flex w-full h-auto sm:items-center justify-center">
        {/* kontener pertama */}
        <div className="flex flex-col-reverse h-auto w-[350px] sm:flex sm:flex-row gap-3 sm:w-[1000px] sm:h-[450px] pb-10 pt-10 sm:pt-0">
          <div className="flex w-[350px] h-full sm:w-[320px] sm:h-full border-2 border-orange-500 rounded-xl">
            <ContainerSatu />
          </div>

          {/* Kontener ke dua */}
          <div className="grid w-[350px] gap-3 sm:w-[680px] h-full">
            <ContainerDua />

            {/* kontener ke 3 */}
            <div className="flex gap-3 w-full h-full">
              <ContainerTiga />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
