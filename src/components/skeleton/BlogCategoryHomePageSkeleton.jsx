import React from "react";

const BlogCategoryHomePageSkeleton = () => {
  const Data = () => {
    const test = [];

    for (let index = 0; index < 5; index++) {
      test.push(
        <div className="border bg-white border-gray-100 dark:bg-[#061f41] dark:border-[#092c59] dark:hover:bg-[#07254e] p-7 rounded-xl hover:shadow-xl transition-all dark:hover:shadow-2xl w-full">
          <div className="relative">
            <div className="mx-auto flex w-20 h-20">
              <div className="loading-animation rounded-full"></div>
            </div>
          </div>

          <div className="mt-5">
            <div className="loading-animation rounded-lg px-10 py-4"></div>
          </div>
        </div>
      );
    }
    return test;
  };

  return (
    <>
      <Data />
    </>
  );
};

export default BlogCategoryHomePageSkeleton;
