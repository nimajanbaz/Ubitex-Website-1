import React from "react";
import headerImage from "../assets/img/header-phone.png";
import Header from "../components/header";

const Features = () => {
  return (
    <>
      <Header title={"امکانات"} />
      <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="flex flex-col justify-center items-center text-center my-10">
          <h1 className="text-3xl text-[#f39200] font-semibold">
            اپلیکیشن موبایل یوبیتکس
          </h1>
          <p className="mt-3">
            ترید آسان، همه جا و همه وقت از طریق اپلیکیشن موبایل یوبیتکس
          </p>
          <img src={headerImage} alt="Header" className="mt-5" />
          <div className="border-b dark:border-b-[#072349] dark:shadow-[0px_5px_20px_0px_rgba(10,27,600,1)] shadow-[0_15px_40px_0px_rgba(0,0,0,0.1)] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Features;
