export const Badge = ({text}) => {
  return (
    <span class="bg-[#f39200] text-[#f39200] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-[#f39200] bg-opacity-10 dark:bg-opacity-10 dark:text-[#f39200]">
      {text}
    </span>
  );
};

export const LongBadge = () => {
  return (
    <div className="text-emerald-600 text-lg px-2 py-1 bg-emerald-600 bg-opacity-10 rounded-sm flex space-x-1 space-x-reverse">
      <span className="text-xs">3X Long</span>
    </div>
  );
};

export const ShortBadge = () => {
  return (
    <div className="text-red-600 text-lg px-2 py-1 bg-red-600 bg-opacity-10 rounded-sm flex space-x-1 space-x-reverse">
      <span className="text-xs">3X Short</span>
    </div>
  );
};