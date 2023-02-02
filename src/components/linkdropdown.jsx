import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Linkdropdown({ title, items }) {
  return (
    <div className=" w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-600 bg-opacity-10 px-4 p-2 text-xs font-medium hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {title}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-400 hover:text-gray-200"
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
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-200 dark:bg-[#0a3063] dark:text-gray-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {items.map((item) => {
                let domain = new URL(item);
                return (
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={item}
                        target="_blank"
                        rel="noreferrer"
                        className={`${
                          active ? "bg-gray-50" : "text-gray-900 dark:text-gray-300"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {domain.hostname.replace("www.", "")}
                      </a>
                    )}
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
