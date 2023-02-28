import { useState } from "react";
import useFilterContext from "../hooks/useFilterContext";

export default function FilterSection() {
  const {
    filters: { filterText },
    setFilterValue,
    all_products,
  } = useFilterContext();

  const [activeButton, setActiveButton] = useState("All");

  function handleClick(e, category) {
    setActiveButton(category);
    setFilterValue(e);
  }

  function getUniqueProductProp(data, query) {
    const propArr = data.map((product) => product[query]);
    return ["All", ...new Set(propArr)];
  }

  const categories = getUniqueProductProp(all_products, "category");
  const companies = getUniqueProductProp(all_products, "company");

  return (
    <div className="space-y-8 px-4 py-2 border shadow-md">
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
        <p className="mb-3">Categories</p>
        {categories?.map((category, idx) => (
          <button
            key={idx}
            name="category"
            onClick={(e) => handleClick(e, category)}
            value={category}
            className={`mb-2 text-left pl-4 text-sm py-1 font-medium ${
              activeButton == category
                ? "border-b border-orange-500 text-orange-500"
                : ""
            }`}
          >
            {(category = category.charAt(0).toUpperCase() + category.slice(1))}
          </button>
        ))}
      </div>

      <div>
        <label htmlFor="companies" className="mb-3 block">
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
    </div>
  );
}
