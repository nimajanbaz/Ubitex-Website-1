import { BsClockHistory } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import PostLevel from "./postLevel";

const PostCard = ({ item, showCategory }) => {
  return (
    <>
      <Link to={"/blog/posts/" + item.slug}>
        <div
          className=" grow h-full relative border border-gray-100 dark:bg-[#051A36] dark:border-[#092c59] dark:hover:bg-[#061f41] pb-3 rounded-xl hover:shadow-xl transition-all dark:hover:shadow-2xl"
          key={item._id}>
          <div className="relative">
            <div>
              <img
                className="object-cover rounded-xl"
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <div className="top-0 right-0 absolute flex mx-3 space-x-2 space-x-reverse ">
              {showCategory ? item.categories.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="mt-3 px-2 py-1 text-center text-sm text-white bg-black rounded-md ">
                    {item.label}
                  </span>
                );
              }) : null}
            </div>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className=" mx-5 text-[#1d1d1d] dark:text-[#e9e9e9] text-xl my-8 mb-10">
              {item.title}
            </h2>
            <div className=" text-[#9e9e9e] text-sm dark:text-[#a3a3a3] flex space-x-3 space-x-reverse items-center absolute bottom-5 justify-center mx-5">
              <div>
                <PostLevel level={item.level} />
              </div>
              <div className="lex items-center space-x-1 flex space-x-reverse rounded-md max-sm:hidden">
                <HiOutlineCalendar />
                <span>
                  {new Date(item.createDateTime).toLocaleDateString("fa-IR")}
                </span>
              </div>
              <div className="flex items-center space-x-1 space-x-reverse rounded-md">
                <BsClockHistory />
                <span>{Math.round(item.content.length / 10 / 200)}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;