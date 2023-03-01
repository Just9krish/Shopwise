import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import ColorPicker from "./ColorPicker";
import useFilterContext from "../hooks/useFilterContext";

export default function FilterSection() {
  const {
    filters: { filterText },
    setFilterValue,
    all_products,
  } = useFilterContext();

  const [activeCategoryButton, setActiveCategoryButton] = useState("all");

  function handleClick(e, category) {
    setActiveCategoryButton(category);
    setFilterValue(e);
  }

  function getUniqueProductProp(data, prop) {
    const propArr = data.map((product) => product[prop]);

    if (prop === "colors") {
      // return ["all", ...new Set([].concat(...propArr))];
      return ["all", ...new Set(propArr.flat())];
    } else {
      return ["all", ...new Set(propArr)];
    }
  }

  // function getUniqueProductProp(data, prop) {
  //   return data.reduce(
  //     (uniqueProps, product) => {
  //       const propValue = product[prop];
  //       if (!uniqueProps.includes(propValue)) {
  //         uniqueProps.push(propValue);
  //       }
  //       return uniqueProps;
  //     },
  //     ["All"]
  //   );
  // }

  const categories = getUniqueProductProp(all_products, "category");
  const companies = getUniqueProductProp(all_products, "company");
  const colors = getUniqueProductProp(all_products, "colors");

  return (
    <div className="space-y-8 px-4 pt-2 pb-8 border shadow-md">
      <div className="flex rounded border-2 items-center">
        <div className="flex items-center justify-center px-2.5 border-r">
          <svg
            className="w-6 h-6 text-orange-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </div>
        <input
          type="text"
          value={filterText}
          onChange={setFilterValue}
          name="filterText"
          className="px-3 py-1 w-full"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-col">
        <p className="mb-3 font-light">Categories</p>
        {categories?.map((category, idx) => (
          <button
            key={idx}
            name="category"
            onClick={(e) => handleClick(e, category)}
            value={category}
            className={`mb-2 text-left pl-4 text-sm py-1 font-medium ${
              activeCategoryButton == category
                ? "border-b border-orange-500 text-orange-500"
                : ""
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div>
        <label htmlFor="companies" className="mb-3 block font-light">
          Companies
        </label>
        <select
          name="company"
          className="bg-gray-50 border cursor-pointer pl-4 border-gray-300 text-gray-900 text-sm rounded-md w-full focus:ring-blue-500 focus:border-blue-500 p-2 transition-all"
          onChange={setFilterValue}
          id="companies"
        >
          {companies?.map((company, idx) => (
            <option value={company} name="company" key={idx}>
              {(company = company.charAt(0).toUpperCase() + company.slice(1))}
            </option>
          ))}
        </select>
      </div>

      {/* <div>
        <p>Colors: </p>
        <div className="space-x-3">
          <div className="flex gap-4">
            {colors?.map((color, idx) => (
              <div key={idx}>
                <ColorSquare color={color} selected={selectedColor === color} />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <ColorPicker
        setFilterValue={setFilterValue}
        style={true}
        colors={colors}
      />
    </div>
  );
}
