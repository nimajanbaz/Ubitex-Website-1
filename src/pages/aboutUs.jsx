import React from "react";
import { aboutus_data } from "../data/aboutus";
import Header from "../components/header";

const AboutUs = () => {
  return (
    <>
      <Header title={"درباره ما | صرافی ارزدیجیتال یوبیتکس"} />

      <div className="px-4 sm:px-6 text-right max-w-[1200px] mx-auto my-20">
        <div className="p-20 rounded-xl text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-[#051a36] ">
          <h2 className="text-[#f39200] text-2xl font-semibold">
            {aboutus_data.intro.title}
          </h2>
          <p className="mt-5">{aboutus_data.intro.text}</p>
          <br />
          <p>{aboutus_data.texts.text1}</p>
          <br />
          <p>{aboutus_data.texts.text2}</p>
          <br />
          <h2 className="text-[#f39200] text-2xl font-semibold">
            {aboutus_data.values.title}
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-5 transition-all">
            {aboutus_data.values.items.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" transition-all cursor-pointer dark:hover:bg-[#051b38] bg-gray-100 dark:bg-[#04162d] p-12 rounded-xl flex flex-col justify-center text-center space-y-3">
                  <span className="text-[#f39200] text-4xl p-3 rounded-lg bg-[#f39200] bg-opacity-10 flex justify-center mx-auto">
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
