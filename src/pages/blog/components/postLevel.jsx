import { GoPrimitiveDot } from "react-icons/go";

const PostLevel = ({ level }) => {
  return (
    <div
      className={`${
        level === 0
          ? "text-emerald-600 bg-emerald-600"
          : level === 1
          ? "text-yellow-400 bg-yellow-400"
          : level === 2
          ? "text-red-600 bg-red-600"
          : null
      } bg-opacity-10 rounded-md px-3 py-2 flex items-center justify-center text-sm space-x-1 space-x-reverse`}>
      <span>
        <GoPrimitiveDot />
      </span>
      <span>
        {level === 0
          ? "مقدماتی"
          : level === 1
          ? "متوسط"
          : level === 2
          ? "پیشرفته"
          : null}
      </span>
    </div>
  );
};

export default PostLevel;
