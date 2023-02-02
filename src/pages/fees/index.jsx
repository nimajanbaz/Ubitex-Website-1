import React from "react";
import TradingFee from "./components/tradingFee";
import TransferFee from "./components/transferFee";
import Header from "../../components/header";
import LeveragedTokensAds from "../../components/leveragedTokensAds";

const Fees = () => {
  return (
    <>
      <Header title={'کارمزدها و سطوح کاربری | صرافی ارزدیجیتال یوبیتکس'}/>
      <div className="px-10 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-5/6 space-y-10 rtl-grid">
        {/* Header */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-[#f39200] text-2xl font-semibold">
            کارمزد خدمات و سطوح کاربری
          </h1>
          <p className="text-sm">
            پلتفرم مبادلات رمزارزی یوبیتکس با هدف تسهیل معاملات و امنیت خاطر
            کاربران، بر اساس سطوح احراز هویت و میزان فعالیت آن‌ها، کارمزد
            دریافتی را مشخص می‌کند. <br /> سطوح مختلف حساب‌های کاربری به منظور
            رعایت حقوق کاربران و تسهیل معاملات در بازار و همچنین ایجاد بستری امن
            و حرفه‌ای برای کاربران یوبیتکس ایجاد شده است.
          </p>
          <TradingFee />
          <h1 className="text-[#f39200] text-2xl font-semibold">
            کارمزد واریز و برداشت
          </h1>
          <p className="text-sm">
            برای هر برداشت، یک کارمزد ثابت توسط کاربران پرداخت می‌شود تا
            هزینه‌های تراکنش انتقال ارز دیجیتال به خارج از حساب یوبیتکس را پوشش
            دهد. <br /> نرخ برداشت توسط شبکه بلاک چین تعیین می شود و می تواند
            بدون اطلاع قبلی به دلیل عواملی مانند تراکم شبکه در نوسان باشد. لطفاً
            جدیدترین داده های فهرست شده در هر صفحه برداشت را بررسی کنید.
          </p>
          <TransferFee />

          <LeveragedTokensAds />

        </div>
      </div>
    </>
  );
};

export default Fees;
