import React from "react";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HomeIcon from "@mui/icons-material/Home";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../../navbar/Navbar.css";

const BottomMenu = () => {
  return (
    <div className="bottom_bar fixed flex justify-around bottom-0 h-16 w-full">
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <HomeIcon color="action" fontSize="small"></HomeIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Home
        </p>
      </div>
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <AppsSharpIcon color="action" fontSize="small"></AppsSharpIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Markets
        </p>
      </div>
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <ShowChartOutlinedIcon
          color="action"
          fontSize="small"
        ></ShowChartOutlinedIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Activity
        </p>
      </div>
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <LeaderboardIcon color="action" fontSize="small"></LeaderboardIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Leaderboard
        </p>
      </div>
      <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
        <MenuOutlinedIcon color="action" fontSize="small"></MenuOutlinedIcon>
        <p style={{ color: "hsla(236, 9%, 39%, 0.8)", fontSize: "12px" }}>
          Menu
        </p>
      </div>
    </div>
  );
};

export default BottomMenu;
