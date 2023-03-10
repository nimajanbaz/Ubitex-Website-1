import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import PostLevel from "../components/postLevel";
import ReactHtmlParser from "react-html-parser";
import { MdOutlineFiberNew } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddComment from "../components/addComment";
import SuggestPosts from "../components/suggestPosts";
import SocialShare from "../components/socialShare";
import TitleBox from "../components/titleBox";
import UserCommentBox from "../components/userCommentBox";
import BlogSinglePostSkeleton from "../../../components/skeleton/blogSinglePostSkeleton";
import { HiOutlineCalendar } from "react-icons/hi2";
import { GET_BLOG_POST_URL } from "../../../config/api.config";
import Breadcrumb2 from "../../../components/breadcrumb";
import WriterBox from "../components/writerBox";

const SinglePost = () => {
  const [data, setDate] = useState(null);
  const [title, setTitle] = useState(null);
  const { slug } = useParams();

  const breadcrumbItems = [
    {
      href: "/blog/posts",
      label: "همه پست‌ها",
    },
    {
      href: `/blog/posts/${slug}`,
      label: title,
    },
  ];

  useEffect(() => {
    setDate(null);
    fetch(`${GET_BLOG_POST_URL}/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setDate(data);
        setTitle(data.title);
      });
  }, [slug]);

  return (
    <>
      {data ? (
        <div className="sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mx-auto rtl-grid leading-7">
          <div className="flex space-x-3 space-x-reverse mt-10">
            {data.categories.map((item) => {
              return (
                <Link to={"/blog/category/" + item.slug} key={item.slug}>
                  <span
                    key={item}
                    className="mt-3 px-4 py-1 text-sm text-center text-[#f39200] bg-[#f392002a] rounded-md hover:bg-[#f3920040]">
                    {item.label}
                  </span>{" "}
                </Link>
              );
            })}
          </div>
          <div className="mx-auto mt-5">
            <img
              className="object-cover mx-auto rounded-xl h-auto w-full"
              src={data.thumbnail}
              alt={data.title}
            />
          </div>

          <Breadcrumb2 items={breadcrumbItems} className="my-10" />
          
          <div className="flex flex-col my-10 space-y-5">
            <h1 className="rtl-grid text-[#454545] dark:text-gray-300 font-bold text-3xl">
              {data.title}
            </h1>
            <div className=" text-[#9e9e9e] text-sm max-sm:text-xs dark:text-[#a3a3a3] flex flex-wrap gap-3 space-x-reverse ">
              <PostLevel level={data.level} />
              <div className="space-x-2 space-x-reverse px-4 py-2 rounded-md bg-gray-400 bg-opacity-10 flex items-center">
                <HiOutlineCalendar />
                {/* <span>تاریخ انتشار:</span> */}
                <span>
                  {new Date(data.createDateTime).toLocaleDateString("fa-IR")}
                </span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-md bg-gray-400 bg-opacity-10">
                <FaEye />
                <span>{data.views}</span>
                <span>بازدید</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-md bg-gray-400 bg-opacity-10">
                <BsClockHistory />
                <span>{Math.round(data.content.length / 10 / 200)}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
          <div className="my-5 text-[#353535] dark:text-gray-300 text-justify flex flex-col space-y-2 ubitex">
            {ReactHtmlParser(data.content)}
          </div>
          <div>
            <ul className="flex mx-auto space-x-3 space-x-reverse">
              {data.tags.map((tag) => {
                return (
                  <Link to={"/blog/tags/" + tag} key={tag}>
                    <li className="px-3 py-1 transition-all text-center text-[#f39200] bg-[#f39200] bg-opacity-10 rounded-md hover:bg-[#f39200] hover:bg-opacity-20">
                      #{tag.replace(/ /g, "_")}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="my-20">
            <SocialShare />
          </div>
          <div>
            <WriterBox item={data.writer[0]}/>
          </div>
          <div className="my-20">
            <TitleBox icon={<MdOutlineFiberNew />} title={"جدیدترین مطالب"} />
            <SuggestPosts />
          </div>
          <div className="mb-20">
            <AddComment postId={data._id} />
            <UserCommentBox data={data.comments} />
          </div>
        </div>
      ) : (
        <BlogSinglePostSkeleton />
      )}
    </>
  );
};

export default SinglePost;
