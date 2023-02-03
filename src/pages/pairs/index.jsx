import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinMid from "./components/coinmid";
import CoinName from "./components/coinname";
import CoinPrice from "./components/coinprice";
import CopyBtnDemo from "../../components/copytoclipboard";

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
        <div className="flex flex-col rtl-grid w-5/6">
          <div className="flex space-x-10 space-x-reverse">
            <div className="w-2/5">
              <CoinName data={data} />
            </div>
            <div className="w-3/5">
              <CoinPrice data={data} />
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div>
              <div>کانترکت‌ها</div>
              <div className="flex flex-col">
                {data.contractsList.map((item) => {
                  return (
                    <>
                      <div className="flex space-x-3 space-y-4 items-center text-xs">
                        <img
                          className="w-[20px] h-[20px] mt-6 ml-3"
                          src={item.chainLogo}
                        />
                        <div className="">{item.chainName}</div>
                        <div>
                          {item.contractAddress.substring(0, 10) + "..."}
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
              <div>
                اکسپلوررها
              </div>
              <div className="">
                {data.explorers}
              </div>
            </div>
          </div>
          <div>555</div>
        </div>
      ) : null}
    </>
  );
};

export default Pairs;
