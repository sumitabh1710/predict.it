import BottomModal from "@/app/Component/Common/BottomModal/BottomModal";
import useWindowDimensions from "@/app/Component/Utils/useWindowDimensions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./EventPage.css";

const EventPage = () => {
  const searchParams = useSearchParams();
  const [eachMarketData, setEachMarketData] = useState({});
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [showBottomModal, setShowBottomModal] = useState(false);
  const [showOrderBook, setShowOrderBook] = useState(false);

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

  return (
    <>
      <div className="min-h-screen flex flex-col p-4 md:px-10 bg-slate-50">
        {windowWidth > 768 && (
          <>
            <div className="h-full w-2/3 bg-slate-700"></div>
            <div className="h-full fixed right-8 w-1/3 bg-slate-400 z-0"></div>
          </>
        )}
        <div className="w-full flex items-start">
          <div className="w-1/6 h-12"></div>
          <div className="flex w-5/6">
            <p className="text-slate-700 tag_label text-sm font-sans font-medium">
              {eachMarketData.tag}
            </p>
          </div>
        </div>
        <div className="" onClick={() => setShowBottomModal(true)}>
          <p className="text-slate-900 text-xl font-sans font-semibold">
            {eachMarketData.name}
          </p>
        </div>
        <div className="flex justify-center items-center w-full h-80 text-black bg-slate-300 my-5">
          graph
        </div>
        <div className="order_book_dropdown mt-4">
          <div className="flex items-center justify-between h-16 w-full">
            <p className="text-slate-900 text-lg font-semibold pl-4">
              Order Book
            </p>
            <div
              className="dropdown_arrow px-3"
              id="dropdown_arrow"
              onClick={() => setShowOrderBook(!showOrderBook)}
            >
              <ExpandMoreIcon color="action" fontSize="medium"></ExpandMoreIcon>
            </div>
          </div>
          <div
            className="order_book_content w-full"
            id="order_book_content"
          ></div>
        </div>
        <BottomModal
          showBottomModal={showBottomModal}
          setShowBottomModal={setShowBottomModal}
        ></BottomModal>
      </div>
      <div className="buy_sell_mobile_menu h-20 w-full sticky bottom-0 z-10">
        <div className="px-5 py-4 flex items-center h-full">
          <div
            className="buy_button flex items-center justify-center text-lg font-semibold"
            style={{ flex: 2 }}
          >
            Buy
          </div>
          <div
            className="sell_button flex mx-2 items-center justify-center text-lg font-semibold"
            style={{ flex: 2 }}
          >
            Sell
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-12 h-12 buy_sell_mobile_menu_options rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
