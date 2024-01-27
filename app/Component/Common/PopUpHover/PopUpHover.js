import React from "react";
import "./PopUpHover.css";

const PopUpHover = ({ setMenuPopUpShow, menuPopUpShow }) => {
  return (
    <div
      className="popUp_hover absolute right-0 h-fit w-40 rounded-lg bg-slate-50"
      style={{ top: "150%" }}
      onMouseEnter={() => {
        setMenuPopUpShow(true);
      }}
      onMouseLeave={() => {
        setMenuPopUpShow(false);
      }}
    >
      <div className="py-2 px-2">
        <div className="popUp_button py-2 px-4 cursor-pointer rounded">
          <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            Sign Up
          </p>
        </div>
        <div className="popUp_button py-2 px-4 cursor-pointer rounded">
          <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            Log In
          </p>
        </div>
        <hr className="my-2"></hr>
        <div className="popUp_button py-2 px-4 cursor-pointer rounded">
          <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            Contests
          </p>
        </div>
        <div className="popUp_button py-2 px-4 cursor-pointer rounded">
          <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            Learn
          </p>
        </div>
        <div className="popUp_button py-2 px-4 cursor-pointer rounded">
          <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            Blog
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUpHover;