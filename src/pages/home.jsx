import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Table } from "../components/table";
import about from "../assets/img/about-2.webp";
import mobileApp from "../assets/img/5.webp";
import { header_images, header_boxes, center_boxes } from "../data";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState();

  const columns = useMemo(
    () => [
      {
        Header: "نام / نماد	",
        accessor: "desName",
        Cell: (props) => {
          const { desName, desNameFa, destinationIcon } = props.row.original;
          return (
            <div className="flex cursor-pointer space-x-2 space-x-reverse">
              <div className="w-10">
                <img src={destinationIcon} alt={desNameFa} />
              </div>
              <div className="flex flex-col">
                <span>{desName}</span>
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
            <div className="flex items-center text-sm cursor-pointer">
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
            <div className="flex items-center text-sm cursor-pointer">
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
            <div className="flex items-center text-sm cursor-pointer">
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
                className={`flex items-center text-sm cursor-pointer px-3 py-2 rounded bg-opacity-10 ${
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
              className={`flex items-center cursor-pointer ${
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
            <button className="px-4 py-2 border border-[#f39200] rounded-md text-[#f39200] transition-all hover:bg-[#f39200] hover:text-white">
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
          setData(all.filter((item) => item.srcName === "USDT"));
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <>
      <div className="mx-auto">
        <div className="max-w-[1750px] flex justify-center items-center mx-auto">
          {/* Left Box */}
          <div className="w-8/12 top-5 relative max-lg:hidden min-h-[800px]">
            {header_images.map((image) => {
              return (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className={image.class}
                />
              );
            })}
          </div>

          {/* Right Box */}
          <div className="flex flex-col space-y-7 items-end lg:w-4/12 md:w-full text-right">
            <div className="flex flex-col space-y-7">
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl dark:text-gray-100 text-gray-800">
                  ...داستان پول عوض شد
                </h3>
                <h1 className="text-[#f39200] text-4xl font-semibold">
                  صرافی ارز دیجیتال یوبیتکس
                </h1>
                <h3 className="text-2xl dark:text-gray-100 text-gray-800">
                  پلتفرم مبادلات رمزارزی شما
                </h3>
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl dark:text-gray-100 text-gray-800">
                  خرید و فروش بیش از 100 رمزارز
                </h2>
                <h2 className="text-xl dark:text-gray-100 text-gray-800">
                  در تالار معاملات با کارمزد ثابت 0.0025
                </h2>
              </div>
            </div>

            <div className="flex space-x-3 space-x-reverse flex-row-reverse mt-3">
              <Link to="/redirect-to-platform">
                <button className="px-5 py-2 bg-[#f39200] rounded-md">
                  <span>ثبت نام</span>
                </button>
              </Link>
              <Link to="/download">
                <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-10 rounded-md">
                  <span>دانلود اپلیکیشن</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" dark:bg-[#04162d] bg-white space-y-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-14 max-w-[1500px] items-center mx-auto ">
            {header_boxes.map((data) => {
              return (
                <div
                  className="dark:shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] p-7 dark:hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-gray-200 hover:bg-gray-300 dark:bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-2xl flex flex-col items-end space-y-4 md:mb-3 lg:-mt-16 z-30 cursor-pointer"
                  key={data.id}>
                  <span
                    className="text-3xl text-right dark:bg-[#062246] bg-gray-100 rounded-lg p-3 text-[#f39200]"
                  >{data.icon}</span>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">
                    {data.title}
                  </span>
                  <p className="text-sm text-right text-gray-700 dark:text-gray-300">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col max-w-[1600px] mx-auto mt-10">
            <h3 className="text-2xl text-[#f39200] font-semibold text-right">
              ارزهای دیجیتال یوبیتکس
            </h3>
            {data ? (
              <div className="max-md:overflow-scroll">
                <Table columns={columns} data={data.slice(0, 10)} />
                <div className="flex mx-auto justify-center items-center  mt-9 mb-5">
                  <Link
                    to={"/redirect-to-platform"}
                    className="text-[#f39200] cursor-pointer transition-all text-lg px-6 py-3 bg-[#f39200] bg-opacity-10 rounded-md">
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

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1600px] mx-auto items-center text-right">
            <div>
              <div className="flex flex-col space-y-3 mb-3">
                <h3 className="text-3xl font-semibold text-[#f39200]">
                  امکانات
                </h3>
                <span>برخی از امکانات پلتفرم یوبیتکس</span>
              </div>
              <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-7 rtl-grid cursor-pointer">
                {center_boxes.map((data) => {
                  return (
                    <div
                      className="dark:shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] p-7 dark:hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-gray-200 hover:bg-gray-300 dark:bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-lg"
                      key={data.id}>
                      <img
                        src={data.image}
                        alt=""
                        className="w-14 text-right bg-gray-200 dark:bg-[#07244b] rounded-lg p-3"
                      />
                      <span className="text-lg font-semibold mt-2 text-[#f39200]">
                        {data.title}
                      </span>
                      <p className="text-xs mt-3 text-gray-700 dark:text-gray-200">
                        {data.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <img src={about} alt="" className="mx-auto animate-ver_5s" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1600px] mx-auto items-center text-right">
            <div>
              <img src={mobileApp} alt="" className="mx-auto animate-ver_5s" />
            </div>

            <div>
              <div className="flex flex-col space-y-5 mb-3">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl text-gray-700 dark:text-gray-200">
                    با اپلیکیشن موبایل
                  </span>
                  <span className="text-4xl font-semibold text-[#f39200]">
                    صرافی ارز دیجیتال یوبیتکس
                  </span>
                  <span className="text-2xl text-gray-700 dark:text-gray-200">
                    همیشه بروز باشید
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">
                  ترید آسان، همه جا و همه وقت از طریق اپلیکیشن موبایل یوبیتکس
                </p>
                <Link to={"/download"} className="flex justify-end">
                  <button className="text-[#f39200] cursor-pointer transition-all text-lg px-5 py-2 bg-[#f39200] bg-opacity-10 rounded-md">
                    دانلود اپلیکیشن
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
