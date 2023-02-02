import { TbDeviceMobile } from "react-icons/tb";
import { Link } from "react-router-dom";
import mobileApp from "../../../assets/img/5.webp";
import TitleBox from "../../../components/titleBox";

const Application = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto items-center text-right">
        <div className="xl:h-[350px] lg:h-[400px] md:h-[400px] sm:h-[400px] max-sm:h-[200px] w-full loading-animation rounded-3xl">
          <iframe
            src={
              "https://www.aparat.com/video/video/embed/videohash/I2rGC/vt/frame"
            }
            title={"Levraged Tokens"}
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            className="w-full h-full rounded-2xl"></iframe>
        </div>

        <div className="flex gap-5 flex-col">
        <TitleBox
            icon={<TbDeviceMobile />}
            title={"اپلیکیشن موبایل یوبیتکس"}
          />
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
