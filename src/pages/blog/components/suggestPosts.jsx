import React, { useState, useEffect } from "react";
import { GET_BLOG_POST_URL } from "../../../config/api.config";

import PostCard from "./postCard";

const SuggestPosts = () => {
  const [data, setDate] = useState(null);

  useEffect(() => {
    fetch(GET_BLOG_POST_URL)
      .then((response) => response.json())
      .then((data) => setDate(data.slice(1, 4)));
  }, []);

  return (
    <>
      <div className=" rtl-grid grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-display mt-10">
        {data
          ? data.map((item) => {
              return <PostCard item={item} showCategory />;
            })
          : null}
      </div>
    </>
  );
};

export default SuggestPosts;
