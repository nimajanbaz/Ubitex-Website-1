import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const TradeHomePage = () => {
  return (
    <>
      <div className="p-16 mb-10 flex flex-col justify-center items-center bg-gray-50 dark:bg-[#051a36] rounded-lg space-y-5">
        <h3 className="text-[#f39200] text-2xl font-semibold">
          هم اکنون معامله کنید
        </h3>
        <p>
          در حال حاضر، امکان معامله بیش از 20 توکن لوریج‌دار با موقعیت لانگ و
          شورت در تالار معاملات یوبیتکس فراهم شده است
        </p>
        <div className="flex space-x-6">
          <Link to={"/redirect-to-platform"}>
            <button className="px-8 py-3 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200] flex space-x-2 justify-center items-center">
              <span>
                <HiArrowSmLeft />
              </span>
              <span>ورود به تالار معاملات</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TradeHomePage;
