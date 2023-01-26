import React from "react";
import Header from "../../components/header";
import headerImage from "../../assets/img/guide-header.jpg";
import VideoGuideHomePage from "./components/videoGuideHomePage";
import QuickAccessHomePage from "./components/quikAccessHomePage";
import ContactHomePage from "./components/contactHomePage";
import AcardeonSlime from "./components/faqHomePage";

const HelpCenter = () => {
  return (
    <>
      <Header
        title={"مرکز پشتیبانی و راهنمای استفاده | صرافی ارزدیجیتال یوبیتکس"}
      />
      {/* Header */}
      <div className="my-10 mx-auto w-4/5">
        <div className="relative w-full sm:h-[200px] md:h-[400px]">
          <img
            className="loading-animation object-cover rounded-3xl "
            src={headerImage}
            alt={""}
          />
          <div className="absolute flex space-y-5 flex-col justify-center rounded-3xl items-center top-0 left-0 bg-black dark:bg-[#04162D] bg-opacity-30 dark:bg-opacity-50  text-white w-full h-full">
            <h2 className="text-3xl font-semibold">مرکز پشتیبانی یوبیتکس</h2>
          </div>
        </div>
      </div>
      {/* Contents */}
      <div className="px-10 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-5/6 space-y-10">
        <QuickAccessHomePage />
        <VideoGuideHomePage />
        <AcardeonSlime />
        <ContactHomePage />
      </div>
    </>
  );
};

export default HelpCenter;
