import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinName from "./components/coinname";
import CoinPrice from "./components/coinprice";
import CoinContract from "./components/coincontract";
import ChartInfo from "./components/chart";
import SildeBar from "./components/sildebar";
import Favorite from "./components/favorite";

const Pairs = () => {
  const [data, setdata] = useState(null);
  const { slug } = useParams();
  const refresh = () => {
    fetch(`https://bapi.ubitex.io/v1.0/cryptoInfo/${slug}`)
      .then((response) => response.json())
      .then((data) => setdata(data));
  };

  useEffect(() => {
    refresh();

    const interval = setInterval(() => {
      refresh();
    }, 30000);

    return () => clearInterval(interval);
  }, [slug]);

  return (
    <>
      {data ? (
        <div className="flex flex-col gap-10 rtl-grid sm:w-full md:w-full lg:w-full xl:w-5/6 2xl:w-5/6 mx-auto mt-10">
          <div className="flex space-x-32 space-x-reverse">
            <div className="w-2/5">
              <CoinName data={data} />
            </div>
            <div className="w-3/5">
              <CoinPrice data={data} />
            </div>
          </div>
          <CoinContract data={data} />
          <h2 className="text-xl my-10">قیمت</h2>
          <div className="flex gap-20 rtl-grid">
            <div className="w-4/5">
              <ChartInfo data={data} />
            </div>
            <div className="w-1/5">
              <SildeBar data={data} />
              <Favorite />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pairs;
