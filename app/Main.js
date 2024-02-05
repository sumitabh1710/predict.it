"use client";

import React from "react";
import Navbar from "./Component/navbar/Navbar";
import useWindowDimensions from "./Component/Utils/useWindowDimensions";
import BottomMenu from "./Component/Common/BottomMenu/BottomMenu";
import HomePage from "./pages/home/HomePage";

const Main = () => {
  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <>
      <div className="md:h-1/5">
        <Navbar></Navbar>
      </div>
      <div className="mb-20 md:mb-0 overflow-y-scroll md:h-4/5">
        <HomePage></HomePage>
      </div>
      <div className="">{windowWidth < 768 && <BottomMenu></BottomMenu>}</div>
    </>
  );
};

export default Main;
