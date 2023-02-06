import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinName from "./components/coinname";
import CoinPrice from "./components/coinprice";
import CopyBtnDemo from "../../components/copytoclipboard";

import CoinContract from "./components/coincontract";
import ChartInfo from "./components/chart";


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
        <div className="flex flex-col gap-10 rtl-grid sm:w-full md:w-full lg:w-full xl:w-5/6 2xl:w-5/6 mx-auto">
          <div className="flex space-x-32 space-x-reverse">
            <div className="w-2/5">
              <CoinName data={data} />
            </div>
            <div className="w-3/5">
              <CoinPrice data={data} />
            </div>
          </div>
<CoinContract data={data} />
          <div>
            <ChartInfo 
            data={data}/>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pairs;
