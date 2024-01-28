import React from "react";
import "./HomePage.css";
import GavelIcon from "@mui/icons-material/Gavel";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VerifiedIcon from "@mui/icons-material/Verified";
import HorizontalTabs from "../Common/HorizontalTabs/HorizontalTabs";

const HomePage = () => {
  const productData = [
    {
      id: 1,
      name: "TechSync Connect",
      bid: "120",
      verified: false,
      tag: "Communication",
      description:
        "TechSync Connect is an advanced communication platform that seamlessly links all your devices, ensuring a synchronized and efficient digital experience for users who crave connectivity.",
    },
    {
      id: 2,
      name: "FunFusion App",
      bid: "12",
      verified: true,
      tag: "Entertainment",
      description:
        "Welcome to FunFusion App, where laughter meets technology. Dive into a world of humor and entertainment, as this quirky app adds a touch of joy to your daily routine with its innovative and amusing features.",
    },
    {
      id: 3,
      name: "ExploreMaster Navigator",
      bid: "101",
      verified: false,
      tag: "Navigation",
      description:
        "Embark on a journey of exploration with ExploreMaster Navigator. This innovative navigation app guides you along the left path, unlocking hidden gems and unique experiences for the adventurous soul.",
    },
    {
      id: 4,
      name: "RightRoute Companion",
      bid: "85",
      verified: true,
      tag: "Navigation",
      description:
        "Introducing RightRoute Companion, your trusted navigation ally. Discover the right way to your destination with precision and confidence. Let RightRoute make your journey smooth and enjoyable.",
    },
    {
      id: 5,
      name: "SmartSync Organizer",
      bid: "150",
      verified: true,
      tag: "Productivity",
      description:
        "SmartSync Organizer is your personal assistant for a well-organized life. Sync your tasks, events, and notes effortlessly, and stay on top of your busy schedule with this intuitive productivity tool.",
    },
    {
      id: 6,
      name: "HealthHub Tracker",
      bid: "75",
      verified: false,
      tag: "Health",
      description:
        "Take charge of your health with HealthHub Tracker. Monitor your fitness goals, track nutrition, and receive personalized health insights to lead a balanced and active lifestyle.",
    },
    {
      id: 7,
      name: "PhotoBlend Studio",
      bid: "95",
      verified: true,
      tag: "Photography",
      description:
        "Unleash your creativity with PhotoBlend Studio. This photo editing app offers a plethora of tools and filters to transform your images into stunning works of art. Elevate your photography game!",
    },
    {
      id: 8,
      name: "QuickFix Toolbox",
      bid: "40",
      verified: false,
      tag: "Tools",
      description:
        "QuickFix Toolbox is a handy collection of tools for everyday tasks. From measuring to conversion, this app is your go-to solution for quick fixes, making your life simpler and more efficient.",
    },
  ];

  return (
    <div className="px-5">
      <span className="flex px-1 h-fit py-3">
        <HorizontalTabs></HorizontalTabs>
      </span>
      {productData.map((each) => (
        <div
          className="h-48 w-full rounded-xl my-6 bg-slate-50"
          style={{
            boxShadow: "0 2px 4px 0 hsla(236, 9%, 39%, 0.3)",
          }}
          key={each.id}
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
                <VerifiedIcon color="success" fontSize="medium"></VerifiedIcon>
                {/* <p className="font-semibold text-green-800 pl-1">Verified !</p> */}
              </div>
            )}
          </div>
          <div
            className="px-3 pt-2 h-2/5"
            style={{
              maskImage: "linear-gradient(white 65%, transparent 100%)",
            }}
          >
            <p
              className="text-sm font-sans"
              style={{ color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.5px" }}
            >
              {each.description.length > 170
                ? each.description.substring(0, 170) + "..."
                : each.description}
            </p>
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
                className="font-semibold"
                style={{ color: "hsla(236, 9%, 39%, 0.8)" }}
              >
                {each.bid}
              </p>
            </div>
            <StarBorderIcon color="action" fontSize="small"></StarBorderIcon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
