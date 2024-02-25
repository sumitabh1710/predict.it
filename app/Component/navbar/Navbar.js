"use client";

import React, { useState } from "react";
import Searchbar from "../Common/Searchbar/Searchbar";
import "./Navbar.css";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PopUpHover from "../Common/PopUpHover/PopUpHover";
import useWindowDimensions from "../Utils/useWindowDimensions";
import PopUpModal from "../Common/PopUpModal/PopUpModal";
import { Web3 } from "web3";

const Navbar = () => {
  const [menuPopUpShow, setMenuPopUpShow] = useState(false);
  const [popUpModalShow, setPopUpModalShow] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [loading, setLoading] = useState(false);

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

  const detectCurrentProvider = () => {
    let provider;

    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.open("https://metamask.io/download/", "_blank");
    }
    return provider;
  };

  const onConnect = async () => {
    setLoading(true);
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        setCurrentAccount(userAccount);
        setIsConnected(true);
        setPopUpModalShow(false);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <div
      className="navbar relative h-1/6 flex flex-col justify-between w-full"
      id="navbar"
    >
      <div className="flex flex-wrap px-3 py-4 md:pt-4 md:pb-0">
        <div className="flex items-center justify-start w-1/2">
          <p className="title_nav font-mono text-3xl font-bold">Predict.it</p>
          <Searchbar></Searchbar>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <div className="nav_menu md:flex hidden flex-col justify-center items-center px-4 py-1 cursor-pointer">
            <AppsSharpIcon color="action" fontSize="medium"></AppsSharpIcon>
            <p
              className="font-semibold"
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
              className="font-semibold"
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
              className="font-semibold"
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
              className="font-semibold"
              style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "10px" }}
            >
              Learn
            </p>
          </div>
          {!isConnected ? (
            <>
              <div
                className="button_dark md:flex hidden flex-col justify-center items-center cursor-pointer text-sm font-semibold mx-2 px-4 rounded h-10"
                onClick={() => setPopUpModalShow(true)}
              >
                Log In
              </div>
              <div
                className="button_dark md:flex hidden flex-col justify-center items-center cursor-pointer text-sm mx-2 px-4 font-semibold rounded h-10"
                onClick={() => setPopUpModalShow(true)}
              >
                Sign Up
              </div>
            </>
          ) : (
            <div className="button_dark md:flex hidden flex-col justify-center items-center cursor-pointer text-sm mx-2 px-4 font-semibold rounded h-10">
              Deposit
            </div>
          )}
          <div
            className="button_dark flex md:hidden flex-col justify-center items-center cursor-pointer uppercase font-bold text-sm mx-2 px-6 rounded h-10"
            style={{ letterSpacing: "2px" }}
          >
            Sell
          </div>
          <div
            className="nav_menu hidden md:flex flex-col justify-center cursor-pointer items-center px-3 py-2"
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
          </div>
        </div>
      </div>
      <div className="bottom_menu flex overflow-scroll h-10 px-6 mt-3">
        {bottomFilterData.map((each) => (
          <div
            className="bottom_menu_options py-2 mx-3 cursor-pointer"
            key={each.id}
          >
            <p className="text-sm font-medium whitespace-nowrap">{each.name}</p>
          </div>
        ))}
      </div>
      {popUpModalShow && (
        <PopUpModal
          popUpModalShow={popUpModalShow}
          setPopUpModalShow={setPopUpModalShow}
        >
          <div className="flex flex-col h-full">
            <div className="text-slate-800 text-center font-semibold text-2xl pt-2">
              Log In to Predict.it
            </div>
            <div className="flex justify-center items-center flex-1">
              {!isConnected &&
                (loading ? (
                  <div className="text-black">loading ...</div>
                ) : (
                  <div
                    className="h-10 w-fit p-2 flex justify-center items-center cursor-pointer rounded mb-10"
                    style={{ border: "1px solid #E0E0E0" }}
                    onClick={onConnect}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 212 189"
                      id="metamask"
                    >
                      <g fill="none" fillRule="evenodd">
                        <polygon
                          fill="#CDBDB2"
                          points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                        ></polygon>
                        <polygon
                          fill="#CDBDB2"
                          points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                          transform="matrix(-1 0 0 1 256.5 0)"
                        ></polygon>
                        <polygon
                          fill="#393939"
                          points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                        ></polygon>
                        <polygon
                          fill="#F89C35"
                          points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                        ></polygon>
                        <polygon
                          fill="#F89D35"
                          points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                        ></polygon>
                        <polygon
                          fill="#D87C30"
                          points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                        ></polygon>
                        <polygon
                          fill="#EA8D3A"
                          points="46.125 101.813 65.25 119.813 65.25 137.813"
                        ></polygon>
                        <polygon
                          fill="#F89D35"
                          points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                        ></polygon>
                        <polygon
                          fill="#EB8F35"
                          points="65.25 138.375 60.75 173.25 90.563 152.438"
                        ></polygon>
                        <polygon
                          fill="#EA8E3A"
                          points="92.25 102.375 95.063 150.188 86.625 125.719"
                        ></polygon>
                        <polygon
                          fill="#D87C30"
                          points="39.375 138.938 65.25 138.375 60.75 173.25"
                        ></polygon>
                        <polygon
                          fill="#EB8F35"
                          points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                        ></polygon>
                        <polygon
                          fill="#E8821E"
                          points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                        ></polygon>
                        <polygon
                          fill="#DFCEC3"
                          points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                        ></polygon>
                        <polygon
                          fill="#DFCEC3"
                          points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                          transform="matrix(-1 0 0 1 272.25 0)"
                        ></polygon>
                        <polygon
                          fill="#393939"
                          points="70.313 112.5 64.125 125.438 86.063 119.813"
                          transform="matrix(-1 0 0 1 150.188 0)"
                        ></polygon>
                        <polygon
                          fill="#E88F35"
                          points="12.375 .563 88.875 58.5 75.938 27"
                        ></polygon>
                        <path
                          fill="#8E5A30"
                          d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                        ></path>
                        <g transform="matrix(-1 0 0 1 211.5 0)">
                          <polygon
                            fill="#F89D35"
                            points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                          ></polygon>
                          <polygon
                            fill="#D87C30"
                            points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                          ></polygon>
                          <polygon
                            fill="#EA8D3A"
                            points="46.125 101.813 65.25 119.813 65.25 137.813"
                          ></polygon>
                          <polygon
                            fill="#F89D35"
                            points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                          ></polygon>
                          <polygon
                            fill="#EB8F35"
                            points="65.25 138.375 60.75 173.25 90 153"
                          ></polygon>
                          <polygon
                            fill="#EA8E3A"
                            points="92.25 102.375 95.063 150.188 86.625 125.719"
                          ></polygon>
                          <polygon
                            fill="#D87C30"
                            points="39.375 138.938 65.25 138.375 60.75 173.25"
                          ></polygon>
                          <polygon
                            fill="#EB8F35"
                            points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                          ></polygon>
                          <polygon
                            fill="#E8821E"
                            points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                          ></polygon>
                          <polygon
                            fill="#393939"
                            points="70.313 112.5 64.125 125.438 86.063 119.813"
                            transform="matrix(-1 0 0 1 150.188 0)"
                          ></polygon>
                          <polygon
                            fill="#E88F35"
                            points="12.375 .563 88.875 58.5 75.938 27"
                          ></polygon>
                          <path
                            fill="#8E5A30"
                            d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <p className="text-slate-800 p-2 text-sm font-semibold">
                      MetaMask
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </PopUpModal>
      )}
      {menuPopUpShow && (
        <PopUpHover
          setMenuPopUpShow={setMenuPopUpShow}
          menuPopUpShow={menuPopUpShow}
          isConnected={isConnected}
          onDisconnect={onDisconnect}
          setPopUpModalShow={setPopUpModalShow}
        ></PopUpHover>
      )}
    </div>
  );
};

export default Navbar;
