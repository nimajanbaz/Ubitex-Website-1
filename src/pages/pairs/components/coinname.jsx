import React from "react";

const CoinName = ({ data }) => {
  return (
    <>
      <div className="flex rtl-grid">
        <div className="flex flex-col space-x-reverse space-y-5">
          <div className="flex space-x-6 space-x-reverse">
            <div className="w-[50px] h-[50px]">
              <img src={data.logo} alt="" />
            </div>
            <div className="rtl-grid space-y-1">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="text-3xl">{data.nameFa}</div>
                <div className=" text-[#f39200] rounded-md px-2 py-1">
                  رتبه {data.rank}
                </div>
              </div>
              <div className="text-sm">
                {data.name} | {data.symbol}
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex space-x-2 space-x-reverse">
              <div className="bg-[#f39200] bg-opacity-10 text-xs text-[#f39200] rounded-md px-2 py-1">
                {data.category}
              </div>
              <div className="bg-[#f39200] bg-opacity-10 text-xs text-[#f39200] rounded-md px-2 py-1">
                {data.type.code}
              </div>
            </div>
          </div>
          <div className="text-sm">
            {data.description.substring(0, 150) + "..."}
          </div>

        </div>
        <div></div>
      </div>
    </>
  );
};

export default CoinName;
