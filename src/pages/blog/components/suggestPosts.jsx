import React, { useState, useEffect } from "react";

import PostCard from "./postCard";

const SuggestPosts = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://bapi.ubitex.io/v1.0/posts")
      .then((response) => response.json())
      .then((data) => setdata(data.slice(0, 3)));
  }, []);

  return (
    <>
      <div className=" rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-display mt-10">
        {data.map((item) => {
          return <PostCard item={item} showCategory />;
        })}
      </div>
    </>
  );
};

export default SuggestPosts;
