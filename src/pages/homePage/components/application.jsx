import { Link } from "react-router-dom";
import mobileApp from "../../../assets/img/5.webp";

const Application = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto items-center text-right">
        <div>
          <img src={mobileApp} alt="" className="mx-auto animate-ver_5s" />
        </div>

        <div>
          <div className="flex flex-col space-y-5 mb-3">
            <div className="flex flex-col space-y-2">
              <span className="text-2xl text-gray-700 dark:text-gray-200">
                با اپلیکیشن موبایل
              </span>
              <span className="text-4xl font-semibold text-[#f39200]">
                صرافی ارز دیجیتال یوبیتکس
              </span>
              <span className="text-2xl text-gray-700 dark:text-gray-200">
                همیشه بروز باشید
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              معامله آسان، همه جا و همه وقت از طریق اپلیکیشن موبایل یوبیتکس
            </p>
            <Link to={"/download"} className="flex justify-end">
              <button className="text-[#f39200] cursor-pointer transition-all text-lg px-5 py-2 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
                دانلود اپلیکیشن
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
