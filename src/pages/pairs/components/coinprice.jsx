import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import React from "react";
import SocialIcons from "../../../components/socialIcons";

const CoinName = ({ data }) => {
  return (
    <>
      <div className="my-10 rtl-grid">
        <div className="flex flex-col">
          <div className="text-xs">قیمت</div>
          <div className="flex space-x-2 space-x-reverse items-end">
            <div className="text-5xl">
              {data.lastTradeUSDT.toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </div>
            <div className="text-2xl">تتر</div>
            <div className="px-8 ">
              <div
                className={
                  data.changePercentage > 0
                    ? "text-emerald-600 bg-emerald-600 bg-opacity-10 rounded-md"
                    : "text-red-600 bg-red-600 bg-opacity-10 rounded-md"
                }
              >
                <div className="flex space-x-3 space-x-reverse px-6 py-2 items-center">
                  <div>%{data.changePercentage}</div>
                  <div>
                    {data.changePercentage > 0 ? (
                      <HiArrowTrendingUp className="text-lg" />
                    ) : (
                      <HiArrowTrendingDown className="text-lg" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 text-xs justify-between pt-10 divide-x divide-x-reverse divide-gray-600">
          <div>
            <div className="text-gray-500">حجم معاملات 24 ساعته</div>
            <div>
              {data.marketCapCahnge24h.toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
          <div className="pr-6">
            <div className="text-gray-500">مارکت کپ</div>
            <div>
              {data.marketCap.toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
          <div className="pr-6">
            <div className="text-gray-500">سکه‌های در گردش</div>
            <div>
              {data.circulatingSupply.toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
          <div className="pr-6">
            <div className="text-gray-500">کل سکه‌ها</div>
            <div>
              {data.totalSupply.toLocaleString(undefined, {
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>
        <div className="flex space-x-3 space-x-reverse mt-6 item-center">
          <div className="pt-1">
            <a
              href={data.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-4 py-2 text-xs border border-gray-100 dark:border-gray-800 bg-[#f39200] bg-opacity-0 hover:bg-opacity-10 hover:border-none cursor-pointer transition-all hover:text-[#f39200]"
            >
              وب سایت
            </a>
          </div>
          <div className="pt-1">
            <a
              href={data.whitePaper}
              rel="noreferrer"
              target="_blank"
              className="rounded-md px-4 py-2 text-xs border border-gray-100 dark:border-gray-800 bg-[#f39200] bg-opacity-0 hover:bg-opacity-10 hover:border-none cursor-pointer transition-all hover:text-[#f39200]"
            >
              وایت پیپر
            </a>
          </div>
          <div>
            <div className="flex">
              {data.socialMedia.map((item) => {
                return (
                  <span>
                    <SocialIcons item={item} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinName;
