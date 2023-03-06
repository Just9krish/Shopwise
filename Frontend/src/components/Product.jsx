import { NavLink } from "react-router-dom";
import { formattedPrice } from "../helper/formatPrice";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Product(props) {
  const randomNum = Math.floor(Math.random() * 4);
  const { name, _id, price, category, images, description } = props.product;

  return (
    <NavLink to={`/products/${_id}`}>
      <div className="border p-4 bg-[#f5f5f5] relative overflow-visible shadow-lg rounded-md">
        <div className="h-40 overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-[18%] md:hover:-translate-y-1/4 hover:shadow-img">
          <img src={images[1]} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="pt-[10%] pb-3">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xl font-black capitalize">{name}</p>
            <span className="capitalize bg-red-300 text-white text-xs px-1.5 rounded-xl">
              {category}
            </span>
          </div>
          <p className="text-sm">
            {description.split(" ").slice(0, 20).join(" ")}
          </p>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-[#ddd]">
          <span className="font-black text-xl">{formattedPrice(price)}</span>
          <span className="text-xl border border-gray-800 rounded-full p-2 hover:text-white hover:bg-orange-400 hover:border-orange-400 transition-all duration-300">
            <MdOutlineAddShoppingCart />
          </span>
        </div>
      </div>
    </NavLink>
  );
}
