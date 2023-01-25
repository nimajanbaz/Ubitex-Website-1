import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Breadcrumb2 from "../../../../components/breadcrumb";
import PostCardSkeleton from "../../../../components/skeleton/blogSingleCategorySkeleton";
import { GET_BLOG_POST_URL } from "../../../../config/api.config";
import PostCard from "../../components/postCard";
import Categories from "./components/categories";
import Levels from "./components/levels";

const AllPosts = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [dataFilter, setDateFilter] = useState(null);
  const [data, setDate] = useState(null);

  const breadcrumbItems = [
    {
        href: '/blog/posts',
        label: 'همه پست‌ها'
    }
  ]
  
  useEffect(() => {
    fetch(GET_BLOG_POST_URL)
      .then((response) => response.json())
      .then((res) => setDate(res));
  }, []);

  useEffect(() => {
    if (data) {
      setDateFilter(
        data
          .filter((d) =>
            levelFilter !== "all" ? d.level === Number(levelFilter) : d
          )
          .filter((d) =>
            categoryFilter !== "all"
              ? d.categories.some(i => i.label === categoryFilter)
              : d
          )
      );
    }
  }, [levelFilter, categoryFilter, data]);

  return (
    <>
      <div className="sm:w-full md:w-full lg:w-4/5 xl:w-4/5 2xl:w-3/4 mx-auto rtl-grid leading-7">
        <Breadcrumb2 items={breadcrumbItems} className='mb-5 mt-10' />

        <div className="flex flex-col space-y-3">
          <h2 className="font-semibold text-2xl text-[#f39200]">
            با موضوع بیاموزید
          </h2>

          <div className="flex space-x-8 space-x-reverse items-center">
            <span className="text-gray-400 dark:text-gray-500">
              دسته بندی‌ها
            </span>
            <Categories
              onSelect={(e) => {
                setCategoryFilter(e);
              }}
            />
          </div>

          <div className="flex space-x-8 space-x-reverse items-center">
            <span className="text-gray-400 dark:text-gray-500">
              دسته بندی‌ها
            </span>
            <Levels
              onSelect={(e) => {
                setLevelFilter(e);
              }}
            />
          </div>
        </div>

        <div className=" rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 font-display mt-10">
          {dataFilter ? (
            dataFilter.map((item) => {
              return <PostCard item={item} showCategory />;
            })
          ) : (
            <PostCardSkeleton />
          )}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
