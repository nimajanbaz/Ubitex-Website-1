import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { Badge } from "./badge";
import MyDialog from "./dialog";
import OTC_PopUp from "../assets/img/otc-popup.png";

export default function Dropdown({ data }) {
  const [dialogOpen, setDialogOpen] = useState();
  const [theme, setTheme] = useState();

  const handleDialog = () => {
    setDialogOpen(true);
  };

  return (
    <div className="text-right">
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
      <Menu as="div" className=" inline-block text-left mr-1">
        <div onClick={() => setTheme(localStorage.getItem("theme"))}>
          <Menu.Button className="flex space-x-1 justify-center items-center text-sm font-medium dark:text-gray-300 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-3 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md">
            {data.title}
            <ChevronDownIcon
              className="-ml-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 dark:bg-[#04162d] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="p-3 flex flex-col space-y-3">
              {data.items.map((data) => {
                return (
                  <Menu.Item>
                    <div
                      key={data.id}
                      className="cursor-pointer"
                      onClick={() =>
                        data.isPopUp ? handleDialog() : undefined
                      }>
                      {data.star && data.isPopUp ? (
                        <div className="flex space-x-3 items-center space-x-reverse hover:!text-[#f39200] dark:!hover:text-[#f39200] transition-all px-4 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md">
                          <div>
                            {theme === "dark" ? data.iconDark : data.iconLight}
                          </div>
                          <span className=" flex space-x-2 items-center text-sm font-medium dark:text-gray-300 text-gray-600 ">
                            {data.title}
                            <Badge text={"جدید"} />
                          </span>
                        </div>
                      ) : data.star && !data.isPopUp ? (
                        <Link to={data.href}>
                          <div className="flex space-x-3 items-center space-x-reverse  hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-4 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md">
                            <div>
                              {theme === "dark"
                                ? data.iconDark
                                : data.iconLight}
                            </div>
                            <span className=" flex space-x-2 items-center text-sm font-medium dark:text-gray-300 text-gray-600 ">
                              {data.title}
                              <Badge text={"جدید"} />
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <Link
                          to={data.href}
                          className=" flex space-x-2 items-center text-sm font-medium dark:text-gray-300 text-gray-600">
                          <div className="flex space-x-3 items-center space-x-reverse w-full hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-4 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md">
                            <div>
                              {theme === "dark"
                                ? data.iconDark
                                : data.iconLight}
                            </div>
                            <span>{data.title}</span>
                          </div>
                        </Link>
                      )}
                    </div>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}