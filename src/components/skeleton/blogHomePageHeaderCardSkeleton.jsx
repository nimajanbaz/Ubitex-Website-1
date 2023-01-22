import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

const BlogHomePageCardHeaderSkeleton = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        <SwiperSlide>
          <div className="loading-animation rounded-3xl px-10 py-[200px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="loading-animation rounded-3xl px-10 py-[200px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="loading-animation rounded-3xl px-10 py-[200px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="loading-animation rounded-3xl px-10 py-[200px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="loading-animation rounded-3xl px-10 py-[200px]"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BlogHomePageCardHeaderSkeleton;
