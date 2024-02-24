import React from "react";
import "./PopUpHover.css";
import ToggleButton from "../ToggleButton/ToggleButton";

const PopUpHover = ({
  setMenuPopUpShow,
  menuPopUpShow,
  isConnected,
  onDisconnect,
  setPopUpModalShow,
}) => {
  return (
    <div className="absolute top-0 right-0 h-fit w-fit z-10">
      <div
        className="popUp_hover h-fit w-40 mt-14 rounded-lg bg-slate-50"
        onMouseEnter={() => {
          setMenuPopUpShow(true);
        }}
        onMouseLeave={() => {
          setMenuPopUpShow(false);
        }}
      >
        <div className="py-2 px-2">
          {!isConnected ? (
            <>
              <div
                className="popUp_button py-2 px-4 cursor-pointer rounded"
                onClick={() => setPopUpModalShow(true)}
              >
                <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  Sign Up
                </p>
              </div>
              <div
                className="popUp_button py-2 px-4 cursor-pointer rounded"
                onClick={() => setPopUpModalShow(true)}
              >
                <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  Log In
                </p>
              </div>
            </>
          ) : (
            <div
              className="popUp_button py-2 px-4 cursor-pointer rounded"
              onClick={onDisconnect}
            >
              <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                Log Out
              </p>
            </div>
          )}
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
          <div className="popUp_button flex items-center justify-between py-2 px-4 cursor-pointer rounded">
            <p className="text-sm" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
              Dark Mode
            </p>
            <ToggleButton></ToggleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpHover;
