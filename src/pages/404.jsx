import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const NotFound = () => {
  let navigate = useNavigate();

  return (
    <>
      <Header title={"404"} />

      <div className="h-screen flex justify-center items-center flex-col">
        <h2 className="text-[#f39200] text-[140px] font-semibold">404</h2>
        <p className="text-3xl mb-10">!صفحه مورد نظر پیدا نشد</p>
        <button
          className="px-6 py-3 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200]"
          onClick={() => navigate(-1)}>
          بازگشت
        </button>
      </div>
    </>
  );
};

export default NotFound;
