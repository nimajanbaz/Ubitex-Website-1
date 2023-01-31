import { Empty } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb2 from "../../../components/breadcrumb";
import BlogSingleCategoryHeaderSkeleton from "../../../components/skeleton/blogSingleCategoryHeaderSkeleton";
import PostCardSkeleton from "../../../components/skeleton/blogSingleCategorySkeleton";
import { GET_BLOG_CATEGORIES_URL } from "../../../config/api.config";
import PostCard from "../components/postCard";

const SingleCategory = () => {
  const [data, setDate] = useState(null);
  const [title, setTitle] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch(`${GET_BLOG_CATEGORIES_URL}/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setDate(data);
        setTitle(data.label);
      });
  }, [slug]);

  const breadcrumbItems = [
    {
      href: "/blog/category",
      label: "دسته بندی‌ها",
    },
    {
      href: `/blog/category/${slug}`,
      label: title,
    },
  ];

  return (
    <>
      {data ? (
        <>
          <div className="mt-10 mx-auto w-4/5">
            <div className="relative w-full sm:h-[200px] md:h-[400px]">
              <img
                className="loading-animation object-cover rounded-3xl "
                src={data.banner}
                alt={data.label}
              />
              <div className="absolute flex space-y-5 flex-col justify-center rounded-3xl items-center top-0 left-0 bg-black dark:bg-[#04162D] bg-opacity-30 dark:bg-opacity-40  text-white w-full h-full">
                <h2 className="text-5xl font-semibold">{data.label}</h2>
                <div className="flex flex-row space-x-1">
                  <span>مقاله</span>
                  <span>{data.posts ? data.posts.length : 0}</span>
                </div>
              </div>
            </div>
            <div className="relative w-[144px] h-[144px] rtl-grid mx-auto p-1 -mt-20 bg-white dark:bg-[#051A36] border border-gray-100 dark:border-[#092c59] rounded-full shadow-2xl flex flex-col justify-center items-center">
              <img
                className=" object-cover rounded-full "
                src={data.profilePhoto}
                alt={data.label}
              />
            </div>

            <div className="rtl-grid">
            <Breadcrumb2 items={breadcrumbItems} />
          </div>
          </div>


          {data.posts ? (
            <div className="px-10 sm:px-10 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
              <div className="rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 space-x-reverse mt-10">
                {data.posts.map((item) => {
                  return <PostCard item={item} showCategory={false} />;
                })}
              </div>
            </div>
          ) : (
            <div className="w-full mx-auto my-20 rtl-grid">
              <Empty
                description={
                  <div className="!font-display flex flex-col space-y-3">
                    <span>هنوز پستی برای این دسته بندی منتشر نشده است :(</span>
                  </div>
                }></Empty>
            </div>
          )}
        </>
      ) : (
        <>
          <BlogSingleCategoryHeaderSkeleton />
          <div className="px-10 sm:px-10 text-right mx-auto my-36 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
            <div className="rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 space-x-reverse mt-10">
              <PostCardSkeleton />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleCategory;
