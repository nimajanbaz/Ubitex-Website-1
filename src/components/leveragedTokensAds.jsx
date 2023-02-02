import { Link } from "react-router-dom";

const LeveragedTokensAds = () => {
  return (
    <>
      <div className="p-14 rounded-2xl bg-gray-50 dark:bg-[#051a36] rtl-grid flex max-md:flex max-md:flex-col gap-20 items-center mb-10">
        <div className="w-3/12">
          <img
            src={'https://ipfs.ubitex.io/ipfs/QmiBY6rs1R31LwHUXplAx5bBjnz5GgaCv2fMLfpKHZmA'}
            alt="Leveraged Tokens Ads"
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
