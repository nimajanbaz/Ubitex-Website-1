import React from "react";
import BlogHeaderSliderCard from "./components/homePageHeader/blogHeaderSliderCard";
import BlogHeaderSliderIntro from "./components/homePageHeader/blogHeaderSliderIntro";
import CategoryHomePage from "./components/categoryHomePage";
import LastPostsHomePage from "./components/lastPostsHomePage";
import LeveragedTokensAds from "../../components/leveragedTokensAds";

const BlogHomePage = () => {
  return (
    <>
      <div className="px-10 space-y-20 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
        <div className=" flex w-full max-md:flex-col-reverse">
          <div className="md:w-7/12 max-sm:hidden">
            <BlogHeaderSliderCard />
          </div>
          <div className="md:w-5/12 sm:w-full">
            <BlogHeaderSliderIntro />
          </div>
        </div>
        <CategoryHomePage />
        <LastPostsHomePage />
        <LeveragedTokensAds />
      </div>
    </>
  );
};

export default BlogHomePage;
