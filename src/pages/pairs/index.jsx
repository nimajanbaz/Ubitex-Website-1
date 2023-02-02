import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinName from "./components/coinname";
import CoinPrice from "./components/coinprice";

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
          <div className="grid grid-cols-3 bg-gradient-to-b from-orange-100 to-orange-300  ">
          <div className="flex flex-col">
               
               title={"اکسپلوررها"}
               items={data.explorers}

              </div>
          </div>
          <div>555</div>
        </div>
      ) : null}
    </>
  );
};

export default Pairs;
