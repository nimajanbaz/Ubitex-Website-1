import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";

const ContactHomePage = () => {
  return (
    <>
      <div className="p-16 mb-10 flex flex-col justify-center items-center bg-gray-50 dark:bg-[#051a36] rounded-3xl space-y-5">
        <h3 className="text-[#f39200] text-2xl font-semibold">
          پاسخ سوال خود را پیدا نکردید؟
        </h3>
        <p>
          میتوانید از طریق تیکت یا چت آنلاین شناور پایین صفحه با کارشناسان بخش پشتیبانی یوبیتکس
          در ارتباط باشید
        </p>
        <div className="flex space-x-6">
          <Link to={"/redirect-to-platform"}>
            <button className="px-8 py-3 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200] flex space-x-3 justify-center items-center">
              <span>ارسال تیکت</span>
              <span><HiMail /></span>
            </button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default ContactHomePage;
