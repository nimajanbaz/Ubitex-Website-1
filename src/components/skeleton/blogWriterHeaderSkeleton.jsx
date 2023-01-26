const BlogWriterHeaderSkeleton = () => {
  return (
    <>
      <div className="mt-10 mx-auto w-4/5">
        <div className="relative w-full sm:h-[200px] md:h-[400px] ">
          <div className="loading-animation rounded-3xl px-10 md:py-[200px] sm:py-[100px]"></div>
        </div>

        <div className="relative rtl-grid mx-auto p-14 -mt-32 bg-white dark:bg-[#051A36] border border-gray-100 dark:border-[#092c59] rounded-3xl w-4/5 shadow-2xl flex flex-col justify-center items-center">
          <div className="w-full flex md:flex-row flex-col items-center justify-center md:justify-start gap-8">
            <div className="w-[182px] h-[150px]">
              <div className="loading-animation rounded-full w-full"></div>
            </div>

            <div className="flex flex-col justify-center md:justify-start items-center md:items-start space-y-6 w-full">
              <div className="w-3/12">
                <div className="loading-animation rounded-md px-10 py-4"></div>
              </div>

              <div className="w-3/5">
                <div className="loading-animation rounded-md px-10 py-4"></div>
              </div>

              <div className="w-1/12 flex justify-between gap-3">
                <div className="loading-animation rounded-md px-4 py-4"></div>
                <div className="loading-animation rounded-md px-4 py-4"></div>
                <div className="loading-animation rounded-md px-4 py-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWriterHeaderSkeleton;
