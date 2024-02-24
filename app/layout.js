import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/navbar/Navbar";
import BottomMenu from "./Component/Common/BottomMenu/BottomMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "predict.it",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-slate-50"}>
        <>
          <Navbar></Navbar>
        </>
        <div className="md:h-4/5 h-5/6 overflow-y-scroll">{children}</div>
        {/* <div className="">
          <BottomMenu
            setSideBarOpen={setSideBarOpen}
            sideBarOpen={sideBarOpen}
          ></BottomMenu>
        </div> */}
      </body>
    </html>
  );
}
