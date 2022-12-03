import React, { useState } from "react";
import Header from "../../components/header";
import LevragedTokenHeader from "../../assets/img/levraged-token-header.png";
import { Link } from "react-router-dom";
// import MyDialog from "../../components/dialog";
import { levraged_tokens_data } from "../../data/levragedTokenData";
import AcardeonSlime from "./components/faqHomePage";

const LevragedToken = () => {
  //   const [dialogOpen, setDialogOpen] = useState(false);

  //   const handleDialog = () => {
  //     setDialogOpen(true);
  //   };

  return (
    <>
      {/* <MyDialog
        title="معرفی توکن‌های لوریج دار در یوبیتکس"
        video="https://www.aparat.com/video/video/embed/videohash/741ZI/vt/frame"
        buttonText="بستن"
        dialogOpen={dialogOpen}
        fullwidthButton
        onDialogClose={() => setDialogOpen(false)}
        width="w-[1200px]"
      /> */}
      <Header title={"توکن‌های لوریج دار"} />
      <div className="px-4 sm:px-6 text-right max-w-[1400px] mx-auto my-10">
        <div className="grid grid-cols-8 items-center my-10 space-y-5 bg-gray-100 dark:bg-[#051a36] rounded-lg p-16 rtl-grid">
          <div className="flex flex-col space-y-5 col-span-3">
            <h1 className="text-[#f39200] text-4xl font-semibold">
              توکن‌های لوریج دار
            </h1>
            <p className="leading-relaxed">
              توکن‌‌های لوریج‌دار یوبیتکس یک محصول مشتقه است که ریسک لیکوئید شدن
              ندارد. این برای شما اهرمی روی دارایی پایه قرار می‌دهد، که ممکن است
              سودآوری و همچنین زیان را افزایش دهد.
            </p>
            <Link className="flex" to={"/redirect-to-platform"}>
              <button className="text-[#f39200] cursor-pointer transition-all px-8 py-4 bg-[#f39200] bg-opacity-10 rounded-md">
                هم اکنون معامله کنید
              </button>
            </Link>
          </div>
          <div className="col-span-5">
            <img src={LevragedTokenHeader} alt="" className="w-3/4 mx-auto" />
          </div>
        </div>
        <div className="mb-10 flex justify-between items-center flex-row-reverse">
          <div className="flex flex-col space-y-3">
            <h1 className="text-[#f39200] text-3xl font-semibold">
              توکن‌های لوریج‌دار چیست؟
            </h1>
          </div>
          {/* <button
            onClick={() => handleDialog()}
            className="px-6 py-2 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200] flex space-x-2 space-x-reverse items-center justify-center flex-row-reverse">
            <span>مشاهده ویدئو</span>
          </button> */}
        </div>
        <div className="grid grid-cols-8 rtl-grid gap-8">
          <div className="col-span-5">
            <div className="xl:h-[450px] lg:h-[500px] md:h-[400px] sm:h-[400px] max-sm:h-[200px] w-full loading-animation rounded-2xl">
              <iframe
                src={
                  "https://www.aparat.com/video/video/embed/videohash/741ZI/vt/frame"
                }
                title={"Levraged Tokens"}
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                className="w-full h-full rounded-2xl"></iframe>
            </div>
          </div>
          <div className="col-span-3 flex flex-col space-y-10 leading-relaxed bg-gray-100 dark:bg-[#051a36] rounded-lg p-7 text-[15px]">
            <p>
              توکن‌های لوریج‌دار با ارائه موقعیت اهرم‌دار در معاملات رمزارزها
              سود و ضرر شما را چندین برابر می‌کند. توکن‌های لوریج‌دار را همانند
              دیگر توکن‌ها در بازار می‌توان معامله کرد. قیمت یک توکن لوریج‌دار
              همراه با تغییرات قیمت در بازار حرکت می‌کند و به نسبت اهرم آن، بالا
              و پایین می‌رود. برخلاف معاملات مارجین، توکن‌های لوریج‌دار به شما
              این امکان را می‌دهند که بدون نیاز به قرار دادن وثیقه و نگرانی
              درباره ریسک لیکوئید شدن، معاملات لوریج‌دار را انجام دهید.
            </p>
            <p>
              درواقع توکن‌های لوریج‌دار، حرکت قیمت رمزارزها را چندین برابر
              می‌کند. به عنوان مثال، خرید BTC3L (یعنی معامله لانگ بیت‌کوین با
              اهرم 3 برابری) به شما این امکان را می‌دهد که اگر قیمتBTCUSDT 10
              درصد افزایش یابد، شما 30 درصد سود به دست آورید. همانطور که از
              توضیحات مشخص است، توکن‌های لوریج‌دار ریسک خاص خود را دارند و شما
              نباید بدون درک کامل از زیان‌های احتمالی روی آن‌ها سرمایه‌گذاری
              کنید.
            </p>
          </div>
        </div>

        <div className="my-10 flex flex-col justify-center items-center bg-gray-100 dark:bg-[#051a36] rounded-lg p-16">
          <h1 className="text-[#f39200] text-3xl font-semibold">
            {levraged_tokens_data.advantage.title}
          </h1>

          <div className="grid grid-cols-3 gap-8 mt-16 transition-all rtl-grid">
            {levraged_tokens_data.advantage.items.map((item) => {
              return (
                <div className=" transition-all cursor-pointer dark:hover:bg-[#051b38] bg-gray-50 hover:bg-white dark:bg-[#04162d] p-12 rounded-lg flex flex-col justify-center text-center space-y-3">
                  <span className="text-[#f39200] text-4xl p-3 rounded-lg bg-[#f39200] bg-opacity-10 flex justify-center mx-auto">
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <AcardeonSlime />
      </div>
    </>
  );
};

export default LevragedToken;
