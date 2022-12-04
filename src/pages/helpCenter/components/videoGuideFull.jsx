import { help_center_data } from "../../../data/helpCenterData";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import Header from "../../../components/header";

const VideoGuide = () => {
  return (
    <>
      <Header title={"راهنمای تصویری"} />
      <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto">
        <div className="mb-10 w-full relative">
          <div className="my-10 flex justify-between items-center flex-row-reverse">
            <div className="flex flex-col space-y-3">
              <h3 className="text-[#f39200] text-3xl font-semibold">
                راهنمای تصویری
              </h3>
            </div>
            <Link to={"/support-center"}>
              <button className="px-6 py-2 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200] flex space-x-2 space-x-reverse items-center justify-center flex-row-reverse">
                <span>بازگشت</span>
                <HiArrowSmLeft />
              </button>
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-3 grid-cols-1 mb-10 rtl-grid">
            {help_center_data.map((guide) => {
              return (
                <div className="bg-gray-50 dark:bg-[#051a36] p-3 rounded-md flex flex-col space-y-4">
                  <img
                    src={guide.img}
                    alt=""
                    className="object-cover w-full rounded-md"
                  />
                  <h3 className="text-xl font-semibold px-3">{guide.title}</h3>
                  <p className="px-3 text-sm">{guide.text}</p>
                  <Link to={guide.slug}>
                    <button className="px-4 py-2 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200] w-full">
                      اطلاعات بیشتر
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGuide;
