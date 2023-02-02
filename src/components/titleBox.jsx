const TitleBox = ({ title, icon }) => {
  return (
    <>
      <div className="flex rtl-grid items-center space-x-4 space-x-reverse">
        <span className="text-2xl text-[#f39200] bg-[#f39200] bg-opacity-10 p-2 rounded-md ">
          {icon}
        </span>
        <h2 className="text-[#f39200] text-xl">{title}</h2>
      </div>
    </>
  );
};

export default TitleBox;
