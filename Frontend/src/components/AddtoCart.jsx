import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiPlus, TiMinus } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function AddtoCart() {
  const [quantity, setQuantity] = useState(1);

  const maxQuantity = 4;
  const minQuantity = 1;

  function increment() {
    if (quantity < maxQuantity) {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity(maxQuantity);
    }
  }

  function decrement() {
    if (quantity > minQuantity) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(minQuantity);
    }
  }

  return (
    <div className="flex items-center lg:space-x-4 mt-4">
      <div className="flex items-center justify-between w-36 bg-[#f7f8fd] py-6 px-4 rounded-lg h-6">
        <button
          className="p-2 text-orange-500"
          disabled={quantity <= minQuantity}
          onClick={decrement}
        >
          <TiMinus />
        </button>
        <p className="font-semibold">{quantity}</p>
        <button
          className="p-2 text-orange-500"
          disabled={quantity >= maxQuantity}
          onClick={increment}
        >
          <TiPlus />
        </button>
      </div>
      <NavLink to="/cart">
        <button className="flex items-center justify-center rounded-lg text-white h-10 lg:w-52 bg-orange-500">
          <AiOutlineShoppingCart />
          <span className="ml-2">Add to cart</span>
        </button>
      </NavLink>
    </div>
  );
}
