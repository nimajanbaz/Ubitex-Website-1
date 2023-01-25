import React from "react";
import {
  Twitter,
  Telegram,
  Linkedin,
  Mail,
  Reddit,
  Whatsapp,
} from "react-social-sharing";
// import { FiShare2 } from "react-icons/fi";

const SocialShare = () => {
  const link = window.location.href;
  
  return (
    <div className="mt-10 p-14 rounded-3xl border border-gray-100 dark:border-[#092c59] bg-gray-50 dark:bg-[#051A36]">
      {/* <div className="flex justify-center items-center mb-5">
        <span className="text-[#1a3c69] text-4xl p-3 rounded-md bg-[#1a3c69] bg-opacity-30">
          <FiShare2 />
        </span>
      </div> */}
      <div className="flex items-center justify-center mb-4">
        <span className="text-md max-sm:text-xs text-gray-300 dark:text-gray-500">
          این مطلب را با دوستان خود به اشتراک بگذارید.
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <Twitter link={link} />
        <Mail solid medium subject="یوبیتکس" link={link} />
        <Linkedin link={link} />
        <Reddit link={link} />
        <Whatsapp link={link} />
        <Telegram link={link} />
      </div>
    </div>
  );
};

export default SocialShare;
