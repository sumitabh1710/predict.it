import React from "react";
import "./PopUpModal.css";

const PopUpModal = ({ popUpModalShow, setPopUpModalShow, children }) => {
  return (
    <div
      className="absolute flex justify-center items-center top-0 w-screen h-screen bg-black bg-opacity-25"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setPopUpModalShow(false);
        }
      }}
    >
      <div
        className="bg-white rounded-xl p-3 z-50"
        style={{ width: "450px", height: "410px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUpModal;
