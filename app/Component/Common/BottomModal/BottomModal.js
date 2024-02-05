import React, { useEffect } from "react";
import "./BottomModal.css";

const BottomModal = ({ showBottomModal, setShowBottomModal, children }) => {
  useEffect(() => {
    const bottomModal = document.getElementById("bottom_modal");
    const body = document.body;
    if (showBottomModal) {
      body.style.margin = "10px";
      bottomModal.style.height = "95%";
    } else {
      body.style.margin = "0px";
      bottomModal.style.height = "0%";
    }
  }, [showBottomModal]);

  return (
    <div
      className="bottom_modal absolute bottom-0 left-0 h-0 z-30 w-screen bg-white border-t-2 rounded-t-xl"
      onClick={() => setShowBottomModal(false)}
      id="bottom_modal"
    >
      <div className="h-1/3 w-full "></div>
    </div>
  );
};

export default BottomModal;
