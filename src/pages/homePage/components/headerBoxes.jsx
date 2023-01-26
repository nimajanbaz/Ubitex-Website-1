import { header_boxes } from "../../../data";

const HeaderBoxes = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-8 items-center mx-auto ">
        {header_boxes.map((data) => {
          return (
            <div
              className="rtl-grid dark:shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] p-7 dark:hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-gray-200 hover:bg-gray-300 dark:bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-2xl flex flex-col items-start space-y-4 md:mb-3 lg:-mt-16 z-30 cursor-pointer"
              key={data.id}>
              <span className="text-3xl dark:bg-[#062246] bg-gray-50 rounded-lg p-3 text-[#f39200]">
                {data.icon}
              </span>
              <h2 className="text-gray-700 dark:text-gray-200 text-lg">
                {data.title}
              </h2>
              <p className="text-sm text-right text-gray-700 dark:text-gray-300">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeaderBoxes;
