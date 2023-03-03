import { useState } from "react";
export default function Carousel({ images }) {
  if (!images) {
    return;
  }
  const [selectImg, setSelectImg] = useState(images[0].id);

  return (
    <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-10 ">
      <div className="lg:w-1/4 space-y-5">
        {images?.map((image) => (
          <div
            key={image.id}
            className="hover:opacity-40 cursor-pointer w-28 duration-500 border-[2.5px] border-transparent hover:border-[2.5px] hover:border-orange-500 hover:bg-orange-500 rounded-lg"
          >
            <img
              src={image.url}
              className="rounded-lg"
              onClick={() => setSelectImg(image.id)}
              alt={image.filename}
            />
          </div>
        ))}
      </div>
      <div className="lg:w-3/4 md:w-full">
        {images?.map((image) => (
          <img
            src={image.url}
            className={`${
              image.id === selectImg ? "block" : "hidden"
            } rounded-lg`}
            alt={image.filename}
          />
        ))}
      </div>
    </div>
  );
}
