import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const CreateCryptoCard = () => {
  return (
    <>
      <div className="p-16 flex flex-col justify-center items-center bg-gray-50 dark:bg-[#051a36] rounded-3xl space-y-5 -mt-12">
        <h3 className="text-[#f39200] text-2xl font-semibold">
          هم اکنون کریپتوکارت خود را بسازید
        </h3>
        <p>
          امکان ساخت کارت هدیه ارز دیجیتال با قابلیت شخصی‌سازی از طریق
          کریپتوکارت یوبیتکس فراهم شده است.
        </p>
        <div className="flex space-x-6">
          <Link to={"/redirect-to-platform"}>
            <button className="px-8 py-3 rounded-md bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 transition-all text-[#f39200] flex flex-row-reverse space-x-2 justify-center items-center">
              <HiArrowSmLeft />
              <span>ساخت کریپتوکارت</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateCryptoCard;
