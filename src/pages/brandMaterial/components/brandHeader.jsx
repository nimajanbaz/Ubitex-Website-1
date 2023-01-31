import headerImage from "../../../assets/img/global-pc.png";

const BrandHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center my-5 gap-10">
        <div className="flex flex-col justify-start gap-10">
          <h1 className="text-6xl text-[#f39200] font-semibold">UBITEX | یوبیتکس</h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className="w-1/2">
          <img src={headerImage} alt="" className="w-3/4" />
        </div>
      </div>
    </>
  );
};

export default BrandHeader;
