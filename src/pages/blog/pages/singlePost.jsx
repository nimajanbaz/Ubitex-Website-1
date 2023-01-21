import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import PostLevel from "../components/postLevel";
import ReactHtmlParser from "react-html-parser";
import { MdOutlineFiberNew } from "react-icons/md";
import { Link } from "react-router-dom";
import AddComment from "../components/addComment";
import SuggestPosts from "../components/suggestPosts";
import SocialShare from "../components/socialShare";
import TitleBox from "../components/titleBox";

const SinglePost = () => {
  const [data, setdata] = useState();
  const { slug } = useParams();

  useEffect(() => {
    fetch(`https://bapi.ubitex.io/v1.0/posts/${slug}`)
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, [slug]);

  return (
    <>
      {data ? (
        <div className="sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mx-auto rtl-grid leading-7 p-10">
          <div className="flex space-x-3 space-x-reverse mt-10">
            {data.categories.map((item) => {
              return (
                <Link to={"/blog/category/" + item.slug}>
                  <span
                    key={item}
                    className="mt-3 px-4 py-1 text-sm text-center text-[#f39200] bg-[#f392002a] rounded-md hover:bg-[#f3920040]">
                    {item.label}
                  </span>{" "}
                </Link>
              );
            })}
          </div>
          <div className="  mx-auto mt-5 ">
            <img
              className="object-cover mx-auto rounded-xl h-auto w-full"
              src={data.thumbnail}
              alt={data.title}
            />
          </div>
          <div className="flex flex-col my-10 space-y-5">
            <h1 className="rtl-grid text-[#454545] dark:text-gray-300 font-bold text-3xl">
              {data.title}
            </h1>
            <div className=" text-[#9e9e9e] text-sm max-sm:text-xs dark:text-[#a3a3a3] flex  space-x-3 space-x-reverse ">
              <PostLevel level={data.level} />
              <div className="space-x-1 space-x-reverse px-4 py-2 rounded-md bg-gray-400 bg-opacity-10">
                <span>تاریخ انتشار:</span>
                <span>
                  {new Date(data.createDateTime).toLocaleDateString("fa-IR")}
                </span>
              </div>
              <div className="flex items-center space-x-1 space-x-reverse px-4 py-2 rounded-md bg-gray-400 bg-opacity-10">
                <BsClockHistory />
                <span>{Math.round(data.content.length / 10 / 200)}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
          <div className="my-5 text-[#353535] dark:text-gray-300 text-justify flex flex-col space-y-2 ubitex">
            {ReactHtmlParser(data.content)}
          </div>
          <div >
            <ul className="flex mx-auto space-x-3 space-x-reverse">
              {data.tags.map((tag) => {
                return (
                  <Link to={"/tags/" + tag} key={tag}>
                    <li className="px-3 py-1 transition-all text-center text-[#f39200] bg-[#f39200] bg-opacity-10 rounded-md hover:bg-[#f39200] hover:bg-opacity-20">
                      #{tag.replace(/ /g, '_')}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="my-20">
            <SocialShare />
          </div>
          <div className="mb-20">
            <div>
              <TitleBox icon={<MdOutlineFiberNew />} title={"جدیدترین مطالب"} />
            </div>
            <SuggestPosts />
          </div>
          <div>
            <AddComment postId={data._id} />
            <div className="mb-20">
              <ul className="flex mx-auto space-x-3 space-x-reverse ">
                {data.comments
                  ? data.comments.map((item) => {
                      return (
                        <li
                          key={item._id}
                          className="mt-3 px-3 text-center text-[#f39200] bg-[#f392002a] rounded-md hover:bg-[#f3920040]">
                          {item.comment}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SinglePost;
