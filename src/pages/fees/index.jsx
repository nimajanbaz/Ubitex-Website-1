import React from "react";
import TradingFee from "./components/tradingFee";

const Fees = () => {
  return (
    <>
      <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto my-10 rtl-grid">
        {/* Header */}
        <div className="flex flex-col space-y-5">
          <p>
            تجربه تحریم دارایی‌های ایرانیان در صرافی‌های مطرح جهانی و نیز اعمال
            محدودیت‌های رایج از سوی آنها برای انجام معامله ما را بر آن داشت تا
            از طریق ایجاد یک بازار داخلی، ضمن ایجاد شفافیت قیمت، کاهش ریسک
            معامله با مخاطب ناشناش و حفظ و امنیت سرمایه کاربران، امکان معامله
            رمزارزها را برای مردم عزیز کشورمان با کارمزدهایی مطابق با کارمزدهای
            پذیرفته شده‌ی بین‌المللی فراهم نمائیم.
          </p>
          <h1 className="text-[#f39200] text-2xl font-semibold">
            کارمزد خدمات و سطوح کاربری
          </h1>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
            quos. Iure minus pariatur non ipsum magni aliquam praesentium saepe
            doloribus odio, autem doloremque optio dolores. Iste voluptatem
            labore iusto aperiam!
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
        </div>
      </div>
    </>
  );
};

export default Fees;
