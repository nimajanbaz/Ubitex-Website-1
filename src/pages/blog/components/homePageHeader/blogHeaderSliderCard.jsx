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
import BlogHomePageCardHeaderSkeleton from "../../../../components/skeleton/blogHomePageHeaderCardSkeleton";
import { GET_BLOG_HEADER_SLIDER_URL } from "../../../../config/api.config";

const BlogHeaderSliderCard = () => {
  const [data, setDate] = useState(null);

  useEffect(() => {
    fetch(GET_BLOG_HEADER_SLIDER_URL)
      .then((response) => response.json())
      .then((data) => setDate(data));
  }, []);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        {data ? (
          data.map((sliderImage) => {
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
          })
        ) : (
          <BlogHomePageCardHeaderSkeleton />
        )}
      </Swiper>
    </>
  );
};

export default BlogHeaderSliderCard;
