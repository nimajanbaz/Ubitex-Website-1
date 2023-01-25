import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_BLOG_CATEGORIES_URL } from "../../../../../config/api.config";

const Categories = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      await axios
        .get(GET_BLOG_CATEGORIES_URL)
        .then((res) => {
          setCategories(res.data);
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
    <div>
      <ul className="flex my-5 space-x-3 space-x-reverse">
        {!loading ? (
          <>
            <li onChange={(e) => onSelect(e.target.value)}>
              <input
                type="radio"
                name="test2"
                value='all'
                id="test2"
                className="hidden peer"
              />
              <label
               for={'test2'}
                className="inline-flex justify-between items-center px-3 py-1 w-full text-gray-500 bg-gray-100 rounded-md cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-[#f39200] peer-checked:text-[#f39200] dark:peer-checked:bg-[#f39200] dark:peer-checked:bg-opacity-10 peer-checked:bg-[#f39200] peer-checked:bg-opacity-10 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#062349] dark:hover:bg-[#092f61]">
                <div className="block">
                  <span className="w-full text-sm">{'همه موارد'}</span>
                </div>
              </label>
            </li>
            {categories.map((item) => {
              return (
                <li key={item._id} onChange={(e) => onSelect(e.target.value)}>
                  <input
                    type="radio"
                    id={item._id}
                    name={"test2"}
                    value={item.label}
                    className="hidden peer"
                  />
                  <label
                    for={item._id}
                    className="inline-flex justify-between items-center px-3 py-1 w-full text-gray-500 bg-gray-100 rounded-md cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-[#f39200] peer-checked:text-[#f39200] dark:peer-checked:bg-[#f39200] dark:peer-checked:bg-opacity-10 peer-checked:bg-[#f39200] peer-checked:bg-opacity-10 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#062349] dark:hover:bg-[#092f61]">
                    <div className="block">
                      <span className="w-full text-sm">{item.label}</span>
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

export default Categories;
