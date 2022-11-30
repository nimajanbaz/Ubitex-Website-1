import ubitexLogo from "../assets/img/logo-01.png";
import { footer_data } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="dark:bg-[#04162d] bg-gray-100 pt-5 dark:shadow-[0_-15px_40px_-15px_rgba(6,37,70,0.7)] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.1)] font-display">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10  max-w-[1300px] mx-auto items-center">
        <div className="grid grid-col text-center">
          <span className="text-[#f39200] text-xl font-semibold mb-3">
            یوبیتکس
          </span>
          {footer_data.support.map((item) => {
            return (
              <Link
                to={item.href}
                key={item.id}
                className="mb-3 dark:text-gray-300 text-gray-600 hover:text-[#f39200]">
                <span className="hover:text-[#f39200] transition-all px-2 py-1 rounded-md bg-opacity-0 hover:bg-opacity-10 bg-[#f39200]">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="grid grid-col text-center">
          <span className="text-[#f39200] text-xl font-semibold mb-3">
            خدمات
          </span>
          {footer_data.services.map((item) => {
            return (
              <Link
                to={item.href}
                key={item.id}
                className="mb-3 dark:text-gray-300 text-gray-600 hover:text-[#f39200]">
                <span className="hover:text-[#f39200] transition-all px-2 py-1 rounded-md bg-opacity-0 hover:bg-opacity-10 bg-[#f39200]">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="grid grid-col text-center">
          <span className="text-[#f39200] text-xl font-semibold mb-3">
            پشتیبانی
          </span>
          {footer_data.ubitex.map((item) => {
            return (
              <Link
                to={item.href}
                key={item.id}
                className="mb-3 dark:text-gray-300 text-gray-600 hover:text-[#f39200]">
                <span className="hover:text-[#f39200] transition-all px-2 py-1 rounded-md bg-opacity-0 hover:bg-opacity-10 bg-[#f39200]">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
        <div>
          <img src={ubitexLogo} alt="" className="mx-auto w-2/3" />
        </div>
      </div>

      <div className="flex space-x-3 justify-center items-center">
        {footer_data.social.map((item) => {
          return (
            <a href={item.href} key={item.id}>
              <div className="transition-all cursor-pointer rounded-md p-3 bg-[#f39200] bg-opacity-0 hover:bg-opacity-10 text-gray-400 dark:text-gray-400 hover:text-[#f39200] dark:hover:text-[#f39200]">
                <span className="text-xl">{item.icon}</span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="border-b dark:border-b-[#062042] border-gray-300 my-6"></div>

      <div className="flex flex-col justify-center items-center pb-6">
        <span>تلفن تماس: 91001716 - ساعت 9 الی 17</span>
        <span>.تمام حقوق این سایت متعلق به یوبیتکس می باشد</span>
      </div>

      <div className="border-b dark:border-b-[#062042] border-gray-300 mb-2"></div>
      
      <div className="flex flex-col justify-center items-center">
        <span className="text-gray-400 dark:text-gray-500 text-sm mb-2">
          2019-2022 UBITEX - v
          {require("../../package.json").version.replace('"', "")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
