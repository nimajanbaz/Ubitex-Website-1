import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { faq_data } from "../../../data/faq";

const AcardeonSlime = () => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <h3 className="text-[#f39200] text-3xl font-semibold">سوالات متداول</h3>
      </div>
      {faq_data
        .filter((item) => item.id === 7)
        .map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="my-10 mx-auto w-full rounded-3xl bg-gray-200 bg-opacity-70 dark:bg-[#051a36] p-6 grid grid-cols-2 max-lg:grid-cols-1 gap-4 items-start rtl-grid">
                {item.items.map((subItem) => {
                  return (
                    <div>
                      <Disclosure as="div" className={"w-full"}>
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
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
    </>
  );
};

export default AcardeonSlime;
