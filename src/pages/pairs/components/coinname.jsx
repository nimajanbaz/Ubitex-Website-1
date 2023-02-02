import React from "react";
import Linkdropdown from "../../../components/linkdropdown";



const CoinName = ({data}) => {

  return (
    <>
        <div className="sm:w-full md:w-4/5 my-10 rtl-grid">
          <div className="flex flex-col space-x-10 space-x-reverse space-y-5">
            <div className="flex space-x-6 space-x-reverse">
              <div className="w-[50px] h-[50px]">
                <img src={data.logo} alt=""/>
              </div>
              <div className="rtl-grid space-y-1">
                <div className="flex items-center space-x-3 space-x-reverse">
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
            <div className="text-sm">{data.description.substring(0, 200) + "..."}</div>
            <div className="flex space-x-3 space-x-reverse">
              <div>
                <a
                  href={data.website}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-600 bg-opacity-10 text-xs text-gray-600 rounded-md px-2 py-1"
                >
                  وب سایت
                </a>
              </div>
              <div>
                <a
                  href={data.whitePaper}
                  rel="noreferrer"
                  target="_blank"
                  className="bg-gray-600 bg-opacity-10 text-xs text-gray-600 rounded-md px-2 py-1"
                >
                  وایت پیپر  
                </a>
              </div>
              
              <div className="flex flex-col">
               
               
               title={"شبکه‌های اجتماعی"}
               items={data.socialMedia.map((item, index) => {
return (
  <span
  key={index}
  className="">
    {item.socialMediaAddress}
  </span>
 );
})}

              </div>
            </div>
          </div>
          <div></div>
        </div>
    </>
  );
};

export default CoinName;
