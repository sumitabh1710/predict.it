import React, { useEffect } from "react";
import "./SideBar.css";
import CloseIcon from "@mui/icons-material/Close";

const SideBar = ({ setSideBarOpen, sideBarOpen }) => {
  useEffect(() => {
    const sideBar = document.getElementById("side_bar");
    if (sideBarOpen) {
      sideBar.style.width = "96%";
    } else {
      sideBar.style.width = "0%";
    }
  }, [sideBarOpen]);

  return (
    <div className="side_bar absolute flex bg-slate-100" id="side_bar">
      <div className="p-4 w-full">
        <div className="h-fit w-full flex justify-end">
          <div className="cursor-pointer" onClick={() => setSideBarOpen(false)}>
            <CloseIcon color="action" fontSize="small"></CloseIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
