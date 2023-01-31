import TitleBox from "../../blog/components/titleBox";
import { FaPaintBrush } from "react-icons/fa";
import { brand_logo_list } from "../../../data/brandLogos";

const BrandLogoList = () => {
  return (
    <>
      <TitleBox icon={<FaPaintBrush />} title={"لوگو‌های یوبیتکس"} />

      <div className="grid items-center grid-cols-4 gap-5">
        {brand_logo_list.light.map((item) => {
          return (
            <>
              <div className="p-10 flex flex-col gap-7 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-100 grow h-full relative">
                <div className="w-3/4 mx-auto flex items-center justify-center">
                  <img src={item.webpSrc} alt="" className="max-h-20" />
                </div>
                <div className="flex items-center gap-3 w-full">
                  <button className="w-full flex">
                    <a
                      href={item.pngSrc}
                      alt=""
                      target={"_blank"}
                      rel="noreferrer"
                      className="w-full px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-600 transition-all">
                      PNG
                    </a>
                  </button>

                  <button className="w-full flex">
                    <a
                      href={item.svgSrc}
                      alt=""
                      target={"_blank"}
                      rel="noreferrer"
                      className="w-full px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-600 transition-all">
                      SVG
                    </a>
                  </button>
                </div>
              </div>
            </>
          );
        })}

        {brand_logo_list.dark.map((item) => {
          return (
            <>
              <div className="p-10 flex flex-col gap-7 items-center justify-center rounded-xl border border-[#092c59] bg-[#051A36] grow h-full relative">
                <div className="w-3/4 mx-auto flex items-center justify-center">
                  <img src={item.webpSrc} alt="" className="max-h-20" />
                </div>
                <div className="flex items-center gap-3 w-full">
                  <button className="w-full flex">
                    <a
                      href={item.pngSrc}
                      alt=""
                      target={"_blank"}
                      rel="noreferrer"
                      className="w-full px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 dark:text-gray-600 transition-all">
                      PNG
                    </a>
                  </button>

                  <button className="w-full flex">
                    <a
                      href={item.svgSrc}
                      alt=""
                      target={"_blank"}
                      rel="noreferrer"
                      className="w-full px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 dark:text-gray-600 transition-all">
                      SVG
                    </a>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BrandLogoList;
