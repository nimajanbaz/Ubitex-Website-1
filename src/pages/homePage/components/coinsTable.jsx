import axios from "axios";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LongBadge, ShortBadge } from "../../../components/badge";
import { Table } from "../../../components/table";

const CoinsTable = () => {
    const [markets, setMarkets] = useState();

    const columns = useMemo(
      () => [
        {
          Header: "نام / نماد	",
          accessor: "desName",
          Cell: (props) => {
            const { desName, desNameFa, destinationIcon } = props.row.original;
            return (
              <div className="flex space-x-2 space-x-reverse">
                <div className="w-10">
                  <img src={destinationIcon} alt={desNameFa} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span>{desName}</span>
                    {desName.endsWith("3L") ? (
                      <LongBadge />
                    ) : desName.endsWith("3S") ? (
                      <ShortBadge />
                    ) : null}
                  </div>
                  <span className="text-sm">{desNameFa}</span>
                </div>
              </div>
            );
          },
        },
        {
          Header: "خرید (تومان)",
          accessor: "bestBuy",
          Cell: (props) => {
            const { bestBuy } = props.row.original;
            return (
              <div className="flex items-center text-sm">
                <span>
                  {bestBuy.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            );
          },
        },
        {
          Header: "فروش (تومان)",
          accessor: "bestSell",
          Cell: (props) => {
            const { bestSell } = props.row.original;
            return (
              <div className="flex items-center text-sm">
                <span>
                  {bestSell.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            );
          },
        },
        {
          Header: "آخرین معامله (تومان)",
          accessor: "latestTrade",
          Cell: (props) => {
            const { latestTrade } = props.row.original;
            return (
              <div className="flex items-center text-sm">
                <span>
                  {latestTrade.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            );
          },
        },
        {
          Header: "تغییرات 24 ساعت",
          accessor: "change",
          Cell: (props) => {
            const { change } = props.row.original;
            return (
              <div className="flex items-center">
                <span
                  className={`flex items-center text-sm px-3 py-2 rounded bg-opacity-10 ${
                    change > 0
                      ? "bg-emerald-600 text-emerald-600"
                      : "bg-red-600 text-red-600"
                  }`}>
                  %{change}
                </span>
              </div>
            );
          },
        },
        {
          Header: "نمودار 7 روز گذشته",
          accessor: "chartSvg",
          Cell: (props) => {
            const { chartSvg, change, desNameFa } = props.row.original;
            return (
              <div
                className={`flex items-center ${
                  change > 0 ? "filter-green" : "filter-red"
                }`}>
                {chartSvg ? (
                  <img src={chartSvg} alt={desNameFa} />
                ) : (
                  <span>---</span>
                )}
              </div>
            );
          },
        },
        {
          Header: "",
          accessor: "action",
          Cell: () => (
            <a href="https://app.ubitex.io">
              <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
                خرید / فروش
              </button>
            </a>
          ),
        },
      ],
  
      []
    );
  
    useEffect(() => {
      const getData = async () => {
        await axios
          .get("https://api.ubitex.io/api/PublicApi/market")
          .then((res) => {
            const all = res.data.markets;
            setMarkets(all.filter((item) => item.srcName === "TMN"));
          })
          .catch((err) => console.log(err));
      };
      getData();
    }, []);

    
  return (
    <>
      <div className="flex flex-col mx-auto mt-10">
        <h3 className="text-2xl text-[#f39200] font-semibold text-right mb-10">
          ارزهای دیجیتال یوبیتکس
        </h3>
        {markets ? (
          <div className="max-md:overflow-scroll">
            <Table
              columns={columns}
              data={markets.filter(
                (item) =>
                  item.desName === "BTC" ||
                  item.desName === "ETH" ||
                  item.desName === "USDT" ||
                  item.desName === "SHIB" ||
                  item.desName === "DOGE" ||
                  item.desName === "BTC3S" ||
                  item.desName === "ETH3L" ||
                  item.desName === "DOT" ||
                  item.desName === "ELON" ||
                  item.desName === "DYDX"
              )}
            />
            <div className="flex mx-auto justify-center items-center  mt-9 mb-5">
              <Link
                to={"/markets"}
                className="text-[#f39200] cursor-pointer transition-all text-lg px-6 py-3 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
                <span>مشاهده همه بازارهای یوبیتکس</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="my-10 flex justify-center items-center">
            <p>...درحال بارگزاری</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CoinsTable;
