import { center_boxes } from "../../../data";
import about from "../../../assets/img/about-2.webp";

const Feature = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto items-center text-right">
        <div>
          <div className="flex flex-col space-y-3 mb-7">
            <h3 className="text-3xl font-semibold text-[#f39200]">
              {center_boxes.title}
            </h3>
          </div>
          <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-7 rtl-grid cursor-pointer">
            {center_boxes.items.map((data) => {
              return (
                <div
                  className="dark:shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] p-7 dark:hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-gray-200 hover:bg-gray-300 dark:bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-2xl flex flex-col items-start space-y-3 md:mb-3 z-30 cursor-pointer"
                  key={data.id}>
                  <span className="text-3xl text-right dark:bg-[#062246] bg-gray-50 rounded-lg p-3 text-[#f39200]">
                    {data.icon}
                  </span>
                  <h2 className="text-lg text-[#f39200]">{data.title}</h2>
                  <p className="text-sm text-right text-gray-700 dark:text-gray-300">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <img src={about} alt="" className="mx-auto animate-ver_5s" />
        </div>
      </div>
    </>
  );
};

export default Feature;
