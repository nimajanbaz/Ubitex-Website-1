import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Table } from "../../components/table";
import Header from "../../components/header";
import MarketsHeader from "./components/header";
import { RiSearch2Line } from "react-icons/ri";
import { LongBadge, ShortBadge } from "../../components/badge";

const Markets = () => {
  const [markets, setMarkets] = useState();
  const [loser, setLoser] = useState();
  const [gainer, setGainer] = useState();
  const [recentlyUpdated, setRecentlyUpdated] = useState();
  const [tableFilter, setTableFilter] = useState([]);

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
        Header: "خرید",
        accessor: "bestBuy",
        Cell: (props) => {
          const { bestBuy } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>${bestBuy}</span>
            </div>
          );
        },
      },
      {
        Header: "فروش",
        accessor: "bestSell",
        Cell: (props) => {
          const { bestSell } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>${bestSell}</span>
            </div>
          );
        },
      },
      {
        Header: "آخرین معامله",
        accessor: "latestTrade",
        Cell: (props) => {
          const { latestTrade } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>${latestTrade}</span>
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
              <img src={chartSvg} alt={desNameFa} />
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
          setMarkets(all.filter((item) => item.srcName === "USDT"));
          setTableFilter(all.filter((item) => item.srcName === "USDT"));
          setLoser(res.data.loser);
          setGainer(res.data.gainer);
          setRecentlyUpdated(res.data.recentlyUpdated);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  function handleDebounceFn(e) {
    const val = e.target.value;
    if (typeof val === "string" && (val.length >= 1 || val.length === 0)) {
      setTableFilter(
        markets.filter((d) => d.symbol.includes(val.toUpperCase()))
      );
    }
  }

  return (
    <>
      <Header title={"بازارها"} />

      <div className="px-4 sm:px-6 text-right max-w-[1400px] mx-auto my-10">
        {markets ? (
          <>
            <MarketsHeader
              loser={loser}
              gainer={gainer}
              recentlyUpdated={recentlyUpdated}
            />
            <div className="bg-gray-50 dark:bg-[#051a36] p-8 rounded-lg rtl-grid">
              <div class="relative w-full mb-10">
                <div class="absolute right-0 flex items-center pr-3 pointer-events-none top-1/3">
                  <span className="w-5">
                    <RiSearch2Line />
                  </span>
                </div>
                <input
                  type="text"
                  onChange={handleDebounceFn}
                  className="w-1/4 px-3 py-2 pr-9 bg-gray-50 dark:bg-transparent border-2 border-gray-200 dark:border-[#072750] rounded-md appearance-none focus:border-[#f39200] dark:focus:border-[#f39200] focus:outline-none"
                  placeholder="جستجو..."
                />
              </div>
              <Table columns={columns} data={tableFilter} />
            </div>
          </>
        ) : (
          <div className="my-10 flex justify-center items-center">
            <p>...درحال بارگزاری</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Markets;
