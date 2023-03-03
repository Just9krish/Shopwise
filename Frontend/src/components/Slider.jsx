import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Slider({ images }) {
  if (!images) {
    return;
  }

  const [slide, setSlide] = useState(0);

  function changeSlide(direction) {
    if (direction === "l") {
      setSlide(slide !== 0 ? slide - 1 : images.length - 1);
    }

    if (direction === "r") {
      setSlide(slide === images.length - 1 ? 0 : slide + 1);
    }
  }
  return (
    <div className="lg:hidden w-full relative overflow-x-hidden pt-22">
      <div
        className="w-[400vw] flex items-center justify-center transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        {images?.map((image) => (
          <div key={image.id} className="w-[100vw]">
            <img
              src={image.url}
              className="object-center"
              alt={image.filename}
            />{" "}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 flex justify-between w-full px-2">
        <div
          onClick={() => changeSlide("l")}
          className="bg-white h-8 w-8 rounded-full flex justify-center items-center"
        >
          <GrFormPrevious />
        </div>
        <div
          onClick={() => changeSlide("r")}
          className="bg-white h-8 w-8 rounded-full flex justify-center items-center"
        >
          <GrFormNext />
        </div>
      </div>
    </div>
  );
}
