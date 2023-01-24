const Redirect = (props) => {
  setTimeout(() => {
    window.location.href = props.href;
  }, 1000);

  return (
    <>
      <div className="flex justify-center items-center text-gray-600 dark:text-gray-300 bg-white dark:bg-[#04162d] flex-col space-y-5 space-y-reverse text-xl h-screen">
        <span>:درحال انتقال به</span>
        {props.href}
      </div>
    </>
  );
};

export default Redirect;
