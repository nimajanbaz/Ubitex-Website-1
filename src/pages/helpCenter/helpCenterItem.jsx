import React from "react";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import { help_center_data } from "../../data/helpCenterData";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const HelpCenterItem = () => {
  const { slug } = useParams();
  let navigate = useNavigate();

  return (
    <>
      <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="flex flex-col my-10 h-auto">
          {help_center_data
            .filter((item) => item.slug === `/support-center/guide/${slug}`)
            .map((item) => {
              return (
                <>
                  <Header title={`راهنمای ${item.title}`} />

                  <div className="mb-10 flex justify-between items-center flex-row-reverse" key={item.id}>
                    <div className="flex flex-col space-y-3 rtl-grid">
                      <h1 className="text-[#f39200] text-3xl font-semibold">
                        راهنمای {item.title}
                      </h1>
                      <p>{item.text}</p>
                    </div>
                    <button
                      onClick={() => navigate(-1)}
                      className="px-6 py-2 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200] flex space-x-2 space-x-reverse items-center justify-center flex-row-reverse">
                      <span>بازگشت</span>
                      <HiArrowSmLeft />
                    </button>
                  </div>
                  <div className="xl:h-[700px] lg:h-[500px] md:h-[400px] sm:h-[400px] max-sm:h-[200px] w-full loading-animation rounded-2xl">
                    <iframe
                      src={item.videoLink}
                      title={item.title}
                      allowFullScreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      className="w-full h-full rounded-2xl"></iframe>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HelpCenterItem;
