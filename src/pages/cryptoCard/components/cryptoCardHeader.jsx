import { Link } from "react-router-dom";

const CryptoCardHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center my-5 gap-10">
        <div className="flex flex-col justify-start gap-10 w-1/2">
          <h1 className="text-6xl text-[#f39200] font-semibold">
            کریپتوکارت یوبیتکس
          </h1>
          <p className="text-lg">
            یوبیتکس برای اولین بار با طراحی کارت هدیه ارز دیجیتال با عنوان
            کریپتوکارت به کاربران خود امکان می‌دهد تا هدیه‌ای متفاوت‌تر و
            جذاب‌تر از همیشه به عزیزان خود دهند.
          </p>

          <Link className="flex" to={"/redirect-to-platform"}>
            <button className="text-[#f39200] cursor-pointer transition-all px-8 py-4 bg-[#f39200] bg-opacity-10 rounded-md">
              ساخت کریپتوکارت
            </button>
          </Link>
        </div>
        <div className="w-1/2 max-md:hidden">
          <img
            src={
              "https://ipfs.ubitex.io/ipfs/QmJlFpEzaC4rNQseu33SvSwFYWcgI25oCOSqNis5yMoj"
            }
            alt=""
            className="w-3/4 mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default CryptoCardHeader;
