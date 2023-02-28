import { BsFillGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import useFilterContext from "../hooks/useFilterContext";

export default function Sort() {
  const { setGridLayout, setListLayout, grid_view, filter_products, sorting } =
    useFilterContext();

  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex gap-5">
        <button
          onClick={setGridLayout}
          className={`p-2 bg-gray-300 rounded-md ${
            grid_view ? "bg-orange-500 text-white" : ""
          }`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListLayout}
          className={`p-2 bg-gray-300 rounded-md ${
            !grid_view ? "bg-orange-500 text-white" : ""
          }`}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <p className="font-light ">{filter_products.length} Products Available</p>
      <form action="" className="mb-3">
        <select
          name="sort"
          onClick={sorting}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 p-2.5"
          id="sort"
        >
          <option value="" disabled selected>
            Select option to sort the products
          </option>
          <option value="random">Random</option>
          <option value="ltoh">Lowest to Highest (price)</option>
          <option value="htol">Highest to Lowest (price)</option>
        </select>
      </form>
    </div>
  );
}
