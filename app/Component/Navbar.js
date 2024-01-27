import React from "react";
import Searchbar from "./Common/Searchbar";
import "./Navbar.css";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
  return (
    <div className="h-32 bg-slate-50">
      <div className="flex px-6 pt-7">
        <div className="flex items-center justify-start w-1/2">
          <p className="text-slate-900 font-mono text-3xl font-bold">
            Predict.it
          </p>
          <Searchbar></Searchbar>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
            <AppsSharpIcon color="action" fontSize="medium"></AppsSharpIcon>
            <p
              className="font-extrabold"
              style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "10px" }}
            >
              Markets
            </p>
          </div>
          <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
            <ShowChartOutlinedIcon
              color="action"
              fontSize="medium"
            ></ShowChartOutlinedIcon>
            <p
              className="font-extrabold"
              style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "10px" }}
            >
              Activity
            </p>
          </div>
          <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
            <LeaderboardOutlinedIcon
              color="action"
              fontSize="medium"
            ></LeaderboardOutlinedIcon>
            <p
              className="font-extrabold"
              style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "10px" }}
            >
              Leaderboard
            </p>
          </div>
          <div className="nav_menu flex flex-col justify-center items-center px-4 py-1 cursor-pointer">
            <LocalLibraryOutlinedIcon
              color="action"
              fontSize="medium"
            ></LocalLibraryOutlinedIcon>
            <p
              className="font-extrabold"
              style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "10px" }}
            >
              Learn
            </p>
          </div>
          <div
            className="button_light flex flex-col justify-center items-center cursor-pointer text-sm font-semibold mx-2 px-4 rounded h-10"
            style={{ color: "#1F2833" }}
          >
            Log In
          </div>
          <div
            className="button_dark flex flex-col justify-center items-center cursor-pointer text-sm mx-2 px-4 rounded h-10"
            style={{ color: "whitesmoke" }}
          >
            Sign Up
          </div>
          <div className="nav_menu flex flex-col justify-center cursor-pointer items-center px-4 py-2">
            <MenuOutlinedIcon
              color="action"
              fontSize="medium"
            ></MenuOutlinedIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
