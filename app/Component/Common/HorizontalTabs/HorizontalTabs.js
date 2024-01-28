import React from "react";
import "./HorizontalTabs.css";

const HorizontalTabs = () => {
  return (
    <div className="flex overflow-x-scroll">
      <div
        className="h-10 mx-2 bg-slate-500 w-fit px-3 flex items-center justify-center"
        style={{ borderRadius: "20px" }}
      >
        <p className="text-sm font-bold" style={{ letterSpacing: "1px" }}>
          All
        </p>
      </div>
      <div
        className="h-10 mx-2 bg-slate-500 text-sm font-bold w-fit px-3 flex items-center justify-center"
        style={{ borderRadius: "20px", letterSpacing: "1px" }}
      >
        <p className="text-sm font-bold" style={{ letterSpacing: "1px" }}>
          Communication
        </p>
      </div>
      <div
        className="h-10 mx-2 bg-slate-500 text-sm font-bold w-fit px-3 flex items-center justify-center"
        style={{ borderRadius: "20px", letterSpacing: "1px" }}
      >
        <p className="text-sm font-bold" style={{ letterSpacing: "1px" }}>
          Entertainment
        </p>
      </div>
      <div
        className="h-10 mx-2 bg-slate-500 text-sm font-bold w-fit px-3 flex items-center justify-center"
        style={{ borderRadius: "20px", letterSpacing: "1px" }}
      >
        <p className="text-sm font-bold" style={{ letterSpacing: "1px" }}>
          Navigation
        </p>
      </div>
      <div
        className="h-10 mx-2 bg-slate-500 text-sm font-bold w-fit px-3 flex items-center justify-center"
        style={{ borderRadius: "20px", letterSpacing: "1px" }}
      >
        <p className="text-sm font-bold" style={{ letterSpacing: "1px" }}>
          Productivity
        </p>
      </div>
      <div
        className="h-10 mx-2 bg-slate-500 text-sm font-bold w-fit px-3 flex items-center justify-center"
        style={{ borderRadius: "20px", letterSpacing: "1px" }}
      >
        <p className="text-sm font-bold" style={{ letterSpacing: "1px" }}>
          Health
        </p>
      </div>
    </div>
  );
};

export default HorizontalTabs;
