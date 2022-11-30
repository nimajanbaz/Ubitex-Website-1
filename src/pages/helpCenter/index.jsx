import React from "react";
import headerImage from "../../assets/img/guide-header.jpg";
import VideoGuideHomePage from './components/videoGuideHomePage'
import QuikAccessHomePage from "./components/quikAccessHomePage";

const HelpCenter = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-10 w-full relative">
        <div className="w-full h-[350px] absolute top-0 dark:bg-[#04162d] bg-gray-800 dark:bg-opacity-80 bg-opacity-60 z-30 flex justify-center items-center text-center">
          <h1 className="text-3xl font-semibold text-white dark:text-white">
            مرکز پشتیبانی یوبیتکس
          </h1>
        </div>
        <img
          src={headerImage}
          alt="Header"
          className="object-cover w-full h-[350px]"
        />
      </div>
      <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto">
        <QuikAccessHomePage />
        <VideoGuideHomePage />
      </div>
    </>
  );
};

export default HelpCenter;