"use client";

import React from "react";
import Navbar from "./Component/Navbar";
import useWindowDimensions from "./Component/Utils/useWindowDimensions";
import BottomMenu from "./Component/Common/BottomMenu/BottomMenu";
import HomePage from "./Component/HomePage/HomePage";

const Main = () => {
  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
        <HomePage></HomePage>
      </div>
      <div className="">{windowWidth < 768 && <BottomMenu></BottomMenu>}</div>
    </>
  );
};

export default Main;
