const MarketsHeaderSkeleton = () => {
  const Data = () => {
    const test = [];

    for (let index = 0; index < 3; index++) {
      test.push(
        <div className="flex justify-between">
          <div className="flex">
            <div className="loading-animation rounded-full p-6"></div>
            <div className="flex">
              <div className="loading-animation rounded-md px-16 py-2 mr-3"></div>
            </div>
          </div>

          <div className="flex">
            <div className="loading-animation rounded-md px-10 py-2"></div>
          </div>
        </div>
      );
    }
    return test;
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-8 rtl-grid">
        <div className="flex flex-col space-y-5 bg-gray-50 dark:bg-[#051a36] p-8 rounded-lg mb-10">
          <div className="w-1/2">
            <div className="loading-animation rounded-md px-10 py-4"></div>
          </div>

          <Data />
        </div>

        <div className="flex flex-col space-y-5 bg-gray-50 dark:bg-[#051a36] p-8 rounded-lg mb-10">
          <div className="w-1/2">
            <div className="loading-animation rounded-md px-10 py-4"></div>
          </div>

          <Data />
        </div>

        <div className="flex flex-col space-y-5 bg-gray-50 dark:bg-[#051a36] p-8 rounded-lg mb-10">
          <div className="w-1/2">
            <div className="loading-animation rounded-md px-10 py-4"></div>
          </div>

          <Data />
        </div>
      </div>
    </>
  );
};

export default MarketsHeaderSkeleton;
