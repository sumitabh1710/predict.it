import React from "react";
import "./MobilePopUp.css";

const MobilePopUp = ({ containerStyle, children }) => {
  return (
    <div className={`${containerStyle} bg-slate-50 absolute mobile_popup`}>
      {children}
    </div>
  );
};

export default MobilePopUp;
