import React, { useEffect, useState } from "react";
import eventStyle from "../../../event/EventPage.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OrderBookDropdown = () => {
  const [showOrderBook, setShowOrderBook] = useState(false);

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
    <div className={`${eventStyle.order_book_dropdown} mt-4`}>
      <div className="flex items-center justify-between h-16 w-full">
        <p className="text-slate-900 text-lg font-semibold pl-4">Order Book</p>
        <div
          className={`${eventStyle.dropdown_arrow} px-3 cursor-pointer`}
          id="dropdown_arrow"
          onClick={() => setShowOrderBook(!showOrderBook)}
        >
          <ExpandMoreIcon color="action" fontSize="medium"></ExpandMoreIcon>
        </div>
      </div>
      <div
        className={`${eventStyle.order_book_content} w-full`}
        id="order_book_content"
      ></div>
    </div>
  );
};

export default OrderBookDropdown;
