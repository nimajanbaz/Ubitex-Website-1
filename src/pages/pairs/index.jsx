import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinName from "./components/coinname";
import CoinPrice from "./components/coinprice";
import CopyBtnDemo from "../../components/copytoclipboard";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

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
  }, 60 * 1000);

  useEffect(() => {
    refresh();
  }, [slug, reload]);

  return (
    <>
      {data ? (
        <div className="flex flex-col rtl-grid sm:w-full md:w-full lg:w-full xl:w-11/12 2xl:w-11/12">
          <div className="flex space-x-20 space-x-reverse">
            <div className="w-2/6">
              <CoinName data={data} />
            </div>
            <div className="w-4/6">
              <CoinPrice data={data} />
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div>
              <div>کانترکت‌ها</div>
              <div className="flex flex-col">
                {data.contractsList.map((item) => {
                  return (
                    <>
                      <div className="flex item-center text-xs mt-3 space-x-4">
                        <img
                          className="w-[20px] h-[20px] ml-4 "
                          src={item.chainLogo}
                          title={item.chainName}
                        />
                        {/* <div className="text-gray-300 dark:text-gray-600">{item.chainName}</div> */}
                        <div>
                          {item.contractAddress.substring(0, 30) + "..."}
                        </div>
                        <div>
                          <CopyBtnDemo item={item} />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <div>اکسپلوررها</div>
              <div className="grid grid-col">{data.explorers}</div>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div><TradingViewWidget
    symbol={data.symbol+"usdt"}
    theme={Themes.DARK}
    locale="IR"
   
  /></div>
            <div>{data.description}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pairs;
