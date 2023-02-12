const SildeBar = ({data}) => {
    return ( <>
    <div>
            <div className="flex justify-between mb-10 w-full gap-3">
              <div className="flex flex-col items-center justify-center space-y-2 w-full">
                <div className="text-gray-400 dark:text-gray-500 text-xs">
                  خرید (تومان)
                </div>
                <div className="text-emerald-600 bg-emerald-600 bg-opacity-10 rounded-md flex justify-center items-center w-full py-2">
                  {data.buyPriceTMN.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 w-full">
                <div className="text-gray-400 dark:text-gray-500 text-xs">
                  فروش (تومان)
                </div>
                <div className="text-red-600 bg-red-600 bg-opacity-10 rounded-md flex justify-center items-center py-2 w-full">
                  {data.sellPriceTMN.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-10">
              تغییرات قیمتی {data.nameFa}
            </div>
            <div className="flex flex-col gap-8 text-gray-400">
              <div className="flex justify-between w-full">
                <span className="text-xs">24 ساعته </span>
                <span
                  className={
                    data.changePercentageCG.priceChangePercentage24h > 0
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                >
                  {data.changePercentageCG.priceChangePercentage24h}%{" "}
                </span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-sm">7 روز</span>
                <span
                  className={
                    data.changePercentageCG.priceChangePercentage7d > 0
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                >
                  {data.changePercentageCG.priceChangePercentage7d}%
                </span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-sm">14 روز</span>
                <span
                  className={
                    data.changePercentageCG.priceChangePercentage14d > 0
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                >
                  {data.changePercentageCG.priceChangePercentage14d}%
                </span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-sm">30 روز</span>
                <span
                  className={
                    data.changePercentageCG.priceChangePercentage30d > 0
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                >
                  {data.changePercentageCG.priceChangePercentage30d}%
                </span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-sm">60 روز</span>
                <span
                  className={
                    data.changePercentageCG.priceChangePercentage60d > 0
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                >
                  {data.changePercentageCG.priceChangePercentage60d}%
                </span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-sm">200 روز</span>
                <span
                  className={
                    data.changePercentageCG.priceChangePercentage200d > 0
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                >
                  {data.changePercentageCG.priceChangePercentage200d}%
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between w-full mt-10 p-2 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <span className="text-sm">سقف قیمتی</span>
                <span>{data.ath}</span>
              </div>
            </div>
          </div>
    </> );
}
 
export default SildeBar;