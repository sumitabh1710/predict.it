import React from "react";
import "./HomePage.css";
import GavelIcon from "@mui/icons-material/Gavel";

const HomePage = () => {
  const productData = [
    {
      id: 1,
      name: "Applink",
      bid: "120",
    },
    {
      id: 2,
      name: "ShitApp",
      bid: "12",
    },
    {
      id: 3,
      name: "Mia Khalifa Left Tit",
      bid: "101",
    },
    {
      id: 4,
      name: "Mia Khalifa Right Tit",
      bid: "85",
    },
  ];

  return (
    <div className="px-5">
      {productData.map((each) => (
        <div
          className="h-48 w-full rounded-xl my-6 bg-slate-50"
          style={{
            boxShadow: "0 2px 4px 0 hsla(236, 9%, 39%, 0.3)",
          }}
          key={each.id}
        >
          <div className="flex h-4/5">
            <div className="flex items-center h-full w-1/3 p-3">
              <img src="https://imgs.search.brave.com/rfutKpnHXbEbBxgSWeVkof4VqvaplF7ucXMlzbKJy_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aXNh/c2ZvcmZ1dHVyZXBl/cm1hY2FjaGUuYi1j/ZG4ubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA5L3Jn/bDQxOHFycm1hLTEt/MTAyNHg2ODMuanBn"></img>
            </div>
            <div className="flex items-center h-full w-2/3">
              <p className="text-slate-800 text-xl font-mono font-bold">
                {each.name}
              </p>
            </div>
          </div>
          <div
            className="flex items-center h-1/5 px-4"
            style={{ backgroundColor: "hsla(236, 9%, 39%, 0.05)" }}
          >
            <div className="flex">
              <GavelIcon color="action" fontSize="small"></GavelIcon>
              <p
                className="pl-2 font-semibold"
                style={{ color: "hsla(236, 9%, 39%, 0.8)" }}
              >
                {each.bid}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
