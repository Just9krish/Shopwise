import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

export default function Star({ stars, reviews }) {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FiStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex gap-4 items-center mt-3">
      <div className="flex text-orange-400 items-center gap-1">
        {starRating}
      </div>
      <p>{reviews} reviews by customers </p>
    </div>
  );
}
