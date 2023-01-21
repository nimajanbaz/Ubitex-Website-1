import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Link } from "react-router-dom";
import { EffectCards } from "swiper";

const BlogHeaderSliderCard = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://bapi.ubitex.io/v1.0/posts")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        {data.map((sliderImage) => {
          return (
            <>
              <SwiperSlide>
                <Link to={"/blog/posts/" + sliderImage.slug}>
                  <img
                    className="p-1 border border-gray-300 rounded-3xl dark:border-[#092c59] dark:hover:bg-[#061f41] "
                    src={sliderImage.thumbnail}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default BlogHeaderSliderCard;
