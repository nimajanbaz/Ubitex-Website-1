import React, { useEffect, useState } from "react";
// import { GET_ALL_CATEGORIES, GET_ALL_POSTS } from "./data/apiURLs";
// import axios from "axios";
import Header from "../../components/header";
// import { BlogHeaderSlider } from "./components/headerSlider-xx";

const BlogHomePage = () => {
  // const [categories, setCategories] = useState([]);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     await axios
  //       .get(GET_ALL_CATEGORIES)
  //       .then((res) => setCategories(res.data.data));
  //     await axios.get(GET_ALL_POSTS).then((res) => setPosts(res.data.data));
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <Header title={"بلاگ"} />

      <div className="text-right max-w-[1300px] mx-auto my-10">
        <div className="flex flex-col space-y-5">
          <h1 className="text-[#f39200] text-4xl font-semibold">
            بلاگ یوبیتکس
          </h1>
          <p className="text-sm">
            پلتفرم مبادلات رمزارزی یوبیتکس با هدف تسهیل معاملات و امنیت خاطر
            کاربران، بر اساس سطوح احراز هویت و میزان فعالیت آن‌ها، کارمزد
            دریافتی را مشخص می‌کند.
          </p>
        </div>

        {/* <BlogHeaderSlider /> */}
      </div>
    </>
  );
};

export default BlogHomePage;
