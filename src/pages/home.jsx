import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import platform from "../assets/img/platform.webp";
import orders from "../assets/img/orders.webp";
import deposit from "../assets/img/deposit.webp";
import app from "../assets/img/app-01.webp";
import mobile from "../assets/img/app.png";
import gift from "../assets/img/gift.png";
import stoploss from "../assets/img/stoploss.png";
import support from "../assets/img/support.png";

const HomePage = (props) => {
  props.onBg("bg-[#051933]");

  const ver_class =
    "absolute p-2 rounded-lg border border-[#072349] shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all";

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
          <div className="flex flex-col space-y-3 items-end w-4/12">
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
        <div className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] bg-[#04162d] space-y-7">
          <div className="flex space-x-12 max-w-[1500px] justify-center items-center mx-auto ">
            {header_boxes.map((data) => {
              return (
                <div
                  className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] p-7 hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-2xl -top-16 flex flex-col items-end space-y-2 w-1/4  -mt-16 z-30"
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

          <div className="flex flex-col max-w-[1600px] mx-auto">
            <h3 className="text-2xl text-[#f39200] font-semibold">
              ارزهای دیجیتال یوبیتکس
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
