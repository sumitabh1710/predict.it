import HorizontalTabs from "./Component/Common/HorizontalTabs/HorizontalTabs";
import homeStyles from "./HomePage.module.css";
import Link from "next/link";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarBorderIcon from "@mui/icons-material/StarBorder";

async function getMarketData() {
  const response = await fetch(
    "https://mocki.io/v1/042b7c3d-28e1-4aa2-b6a1-d2c026c7f3fb",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.log("Error in making request");
  }
  return response.json();
}

export default async function Home() {
  const marketData = await getMarketData();

  return (
    <main className="flex w-full flex-col bg-slate-50">
      <div className="h-full px-1 bg-slate-50">
        <span className="flex px-1 h-fit py-3">
          <HorizontalTabs></HorizontalTabs>
        </span>
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-4" style={{ width: "95%" }}>
            {marketData.map((each) => (
              <Link
                className={`${homeStyles.marketTiles} h-48 w-full rounded-xl p-1 bg-white`}
                key={each.id}
                href={`/event?tid=${each.id}`}
              >
                <div className="flex h-2/5">
                  <div className="flex items-center justify-center h-full w-fit p-3">
                    <img
                      className="rounded-lg h-16 w-16"
                      src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ></img>
                  </div>
                  <div className="flex flex-col justify-center h-full w-2/3 pl-2">
                    <p
                      className="text-xs"
                      style={{
                        color: "rgba(0, 0, 0, 0.5)",
                        letterSpacing: "1px",
                      }}
                    >
                      {each.tag}
                    </p>
                    <p
                      className="text-sm font-semibold py-2"
                      style={{
                        color: "rgba(0, 0, 0, 0.87)",
                        letterSpacing: "1px",
                      }}
                    >
                      {each.name}
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center px-3 pt-2 h-2/5 z-0"
                  style={
                    {
                      // maskImage: "linear-gradient(white 65%, transparent 100%)",
                    }
                  }
                >
                  <div className="flex h-8 w-full">
                    <div
                      className={`${homeStyles.yesToken} flex items-center h-full px-1 mr-1`}
                      style={{ width: `${each.yesTokenPrice}%` }}
                    >
                      <p
                        className={`${homeStyles.yesTokenLabel} whitespace-nowrap text-xs font-medium pl-1`}
                      >
                        Yes {each.yesTokenPrice}
                      </p>
                    </div>
                    <div
                      className={`${homeStyles.noToken} flex items-center justify-end h-full px-1`}
                      style={{ width: `${each.noTokenPrice}%` }}
                    >
                      <p
                        className={`${homeStyles.noTokenLabel} text-xs whitespace-nowrap font-medium pr-1`}
                      >
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
                  <StarBorderIcon
                    color="action"
                    fontSize="small"
                  ></StarBorderIcon>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-28"></div>
    </main>
  );
}
