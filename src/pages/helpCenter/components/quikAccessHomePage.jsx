import { Link } from "react-router-dom";
import TitleBox from "../../../components/titleBox";
import { quick_access_data } from "../../../data/helpCenterData";
import { AiFillThunderbolt } from "react-icons/ai";

const QuickAccessHomePage = () => {
  return (
    <>
      <TitleBox icon={<AiFillThunderbolt />} title={"دسترسی سریع"} />
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 max-sm:grid-cols-2 gap-5 my-10 rtl-grid">
        {quick_access_data.map((item) => {
          return (
            <Link to={item.href} key={item.id}>
              <div className="flex flex-col space-y-3 justify-center items-center bg-gray-50 dark:bg-[#051a36] rounded-xl p-8 hover:bg-opacity-10 dark:hover:bg-opacity-10 hover:bg-[#f39200] dark:hover:bg-[#f39200] hover:text-[#f39200] cursor-pointer  transition-all">
                <span className="text-[#f39200] text-4xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default QuickAccessHomePage;
