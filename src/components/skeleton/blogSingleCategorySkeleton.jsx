import React from "react";

const PostCardSkeleton = () => {
  const Data = () => {
    const test = [];

    for (let index = 0; index < 5; index++) {
      test.push(
        <div className=" grow h-full relative border border-gray-100 dark:bg-[#051A36] dark:border-[#092c59] dark:hover:bg-[#061f41] pb-3 rounded-xl hover:shadow-xl transition-all dark:hover:shadow-2xl rtl-grid">
          <div className="relative">
            <div className="loading-animation rounded-md px-10 py-[95px]"></div>
          </div>

          <div className="flex flex-col px-4">
            <div className="my-8 mb-10 flex flex-col space-y-3">
              <div className="loading-animation rounded-md px-10 py-3"></div>
              <div className="w-2/3">
                <div className="loading-animation rounded-md px-10 py-3"></div>
              </div>
            </div>

            <div className="mt-3 w-5/12 flex space-x-3 space-x-reverse justify-start">
              <div className="loading-animation rounded-md px-10 py-4"></div>
              <div className="loading-animation rounded-md px-10 py-4"></div>
              <div className="loading-animation rounded-md px-10 py-4"></div>
            </div>
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

export default PostCardSkeleton;
