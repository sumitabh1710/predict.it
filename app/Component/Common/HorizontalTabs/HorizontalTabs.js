import React from "react";
import "./HorizontalTabs.css";

const HorizontalTabs = () => {
  const horizontalTabsData = [
    {
      id: 1,
      name: "Top",
    },
    {
      id: 2,
      name: "Communication",
    },
    {
      id: 3,
      name: "Entertainment",
    },
    {
      id: 4,
      name: "Navigation",
    },
    {
      id: 5,
      name: "Productivity",
    },
    {
      id: 6,
      name: "Health",
    },
    {
      id: 7,
      name: "Top",
    },
  ];

  return (
    <div className="horizontal_tabs flex overflow-x-scroll">
      {horizontalTabsData.map((each) => {
        return (
          <div
            className="tabs h-10 cursor-pointer mx-2 w-fit px-3 flex items-center justify-center"
            style={{ borderRadius: "20px" }}
            key={each.id}
          >
            <p className="text-sm font-semibold text-slate-700" style={{ letterSpacing: "1px" }}>
              {each.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalTabs;
