import { Link } from "react-router-dom";
import LeveragedTokenSymbol2 from "../assets/img/trusted-section.webp";

const LeveragedTokensAds = () => {
  return (
    <>
      <div className="p-10 rounded-2xl bg-gray-50 dark:bg-[#051a36] rtl-grid flex max-md:flex max-md:flex-col gap-20 items-center mb-10">
        <div>
          <img
            src={LeveragedTokenSymbol2}
            alt="Leveraged Tokens Ads"
            className="h-[150px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[#f39200] text-2xl font-semibold">
            توکن های لوریج دار در یوبیتکس
          </h2>
          <span>توکن ‌های لوریج ‌دار، امکان معاملات اهرم‌دار را بدون ریسک لیکوئید شدن برای معامله‌گران فراهم می‌کنند. یوبیتکس تنها و اولین صرافی ارز دیجیتال ایرانی است که این قابلیت را برای کاربران خود ایجاد کرده است.</span>
          <Link to="/leveraged-tokens">
            <button className="text-[#f39200] cursor-pointer transition-all px-8 py-3 max-md:w-full bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
              اطلاعات بیشتر
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeveragedTokensAds;
