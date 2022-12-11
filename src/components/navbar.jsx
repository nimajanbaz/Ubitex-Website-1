import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../assets/img/logo-Ubitex.png";
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import MyDialog from "./dialog";
import { Badge } from "./badge";
import OTC_PopUp from "../assets/img/otc-popup.png";
import Dropdown from "./dropdown";
import {
  ConvertDark,
  ConvertLight,
  PlatformDark,
  PlatformLight,
} from "./icons";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const { pathname } = useLocation();
  const [dialogOpen, setDialogOpen] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleDialog = () => {
    setDialogOpen(true);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const menuItems = [
    {
      id: 1,
      title: "بازارها",
      href: "/markets",
      star: false,
      isPopUp: false,
      isDropdown: false,
    },
    {
      id: 2,
      title: "معامله",
      isDropdown: true,
      items: [
        {
          id: 2,
          title: "تالار معاملات",
          href: "/redirect-to-platform",
          star: false,
          isPopUp: false,
          isDropdown: false,
          iconDark: <PlatformDark />,
          iconLight: <PlatformLight />,
        },
        {
          id: 3,
          title: "معامله آنی",
          href: "/redirect-to-convert",
          star: true,
          isPopUp: true,
          isDropdown: false,
          iconDark: <ConvertDark />,
          iconLight: <ConvertLight />,
        },
      ],
    },
    {
      id: 4,
      title: "توکن‌های لوریج دار",
      href: "/leveraged-tokens",
      star: true,
      isPopUp: false,
      isDropdown: false,
    },
    {
      id: 5,
      title: "راهنمای استفاده",
      href: "/support-center",
      star: false,
      isPopUp: false,
      isDropdown: false,
    },
    {
      id: 6,
      title: "بلاگ",
      href: "/blog",
      star: false,
      isPopUp: false,
      isDropdown: false,
    },
    {
      id: 7,
      title: "اپلیکیشن",
      href: "/download",
      star: false,
      isPopUp: false,
      isDropdown: false,
    },
  ];
  return (
    <Popover className="relative dark:bg-[#051a36] bg-white font-display text-right">
      <MyDialog
        title="(OTC) معامله آنی"
        text="تبدیل سریع، یک ابزار آسان به منظور خرید و فروش رمزارزها با چند کلیک ساده بدون سفارش‌گذاری در تالار معاملات است. شما می توانید به سادگی و خیلی سریع دارایی‌های رمزارزی را در هر زمان با قیمت واقعی بر اساس شرایط فعلی بازار تبدیل کنید."
        buttonText="مشاهده صفحه معامله آنی"
        buttonUrl="/redirect-to-platform"
        dialogOpen={dialogOpen}
        fullwidthButton
        image={OTC_PopUp}
        onDialogClose={() => setDialogOpen(false)}
      />

      <div className="w-full dark:shadow-[0_15px_40px_0px_rgba(6,37,70,0.7)] shadow-[0_15px_40px_0px_rgba(0,0,0,0.1)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 lg:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img
                  className="h-12 w-auto sm:h-10"
                  src={logo}
                  alt="Ubitex Logo"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-[#04162d] p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden items-center justify-end lg:flex">
              <Popover.Group
                as="nav"
                className="hidden space-x-1 lg:flex rtl-grid">
                {menuItems.map((item) =>
                  item.isDropdown ? (
                    <Dropdown data={item} />
                  ) : (
                    <div
                      key={item.id}
                      className="cursor-pointer"
                      onClick={() =>
                        item.isPopUp ? handleDialog() : undefined
                      }>
                      {item.star && item.isPopUp ? (
                        <span className={`flex space-x-2 justify-center items-center text-sm font-medium dark:text-gray-300 hover text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-3 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md ${pathname.includes(item.href) ? 'bg-[#f39200] bg-opacity-10 !text-[#f39200] dark:!text-[#f39200] hover:!bg-opacity-20' : null}`}>
                          {item.title}
                          <Badge text={"جدید"} />
                        </span>
                      ) : item.star && !item.isPopUp ? (
                        <Link to={item.href}>
                          <span className={`flex space-x-2 justify-center items-center text-sm font-medium dark:text-gray-300 hover text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-3 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md ${pathname.includes(item.href) ? 'bg-[#f39200] bg-opacity-10 !text-[#f39200] dark:!text-[#f39200] hover:!bg-opacity-20' : null}`}>
                            {item.title}
                            <Badge text={"جدید"} />
                          </span>
                        </Link>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex space-x-2 justify-center items-center text-sm font-medium dark:text-gray-300 hover text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-3 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md ${pathname.includes(item.href) ? 'bg-[#f39200] bg-opacity-10 !text-[#f39200] dark:!text-[#f39200] hover:!bg-opacity-20' : null}`}>
                          {item.title}
                        </Link>
                      )}
                    </div>
                  )
                )}
              </Popover.Group>
              <Link
                to="/redirect-to-login"
                className="ml-8 rounded-md bg-opacity-10 hover:bg-opacity-20 bg-[#f39200] text-[#f39200] px-4 py-2 text-sm transition-all">
                ورود | ثبت نام
              </Link>
              <div className="ml-3">
                <span
                  className="text-2xl cursor-pointer dark:text-gray-300 text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "light" ? <RiMoonClearFill /> : <RiSunLine />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden rtl-grid">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white dark:bg-[#04162d] shadow-lg">
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                {menuItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="cursor-pointer"
                      onClick={() => (item.star ? handleDialog() : undefined)}>
                      {item.star ? (
                        <span className="dark:bg-[#04162d] flex space-x-2 justify-center items-center text-base font-medium dark:text-gray-300 hover text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-4 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md">
                          {item.title}
                          <Badge text={"جدید"} />
                        </span>
                      ) : (
                        <Link
                          to={item.href}
                          className="dark:bg-[#04162d] flex space-x-2 justify-center items-center text-base font-medium dark:text-gray-300 hover text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-4 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md">
                          {item.title}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-center text-base font-medium text-gray-500">
                <Link
                  href="/redirect-to-login"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#f39200] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#ce7c00]">
                  ورود | ثبت نام
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
