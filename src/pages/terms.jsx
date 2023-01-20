import React from "react";
import { terms_data } from "../data/terms";
import Header from "../components/header";

const AboutUs = () => {
  return (
    <>
      <Header title={"قوانین و مقررات | صرافی ارزدیجیتال یوبیتکس"} />

      <div className="px-4 sm:px-6 text-right max-w-[1200px] mx-auto my-20">
        <div className="p-20 rounded-xl text-gray-700 dark:text-gray-400 bg-white dark:bg-[#051a36]">
          <h2 className="text-[#f39200] text-2xl font-semibold">
            قوانین و شرایط استفاده از خدمات
          </h2>
          <p className="mt-5">
            فعالیت ما بر اساس قوانین جمهوری اسلامی ایران می باشد. یوبیتکس یک
            صرافی آنلاین خرید و فروش رمزارزها بوده و هیچ‌گونه خرید و فروش دلار و
            یا سایر ارزهای کاغذی (فیات) در این صرافی انجام نمی‌شود.
          </p>
          <div>
            {terms_data.map((term) => {
              return (
                <div key={term.id}>
                  <h3 className="my-5 text-[#f39200] font-semibold text-2xl">
                    {term.title}
                  </h3>
                  <ul
                    style={{ listStyleType: "decimal" }}
                    className="rtl-grid leading-loose	">
                    {term.texts.map((text) => {
                      return (
                        <li key={text.id} className="mt-3">
                          {text.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
