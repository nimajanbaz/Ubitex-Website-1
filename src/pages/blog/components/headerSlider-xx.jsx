import * as React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
import { GET_ALL_POSTS } from "../data/apiURLs";

export const BlogHeaderSlider = () => {
  const images = [];
  React.useEffect(() => {
    const getData = async () => {
      await axios.get(GET_ALL_POSTS).then((res) => {
        const all = res.data.data;
        for (let index = 0; index < all.length; index++) {
          images.push({
            url: `http://185.67.102.232:1337${all[index].attributes.cover.data.attributes.url}`,
          });
        }
      });
    };
    getData();
  }, []);

  if (images)
    return (
      <>
        <div>
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={2.0}
          />
        </div>
      </>
    );
};
