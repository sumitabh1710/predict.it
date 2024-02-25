import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchText, setSearchText] = useState();
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className={`md:flex search_market hidden w-80 h-10 ml-4 rounded-lg cursor-pointer ${
        onHover && "bg-gray-100"
      }`}
      style={{ border: `1px solid rgba(0, 0, 0, 0.24)` }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="flex items-center h-full w-full pl-2">
        <SearchOutlinedIcon
          color="action"
          fontSize="medium"
        ></SearchOutlinedIcon>
        <input
          className={`text-sm pl-3 w-full h-full rounded-lg font-medium outline-none ${
            onHover && "bg-gray-100"
          }`}
          style={{ color: "rgba(0, 0, 0, 0.54)" }}
          type="text"
          placeholder="Search markets"
          value={searchText}
        ></input>
      </div>
    </div>
  );
};

export default Searchbar;
