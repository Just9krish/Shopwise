import { useState } from "react";
export default function Carousel({ images }) {
  if (!images) {
    return;
  }
  const [selectImg, setSelectImg] = useState(images[0].id);

  return (
    <div className="flex flex-col lg:justify-between lg:items-center lg:gap-6 ">
      <div className="lg:w-1/2 flex justify-center mb-6">
        {images.map((image) => (
          <img
            src={image.url}
            key={image.id}
            className="w-[150px]"
            onClick={() => setSelectImg(image.id)}
            alt=""
          />
        ))}
      </div>
      <div className="lg:w-1/2 md:w-full">
        {images.map((image) => (
          <img
            src={image.url}
            className={`${image.id === selectImg ? "block" : "hidden"}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
