import React, { useEffect, useState } from "react";
import axios from "axios";

const Categoris = ({ onSelect }) => {
  const [categoris, setCategoris] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      await axios
        .get("https://api.ubitex.io/api/category/getall")
        .then((res) => {
          setCategoris(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getData();
  }, []);

  return (
    <div classNameName="">
      <ul className="flex my-5 space-x-3 space-x-reverse">
        {!loading ? (
          <>
            <li onChange={(e) => onSelect(e.target.value)}>
              <input
                type="radio"
                name="test"
                value='all'
                id="all"
                className="hidden peer"
              />
              <label
               for={'all'}
                className="inline-flex justify-between items-center px-3 py-1 w-full text-gray-500 bg-gray-100 rounded-md cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-[#f39200] peer-checked:text-[#f39200] dark:peer-checked:bg-[#f39200] dark:peer-checked:bg-opacity-10 peer-checked:bg-[#f39200] peer-checked:bg-opacity-10 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#062349] dark:hover:bg-[#092f61]">
                <div className="block">
                  <span className="w-full text-sm">{'همه موارد'}</span>
                </div>
              </label>
            </li>
            {categoris.map((item) => {
              return (
                <li key={item.id} onChange={(e) => onSelect(e.target.value)}>
                  <input
                    type="radio"
                    id={item.id}
                    name={"test"}
                    value={item.symbol}
                    className="hidden peer"
                  />
                  <label
                    for={item.id}
                    className="inline-flex justify-between items-center px-3 py-1 w-full text-gray-500 bg-gray-100 rounded-md cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-[#f39200] peer-checked:text-[#f39200] dark:peer-checked:bg-[#f39200] dark:peer-checked:bg-opacity-10 peer-checked:bg-[#f39200] peer-checked:bg-opacity-10 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#062349] dark:hover:bg-[#092f61]">
                    <div className="block">
                      <span className="w-full text-sm">{item.symbol}</span>
                    </div>
                  </label>
                </li>
              );
            })}
          </>
        ) : (
          <div className="my-5 flex justify-center items-center rtl-grid">
            <p>...درحال بارگزاری</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Categoris;
