import { why_cryptocard_items } from "../../../data/whyCryptoCard";

const WhyCryptoCard = () => {
  return (
    <>
      <div className="my-10 flex flex-col justify-center items-center rtl-grid">
        <h2 className="text-[#f39200] text-3xl font-semibold">
          چرا کریپتوکارت‌های یوبیتکس؟
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-10 transition-all">
          {why_cryptocard_items.map((item) => {
            return (
              <div
                key={item.id}
                className=" transition-all cursor-pointer dark:hover:bg-[#07244b] hover:bg-gray-100 bg-gray-50 dark:bg-[#051b38] p-12 rounded-xl flex flex-col justify-center text-center space-y-5">
                <span className="text-[#f39200] text-4xl p-3 rounded-lg bg-[#f39200] bg-opacity-10 flex justify-center mx-auto">
                  {item.icon}
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhyCryptoCard;
