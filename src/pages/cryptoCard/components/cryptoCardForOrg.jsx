import TitleBox from "../../../components/titleBox";
import { HiOfficeBuilding } from "react-icons/hi";

const CryptoCardForOrg = () => {
  return (
    <div>
      <div className="grid grid-cols-8 rtl-grid gap-8 mt-10">
        <div className="lg:col-span-3 md:col-span-8 col-span-8 flex flex-col space-y-4 leading-relaxed text-justify text-[16px]">
          <TitleBox
            icon={<HiOfficeBuilding />}
            title={"کریپتوکارت برای شرکت‌ها و سازمان‌ها"}
          />
          <p>
            شرکت‌ها و سازمان‌ها می‌توانند به راحتی به هر تعداد کارت هدیه ارز
            دیجیتال ساخته و آن را به کارکنان یا مشتریان خود هدیه دهند.
            کریپتوکارت هدیه بسیار ارزشمندی به عنوان هدایا‌ی سازمانی است. از این
            نظر که می‌تواند فرصت‌ سرمایه‌گذاری و ورود به بازار ارزهای دیجیتال را
            برای کارکنان و مشتریان خود فراهم کنند.
          </p>
        </div>
        <div className="lg:col-span-5 md:col-span-8 col-span-8">
          <img
            src={
              "https://ipfs.ubitex.io/ipfs/QmoKzT6TAGeZIcUZeltW9OAW62KTOWw9PdtRKXGKRzKD"
            }
            alt=""
            className="w-3/4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoCardForOrg;
