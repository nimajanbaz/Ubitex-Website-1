import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinName from "./components/coinname";
import CoinPrice from "./components/coinprice";
import CopyBtnDemo from "../../components/copytoclipboard";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Pairs = () => {
  const [data, setdata] = useState();
  const [reload, setreload] = useState(0);
  const { slug } = useParams();
  const refresh = () => {
    console.log("test");
    fetch(`https://bapi.ubitex.io/v1.0/cryptoInfo/${slug}`)
      .then((response) => response.json())
      .then((data) => setdata(data));
  };

  setInterval(() => {
    setreload(reload + 1);
  },60000);

  useEffect(() => {
    refresh();
  }, [slug, reload]);

  return (
    <>
      {data ? (
        <div className="flex flex-col space-y-10 rtl-grid sm:w-full md:w-full lg:w-full xl:w-5/6 2xl:w-5/6 mx-auto">
          <div className="flex space-x-32 space-x-reverse">
            <div className="w-2/5">
              <CoinName data={data} />
            </div>
            <div className="w-3/5">
              <CoinPrice data={data} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div>کانترکت‌ها</div>
              <div className="flex flex-col">
                {data.contractsList.map((item) => {
                  return (
                    <>
                      <div className="flex item-center text-xs mt-3 space-x-4">
                        <img
                          className="w-[20px] h-[20px] ml-2 "
                          src={item.chainLogo}
                          title={item.chainName}
                          alt={item.chainName}
                        />
                        <span className="text-gray-300 dark:text-gray-600 items-center flex">
                          {item.chainName}
                        </span>
                        <a
                      href={item.contractAddress}
                      rel="noreferrer"
                      target="_blank"
                      className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md mx-2 hover:bg-[#f39200] hover:bg-opacity-10 hover:text-[#f39200]"
                    >
                      {item.chainName}
                    </a>
                        <span className=" items-center flex">
                          {item.contractAddress.substring(0, 5) +
                            "..." +
                            item.contractAddress.substring(20, 30)}
                        </span>
                        <div>
                          <CopyBtnDemo item={item.contractAddress} />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <div>اکسپلوررها</div>
              <div className="flex text-xs">
                {data.explorers.map((item) => {
                  const { hostname } = new URL(item);
                  return (
                    <a
                      href={item}
                      rel="noreferrer"
                      target="_blank"
                      className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md mx-2 hover:bg-[#f39200] hover:bg-opacity-10 hover:text-[#f39200]"
                    >
                      {hostname}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div>
              <TradingViewWidget
                symbol={data.symbol + "usdt"}
                theme={Themes.DARK}
                locale="IR"
              />
            </div>
            <div className="mt-10"></div>
            <div>{data.description}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pairs;
