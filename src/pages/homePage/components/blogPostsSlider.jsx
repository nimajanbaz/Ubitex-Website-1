import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { GET_BLOG_NEWS_URL } from "../../../config/api.config";
import { Link } from "react-router-dom";

const BlogPostsHomePageSlider = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(GET_BLOG_NEWS_URL)
        .then((res) => {
          setData(res.data.posts);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {data
          ? data.map((sliderImage) => {
              return (
                <>
                  <SwiperSlide>
                    <Link to={"/blog/posts/" + sliderImage.slug}>
                      <img
                        className="p-1 border border-gray-300 rounded-2xl dark:border-[#092c59] dark:hover:bg-[#061f41] "
                        src={sliderImage.thumbnail}
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                </>
              );
            })
          : null}
      </Swiper>
    </>
  );
};

export default BlogPostsHomePageSlider;
