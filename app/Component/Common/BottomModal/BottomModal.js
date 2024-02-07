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
      className="bottom_modal absolute bottom-0 left-0 h-0 overflow-hidden z-30 w-screen bg-white border-t-2 rounded-t-xl"
      id="bottom_modal"
    >
      <div className="h-full flex flex-col w-full p-4">
        <div className="flex justify-end h-7 w-full text-xs text-gray-500 underline font-semibold">
          <p onClick={() => setShowBottomModal(false)}>Close</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomModal;
