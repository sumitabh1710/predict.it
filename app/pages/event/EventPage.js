import useWindowDimensions from "@/app/Component/Utils/useWindowDimensions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./EventPage.css";
import "../home/HomePage.css";
import { ThemeProvider, createTheme } from "@mui/material";
import MobileEventPage from "./MobileEventPage";

const EventPage = () => {
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

  useEffect(() => {
    const orderBookContent = document.getElementById("order_book_content");
    const dropdownArrow = document.getElementById("dropdown_arrow");
    if (showOrderBook) {
      orderBookContent.style.height = "324px";
      dropdownArrow.style.transform = "rotate(180deg)";
    } else {
      orderBookContent.style.height = "0px";
      dropdownArrow.style.transform = "rotate(0deg)";
    }
  }, [showOrderBook]);

  useEffect(() => {
    const popupBuyButton = document.getElementById("popup_buy_button");
    const popupSellButton = document.getElementById("popup_sell_button");

    if (isBuy) {
      popupSellButton.classList.remove("button_active");
      popupBuyButton.classList.add("button_active");
    } else {
      popupBuyButton.classList.remove("button_active");
      popupSellButton.classList.add("button_active");
    }
  }, [isBuy]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {windowWidth > 768 ? (
          <div></div>
        ) : (
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
        )}
      </ThemeProvider>
    </>
  );
};

export default EventPage;
