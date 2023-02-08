import CopyBtnDemo from "../../../components/copytoclipboard";

const CoinContract = ({ data }) => {
  return (
    <>
      <div className="flex gap-10 ">
        <div className="w-2/5">
          <div className="text-xl">کانترکت‌ها</div>
          <div className="flex flex-col">
            {data.contractsList.map((item) => {
              return (
                <>
                  <div className="flex item-center text-xs mt-3">
                    <div className="bg-gray-100 dark:bg-gray-800 space-x-3 px-4 py-2 rounded-md hover:bg-[#f39200] hover:bg-opacity-10 hover:text-[#f39200] items-center flex">
                      <img
                        className="w-[20px] h-[20px] ml-2 items-center flex"
                        src={item.chainLogo}
                        title={item.chainName}
                        alt={item.chainName}
                      />
                      <span className="text-gray-400">{item.chainName}</span>
                      <span className=" items-center flex">
                        {item.contractAddress}
                      </span>
                      <div className="items-center flex text-lg">
                        <CopyBtnDemo item={item.contractAddress} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-3/5">
          <h2 className="text-xl">اکسپلوررها</h2>
          <div className="flex text-xs mt-3">
            {data.explorers.map((item) => {
              const { hostname } = new URL(item);
              return (
                <a
                  href={item}
                  rel="noreferrer"
                  target="_blank"
                  className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md mx-2 hover:bg-[#f39200] hover:bg-opacity-10 hover:text-[#f39200]"
                >
                  {hostname}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinContract;
