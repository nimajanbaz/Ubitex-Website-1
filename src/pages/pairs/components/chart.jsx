import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import TradingViewWidget from "../../../components/tradingview";

const ChartInfo = ({ data }) => {
const [theme, settheme] = useState(localStorage.getItem("theme"))

  return (
    <>
      <div>
        <h2 className="text-xl my-10">قیمت</h2>
        <div className="h-[600px]">
          <TradingViewWidget Symbol={data.symbol + "usdt"}
          theme={theme} />
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
