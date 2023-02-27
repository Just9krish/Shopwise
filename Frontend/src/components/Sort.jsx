import { BsFillGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import useFilterContext from "../hooks/useFilterContext";

export default function Sort() {
  const { setGridLayout, setListLayout, grid_view } = useFilterContext();
  return (
    <div className="flex justify-between mb-10">
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
      <p>3 total proudcts</p>
      <div>
        <select name="price" id="price">
          <option value="">1000</option>
        </select>
      </div>
    </div>
  );
}
