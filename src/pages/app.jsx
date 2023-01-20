import React from "react";
import headerImage from "../assets/img/header-phone.png";
import { footer_data } from "../data";
import Header from "../components/header";

const Application = () => {
  return (
    <>
      <Header title={'اپلیکیشن | صرافی ارزدیجیتال یوبیتکس'}/>
      <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="flex flex-col justify-center items-center text-center my-10">
          <h1 className="text-3xl text-[#f39200] font-semibold">
            اپلیکیشن موبایل یوبیتکس
          </h1>
          <p className="mt-3">
            ترید آسان، همه جا و همه وقت از طریق اپلیکیشن موبایل یوبیتکس
          </p>
          <img src={headerImage} alt="Header" className="mt-5 w-3/5" />
          <div className="border-b dark:border-b-[#072349] dark:shadow-[0px_5px_20px_0px_rgba(10,27,600,1)] shadow-[0_15px_40px_0px_rgba(0,0,0,0.1)] w-full"></div>
        </div>

        {/* links */}
        <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 gap-10 md:gap-5 sm:gap-5 max-w-[1300px] mx-auto items-center my-6">
          {footer_data.download_app.map((img) => {
            return (
              <a href={img.href}>
                <img src={img.img} alt={img.id} key={img.id} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Application;
