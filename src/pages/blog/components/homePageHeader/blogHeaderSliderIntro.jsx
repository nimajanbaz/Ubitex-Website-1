import React, { useState, useEffect } from "react";

const BlogHeaderSliderIntro = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch("https://bapi.ubitex.io/v1.0/posts")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <>
      {data ? (
        <div className="rtl-grid">
          <div className="flex flex-col space-y-10 mt-10">
            <div className="w-1/2">
              <img
                className="w-full h-full"
                src="https://bapi.ubitex.io/ipfs/167378854"
                alt=""
              />
            </div>
            <h1 className="text-5xl  font-bold">یوبیتکس بلاگ</h1>
            <span>متن تست</span>
          </div>
          <div className="mt-5">
            {/* <ul className="flex mx-auto space-x-3 space-x-reverse ">
              {data.tags.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="mt-3 px-4 py-2 text-center text-[#f39200] rounded-md hover:bg-[#f39200] hover:bg-opacity-20 cursor-pointer transition-all">
                    {item}
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BlogHeaderSliderIntro;
