import React, { useState, useEffect } from "react";
import { MdOutlineFiberNew } from "react-icons/md";
import TitleBox from "./titleBox";
import PostCard from "./postCard";
import PostCardSkeleton from "../../../components/skeleton/blogSingleCategorySkeleton";

const LastPostsHomePage = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch("https://bapi.ubitex.io/v1.0/posts")
      .then((response) => response.json())
      .then((res) => setdata(res.slice(0, 6)));
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