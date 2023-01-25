import { Link } from "react-router-dom";
import SocialIcons from "../../../components/socialIcons";

const WriterBox = ({ item }) => {
  return (
    <>
      <div className=" rtl-grid mx-auto p-10 bg-gray-50 dark:bg-[#051A36] border border-gray-100 dark:border-[#092c59] rounded-3xl flex flex-col justify-center items-center">
        <div className="w-full flex items-center space-x-8 space-x-reverse">
          <img
            className="!w-[100px] !h-[100px] object-cover rounded-full loading-animation"
            src={item.profilePhoto}
            alt={item.name}
          />
          <div className="flex flex-col space-y-4">
            <Link to={`/blog/writers/${item.slug}`}>
              <div className="flex text-2xl text-[#f39200]">{item.name}</div>
            </Link>
            <div className=" text-sm">{item.description}</div>
            <div className=" flex space-x-reverse space-x-3 text-lg">
              {item.socialMedia.map((item) => {
                return <SocialIcons item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriterBox;
