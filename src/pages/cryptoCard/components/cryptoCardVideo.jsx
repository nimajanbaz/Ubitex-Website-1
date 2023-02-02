import { MdCardGiftcard } from "react-icons/md";
import TitleBox from "../../../components/titleBox";

const CryptoCardVideo = () => {
  const textItems = [
    '1.	وارد حساب کاربری خود شوید و از نوار ابزار سمت راست، گزینه "کارت هدیه" را انتخاب کنید.',
    "2.	از بین قالب‌های موجود در دسته‌بندی‌های مختلف طرح دلخواه خود را انتخاب کنید.",
    "3.	متن‌های دلخواه خود را مطابق راهنمای موجود در قسمت‌های مشخص شده وارد کنید",
    "4.	رمزارز دلخواه خود و حجم مورد نظر جهت هدیه دادن را انتخاب کنید",
    "5.	سپس اطلاعات هدیه‌گیرنده اعم از نام و شماره موبایل (و ایمیل در صورت تمایل) را وارد کنید",
    "6.	در مرحله تنظیمات، می‌توانید نحوه اطلاع‌رسانی به هدیه‌گیرنده و همچنین تاریخ اعتبار کارت صادر شده (در صورت تمایل) را انتخاب کنید",
  ];

  return (
    <div>
      <TitleBox
        icon={<MdCardGiftcard />}
        title={"راهنمای ساخت کریپتوکارت یوبیتکس"}
      />
      <div className="grid grid-cols-8 rtl-grid gap-8 mt-10">
        <div className="lg:col-span-3 md:col-span-8 col-span-8 flex flex-col space-y-4 leading-relaxed bg-gray-50 dark:bg-[#051a36] rounded-3xl p-10 text-justify text-[16px]">
          {textItems.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="lg:col-span-5 md:col-span-8 col-span-8">
          <div className="xl:h-[500px] lg:h-[500px] md:h-[400px] sm:h-[400px] max-sm:h-[200px] w-full loading-animation rounded-3xl">
            <iframe
              src={
                "https://www.aparat.com/video/video/embed/videohash/WI3hQ/vt/frame"
              }
              title={"Create Crypto Card"}
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              className="w-full h-full rounded-2xl"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCardVideo;
