import Header from "../../components/header";
// import BrandBook from "./components/brandBook";
import BrandHeader from "./components/brandHeader";
import BrandColors from "./components/colors";
import BrandLogoList from "./components/logos";

const BrandMaterial = () => {
  return (
    <>
      <Header title={"برند متریال | صرافی ارزدیجیتال یوبیتکس"} />
      <div className="px-10 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-5/6 rtl-grid flex flex-col gap-10">
        <BrandHeader />
        <BrandLogoList />
        <BrandColors />
        {/* <BrandBook /> */}
      </div>
    </>
  );
};

export default BrandMaterial;
