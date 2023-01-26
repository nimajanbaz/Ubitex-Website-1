import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Table } from "../../components/table";
import Header from "../../components/header";
import MarketsHeader from "./components/header";
import { RiSearch2Line } from "react-icons/ri";
import { LongBadge, ShortBadge } from "../../components/badge";
import Categories from "./components/categoris";
import MarketsHeaderSkeleton from "../../components/skeleton/marketsHeaderSkeleton";
import { Link } from "react-router-dom";

const Markets = () => {
  const [markets, setMarkets] = useState();
  const [loser, setLoser] = useState();
  const [gainer, setGainer] = useState();
  const [recentlyUpdated, setRecentlyUpdated] = useState();
  const [tableFilter, setTableFilter] = useState([]);

  const [tableFilterQuery, setTableFilterQuery] = useState();
  const [categoryFilter, setCategoryFilter] = useState("all");

  const columns = useMemo(
    () => [
      {
        Header: "نام / نماد	",
        accessor: "name",
        Cell: (props) => {
          const { name, nameFa, logo, slug } = props.row.original;
          return (
            <Link to={`/markets/${slug}`}>
              <div className="flex space-x-2 space-x-reverse">
                <div className="w-10">
                  <img src={logo} alt={nameFa} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span>{name}</span>
                    {name.endsWith("3L") ? (
                      <LongBadge />
                    ) : name.endsWith("3S") ? (
                      <ShortBadge />
                    ) : null}
                  </div>
                  <span className="text-sm">{nameFa}</span>
                </div>
              </div>
            </Link>
          );
        },
      },
      {
        Header: "خرید",
        accessor: "buyPriceUSDT",
        Cell: (props) => {
          const { buyPriceUSDT } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>${buyPriceUSDT}</span>
            </div>
          );
        },
      },
      {
        Header: "فروش",
        accessor: "sellPriceUSDT",
        Cell: (props) => {
          const { sellPriceUSDT } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>${sellPriceUSDT}</span>
            </div>
          );
        },
      },
      {
        Header: "آخرین معامله",
        accessor: "lastTradeUSDT",
        Cell: (props) => {
          const { lastTradeUSDT } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>${lastTradeUSDT}</span>
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
        accessor: "chart",
        Cell: (props) => {
          const { chart, change, nameFa } = props.row.original;
          return (
            <div
              className={`flex items-center ${
                change > 0 ? "filter-green" : "filter-red"
              }`}>
              {chart ? <img src={chart} alt={nameFa} /> : <span>---</span>}
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "action",
        Cell: () => (
          <a href="https://app.ubitex.io">
            <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md text-sm">
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
        .get("https://bapi.ubitex.io/v1.0/cryptoInfo")
        .then((res) => {
          setMarkets(res.data);
          setTableFilter(res.data);
        })
        .catch((err) => console.log(err));
    };

    const getData2 = async () => {
      await axios
        .get("https://bapi.ubitex.io/v1.0/static/crypto/getGainerLoserFavorite")
        .then((res) => {
          setLoser(res.data.losers.slice(0, 3));
          setGainer(res.data.gainers.slice(0, 3));
          setRecentlyUpdated(res.data.favorite);
        })
        .catch((err) => console.log(err));
    };

    getData();
    getData2();
  }, []);

  function handleDebounceFn(e) {
    const val = e.target.value;
    if (typeof val === "string" && (val.length >= 1 || val.length === 0)) {
      setTableFilterQuery(val);
    }
  }

  useEffect(() => {
    if (markets) {
      setTableFilter(
        markets
          .filter((d) =>
            tableFilterQuery
              ? d.symbol.includes(tableFilterQuery.toUpperCase())
              : d
          )
          .filter((d) =>
            categoryFilter !== "all" ? d.category === categoryFilter : d
          )
      );
    }
  }, [tableFilterQuery, categoryFilter, markets]);

  return (
    <>
      <Header title={"بازارها | صرافی ارزدیجیتال یوبیتکس"} />

      <div className="px-10 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-5/6">
        {loser ? (
          <MarketsHeader
            loser={loser}
            gainer={gainer}
            recentlyUpdated={recentlyUpdated}
          />
        ) : (
          <MarketsHeaderSkeleton />
        )}

        {markets ? (
          <div className="bg-gray-50 dark:bg-[#051a36] p-8 rounded-lg rtl-grid">
            <div class="relative w-full">
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
            <Categories
              onSelect={(e) => {
                setCategoryFilter(e);
              }}
            />
            {tableFilter !== [] ? (
              <Table columns={columns} data={tableFilter} showIndex />
            ) : (
              <div className="my-10 flex justify-center items-center">
                <p>{"موردی وجود ندارد :("}</p>
              </div>
            )}
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

export default Markets;
