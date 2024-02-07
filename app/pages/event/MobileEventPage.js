import React from "react";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import MobilePopUp from "@/app/Component/Common/MobilePopUp/MobilePopUp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BottomModal from "@/app/Component/Common/BottomModal/BottomModal";

const MobileEventPage = ({
  eachMarketData,
  betType,
  setCurrentBetType,
  currentBetType,
  setTypeDropdown,
  typeDropdown,
  setBetQuantity,
  betQuantity,
  setIsBetYes,
  isBetYes,
  setIsBuy,
  isBuy,
  setShowOrderBook,
  showOrderBook,
}) => {
  const [showBottomModal, setShowBottomModal] = useState(false);

  let numbers = Array.from({ length: 9 }, (_, index) => index + 1);
  numbers.push(".");
  numbers.push("0");

  const handleClickNum = (each) => {
    setBetQuantity((prevState) => [...prevState, each]);
  };

  const handleClickBackSpace = () => {
    setBetQuantity((prevState) => prevState.slice(0, -1));
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col p-4 md:px-10 bg-slate-50">
        <div className="w-full md:hidden flex items-start">
          <div className="w-1/6 h-12"></div>
          <div className="flex w-5/6">
            <p className="text-slate-700 tag_label text-sm font-sans font-medium">
              {eachMarketData.tag}
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-slate-900 md:hidden text-xl font-sans font-semibold">
            {eachMarketData.name}
          </p>
        </div>
        <div className="flex md:hidden justify-center items-center w-full h-80 text-black bg-slate-300 my-5">
          graph
        </div>
        <div className="order_book_dropdown md:hidden mt-4">
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
        >
          <div className="flex flex-col flex-grow w-full">
            <div className="flex items-center justify-between h-10 w-full">
              <div className="flex">
                <div
                  className="popup_buy_button rounded-2xl text-sm font-medium w-fit py-1 px-4"
                  id="popup_buy_button"
                  onClick={() => {
                    setIsBuy(true);
                  }}
                >
                  Buy
                </div>
                <div
                  className="popup_sell_button rounded-2xl text-sm font-medium w-fit py-1 px-4 ml-2"
                  id="popup_sell_button"
                  onClick={() => {
                    setIsBuy(false);
                  }}
                >
                  Sell
                </div>
              </div>
              <div className="flex">
                <div
                  className="relative flex items-center bg-gray-200 rounded-3xl px-2 py-1 bottom"
                  onClick={() => {
                    setTypeDropdown(!typeDropdown);
                  }}
                >
                  <p className="text-black text-sm font-semibold ml-2">
                    {currentBetType}
                  </p>
                  <ExpandMoreIcon
                    color="primary"
                    fontSize="small"
                  ></ExpandMoreIcon>
                  {typeDropdown && (
                    <MobilePopUp
                      containerStyle={"right-0 top-7 rounded-lg w-fit h-fit"}
                    >
                      {betType.map((each) => (
                        <div
                          className="px-4 py-2"
                          key={each.id}
                          onClick={() => {
                            setCurrentBetType(each.name);
                          }}
                        >
                          <p className="text-black text-sm font-semibold">
                            {each.name}
                          </p>
                        </div>
                      ))}
                    </MobilePopUp>
                  )}
                </div>
                <div className="ml-2">
                  <SettingsIcon color="action"></SettingsIcon>
                </div>
              </div>
            </div>
            <div className="h-7 w-full my-4">
              {isBetYes ? (
                <div className="flex items-center rounded yes_token h-full w-fit px-3 ml-1">
                  <p className="yes_token_label text-sm font-medium">Yes</p>
                </div>
              ) : (
                <div className="flex items-center rounded no_token h-full w-fit px-3">
                  <p className="no_token_label text-sm font-medium">No</p>
                </div>
              )}
            </div>
            <div className="w-full flex justify-center items-center flex-grow">
              {isBetYes && (
                <AttachMoneyIcon
                  color="primary"
                  fontSize="large"
                ></AttachMoneyIcon>
              )}
              <p className="text-black text-4xl font-mono font-semibold">
                {betQuantity.length == 0 ? "0" : parseInt(betQuantity.join(""))}
              </p>
            </div>
            <div className="submit_button flex justify-center items-center rounded my-2 h-10 w-full">
              Submit
            </div>
            <div className="h-80 w-full flex flex-wrap">
              {numbers.map((each, index) => (
                <div
                  key={index}
                  className="num_pad text-black text-lg font-mono font-semibold w-1/3 flex items-center justify-center"
                  onClick={() => handleClickNum(each)}
                >
                  {each}
                </div>
              ))}
              <div
                className="num_pad w-1/3 flex items-center justify-center"
                onClick={() => handleClickBackSpace()}
              >
                <ArrowBackIcon
                  color="primary"
                  fontSize="medium"
                ></ArrowBackIcon>
              </div>
            </div>
          </div>
        </BottomModal>
      </div>
      <div className="buy_sell_mobile_menu md:hidden h-20 w-full sticky bottom-0 z-10">
        <div className="px-5 py-4 flex items-center h-full">
          <div
            className="buy_button flex items-center justify-center text-base font-medium"
            style={{ flex: 2 }}
            onClick={() => {
              setShowBottomModal(true);
              setIsBetYes(true);
            }}
          >
            Bet Yes {eachMarketData.yesTokenPrice}
          </div>
          <div
            className="sell_button flex mx-2 items-center justify-center text-base font-medium"
            style={{ flex: 2 }}
            onClick={() => {
              setShowBottomModal(true);
              setIsBetYes(false);
            }}
          >
            Bet No {eachMarketData.yesTokenPrice}
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-12 h-12 buy_sell_mobile_menu_options rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEventPage;
