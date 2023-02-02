import axios from "axios";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LongBadge, ShortBadge } from "../../../components/badge";
import MarketsTableSkeleton from "../../../components/skeleton/marketsTableSkeleton";
import { Table } from "../../../components/table";
import TitleBox from "../../../components/titleBox";
import { GET_MARKETS_HEADER_DATA_URL } from "../../../config/api.config";
import { RiCopperCoinLine } from "react-icons/ri";
import { HiArrowSmLeft } from "react-icons/hi";

const CoinsTable = () => {
  const [markets, setMarkets] = useState();

  const columns = useMemo(
    () => [
      {
        Header: "نام / نماد	",
        accessor: "info",
        Cell: (props) => {
          const { coin: info, logo } = props.row.original;
          return (
            <div className="flex space-x-2 space-x-reverse">
              <div className="w-10">
                <img src={logo} alt={info.nameFa} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span>{info.symbol}</span>
                  {info.symbol.endsWith("3L") ? (
                    <LongBadge />
                  ) : info.symbol.endsWith("3S") ? (
                    <ShortBadge />
                  ) : null}
                </div>
                <span className="text-sm">{info.nameFa}</span>
              </div>
            </div>
          );
        },
      },
      {
        Header: "خرید (تومان)",
        accessor: "buyPriceTMN",
        Cell: (props) => {
          const { buyPriceTMN } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>
                {buyPriceTMN.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          );
        },
      },
      {
        Header: "فروش (تومان)",
        accessor: "sellPriceTMN",
        Cell: (props) => {
          const { sellPriceTMN } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>
                {sellPriceTMN.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          );
        },
      },
      {
        Header: "آخرین معامله (تومان)",
        accessor: "lastPriceTMN",
        Cell: (props) => {
          const { lastPriceTMN } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>
                {lastPriceTMN.toLocaleString(undefined, {
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
          const { changePercentage } = props.row.original;
          return (
            <div className="flex items-center">
              <span
                className={`flex items-center text-sm px-3 py-2 rounded bg-opacity-10 ${
                  changePercentage > 0
                    ? "bg-emerald-600 text-emerald-600"
                    : "bg-red-600 text-red-600"
                }`}>
                %{changePercentage}
              </span>
            </div>
          );
        },
      },
      {
        Header: "نمودار 7 روز گذشته",
        accessor: "chart7d",
        Cell: (props) => {
          const { chart7d, changePercentage } = props.row.original;
          return (
            <div
              className={`flex items-center ${
                changePercentage > 0 ? "filter-green" : "filter-red"
              }`}>
              {chart7d ? <img src={chart7d} alt={"---"} /> : <span>---</span>}
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "action",
        Cell: (props) => {
          const { slug } = props.row.original;
          return (
            <div className="flex space-x-3 space-x-reverse">
              <Link to="/redirect-to-platform">
                <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-0 hover:bg-opacity-20 rounded-md text-sm">
                  معامله
                </button>
              </Link>
              <Link to={`/price/${slug}`}>
                <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-0 hover:bg-opacity-20 rounded-md text-sm">
                  اطلاعات بیشتر
                </button>
              </Link>
            </div>
          );
        },
      },
    ],

    []
  );

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(GET_MARKETS_HEADER_DATA_URL)
        .then((res) => {
          const all = res.data.favorite;
          setMarkets(all);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col mx-auto mt-10">
        <div className="flex md:flex-row max-sm:flex-col-reverse sm:flex-col-reverse justify-between items-center">
          <Link to={"/markets"}>
            <button className="px-6 py-2 rounded-md bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 transition-all text-[#f39200] flex space-x-2 space-x-reverse items-center justify-center flex-row-reverse sm:mt-5 max-sm:mt-5">
              <span>مشاهده همه</span>
              <HiArrowSmLeft />
            </button>
          </Link>
          <TitleBox
            icon={<RiCopperCoinLine />}
            title={"ارزهای دیجیتال یوبیتکس"}
          />
        </div>

        {markets ? (
          <div className="max-md:overflow-scroll mt-10">
            <Table columns={columns} data={markets} showIndex />
            {/* <div className="flex mx-auto justify-center items-center  mt-9 mb-5">
              <Link
                to={"/markets"}
                className="text-[#f39200] cursor-pointer transition-all text-lg px-6 py-3 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
                <span>مشاهده همه بازارهای یوبیتکس</span>
              </Link>
            </div> */}
          </div>
        ) : (
          <MarketsTableSkeleton />
        )}
      </div>
    </>
  );
};

export default CoinsTable;
