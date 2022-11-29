import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import headerImage from "../assets/img/guide-header.jpg";
import { Link } from "react-router-dom";
import { guide_data } from "../data";

const Guide = () => {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="mb-10 w-full relative">
        <div className="w-full h-[350px] absolute top-0 dark:bg-[#04162d] bg-gray-800 dark:bg-opacity-80 bg-opacity-60 z-30 flex justify-center items-center text-center">
            <h1 className="text-3xl font-semibold text-white dark:text-white">راهنمای استفاده</h1>
        </div>
        <img src={headerImage} alt="Header Image" className="object-cover w-full h-[350px]" />
      </div>
      <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto">
        <div className="grid grid-cols-4 gap-5 md:grid-cols-3 mb-10">
            {guide_data.map(guide => {
                return (
                    <div className="bg-gray-200 dark:bg-[#051a36] p-3 rounded-md flex flex-col space-y-4">
                        <img src={guide.img} alt="" className="object-cover w-full  rounded-md"/>
                        <h3 className="text-xl font-semibold px-3">{guide.title}</h3>
                        <p className="px-3 text-sm">{guide.text}</p>
                        <button className="px-4 py-2 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200]">اطلاعات بیشتر</button>
                    </div>
                )
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guide;
