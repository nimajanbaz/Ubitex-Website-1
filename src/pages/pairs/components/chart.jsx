import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import TradingViewWidget from "../../../components/tradingview/tradingview";

const ChartInfo = ({ data }) => {
  const [color, setcolor] = useState();
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setcolor("rgba(255, 255, 255, 1)");
    } else {
      setcolor("rgba(0, 0, 0, 1)");
    }
  }, []);

  return (
    <>
      <div>
        <div className="h-[600px]">
          {color ? (
            <TradingViewWidget Symbol={data.symbol + "usdt"} color={color} />
          ) : null}
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <h2 className="text-lg">درباره {data.nameFa}</h2>
          {ReactHtmlParser(data.description)}
        </div>

      </div>
    </>
  );
};
export default ChartInfo;
