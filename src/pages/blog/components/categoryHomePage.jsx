import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import TitleBox from "./titleBox";
import BlogCategoryHomePageSkeleton from "../../../components/skeleton/BlogCategoryHomePageSkeleton";
import { GET_BLOG_CATEGORIES_URL } from "../../../config/api.config";

const CategoryHomePage = () => {
  const [data, setDate] = useState(null);

  useEffect(() => {
    fetch(GET_BLOG_CATEGORIES_URL)
      .then((response) => response.json())
      .then((data) => setDate(data));
  }, []);

  return (
    <div className="flex flex-col space-y-10">
      <TitleBox icon={<BiCategoryAlt />} title={"دسته‌بندی‌ها"} />
      <div className="rtl-grid grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 font-display ">
        {data ? data.map((category) => {
          return (
            <Link to={"/blog/category/" + category.slug}>
              <div
                className="border bg-white border-gray-100 dark:bg-[#061f41] dark:border-[#092c59] dark:hover:bg-[#07254e] p-7 rounded-xl hover:shadow-xl transition-all dark:hover:shadow-2xl"
                key={category._id}>
                <div className="relative">
                  <div className="mx-auto flex w-20 h-20">
                    <img
                      className="object-cover rounded-full"
                      src={category.profilePhoto}
                      alt={category.label}
                    />
                  </div>
                </div>
                <h2 className="mt-5 mx-5 text-[#1d1d1d] dark:text-[#e9e9e9] text-lg text-center">
                  {category.label}
                </h2>
              </div>
            </Link>
          );
        }) : <BlogCategoryHomePageSkeleton />}
      </div>
    </div>
  );
};

export default CategoryHomePage;
