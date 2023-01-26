import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_TAGS_URL } from "../../../config/api.config";
import PostCardSkeleton from "../../../components/skeleton/blogSingleCategorySkeleton";
import PostCard from "../components/postCard";
import { Empty } from "antd";

const Tags = () => {
  const [data, setDate] = useState(null);
  const { tag } = useParams();

  useEffect(() => {
    fetch(`${GET_BLOG_TAGS_URL}/${tag}`)
      .then((response) => response.json())
      .then((res) => {
        if (res.code === 404) {
          setDate("NULL_RES");
        } else {
          setDate(res);
        }
      });
  }, [tag]);

  return (
    <>
      {data !== "NULL_RES" ? (
        <div className=" px-10 space-y-20 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
          <div className="rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 font-display mt-10">
            {data ? (
              data.map((item) => {
                return <PostCard item={item} showCategory={false} />;
              })
            ) : (
              <PostCardSkeleton />
            )}
          </div>
        </div>
      ) : data === "NULL_RES" ? (
        <div className="my-20">
          <Empty
            description={
              <div className="!font-display flex flex-col space-y-3">
                <span>محتوایی برای تگ مورد نظر پیدا نشد :(</span>
              </div>
            }></Empty>
        </div>
      ) : null}
    </>
  );
};

export default Tags;
