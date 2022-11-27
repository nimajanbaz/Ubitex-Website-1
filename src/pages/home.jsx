import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import { Table } from "../components/table";
import platform from "../assets/img/platform.webp";
import orders from "../assets/img/orders.webp";
import deposit from "../assets/img/deposit.webp";
import app from "../assets/img/app-01.webp";
import mobile from "../assets/img/app.png";
import gift from "../assets/img/gift.png";
import stoploss from "../assets/img/stoploss.png";
import support from "../assets/img/support.png";
import about from "../assets/img/about-2.webp";
import mobileApp from "../assets/img/5.webp";

const HomePage = (props) => {
  props.onBg("bg-[#051933]");

  const ver_class =
    "absolute p-2 rounded-lg border border-[#072349] shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all";

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
              <span>{bestBuy}</span>
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
              <span>{bestSell}</span>
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
              <span>{latestTrade}</span>
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
          <Link to={"/redirect-to-platform"}>
            <button className="px-4 py-2 border border-[#f39200] rounded-md text-[#f39200] transition-all hover:bg-[#f39200] hover:text-white">
              خرید / فروش
            </button>
          </Link>
        ),
      },
    ],

    []
  );

  const header_images = [
    {
      id: 1,
      src: platform,
      alt: "Platform",
      class: `${ver_class} animate-ver_7s left-10`,
    },
    {
      id: 2,
      src: deposit,
      alt: "Deposit",
      class: `${ver_class} animate-ver_5s left-80 top-60 w-1/4`,
    },
    {
      id: 3,
      src: orders,
      alt: "Orders",
      class: `${ver_class} animate-hor_5s left-36 top-[470px] w-3/4`,
    },
    {
      id: 4,
      src: app,
      alt: "Application",
      class: `${ver_class} animate-hor_7s top-36 w-3/12 !border-[7px]`,
    },
  ];

  const header_boxes = [
    {
      id: 1,
      image: mobile,
      title: "اپلیکیشن موبایل",
      description:
        "اپلیکیشن یوبیتکس در دو نسخه اندروید و IOS با رابط کاربری ساده و حرفه ای",
    },
    {
      id: 2,
      image: gift,
      title: "کارت هدیه ارزدیجیتال",
      description:
        "ساخت رایگان کارت هدیه رمزارزی با طرح دلخواه در مناسبت های مختلف",
    },
    {
      id: 3,
      image: support,
      title: "پشتیبانی 24 ساعته",
      description:
        "پشتیبانی آنلاین حرفه ای 24 ساعته در 7 روز هفته از طریق تیکت و چت آنلاین",
    },
    {
      id: 4,
      image: stoploss,
      title: "تعیین حد سود / ضرر",
      description:
        "امکان تعیین حد سود / ضرر به دو صورت عادی و استاپ با بهترین قیمت",
    },
  ];

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
    <div className="mx-auto text-white">
      <Navbar isDark={true} />
      <div className="mx-auto">
        <div className="max-w-[1600px] flex justify-center items-center mx-auto">
          {/* Left Box */}
          <div className="w-8/12 top-5 relative max-lg:hidden min-h-[770px]">
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
          <div className="flex flex-col space-y-3 items-end lg:w-4/12 md:w-full">
            <h3>...داستان پول عوض شد</h3>
            <h1 className="text-[#f39200] text-3xl font-semibold">
              صرافی ارز دیجیتال یوبیتکس
            </h1>
            <h3>پلتفرم مبادلات رمزارزی شما</h3>
            <h2 className="text-xl">خرید و فروش بیش از 100 رمزارز</h2>
            <h2 className="text-xl">در تالار معاملات با کارمزد ثابت 0.0025</h2>

            <div className="flex space-x-3 space-x-reverse flex-row-reverse mt-3">
              <Link to="/redirect-to-platform">
                <button className="px-6 py-2 bg-[#f39200] rounded-md">
                  <span>ثبت نام</span>
                </button>
              </Link>
              <Link to="/app">
                <button className="px-4 py-2 border border-[#f39200] rounded-md text-[#f39200] transition-all hover:bg-[#f39200] hover:text-white">
                  <span>دانلود اپلیکیشن</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] bg-[#04162d] space-y-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-1 max-w-[1500px] items-center mx-auto ">
            {header_boxes.map((data) => {
              return (
                <div
                  className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] p-7 hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-2xl flex flex-col items-end space-y-2 md:mb-3 lg:-mt-16 z-30"
                  key={data.id}>
                  <img
                    src={data.image}
                    alt=""
                    className="w-14 text-right bg-[#062246] rounded-lg p-3"
                  />
                  <span>{data.title}</span>
                  <p className="text-xs">{data.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col max-w-[1600px] mx-auto mt-10">
            <h3 className="text-2xl text-[#f39200] font-semibold">
              ارزهای دیجیتال یوبیتکس
            </h3>
            {data ? (
              <div className="md:overflow-auto lg:overflow-hidden">
                <Table columns={columns} data={data.slice(0, 10)} />
                <div className="flex mx-auto justify-center items-center  mt-9 mb-5">
                  <Link
                    to={"/redirect-to-platform"}
                    className="text-[#f39200] cursor-pointer transition-all text-lg px-4 py-2 bg-[#f39200] bg-opacity-10 rounded-md">
                    <a>مشاهده تمام ارزهای دیجیتال</a>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="my-10 flex justify-center items-center">
                <p>...درحال بارگزاری</p>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1600px] mx-auto items-center">
            <div>
              <div className="flex flex-col space-y-3 mb-3">
                <h3 className="text-3xl font-semibold text-[#f39200]">
                  امکانات
                </h3>
                <span>برخی از امکانات پلتفرم یوبیتکس</span>
              </div>
              <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-3">
                {header_boxes.map((data) => {
                  return (
                    <div
                      className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] p-7 hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-2xl"
                      key={data.id}>
                      <img
                        src={data.image}
                        alt=""
                        className="w-14 text-right bg-[#062246] rounded-lg p-3"
                      />
                      <span>{data.title}</span>
                      <p className="text-xs mt-3">{data.description}</p>
                      <span className="text-[#f39200] text-xs mt-3 cursor-pointer">
                        مطالعه بیشتر
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <img src={about} alt="" className="mx-auto animate-ver_5s" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1600px] mx-auto items-center">
            <div>
              <img src={mobileApp} alt="" className="mx-auto animate-ver_5s" />
            </div>

            <div>
              <div className="flex flex-col space-y-5 mb-3">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl">با اپلیکیشن موبایل</span>
                  <span className="text-4xl font-semibold text-[#f39200]">
                    صرافی ارز دیجیتال یوبیتکس
                  </span>
                  <span className="text-2xl">همیشه بروز باشید</span>
                </div>
                <p>
                  ترید آسان، همه جا و همه وقت از طریق اپلیکیشن موبایل یوبیتکس
                </p>
                <div className="flex justify-end">
                  <button className="px-4 py-2 border border-[#f39200] rounded-md text-[#f39200] transition-all hover:bg-[#f39200] hover:text-white">
                    دانلود اپلیکیشن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
