import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const CommingSoon = () => {
  let navigate = useNavigate();

  return (
    <>
      <Header title={"به زودی"} />

      <div className="h-screen flex justify-center items-center flex-col">
        <h2 className="text-[#f39200] text-5xl font-semibold">
          Comming Soon...
        </h2>
        <p className="text-3xl my-10">
          صفحه مورد نظر به زودی در دسترس قرار میگیرد
        </p>
        <button
          className="px-6 py-3 rounded-md bg-[#f39200] bg-opacity-10 text-[#f39200]"
          onClick={() => navigate(-1)}>
          بازگشت
        </button>
      </div>
    </>
  );
};

export default CommingSoon;
