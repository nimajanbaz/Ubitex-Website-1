const Redirect = (props) => {
  return (
    <>
      <div className="flex justify-center items-center text-[#04162d] flex-col space-y-3 space-y-reverse text-sm">
        <p className="text-xl font-display">:درحال انتقال به</p>
        {(window.location.href = props.href)}
      </div>
    </>
  );
};

export default Redirect;
