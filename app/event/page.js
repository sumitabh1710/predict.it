"use client";

import useWindowDimensions from "@/app/Component/Utils/useWindowDimensions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./EventPage.css";
import { ThemeProvider, createTheme } from "@mui/material";
import MobileEventPage from "./MobileEventPage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

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
              <div className="w-24 h-24 bg-slate-700 rounded"></div>
              <div className="pl-10">
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
            </div>
          </div>
          <div
            className="sticky h-80 w-1/3 top-10 right-20 z-0"
            style={{ maxWidth: "340px", minWidth: "340px" }}
          >
            <div className="bg-white stickyBuySellTab h-full rounded-lg"></div>
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
