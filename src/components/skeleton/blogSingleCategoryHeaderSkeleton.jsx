const BlogSingleCategoryHeaderSkeleton = () => {
  return (
    <>
      <div className="mt-10 mx-auto w-4/5">
        <div className="relative w-full sm:h-[200px] md:h-[400px] ">
          <div className="loading-animation rounded-3xl px-10 md:py-[200px] sm:py-[100px]"></div>
        </div>

        <div className="relative">
          <div className="absolute w-[144px] h-[144px] -mt-20 mx-auto inset-x-0 rounded-full bg-gray-800">
            <div className="loading-animation rounded-full p-[36px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleCategoryHeaderSkeleton;
