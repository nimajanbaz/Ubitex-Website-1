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
  FaGift,
  FaMobile,
} from "react-icons/fa";
import { GrBitcoin } from "react-icons/gr";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";
import { TbChartCandle, TbChartDots3 } from "react-icons/tb";
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
      "اپلیکیشن صرافی آنلاین یوبیتکس در نسخه‌های اندروید، IOS و PWA با رابط کاربری ساده",
  },
  {
    id: 2,
    icon: <MdWaterfallChart />,
    title: "تعیین حد سود / ضرر",
    description:
      "امکان تعیین حد سود / ضرر به دو صورت عادی و استاپ با بهترین قیمت در بازار ارز دیجیتال",
  },
  {
    id: 3,
    icon: <TbChartDots3 />,
    title: "توکن های لوریج دار",
    description:
      "برای اولین بار در ایران، امکان معاملات اهرم دار با قابلیت کسب سود در بازار نزولی ",
  },
  {
    id: 4,
    icon: <GrBitcoin />,
    title: "پشتیبانی بیش از 200 رمزارز",
    description:
      "امکان خرید و فروش بیش از 200 ارزدیجیتال در یوبیتکس با قیمت و حجم دلخواه",
  },
];

export const center_boxes = {
  id: 1,
  title: "امکانات حرفه ای یوبیتکس در بازار ارز دیجیتال",
  description: "برخی از امکانات پلتفرم یوبیتکس",
  items: [
    {
      id: 4,
      icon: <TbChartCandle />,
      title: "معامله بدون واسطه",
      description:
        "خرید و فروش ارزدیجیتال به صورت P2P در سه حالت لیمیت، سفارش سریع و سفارش های شرطی",
    },
    {
      id: 3,
      icon: <AiTwotoneThunderbolt />,
      title: "معامله آنی",
      description:
        "خرید و فروش سریع و آسان ارز دیجیتال در صرافی یوبیتکس بدون سفارش گذاری در تالار معاملات",
    },
    {
      id: 1,
      icon: <IoWallet />,
      title: "کیف پول اختصاصی",
      description:
        "پشتیانی بیش از 30 شبکه بلاکچین مختلف و پرکاربرد به صورت فول نود با ضریب امنیت و سرعت بالا",
    },
    {
      id: 2,
      icon: <FaGift />,
      title: "کارت هدیه",
      description:
        "ساخت رایگان کارت هدیه ارزدیجیتال در قالب کریپتوکارت با طرح دلخواه در مناسبت‌های مختلف",
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
      title: "قوانین و مقررات",
      href: "/terms",
    },
    {
      id: 3,
      title: "بلاگ",
      href: "/blog",
    },
    {
      id: 4,
      title: "برند متریال",
      href: "/brand-material",
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
      title: "اپلیکیشن‌ها",
      href: "/download",
    },
    {
      id: 4,
      title: "توکن‌ های لوریج دار",
      href: "/leveraged-tokens",
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
