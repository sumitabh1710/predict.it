import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Searchbar = () => {
  return (
    <div
      className="w-80 h-10 ml-4 rounded-lg cursor-pointer"
      style={{ border: "1px solid rgba(0, 0, 0, 0.24)" }}
    >
      <div className="flex items-center h-full pl-2">
        <SearchOutlinedIcon
          color="action"
          fontSize="medium"
        ></SearchOutlinedIcon>
        <p
          className="text-sm pl-3 font-medium"
          style={{ color: "rgba(0, 0, 0, 0.54)" }}
        >
          Search Markets
        </p>
      </div>
    </div>
  );
};

export default Searchbar;
