import React from "react";
import { Helmet } from "react-helmet";

const Header = ({ title, description }) => {
   const basedescription = "صرافی ارزدیجیتال ایرانی یوبیتکس معتبرترین صرافی آنلاین - خرید و فروش انواع ارز دیجیتال با کمترین زمان و کارمزد"
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description || basedescription} />
      </Helmet>
    </>
  );
};
export default Header;
