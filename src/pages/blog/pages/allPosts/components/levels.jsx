import { GoPrimitiveDot } from "react-icons/go";

const Levels = ({ onSelect }) => {
  const levels = [
    {
      _id: 0,
      className: "text-emerald-600 bg-emerald-600",
      label: "مقدماتی",
    },
    {
      _id: 1,
      className: "text-yellow-400 bg-yellow-400",
      label: "متوسط",
    },
    {
      _id: 2,
      className: "text-red-600 bg-red-600",
      label: "پیشرفته",
    },
  ];
  return (
    <ul className="flex flex-wrap gap-3">
      <li onChange={(e) => onSelect(e.target.value)}>
        <input
          type="radio"
          name="test"
          value="all"
          id="all"
          className="hidden peer"
        />
        <label
          for={"all"}
          className="inline-flex justify-between items-center px-3 py-1 w-full text-gray-500 bg-gray-100 rounded-md cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-[#f39200] peer-checked:text-[#f39200] dark:peer-checked:bg-[#f39200] dark:peer-checked:bg-opacity-10 peer-checked:bg-[#f39200] peer-checked:bg-opacity-10 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#062349] dark:hover:bg-[#092f61]">
          <div className="block">
            <span className="w-full text-sm">{"همه موارد"}</span>
          </div>
        </label>
      </li>
      {levels.map((item) => {
        return (
          <li onChange={(e) => onSelect(e.target.value)}>
            <input
              type="radio"
              id={item._id}
              name={"test"}
              value={item._id}
              className="hidden peer"
            />
            <label
              for={item._id}
              className={`${item.className} inline-flex  justify-between items-center !px-4 !py-2 w-full bg-opacity-10 rounded-md cursor-pointer dark:peer-checked:text-[#f39200] peer-checked:text-[#f39200] dark:peer-checked:bg-[#f39200] dark:peer-checked:bg-opacity-10 peer-checked:bg-[#f39200] peer-checked:bg-opacity-10 `}>
              <div className="flex items-center space-x-1 space-x-reverse">
                <span className="text-sm">
                  <GoPrimitiveDot />
                </span>
                <span className="w-full text-sm">{item.label}</span>
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Levels;
