import guide_1 from "../assets/img/guide/1.png";
import guide_2 from "../assets/img/guide/2.png";
import guide_3 from "../assets/img/guide/3.png";
import guide_4 from "../assets/img/guide/4.png";
import guide_5 from "../assets/img/guide/5.png";
import guide_6 from "../assets/img/guide/6.png";
import guide_7 from "../assets/img/guide/7.png";
import guide_8 from "../assets/img/guide/8.png";
import guide_9 from "../assets/img/guide/9.png";

import { HiArrowsUpDown } from "react-icons/hi2";
import { ImMakeGroup } from "react-icons/im";
import { FaUserPlus, FaBitcoin,FaGoogle } from "react-icons/fa";

export const help_center_data = [
  {
    id: 1,
    img: guide_1,
    title: "ثبت نام",
    text: "آموزش ثبت نام و مراحل احراز هویت در پلتفرم یوبیتکس",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/741ZI/vt/frame",
    slug: "/support-center/guide/register",
  },
  {
    id: 2,
    img: guide_2,
    title: "واریز و برداشت",
    text: "نحوه واریز و برداشت ارزی در پلتفرم یوبیتکس",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/ray6O/vt/frame",
    slug: "/support-center/guide/deposit-and-withdrawal",
  },
  {
    id: 3,
    img: guide_3,
    title: "خرید و فروش",
    text: "راهنمای نحوه کار با صرافی یوبیتکس، معامله و...",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/cRmrP/vt/frame",
    slug: "/support-center/guide/trade",
  },
  {
    id: 4,
    img: guide_4,
    title: "حد سود / ضرر",
    text: "آموزش ثبت سفارش به صورت حد سود و ضرر",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/DNGdT/vt/frame",
    slug: "/support-center/guide/stop-limit",
  },
  {
    id: 5,
    img: guide_9,
    title: "توکن‌های لوریج دار",
    text: "آموزش نحوه معامله در بازار نزولی با توکن‌های لوریج دار",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/yr1DC/vt/frame",
    slug: "/support-center/guide/levraged-token",
  },
  {
    id: 6,
    img: guide_5,
    title: "گوگل اتنتیکیتور",
    text: "آموزش نحوه فعالسازی و استفاده از  تأیید دو مرحله ای",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/yr1DC/vt/frame",
    slug: "/support-center/guide/google-authenticator",
  },
  
  {
    id: 7,
    img: guide_6,
    title: "بروزرسانی",
    text: "بررسی قابلیت های جدید پلتفرم یوبیتکس",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/fT7jS/vt/frame",
    slug: "/support-center/guide/ubitex-2022-update",
  },
  {
    id: 8,
    img: guide_7,
    title: "ساخت کریپتوکارت",
    text: "در این ویدئو آموزش ساخت کریپتوکارت یوبیتکس را مشاهده میکنید",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/WI3hQ/vt/frame",
    slug: "/support-center/guide/create-cryptocard",
  },
  {
    id: 9,
    img: guide_8,
    title: "دریافت کریپتوکارت",
    text: "در این ویدئو آموزش دریافت کریپتوکارت یوبیتکس را مشاهده میکنید",
    videoLink:
      "https://www.aparat.com/video/video/embed/videohash/ZAN9K/vt/frame",
    slug: "/support-center/guide/receive-cryptocard",
  },
];

export const quik_access_data = [
  {
    id: 1,
    icon: <FaUserPlus />,
    text: "ثبت‌نام و احراز هویت",
    href: "/support-center/guide/register",
  },
  {
    id: 2,
    icon: <HiArrowsUpDown />,
    text: "واریز و برداشت",
    href: "/support-center/guide/deposit-and-withdrawal",
  },
  {
    id: 3,
    icon: <FaBitcoin />,
    text: "خرید و فروش",
    href: "/support-center/guide/trade",
  },
  {
    id: 4,
    icon: <ImMakeGroup />,
    text: "دعوت از دوستان",
    href: "/support-center/guide/register",
  },
  {
    id: 5,
    icon: <FaGoogle />,
    text: "گوگل اتنتیکیتور",
    href: "/support-center/guide/google-authenticator",
  },
];
