import React from "react";
import { Helmet } from "react-helmet";

const Header = ({ title, description }) => {
   const basedescription = "صرافی ارز دیجیتال یوبیتکس معتبرترین و بهترین صرافی آنلاین ارز دیجیتال ایرانی با ارائه خدمات حرفه ای در خرید و فروش انواع ارزهای دیجیتال | ☎️91001716"
  return (
    <>
      <Helmet>
        <title>{title} | صرافی ارزدیجیتال یوبیتکس</title>
        <meta name="description" content={description || basedescription} />
      </Helmet>
    </>
  );
};
export default Header;
