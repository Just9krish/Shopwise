import { NavLink } from "react-router-dom";
import { formattedPrice } from "../helper/formatPrice";

export default function Product(props) {
  const { name, id, price, category, image } = props.product;

  return (
    <NavLink to={`/products/${id}`}>
      <div className="border">
        <figure>
          <img src={image} alt="" />
          <figcaption className="border ml-2 px-1 text-xs rounded-xl bg-purple-700 text-white inline-block">
            {category}
          </figcaption>
        </figure>
        <div className="p-2 pb-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">{name}</p>
            <p className="">{formattedPrice(price)}</p>
          </div>
          <button className="bg-orange-500 w-full rounded-3xl mt-2 py-1.5 text-white">
            Shop now
          </button>
        </div>
      </div>
    </NavLink>
  );
}
