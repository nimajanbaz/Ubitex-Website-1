import React from "react";
import Header from "../../components/header";
import Application from "./components/application";
import Feature from "./components/feathers";
import CoinsTable from "./components/coinsTable";
import HeaderBoxes from "./components/headerBoxes";
import HeaderInfo from "./components/headerInfo";
import HeaderImages from "./components/headerImages";
import BlogPostsHomePageSlider from "./components/blogPostsSlider";
import LastBlogPosts from "./components/lastBlogPost";
import LeveragedTokensAds from "../../components/leveragedTokensAds";

export default function Home() {
  return (
    <>
      <Header
        title={
          "یوبیتکس | معتبر ترین صرافی ارزدیجتال ایرانی | خرید و فروش ارز دیجیتال"
        }
      />
      <div className="mx-auto">
        <div className="max-w-[1750px] flex justify-center items-center mx-auto">
          <HeaderImages />
          <HeaderInfo />
        </div>
        <div className="px-10 space-y-20 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-5/6 ">
          <HeaderBoxes />
          <BlogPostsHomePageSlider />
          <CoinsTable />
          <Feature />
          <LeveragedTokensAds />
          <Application />
          <LastBlogPosts />
        </div>
      </div>
    </>
  );
}
