import stoploss_2 from "../assets/img/stoploss-02.webp";
import platform from "../assets/img/platform.webp";
import orders from "../assets/img/orders.webp";
import deposit from "../assets/img/deposit.webp";
import app from "../assets/img/app-01.webp";
import download_app_1 from "../assets/img/Icons-01.svg";
import download_app_2 from "../assets/img/Icons-02.svg";
import download_app_3 from "../assets/img/Icons-03.svg";
import download_app_4 from "../assets/img/Icons-04.svg";
import download_app_5 from "../assets/img/Icons-05.svg";
import download_app_6 from "../assets/img/Icons-06.svg";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaHeadphonesAlt,
  FaGift,
  FaMobile,
} from "react-icons/fa";
import { GrBitcoin } from "react-icons/gr";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbFreeRights, TbChartCandle } from "react-icons/tb";

import { MdWaterfallChart } from "react-icons/md";

const ver_class =
  "absolute p-2 cursor-pointer rounded-lg border dark:border-[#072349] border-gray-300 dark:shadow-[0_15px_40px_0px_rgba(6,37,70,0.7)] shadow-[0_15px_40px_0px_rgba(0,0,0,0.2)] dark:hover:bg-[#07244b] dark:backdrop-blur backdrop-blur hover:backdrop-blur dark:hover:backdrop-blur dark:bg-[#051a36] bg-gray-200 bg-opacity-25 dark:bg-opacity-25 hover:bg-opacity-30 dark:hover:bg-opacity-40 transition-all";

export const header_images = [
  {
    id: 1,
    src: platform,
    alt: "Platform",
    class: `${ver_class} animate-ver_7s left-10 top-6`,
  },
  {
    id: 2,
    src: deposit,
    alt: "Deposit",
    class: `${ver_class} animate-ver_5s left-80 top-64 w-1/5`,
  },
  {
    id: 3,
    src: orders,
    alt: "Orders",
    class: `${ver_class} animate-hor_5s left-40 top-[470px] w-4/6`,
  },
  {
    id: 4,
    src: app,
    alt: "Application",
    class: `${ver_class} animate-hor_7s top-40 w-1/5 !border-[7px]`,
  },
  {
    id: 5,
    src: stoploss_2,
    alt: "Stop Loss",
    class: `${ver_class} animate-hor_5s top-10 left-[750px] w-1/5`,
  },
];

export const header_boxes = [
  {
    id: 1,
    icon: <FaMobile />,
    title: "اپلیکیشن موبایل",
    description:
      "اپلیکیشن یوبیتکس در دو نسخه اندروید و آیفون با رابط کاربری ساده و حرفه ای",
  },
  {
    id: 2,
    icon: <FaGift />,
    title: "کارت هدیه ارزدیجیتال",
    description:
      "ساخت رایگان کارت هدیه رمزارزی با طرح دلخواه در مناسبت های مختلف",
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt />,
    title: "پشتیبانی 24 ساعته",
    description:
      "پشتیبانی آنلاین حرفه ای 24 ساعته در 7 روز هفته از طریق تیکت و چت آنلاین",
  },
  {
    id: 4,
    icon: <MdWaterfallChart />,
    title: "تعیین حد سود / ضرر",
    description:
      "امکان تعیین حد سود / ضرر به دو صورت عادی و استاپ با بهترین قیمت",
  },
];

export const center_boxes = {
  id: 1,
  title: "امکانات",
  description: "برخی از امکانات پلتفرم یوبیتکس",
  items: [
    {
      id: 1,
      icon: <GrBitcoin />,
      title: "پشتیبانی بیش از 100 رمزارز",
      description:
        "امکان سفارش گذاری بیش از 100 رمزارز در تالار معاملات یوبیتکس با قیمت و حجم دلخواه",
    },
    {
      id: 2,
      icon: <SiBlockchaindotcom />,
      title: "پشتیبانی از شبکه های بلاکچین پر کاربرد",
      description: "تنوع بسیار بالا در شبکه های بلاکچین مختلف و پرکاربرد",
    },
    {
      id: 3,
      icon: <TbFreeRights />,
      title: "کارمزد رایگان واریز و برداشت",
      description:
        "امکان واریز و برداشت و نگهداری رمزارز به صورت رایگان و بدون کسر کارمزد",
    },
    {
      id: 4,
      icon: <TbChartCandle />,
      title: "پلتفرم معاملاتی ساده و حرفه ای",
      description:
        "رابط کاربری آسان و حرفه ای با بهره گیری از پیشرفته ترین امکانات معاماتی",
    },
  ],
};

export const footer_data = {
  ubitex: [
    {
      id: 1,
      title: "درباره ما",
      href: "/about-us",
    },
    {
      id: 2,
      title: "بلاگ",
      href: "/redirect-to-blog",
    },
    {
      id: 3,
      title: "قوانین و مقررات",
      href: "/terms",
    },
  ],
  services: [
    {
      id: 1,
      title: "تالار معاملات",
      href: "/redirect-to-platform",
    },
    {
      id: 2,
      title: "کارت هدیه",
      href: "/redirect-to-platform",
    },
    {
      id: 3,
      title: "اپلیکیشن",
      href: "/download",
    },
  ],
  support: [
    {
      id: 1,
      title: "سوالات متداول",
      href: "/support-center/faq",
    },
    {
      id: 2,
      title: "راهنمای استفاده",
      href: "/support-center",
    },
    {
      id: 3,
      title: "کارمزدها",
      href: "/fees",
    },
  ],
  download_app: [
    {
      id: 1,
      img: download_app_1,
      href: "https://cafebazaar.ir/app/io.ubitex.ubitex",
    },
    {
      id: 2,
      img: download_app_2,
      href: "https://myket.ir/app/io.ubitex.ubitex",
    },
    {
      id: 3,
      img: download_app_3,
      href: "https://anardoni.com/ios/app/fNcCgkDHU",
    },
    {
      id: 4,
      img: download_app_4,
      href: "https://ubitex.io/downloads/application/ubitex-app-v1.1.27.apk",
    },
    {
      id: 5,
      img: download_app_5,
      href: "https://anardoni.com/ios/app/fNcCgkDHU",
    },
    {
      id: 6,
      img: download_app_6,
      href: "https://pwa.ubitex.io/",
    },
  ],
  social: [
    {
      id: 1,
      icon: <FaTelegramPlane />,
      href: "https://t.me/ubitex_io",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      href: "https://www.instagram.com/ubitex_io/",
    },
    {
      id: 3,
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/Ubitex-107940351853274",
    },
    {
      id: 4,
      icon: <FaTwitter />,
      href: "https://twitter.com/ubitex_io",
    },
    {
      id: 5,
      icon: <FaLinkedin />,
      href: "#",
    },
    {
      id: 6,
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UC8QCOafkmCY21MNw",
    },
  ],
};
