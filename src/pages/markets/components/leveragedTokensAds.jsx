import { Link } from "react-router-dom";
import LeveragedTokenSymbol2 from "../../../assets/img/trusted-section.webp";

const LeveragedTokensAds = () => {
  return (
    <>
      <div className="p-10 rounded-2xl bg-gray-50 dark:bg-[#051a36] rtl-grid flex gap-20 items-center mb-10">
        <div>
          <img
            src={LeveragedTokenSymbol2}
            alt="Leveraged Tokens Ads"
            className="h-[150px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[#f39200] text-2xl font-semibold">
            توکن های لوریج دار یوبیتکس
          </h2>
          <span>توکن‌‌های لوریج‌دار یک محصول مشتقه است که ریسک لیکوئید شدن ندارد. این توکن‌ها به شما امکان می‌دهند روی دارایی پایه خود اهرم اعمال کنید</span>
          <Link to="/leveraged-tokens">
            <button className="text-[#f39200] cursor-pointer transition-all px-8 py-3 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
              اطلاعات بیشتر
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeveragedTokensAds;
