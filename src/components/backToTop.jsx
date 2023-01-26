import { useEffect } from "react";
import { useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="z-50 fixed bottom-24 right-8 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 transition-all text-[#f39200] cursor-pointer rounded-full w-12 h-12 flex justify-center items-center">
         <span className="text-xl">
            <IoArrowUp />
         </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
