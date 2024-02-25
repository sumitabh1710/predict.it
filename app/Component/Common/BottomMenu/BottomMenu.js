"use client";

import React from "react";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HomeIcon from "@mui/icons-material/Home";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../../navbar/Navbar.css";
import { useState } from "react";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import Link from "next/link";

const BottomMenu = () => {
  const [showMobileSideMenu, setShowMobileSideMenu] = useState(false);

  return (
    <div className="bottom_bar fixed flex md:hidden justify-around bottom-0 h-16 w-full">
      <Link
        className="nav_menu flex px-2 flex-col justify-center items-center cursor-pointer"
        href={`/`}
      >
        <HomeIcon color="action" fontSize="small"></HomeIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Home
        </p>
      </Link>
      <div className="nav_menu flex px-2 flex-col justify-center items-center cursor-pointer">
        <AppsSharpIcon color="action" fontSize="small"></AppsSharpIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Markets
        </p>
      </div>
      <div className="nav_menu flex px-2 flex-col justify-center items-center cursor-pointer">
        <ShowChartOutlinedIcon
          color="action"
          fontSize="small"
        ></ShowChartOutlinedIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Activity
        </p>
      </div>
      <div className="nav_menu flex px-2 flex-col justify-center items-center cursor-pointer">
        <LeaderboardIcon color="action" fontSize="small"></LeaderboardIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Leaderboard
        </p>
      </div>
      <div
        className="nav_menu flex flex-col px-2 justify-center items-center cursor-pointer"
        onClick={() => {
          setShowMobileSideMenu(true);
        }}
      >
        <MenuOutlinedIcon color="action" fontSize="small"></MenuOutlinedIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Menu
        </p>
      </div>
      <MobileSideMenu
        setShowMobileSideMenu={setShowMobileSideMenu}
        showMobileSideMenu={showMobileSideMenu}
      ></MobileSideMenu>
    </div>
  );
};

export default BottomMenu;
