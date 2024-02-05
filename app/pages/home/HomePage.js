import React, { useState } from "react";
import "./HomePage.css";
import GavelIcon from "@mui/icons-material/Gavel";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VerifiedIcon from "@mui/icons-material/Verified";
import HorizontalTabs from "../../Component/Common/HorizontalTabs/HorizontalTabs";
import Link from "next/link";
import { useEffect } from "react";

const HomePage = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/marketData.json"); // Fetch from the public directory
        const jsonData = await response.json();
        setMarketData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full px-1 bg-slate-50">
      <span className="flex px-1 h-fit py-3">
        <HorizontalTabs></HorizontalTabs>
      </span>
      <div className="flex flex-wrap z-0">
        {marketData.map((each) => (
          <Link
            className="market_tiles h-48 w-full m-1 rounded-xl p-1 bg-white"
            key={each.id}
            href={`/pages/event?tid=${each.id}`}
          >
            <div className="flex h-2/5">
              <div className="flex items-center justify-center h-full w-fit p-3">
                <img
                  className="rounded-lg h-16 w-16"
                  src="https://imgs.search.brave.com/C1XTzpKQhfwpBq8rxLo9__7XeNB2JmAhdrw1rWKfpSA/rs:fit:860:0:0/g:ce/aHR0cDovL2hvbGx5/d29vZGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA2L2RvbmFsZC10/dW1wLWhhaXItZ2Fs/bGVyeS0xLWd0eS5q/cGc_dz02ODA"
                ></img>
              </div>
              <div className="flex flex-col justify-center h-full w-2/3 pl-2">
                <p
                  className="text-xs"
                  style={{ color: "rgba(0, 0, 0, 0.5)", letterSpacing: "1px" }}
                >
                  {each.tag}
                </p>
                <p
                  className="text-sm font-semibold py-2"
                  style={{ color: "rgba(0, 0, 0, 0.87)", letterSpacing: "1px" }}
                >
                  {each.name}
                </p>
              </div>
              {each.verified && (
                <div className="p-1">
                  <VerifiedIcon
                    color="success"
                    fontSize="medium"
                  ></VerifiedIcon>
                  {/* <p className="font-semibold text-green-800 pl-1">Verified !</p> */}
                </div>
              )}
            </div>
            <div
              className="flex items-center px-3 pt-2 h-2/5"
              style={{
                maskImage: "linear-gradient(white 65%, transparent 100%)",
              }}
            >
              <div className="flex h-8 w-full">
                <div
                  className="yes_token flex items-center h-full px-1 mr-1 bg-slate-400"
                  style={{ width: `${each.yesTokenPrice}%` }}
                >
                  <p className="yes_token_label whitespace-nowrap text-xs font-medium pl-1">
                    Yes {each.yesTokenPrice}
                  </p>
                </div>
                <div
                  className="no_token flex items-center justify-end h-full px-1 bg-slate-400"
                  style={{ width: `${each.noTokenPrice}%` }}
                >
                  <p className="no_token_label text-xs whitespace-nowrap font-medium pr-1">
                    No {each.noTokenPrice}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex items-center justify-between h-1/5 px-4"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="flex items-center">
                <AttachMoneyIcon
                  color="action"
                  fontSize="small"
                ></AttachMoneyIcon>
                <p
                  className="font-semibold text-sm font-mono"
                  style={{ color: "hsla(236, 9%, 39%, 0.8)" }}
                >
                  {each.totalBetPrice} bet
                </p>
              </div>
              <StarBorderIcon color="action" fontSize="small"></StarBorderIcon>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
