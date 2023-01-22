import { Empty } from "antd";
import React from "react";
import { MdOutlineComment } from "react-icons/md";
import { CommentUserDark } from "../../../components/icons";
import TitleBox from "./titleBox";

const UserCommentBox = ({ data }) => {
  return (
    <div className="flex flex-col space-y-5 mt-14">
      <TitleBox icon={<MdOutlineComment />} title={"جدیدترین نظرات"} />

      {data !== null ? (
        data
          .reverse()
          .slice(0, 12)
          .map((item) => {
            return (
              <div className="p-8 rounded-xl bg-gray-50 dark:bg-[#051A36] flex space-x-5 space-x-reverse items-start border border-gray-100 dark:border-[#092c59]">
                <div className="w-14">
                  <CommentUserDark />
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex space-x-5 space-x-reverse items-center">
                    <span className=" text-gray-400 dark:text-gray-500">
                      {item.userName}
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      {new Date(item.createDateTime).toLocaleDateString(
                        "fa-ir"
                      )}
                    </span>
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            );
          })
      ) : (
        <Empty
          description={
            <div className="!font-display flex flex-col space-y-3">
              <span>هنوز نظری برای این پست منتشر نشده است :(</span>
              <span>اولین نفر باشید!</span>
            </div>
          }></Empty>
      )}
    </div>
  );
};

export default UserCommentBox;
