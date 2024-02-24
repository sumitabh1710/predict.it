"use client";

import useWindowDimensions from "@/app/Component/Utils/useWindowDimensions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import eventStyle from "./EventPage.module.css";
import { ThemeProvider, createTheme } from "@mui/material";
import MobileEventPage from "./MobileEventPage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LinkIcon from "@mui/icons-material/Link";
import SettingsIcon from "@mui/icons-material/Settings";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Event() {
  const searchParams = useSearchParams();
  const [eachMarketData, setEachMarketData] = useState({});
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [showOrderBook, setShowOrderBook] = useState(false);
  const [isBuy, setIsBuy] = useState(true);
  const [isBetYes, setIsBetYes] = useState(true);
  const [betQuantity, setBetQuantity] = useState([]);
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [currentBetType, setCurrentBetType] = useState("Market");

  const betType = [
    {
      id: 1,
      name: "Market",
    },
    {
      id: 2,
      name: "Limit",
    },
    {
      id: 3,
      name: "AMM",
    },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/marketData.json"); // Fetch from the public directory
        const jsonData = await response.json();
        jsonData.forEach((element) => {
          if (element.id == searchParams.get("tid")) {
            setEachMarketData(element);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          className="hidden md:flex justify-center gap-4 px-20"
          style={{ height: "800px" }}
        >
          <div className="h-full w-full my-20" style={{ maxWidth: "800px" }}>
            <div className="flex h-24 w-full">
              <div className="w-24 h-24">
                <img
                  className="rounded-lg h-full w-full"
                  src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
              </div>
              <div className="pl-10 flex-1">
                <div className="h-1/2 flex items-center">
                  <div className="bg-gray-200 w-fit rounded-md">
                    <p className="text-black text-xs font-medium px-2 py-1">
                      {eachMarketData.tag}
                    </p>
                  </div>
                  <div className="flex items-center pl-5">
                    <AttachMoneyIcon
                      fontSize="small"
                      color="primary"
                    ></AttachMoneyIcon>
                    <p className="font-medium" style={{ color: "#000000" }}>
                      {eachMarketData.totalBetPrice} bet
                    </p>
                  </div>
                </div>
                <div className="text-slate-700 h-1/2 text-2xl font-medium flex items-center">
                  {eachMarketData.name}
                </div>
              </div>
              <div className="w-14 h-fit flex items-center justify-between">
                <StarBorderIcon
                  color="action"
                  fontSize="medium"
                ></StarBorderIcon>
                <LinkIcon color="action" fontSize="medium"></LinkIcon>
              </div>
            </div>
          </div>
          <div
            className="sticky h-fit w-1/3 top-10 right-20 z-0"
            style={{ maxWidth: "340px", minWidth: "340px" }}
          >
            <div
              className={`${eventStyle.sticky_buy_sell_tab} bg-white h-full rounded-lg`}
            >
              <div
                className={`${eventStyle.stickey_tab_header} w-full h-16 flex items-center justify-between`}
              >
                <div className="h-full flex mx-6">
                  <div className="h-full flex items-center mx-3 cursor-pointer">
                    <p className="text-gray-500 font-medium">Buy</p>
                  </div>
                  <div className="h-full flex items-center mx-3 cursor-pointer">
                    <p className="text-gray-500 font-medium">Sell</p>
                  </div>
                </div>
                <div className="mr-6">
                  <p className="text-gray-500 font-medium">Market</p>
                </div>
              </div>
              <div className="w-full p-4 h-fit">
                <div className="">
                  <div className="w-full h-fit flex items-center justify-between">
                    <div>
                      <p className="text-gray-950 text-sm font-medium">
                        Outcome
                      </p>
                    </div>
                    <div className="w-12 flex justify-between items-center">
                      <CachedIcon color="action" fontSize="small"></CachedIcon>
                      <SettingsIcon
                        color="action"
                        fontSize="small"
                      ></SettingsIcon>
                    </div>
                  </div>
                  <div className="flex h-10 my-3">
                    <div
                      className={`${eventStyle.buy_button} flex items-center cursor-pointer justify-center text-base font-medium`}
                      style={{ flex: 2 }}
                    >
                      Bet Yes {eachMarketData.yesTokenPrice}
                    </div>
                    <div
                      className={`${eventStyle.sell_button} flex mx-2 cursor-pointer items-center justify-center text-base font-medium`}
                      style={{ flex: 2 }}
                    >
                      Bet No {eachMarketData.noTokenPrice}
                    </div>
                  </div>
                </div>
                <div className="py-3">
                  <p className="text-gray-950 text-sm font-medium">Amount</p>
                  <div
                    className={`${eventStyle.price_share_counter} my-3 flex items-center justify-between`}
                  >
                    <div className="h-8 w-8 bg-slate-200 rounded-lg flex items-center justify-center ml-2 cursor-pointer">
                      <AddIcon color="action" fontSize="small"></AddIcon>
                    </div>
                    <div>
                      <p className="text-gray-500 font-mono font-medium">6</p>
                    </div>
                    <div className="h-8 w-8 bg-slate-200 rounded-lg flex items-center justify-center mr-2 cursor-pointer">
                      <RemoveIcon color="action" fontSize="small"></RemoveIcon>
                    </div>
                  </div>
                </div>
                <div className="py-3">
                  <div
                    className={`${eventStyle.submit_button} w-full h-10 rounded-lg flex items-center justify-center cursor-pointer`}
                  >
                    <p className="text-base font-medium">Buy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileEventPage
          eachMarketData={eachMarketData}
          betType={betType}
          setCurrentBetType={setCurrentBetType}
          currentBetType={currentBetType}
          setTypeDropdown={setTypeDropdown}
          typeDropdown={typeDropdown}
          setBetQuantity={setBetQuantity}
          betQuantity={betQuantity}
          setIsBetYes={setIsBetYes}
          isBetYes={isBetYes}
          setIsBuy={setIsBuy}
          isBuy={isBuy}
          setShowOrderBook={setShowOrderBook}
          showOrderBook={showOrderBook}
        ></MobileEventPage>
      </ThemeProvider>
    </>
  );
}
