import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GrBitcoin } from "react-icons/gr";
import { BiLineChart } from "react-icons/bi";
import Header from "../components/header";

const AboutUs = () => {
  return (
    <>
      <Header title={"درباره ما"} />

      <div className="px-4 sm:px-6 text-right max-w-[1200px] mx-auto my-20">
        <div className="p-20 rounded-xl text-gray-700 dark:text-gray-400 bg-white dark:bg-[#051a36] dark:shadow-[0_0px_40px_0px_rgba(6,37,70,0.7)] shadow-[0_0px_40px_0px_rgba(0,0,0,0.05)]">
          <h2 className="text-[#f39200] text-2xl font-semibold">
            درباره یوبیتکس
          </h2>
          <p className="mt-5">
            یوبیتکس با هم ‌اندیشی صاحب‌نظران اقتصادی، دانشگاهیان و افراد
            صاحب ‌نظر با راهکار و ایده نو با هدف اعتمادآفرینی و استفاده از
            ظرفیت‌های حوزه صنعت بلاکچین در قالب یک پلتفرم ایرانی و در تراز جهانی
            متولد شده است.
          </p>
          <br />
          <p>
            چه بخواهیم چه نخواهیم! تغییر تنها اصل ثابت زندگی در جهان پیچیده،
            پرشتاب و ناشناخته است که بر بستر فناوری، جهان پر از شگفتی را پیش روی
            ما قرار داده است.
          </p>
          <br />
          <p>
            زیستن در چنین جهانی، نیازمند هوش، دانش، بصیرت و هم ‌افزایی تمام
            ظرفیت ‌های انسانی و اجتماعی است. تحولات در حوزه صنعت بلاکچین و حوزه
            رمزارزی با قابلیت غیرمتمرکز بودن، ناشناس بودن، قراردادهای هوشمند،
            نقدشوندگی و... داستان پول را عوض کرده است. در پاسخ به اینکه ما کجای
            کار ایستاده ‌ایم و چه باید بکنیم! و چگونه باید از این ظرفیت ‌ها و
            فرصت ‌ها برای برون رفت از تنگناهای مبادلات پولی و بانکی ناشی از
            تحریم ‌ها استفاده کنیم و یا اینکه چگونه در فضای پر ابهام و پر ریسک
            به علت عدم آشنایی ایرانیان و مخاطرات ناشی از حفظ سرمایه مردم و با
            توجه به استقبال جوانان جویای موفقیت و باهوش در فضایی که قوانین روشن
            در آن وجود ندارد، یوبیتکس با هم ‌اندیشی صاحب ‌نظران اقتصادی،
            دانشگاهیان و افراد صاحب ‌نظر با راهکار و ایده نو با هدف اعتمادآفرینی
            و استفاده از ظرفیت‌های حوزه صنعت بلاکچین در قالب یک پلتفرم ایرانی و
            در تراز جهانی متولد شد.
          </p>
          <br />
          <h2 className="text-[#f39200] text-2xl font-semibold">
            ارزش‌های یوبیتکس
          </h2>
          <div className="grid grid-cols-3 gap-8 mt-5 transition-all">
            <div className=" transition-all cursor-pointer dark:hover:bg-[#051b38] bg-gray-100 dark:bg-[#04162d] p-12 rounded-lg flex flex-col justify-center text-center space-y-3">
              <span className="text-[#f39200] text-4xl p-3 rounded-lg bg-[#f39200] bg-opacity-10 flex justify-center mx-auto">
                <BsCurrencyDollar />
              </span>
              <h3 className="text-xl font-semibold">کارمزد رقابتی</h3>
              <p className="text-sm">
                کارمزد معاملات ثابت و به میزان ۰.۲۵ درصد که جزو پایین‌ترین
                کارمزدها در میان صرافی‌های ارز دیجیتال ایرانی است.
              </p>
            </div>

            <div className=" transition-all cursor-pointer dark:hover:bg-[#051b38] bg-gray-100 dark:bg-[#04162d] p-12 rounded-lg flex flex-col justify-center text-center space-y-3">
              <span className="text-[#f39200] text-4xl p-3 rounded-lg bg-[#f39200] bg-opacity-10 flex justify-center mx-auto">
                <BiLineChart />
              </span>
              <h3 className="text-xl font-semibold">پلتفرم معاملاتی</h3>
              <p className="text-sm">
                امکان معامله شخص به شخص (C2C) و بدون دخالت صرافی برای کاربران
                تازه وارد و حرفه‌ای در بازارهای تومان و تتر
              </p>
            </div>

            <div className=" transition-all cursor-pointer dark:hover:bg-[#051b38] bg-gray-100 dark:bg-[#04162d] p-12 rounded-lg flex flex-col justify-center text-center space-y-3">
              <span className="text-[#f39200] text-4xl p-3 rounded-lg bg-[#f39200] bg-opacity-10 flex justify-center mx-auto">
                <GrBitcoin />
              </span>
              <h3 className="text-xl font-semibold">تنوع ارز بالا</h3>
              <p className="text-sm">
                امکان معامله بیش از 100 رمزارز در حوزه ‌های گیمفای، متاورس، NFT،
                میم کوین و... که به صورت دوره ای به تالار معاملات اضافه می شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
