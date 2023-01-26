import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../../../../components/header";
import BlogHeaderSliderIntroSkeleton from "../../../../components/skeleton/BlogHeaderSliderIntroSkeleton";
import { GET_BLOG_HEADER_DATA_URL } from "../../../../config/api.config";

const BlogHeaderSliderIntro = () => {
  const [data, setDate] = useState(null);

  useEffect(() => {
    fetch(GET_BLOG_HEADER_DATA_URL)
      .then((response) => response.json())
      .then((data) => setDate(data));
  }, []);

  return (
    <>
      {data ? (
        <div className="rtl-grid">
          <Header title={data.title} />

          <div className="flex flex-col space-y-10 mt-20">
            {/* <div className="w-1/2">
              <img
                className="w-full h-full"
                src="https://bapi.ubitex.io/ipfs/167378854"
                alt=""
              />
            </div> */}
            <h1 className="text-5xl font-bold">{data.title}</h1>
            <span className="md:w-3/4">{data.subtitle}</span>
          </div>
          <div className="mt-5">
            <ul className="flex mx-auto space-x-3 space-x-reverse ">
              {data.favoriteTags.map((item, index) => {
                return (
                  <Link to={`/blog/tags/${item}`} key={index}>
                    <li className="mt-3 px-4 py-2 text-center text-[#f39200] rounded-md bg-[#f39200] bg-opacity-0 hover:bg-opacity-20 cursor-pointer transition-all">
                      #{item.replace(/ /g, "_")}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="mt-10">
            <Link to={"/blog/search"}>
              <button className="px-6 py-3 rounded-md bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 transition-all text-[#f39200] flex space-x-2 items-center justify-center flex-row-reverse sm:mt-5 max-sm:mt-5">
                <span>جستجو در {data.title}</span>
                <span>
                  <BiSearch />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <BlogHeaderSliderIntroSkeleton />
      )}
    </>
  );
};

export default BlogHeaderSliderIntro;
