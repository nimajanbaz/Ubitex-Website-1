import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCardSkeleton from "../../../components/skeleton/blogSingleCategorySkeleton";
import PostCard from "../components/postCard";

const SingleCategory = () => {
  const [data, setdata] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch(`https://bapi.ubitex.io/v1.0/categories/${slug}`)
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, [slug]);

  return (
    <>
      <div className=" gap-8 font-display mt-10 mx-auto my-20 w-3/5 ">
        <div className="rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 space-x-reverse mt-10">
          {data
            ? data.posts.map((item) => {
                return <PostCard item={item} showCategory={false} />;
              })
            : <PostCardSkeleton />}
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
