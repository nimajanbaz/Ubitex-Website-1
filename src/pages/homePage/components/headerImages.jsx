import { header_images } from "../../../data";

const HeaderImages = () => {
  return (
    <>
      <div className="w-8/12 top-5 relative max-lg:hidden min-h-[800px]">
        {header_images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={image.class}
            />
          );
        })}
      </div>
    </>
  );
};

export default HeaderImages;
