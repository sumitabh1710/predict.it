"use client";

import React, { useState } from "react";
import Searchbar from "./Common/Searchbar/Searchbar";
import "./Navbar.css";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PopUpHover from "./Common/PopUpHover/PopUpHover";
import useWindowDimensions from "./Utils/useWindowDimensions";

const Navbar = () => {
  const [menuPopUpShow, setMenuPopUpShow] = useState(false);

  const bottomFilterData = [
    { id: 1, name: "All" },
    { id: 2, name: "New" },
    { id: 3, name: "Volume" },
    { id: 4, name: "Liquidity" },
    { id: 5, name: "Politics" },
    { id: 6, name: "Middle East" },
    { id: 7, name: "Sports" },
    { id: 8, name: "Crypto" },
    { id: 9, name: "Pop Culture" },
  ];

  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <div className="h-fit bg-slate-50">
      <div className="flex px-6 pt-7 pb-7 md:pb-0">
        <div className="flex items-center justify-start w-1/2">
          <p className="text-slate-900 font-mono text-3xl font-bold">
            Predict.it
          </p>
          <Searchbar></Searchbar>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <div className="nav_menu md:flex hidden flex-col justify-center items-center px-4 py-1 cursor-pointer">
            <AppsSharpIcon color="action" fontSize="medium"></AppsSharpIcon>
            <p
              className="font-extrabold"
              style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "10px" }}
            >
              Markets
            </p>
          </div>
          <div className="nav_menu md:flex hidden flex-col justify-center items-center px-4 py-1 cursor-pointer">
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
          <div className="nav_menu md:flex hidden flex-col justify-center items-center px-4 py-1 cursor-pointer">
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
          <div className="nav_menu md:flex hidden flex-col justify-center items-center px-4 py-1 cursor-pointer">
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
            className="button_light md:flex hidden flex-col justify-center items-center cursor-pointer text-sm font-semibold mx-2 px-4 rounded h-10"
            style={{ color: "#1F2833" }}
          >
            Log In
          </div>
          <div
            className="button_dark md:flex hidden flex-col justify-center items-center cursor-pointer text-sm mx-2 px-4 rounded h-10"
            style={{ color: "whitesmoke" }}
          >
            Sign Up
          </div>
          <div
            className="button_dark flex md:hidden flex-col justify-center items-center cursor-pointer text-sm mx-2 px-6 rounded h-10"
            style={{ color: "whitesmoke" }}
          >
            Sell
          </div>
          <div
            className="nav_menu relative flex flex-col justify-center cursor-pointer items-center px-3 py-2"
            onMouseEnter={() => {
              setMenuPopUpShow(true);
            }}
            onMouseLeave={() => {
              setMenuPopUpShow(false);
            }}
          >
            <MenuOutlinedIcon
              color="action"
              fontSize="medium"
            ></MenuOutlinedIcon>
            {!menuPopUpShow && windowWidth > 768 && (
              <PopUpHover
                setMenuPopUpShow={setMenuPopUpShow}
                menuPopUpShow={menuPopUpShow}
              ></PopUpHover>
            )}
          </div>
        </div>
      </div>
      <div className="md:flex  hidden h-10 px-6 mt-3 w-fit">
        {bottomFilterData.map((each) => (
          <div className="bottom_menu py-2 mx-3 cursor-pointer" key={each.id}>
            <p className="text-sm font-medium">{each.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
