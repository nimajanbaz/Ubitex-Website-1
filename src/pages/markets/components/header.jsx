import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { LongBadge, ShortBadge } from "../../../components/badge";
import { GiFire } from "react-icons/gi";

const MarketsHeader = ({ loser, gainer, recentlyUpdated }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 rtl-grid">
        <div className="flex flex-col space-y-5 bg-gray-50 dark:bg-[#051a36] p-8 rounded-2xl mb-10">
          <h3 className="text-[#f39200] text-lg">بیشترین سود</h3>
          {gainer.slice(0, 3).map((item) => {
            return (
              <div className="flex justify-between">
                <div className="flex cursor-pointer space-x-2 space-x-reverse">
                  <div className="w-10">
                    <img src={item.icon} alt={item.nameFa} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span>{item.symbol.replace("/USDT", "")}</span>
                      {item.symbol.replace("/USDT", "").endsWith("3L") ? (
                        <LongBadge />
                      ) : item.symbol.replace("/USDT", "").endsWith("3S") ? (
                        <ShortBadge />
                      ) : null}
                    </div>
                    <span className="text-sm">{item.nameFa}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-emerald-600"> %{item.change}</span>
                  <span className="text-emerald-600 text-lg p-2 bg-emerald-600 bg-opacity-10 rounded-md">
                    <HiArrowTrendingUp />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col space-y-5 bg-gray-50 dark:bg-[#051a36] p-8 rounded-2xl mb-10">
          <h3 className="text-[#f39200] text-lg">بیشترین ضرر</h3>
          {loser.slice(0, 3).map((item) => {
            return (
              <div className="flex justify-between">
                <div className="flex cursor-pointer space-x-2 space-x-reverse">
                  <div className="w-10">
                    <img src={item.icon} alt={item.nameFa} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span>{item.symbol.replace("/USDT", "")}</span>
                      {item.symbol.replace("/USDT", "").endsWith("3L") ? (
                        <LongBadge />
                      ) : item.symbol.replace("/USDT", "").endsWith("3S") ? (
                        <ShortBadge />
                      ) : null}
                    </div>{" "}
                    <span className="text-sm">{item.nameFa}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-red-600">%{item.change}</span>
                  <span className="text-red-600 text-lg p-2 bg-red-600 bg-opacity-10 rounded-md">
                    <HiArrowTrendingDown />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col space-y-5 bg-gray-50 dark:bg-[#051a36] p-8 rounded-2xl mb-10">
          <h3 className="text-[#f39200] text-lg">منتخب</h3>
          {recentlyUpdated.slice(0, 3).map((item) => {
            return (
              <div className="flex justify-between">
                <div className="flex cursor-pointer space-x-2 space-x-reverse">
                  <div className="w-10">
                    <img src={item.logo} alt={item.coin.nameFa} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span>{item.coin.symbol}</span>
                      <span className="text-orange-500">
                        <GiFire />
                      </span>
                      {item.coin.symbol.endsWith("3L") ? (
                        <LongBadge />
                      ) : item.coin.symbol.endsWith("3S") ? (
                        <ShortBadge />
                      ) : null}
                    </div>{" "}
                    <span className="text-sm">{item.coin.nameFa}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <span
                    className={
                      item.changePercentage > 0
                        ? "text-emerald-600"
                        : "text-red-600"
                    }>
                    %{item.changePercentage}
                  </span>
                  <span
                    className={`bg-opacity-10 rounded-md text-lg p-2 ${
                      item.changePercentage > 0
                        ? "text-emerald-600 bg-emerald-600"
                        : "text-red-600 bg-red-600"
                    }`}>
                    {item.changePercentage > 0 ? (
                      <HiArrowTrendingUp />
                    ) : (
                      <HiArrowTrendingDown />
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MarketsHeader;
