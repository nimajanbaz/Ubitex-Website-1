import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SocialIcons from "../../../components/socialIcons";
import PostCardSkeleton from "../../../components/skeleton/blogSingleCategorySkeleton";
import PostCard from "../components/postCard";
import TitleBox from "../components/titleBox";
import { FaPenNib } from "react-icons/fa";
import { GET_BLOG_WRITERS_URL } from "../../../config/api.config";
import BlogWriterHeaderSkeleton from "../../../components/skeleton/blogWriterHeaderSkeleton";

const CreatorPage = () => {
  const [data, setDate] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setDate(null);
    fetch(`${GET_BLOG_WRITERS_URL}/${slug}`)
      .then((response) => response.json())
      .then((data) => setDate(data));
  }, [slug]);

  return (
    <>
      {data ? (
        <>
          <div className="mt-10 mx-auto md:w-4/5 w-full">
            <img
              className="loading-animation object-cover rounded-3xl w-full max-sm:h-[250px] sm:h-[350px] md:h-[400px]"
              src={data.banner}
              alt={data.name}
            />
            <div className="relative rtl-grid mx-auto p-14 -mt-32 bg-white dark:bg-[#051A36] border border-gray-100 dark:border-[#092c59] rounded-3xl w-4/5 shadow-2xl flex flex-col justify-center items-center">
              <div className="w-full flex md:flex-row flex-col items-center justify-center md:justify-start gap-8">
                <img
                  className="!w-[150px] !h-[150px] object-cover rounded-full loading-animation"
                  src={data.profilePhoto}
                  alt={data.name}
                />
                <div className="flex flex-col justify-center md:justify-start items-center md:items-start space-y-6">
                  <div className="font-semibold text-3xl text-[#f39200]">
                    {data.name}
                  </div>
                  <div className=" text-sm">{data.description}</div>
                  <div className=" flex gap-2 text-lg">
                    {data.socialMedia.map((item) => {
                      return <SocialIcons item={item} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 sm:px-0 max-sm:px-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
            <TitleBox icon={<FaPenNib />} title={"مطالب این نویسنده"} />

            <div className=" rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-display mt-10">
              {data.posts.map((item) => {
                return <PostCard item={item} showCategory />;
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <BlogWriterHeaderSkeleton />
          <div className="px-10 sm:px-0 max-sm:px-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
            <TitleBox icon={<FaPenNib />} title={"مطالب این نویسنده"} />
            <div className=" rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-display mt-10">
              <PostCardSkeleton />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreatorPage;
