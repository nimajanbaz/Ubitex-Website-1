import React from "react";

const BlogHeaderSliderIntroSkeleton = () => {
  return (
    <>
      <div className="flex flex-col rtl-grid space-y-10 mt-16">

        <div className="w-7/12">
          <div className="loading-animation rounded-lg px-10 py-7"></div>
        </div>

        <div className="w-3/12">
          <div className="loading-animation rounded-lg px-10 py-5"></div>
        </div>

        <div className="w-5/12 flex items-center gap-3">
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
        </div>

        <div className="w-1/2">
          <div className="loading-animation rounded-xl px-10 py-7"></div>
        </div>
      </div>
    </>
  );
};

export default BlogHeaderSliderIntroSkeleton;
