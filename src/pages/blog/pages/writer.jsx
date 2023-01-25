
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SocialIcons from "../../../components/socialIcons";
import PostCardSkeleton from "../../../components/skeleton/blogSingleCategorySkeleton";
import PostCard from "../components/postCard";
import TitleBox from "../components/titleBox";
import { FaPenNib } from "react-icons/fa";

const CreatorPage = () => {
  const [data, setDate] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setDate(null);
    fetch(`https://bapi.ubitex.io/v1.0/writers/${slug}`)
      .then((response) => response.json())
      .then((data) => setDate(data));
  }, [slug]);

  return (
    <>
      {data ? (
        <>
          <div className="mt-10 mx-auto w-4/5">
            <img
              className="loading-animation object-cover rounded-3xl w-full sm:h-[200px] md:h-[400px]"
              src={data.banner}
              alt={data.name}
            />
            <div className="relative rtl-grid mx-auto p-14 -mt-32 bg-white dark:bg-[#051A36] border border-gray-100 dark:border-[#092c59] rounded-xl w-4/5 shadow-2xl flex flex-col justify-center items-center">
              <div className="w-full flex items-center space-x-8 space-x-reverse">
                <img
                  className="w-[144px] h-[144px] object-cover rounded-full"
                  src={data.profilePhoto}
                  alt={data.name}
                />
                <div className="flex flex-col space-y-4">
                  <div className="flex text-2xl text-[#f39200]">
                    {data.name}
                  </div>
                  <div className=" text-sm">{data.description}</div>
                  <div className=" flex space-x-reverse space-x-3 text-lg">
                    {data.socialMedia.map((item) => {
                      return <SocialIcons item={item} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 sm:px-10 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
          <TitleBox icon={<FaPenNib />} title={"مطالب این نویسنده"} />
            <div className=" rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-display mt-10">
              {data ? (
                data.posts.map((item) => {
                  return <PostCard item={item} showCategory />;
                })
              ) : (
                <PostCardSkeleton />
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CreatorPage;
