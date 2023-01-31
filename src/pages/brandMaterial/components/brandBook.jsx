import TitleBox from "../../blog/components/titleBox";
import { BiBookHeart } from "react-icons/bi";
import { FiDownloadCloud } from "react-icons/fi";

const BrandBook = () => {
  return (
    <>
      <TitleBox icon={<BiBookHeart />} title={"کتابچه برند یوبیتکس"} />

      <div>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      </div>

      <div>
        <button className="w-1/4 mx-auto flex">
          <a
            href='https://ubitex.io/downloads/brandMaterial/png/ubitex-03.png'
            alt=""
            target={"_blank"}
            rel="noreferrer"
            className="w-full px-6 py-4 rounded-lg flex items-center gap-2 justify-center text-[#f39200] bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 transition-all">
            <span className="text-xl"><FiDownloadCloud /></span>
            <span>دانلود برندبوک یوبیتکس</span>
          </a>
        </button>
      </div>
    </>
  );
};

export default BrandBook;
