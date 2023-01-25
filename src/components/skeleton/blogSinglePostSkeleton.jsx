import React from "react";

const BlogSinglePostSkeleton = () => {
  return (
    <>
      <div className="sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mx-auto rtl-grid leading-7 p-10">

        <div className="flex space-x-3 space-x-reverse mt-8 justify-start w-2/12">
          <div className="loading-animation rounded-md px-10 py-4"></div>
          <div className="loading-animation rounded-md px-10 py-4"></div>
        </div>

        <div className="mt-5">
          <div className="loading-animation rounded-md px-10 py-[280px]"></div>
        </div>

        <div className="w-4/12 mt-10">
          <div className="loading-animation rounded-md px-10 py-4"></div>
        </div>

        <div className="mt-10 w-7/12">
          <div className="loading-animation rounded-md px-10 py-6"></div>
        </div>

        <div className="mt-3 w-5/12 flex space-x-3 space-x-reverse justify-start">
          <div className="loading-animation rounded-md px-10 py-5"></div>
          <div className="loading-animation rounded-md px-10 py-5"></div>
          <div className="loading-animation rounded-md px-10 py-5"></div>
          <div className="loading-animation rounded-md px-10 py-5"></div>
        </div>

        <div className="mt-10 flex flex-col space-y-4">
          <div className="loading-animation rounded-md px-10 py-3"></div>
          <div className="loading-animation rounded-md px-10 py-3"></div>
          <div className="loading-animation rounded-md px-10 py-3"></div>
        </div>
      </div>
    </>
  );
};

export default BlogSinglePostSkeleton;
