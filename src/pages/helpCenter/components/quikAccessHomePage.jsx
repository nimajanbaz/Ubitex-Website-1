import { Link } from "react-router-dom";
import { quik_access_data } from "../../../data/helpCenterData";

const QuikAccessHomePage = () => {
  return (
    <>
      <h3 className="text-[#f39200] text-3xl font-semibold">دسترسی سریع</h3>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 max-sm:grid-cols-2 gap-5 my-10 rtl-grid">
        {quik_access_data.map((item) => {
          return (
            <Link to={item.href} key={item.id}>
              <div className="flex flex-col space-y-3 justify-center items-center bg-[#f39200] bg-opacity-0 rounded-lg p-5 hover:bg-opacity-10 hover:text-[#f39200] cursor-pointer  transition-all">
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

export default QuikAccessHomePage;
