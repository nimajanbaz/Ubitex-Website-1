import { Link } from "react-router-dom";

const HeaderInfo = () => {
  return (
    <>
      <div className="flex flex-col space-y-7 items-end lg:w-4/12 md:w-full text-right">
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl dark:text-gray-100 text-gray-800 my-3">
              یوبیتکس، پلتفرم مبادلات رمزارزی شما
            </h3>
            <h1 className="text-[#f39200] text-4xl font-semibold">
              معتبرترین صرافی ارز دیجیتال ایرانی
            </h1>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl dark:text-gray-100 text-gray-800">
              ارائه دهنده خدمات امن و حرفه‌ای بازار ارز دیجیتال
            </h2>
            <h3 className="text-xl dark:text-gray-100 text-gray-800 mt-4">
              ...داستان پول عوض شد
            </h3>
          </div>
        </div>

        <div className="flex space-x-3 space-x-reverse flex-row-reverse mt-3">
          <Link to="/redirect-to-platform">
            <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
              <span>ورود | ثبت‌نام</span>
            </button>
          </Link>
          <Link to="/download">
            <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
              <span>دانلود اپلیکیشن</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderInfo;
