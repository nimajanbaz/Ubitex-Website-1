import React, { useState, useEffect } from "react";
import { MdOutlineFiberNew } from "react-icons/md";
import TitleBox from "./titleBox";
import PostCard from "./postCard";
import PostCardSkeleton from "../../../components/skeleton/blogSingleCategorySkeleton";
import { GET_BLOG_POST_URL } from "../../../config/api.config";

const LastPostsHomePage = () => {
  const [data, setDate] = useState(null);

  useEffect(() => {
    fetch(GET_BLOG_POST_URL)
      .then((response) => response.json())
      .then((res) => setDate(res.slice(0, 6)));
  }, []);

  return (
    <div className="flex flex-col space-y-10">
      <TitleBox icon={<MdOutlineFiberNew />} title={"جدیدترین مطالب"} />
      <div className=" rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-display mt-10">
        {data ? data.map((item) => {
          return <PostCard item={item} showCategory />;
        }) : <PostCardSkeleton />}
      </div>
    </div>
  );
};

export default LastPostsHomePage;