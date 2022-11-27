import crypto from "../assets/img/crypto.png";
import free from "../assets/img/free.png";
import blockchain from "../assets/img/blockchain.png";
import trade from "../assets/img/trade.png";
import mobile from "../assets/img/app.png";
import gift from "../assets/img/gift.png";
import stoploss from "../assets/img/stoploss.png";
import support from "../assets/img/support.png";
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

const ver_class =
  "absolute p-2 rounded-lg border border-[#072349] shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all";

export const header_images = [
  {
    id: 1,
    src: platform,
    alt: "Platform",
    class: `${ver_class} animate-ver_7s left-10`,
  },
  {
    id: 2,
    src: deposit,
    alt: "Deposit",
    class: `${ver_class} animate-ver_5s left-80 top-60 w-1/4`,
  },
  {
    id: 3,
    src: orders,
    alt: "Orders",
    class: `${ver_class} animate-hor_5s left-36 top-[470px] w-3/4`,
  },
  {
    id: 4,
    src: app,
    alt: "Application",
    class: `${ver_class} animate-hor_7s top-36 w-3/12 !border-[7px]`,
  },
];

export const header_boxes = [
  {
    id: 1,
    image: mobile,
    title: "اپلیکیشن موبایل",
    description:
      "اپلیکیشن یوبیتکس در دو نسخه اندروید و IOS با رابط کاربری ساده و حرفه ای",
  },
  {
    id: 2,
    image: gift,
    title: "کارت هدیه ارزدیجیتال",
    description:
      "ساخت رایگان کارت هدیه رمزارزی با طرح دلخواه در مناسبت های مختلف",
  },
  {
    id: 3,
    image: support,
    title: "پشتیبانی 24 ساعته",
    description:
      "پشتیبانی آنلاین حرفه ای 24 ساعته در 7 روز هفته از طریق تیکت و چت آنلاین",
  },
  {
    id: 4,
    image: stoploss,
    title: "تعیین حد سود / ضرر",
    description:
      "امکان تعیین حد سود / ضرر به دو صورت عادی و استاپ با بهترین قیمت",
  },
];

export const center_boxes = [
  {
    id: 1,
    image: crypto,
    title: "پشتیبانی بیش از 100 رمزارز",
    description:
      "امکان سفارش گذاری بیش از 100 رمزارز در تالار معاملات یوبیتکس با قیمت و حجم دلخواه",
  },
  {
    id: 2,
    image: blockchain,
    title: "پشتیبانی از شبکه های بلاکچین پر کاربرد",
    description: "تنوع بسیار بالا در شبکه های بلاکچین مختلف و پرکاربرد",
  },
  {
    id: 3,
    image: free,
    title: "کارمزد رایگان واریز و برداشت",
    description:
      "امکان واریز و برداشت و نگهداری رمزارز به صورت رایگان و بدون کسر کارمزد",
  },
  {
    id: 4,
    image: trade,
    title: "پلتفرم معاملاتی ساده و حرفه ای",
    description:
      "رابط کاربری آسان و حرفه ای با بهره گیری از پیشرفته ترین امکانات معاماتی",
  },
];

export const footer_data = {
  ubitex: [
    {
      id: 1,
      title: "درباره ما",
      href: "/about-us",
    },
    {
      id: 2,
      title: "امکانات",
      href: "/features",
    },
    {
      id: 3,
      title: "بلاگ",
      href: "/blog",
    },
    {
      id: 4,
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
      href: "/app",
    },
  ],
  support: [
    {
      id: 1,
      title: "سوالات متداول",
      href: "/faq",
    },
    {
      id: 2,
      title: "تماس با ما",
      href: "/conact-us",
    },
    {
      id: 3,
      title: "راهنمای استفاده",
      href: "/guide",
    },
    {
      id: 4,
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
      href: "https://ubitex.io/Ubitex.apk",
    },
    {
      id: 4,
      img: download_app_4,
      href: "https://anardoni.com/ios/app/fNcCgkDHU",
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
};
