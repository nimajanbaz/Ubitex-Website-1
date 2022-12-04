import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Acardeon = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="my-10 flex justify-between items-center flex-row-reverse">
        <div className="flex flex-col space-y-3">
          <h3 className="text-[#f39200] text-3xl font-semibold">
            سوالات متداول
          </h3>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200] flex space-x-2 space-x-reverse items-center justify-center flex-row-reverse">
          <span>بازگشت</span>
          <HiArrowSmLeft />
        </button>
      </div>
      {data.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className="my-10 mx-auto w-full rounded-xl bg-gray-200 bg-opacity-70 dark:bg-[#051a36] py-4 px-6 grid grid-cols-6 items-start rtl-grid">
              <div className="col-span-2">
                <span className="text-xl font-semibold text-[#f39200] p-4">
                  {item.title}
                </span>
              </div>
              <div className="col-span-4">
                {item.items.map((subItem) => {
                  return (
                    <Disclosure as="div" className={"w-full my-3"}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            key={subItem.id}
                            className="transition-all flex w-full justify-between rounded-lg bg-gray-50 dark:bg-[#062042] dark:hover:bg-[#07244b] p-4 font-medium text-gary-700 dark:text-gray-200 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{subItem.title}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-[#f39200]`}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0">
                            <Disclosure.Panel className="transition-all p-4 mt-3 text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-[#062042] rounded-lg">
                              {subItem.text}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Acardeon;
