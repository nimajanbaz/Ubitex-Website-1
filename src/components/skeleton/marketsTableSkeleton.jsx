const MarketsTableSkeleton = () => {
  const Data = () => {
    const test = [];

    for (let index = 0; index < 10; index++) {
      test.push(
        <>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="1/12">
              <div className="loading-animation rounded-md p-6"></div>
            </div>
            <div className="1/12">
              <div className="loading-animation rounded-full p-6"></div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse w-full">
              <div className="loading-animation rounded-md p-6"></div>
              <div className="loading-animation rounded-md p-6"></div>
              <div className="loading-animation rounded-md p-6"></div>
              <div className="loading-animation rounded-md p-6"></div>
              <div className="loading-animation rounded-md p-6"></div>
              <div className="loading-animation rounded-md p-6"></div>
              <div className="loading-animation rounded-md p-6"></div>
              <div className="loading-animation rounded-md p-6"></div>
            </div>
          </div>
        </>
      );
    }
    return test;
  };
  return (
    <>
      <div className="flex flex-col space-y-5 bg-gray-50 dark:bg-[#051a36] p-8 rounded-lg mb-10 rtl-grid">
        <div className="w-1/4">
          <div className="loading-animation rounded-md px-10 py-6"></div>
        </div>

        <div className="w-7/12 flex items-center gap-3">
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
          <div className="loading-animation rounded-lg px-10 py-5"></div>
        </div>

        <Data />
      </div>
    </>
  );
};

export default MarketsTableSkeleton;
