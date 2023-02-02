import headerImage from "../../../assets/img/global-pc.png";

const BrandHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center my-5 gap-10">
        <div className="flex flex-col justify-start gap-10">
          <h1 className="text-6xl text-[#f39200] font-semibold">UBITEX | یوبیتکس</h1>
          <p className="text-lg">لوگوها و رنگ‌های سازمانی برند یوبیتکس </p>
        </div>
        <div className="w-1/2 max-md:hidden">
          <img src={headerImage} alt="" className="w-3/4 mx-auto" />
        </div>
      </div>
    </>
  );
};

export default BrandHeader;
