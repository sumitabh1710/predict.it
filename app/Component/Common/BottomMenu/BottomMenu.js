import React from "react";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import HomeIcon from "@mui/icons-material/Home";
import "../../Navbar.css";

const BottomMenu = () => {
  return (
    <div className="fixed flex justify-around bottom-0 h-20 w-full bg-slate-50">
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <HomeIcon color="action" fontSize="large"></HomeIcon>
        <p
          className="font-extrabold"
          style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "12px" }}
        >
          Home
        </p>
      </div>
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <AppsSharpIcon color="action" fontSize="large"></AppsSharpIcon>
        <p
          className="font-extrabold"
          style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "12px" }}
        >
          Markets
        </p>
      </div>
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <ShowChartOutlinedIcon
          color="action"
          fontSize="large"
        ></ShowChartOutlinedIcon>
        <p
          className="font-extrabold"
          style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "12px" }}
        >
          Activity
        </p>
      </div>
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <LeaderboardOutlinedIcon
          color="action"
          fontSize="large"
        ></LeaderboardOutlinedIcon>
        <p
          className="font-extrabold"
          style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "12px" }}
        >
          Leaderboard
        </p>
      </div>
    </div>
  );
};

export default BottomMenu;
