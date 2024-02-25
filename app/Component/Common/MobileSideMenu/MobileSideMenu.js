import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ToggleButton from "../ToggleButton/ToggleButton";

const MobileSideMenu = ({ showMobileSideMenu, setShowMobileSideMenu }) => {
  useEffect(() => {
    const mobileSideMenu = document.getElementById("mobile_side_menu");

    if (showMobileSideMenu) {
      mobileSideMenu.style.width = "100%";
    } else {
      mobileSideMenu.style.width = "0";
    }
  }, [showMobileSideMenu]);

  return (
    <div
      className={`fixed h-full overflow-hidden top-0 left-0 z-30 transition-all bg-slate-300`}
      id="mobile_side_menu"
    >
      <div className="p-6 h-full">
        <div className="w-full h-fit flex justify-end">
          <div
            className="border-gray-700 border-2"
            onClick={() => {
              setShowMobileSideMenu(false);
            }}
          >
            <CloseIcon color="action" fontSize="medium"></CloseIcon>
          </div>
        </div>
        <div className="pt-4">
          <div className="popUp_button py-2 px-4 cursor-pointer rounded">
            <p
              className="text font-semibold"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Log In
            </p>
          </div>
          <div className="popUp_button py-2 px-4 cursor-pointer rounded">
            <p
              className="text font-semibold"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Sign Up
            </p>
          </div>
          <div className="popUp_button py-2 px-4 cursor-pointer rounded">
            <p
              className="text font-semibold"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Contests
            </p>
          </div>
          <div className="popUp_button py-2 px-4 cursor-pointer rounded">
            <p
              className="text font-semibold"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Learn
            </p>
          </div>
          <div className="popUp_button py-2 px-4 cursor-pointer rounded">
            <p
              className="text font-semibold"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Blog
            </p>
          </div>
          <div className="popUp_button flex items-center justify-between py-2 px-4 cursor-pointer rounded">
            <p
              className="text font-semibold"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Dark Mode
            </p>
            <ToggleButton></ToggleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideMenu;
