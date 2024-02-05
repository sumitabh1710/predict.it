"use client";

import React from "react";
import EventPage from "./EventPage";
import Navbar from "@/app/Component/navbar/Navbar";
import BottomMenu from "@/app/Component/Common/BottomMenu/BottomMenu";
import useWindowDimensions from "@/app/Component/Utils/useWindowDimensions";

const page = () => {
  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <div className="flex h-screen overflow-hidden w-full flex-col bg-slate-50">
      <div className="md:h-1/5">
        <Navbar></Navbar>
      </div>
      <div className="mb-16 md:mb-0 overflow-y-scroll md:h-4/5">
        <EventPage></EventPage>
      </div>
      <div className="">{windowWidth < 768 && <BottomMenu></BottomMenu>}</div>
    </div>
  );
};

export default page;
