import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const MyDialog = ({
  title,
  text,
  buttonText,
  buttonUrl,
  dialogOpen,
  onDialogClose,
  fullwidthButton,
  image,
}) => {
  return (
    <>
      <Transition appear show={dialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onDialogClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-[#04162d] bg-opacity-40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto font-display">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90">
                <Dialog.Panel className=" text-right w-full max-w-2xl transform overflow-hidden rounded-xl bg-gray-200 dark:bg-[#062042] p-10 align-middle shadow-xl transition-all rtl-grid">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-[#f39200]">
                    {title}
                  </Dialog.Title>
                  {image ? (
                    <img src={image} alt={title} className="w-full my-5" />
                  ) : null}
                  <div className="mt-4">
                    <p className="text-gray-600 dark:text-gray-300">{text}</p>
                  </div>

                  <div className="mt-6">
                    {buttonUrl ? (
                      <Link to={"/redirect-to-platform"}>
                        <button
                          type="button"
                          className={`focus:outline-none text-[#f39200] cursor-pointer transition-all px-5 py-3 bg-[#f39200] bg-opacity-10 rounded-md focus:border-none focus:ring-0 focus-within:border-none focus-within:ring-0 ${
                            fullwidthButton ? "w-full" : null
                          }`}>
                          {buttonText}
                        </button>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={onDialogClose}
                        className={`focus:outline-none text-[#f39200] cursor-pointer transition-all px-5 py-3 bg-[#f39200] bg-opacity-10 rounded-md focus:border-none focus:ring-0 focus-within:border-none focus-within:ring-0 ${
                          fullwidthButton ? "w-full" : null
                        }`}>
                        {buttonText}
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyDialog;
