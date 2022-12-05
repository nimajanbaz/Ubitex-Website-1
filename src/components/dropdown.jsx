import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
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
          <Menu.Items className="absolute mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 dark:bg-[#04162d] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
