import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import ColorPicker from "./ColorPicker";
import { formattedPrice } from "../helper/formatPrice";
import useFilterContext from "../hooks/useFilterContext";
import { useEffect } from "react";
import axios from "axios";

export default function FilterSection() {
  const {
    filters: { filterText, maxPrice, minPrice, price },
    setFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const [isOpen, setIsOpen] = useState(false);

  const [activeCategoryButton, setActiveCategoryButton] = useState("all");

  function handleClick(e, category) {
    setActiveCategoryButton(category);
    setFilterValue(e);
  }

  function getUniqueProductProp(data, prop) {
    const propArr = data?.map((product) => product[prop]);

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

  // const [categories, setCategories] = useState([]);
  const categories = getUniqueProductProp(all_products, "category");
  const companies = getUniqueProductProp(all_products, "company");
  const colors = getUniqueProductProp(all_products, "colors");

  const url = import.meta.env.VITE_URL;

  useEffect(() => {
    async function getCategories() {
      const res = await axios.get(`${url}/categories`);
      setCategories(res.data);
    }
    // getCategories();
  }, []);

  console.log(categories);

  return (
    <div className="space-y-6 lg:space-y-8 p-4 border shadow-md mb-10 lg:m-0">
      <div className="flex rounded border-2 items-center">
        <div className="flex items-center justify-center px-2.5 border-r">
          <span className="h-6 w-6 text-orange-500">
            <BsSearch />
          </span>
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
      <button
        className="lg:hidden text-orange-500 font-semibold"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        More filters
      </button>
      <div
        className={`space-y-6 lg:space-y-8 ${
          !isOpen ? "hidden" : "block"
        } lg:block`}
      >
        <div className="flex lg:flex-col">
          <p className="hidden lg:block mb-3 font-light">Categories</p>
          {categories?.map((category, idx) => (
            <button
              key={idx}
              name="category"
              onClick={(e) => handleClick(e, category)}
              value={category}
              className={`lg:mb-2 text-left p-1.5 lg:pl-4 text-sm py-1 font-medium ${
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

        <ColorPicker
          setFilterValue={setFilterValue}
          style={true}
          colors={colors}
        />

        <div>
          <label htmlFor="price">price</label>
          <p>{formattedPrice(price)}</p>
          <input
            type="range"
            id="price"
            min={minPrice}
            name="price"
            max={maxPrice}
            value={price}
            step="10"
            onChange={setFilterValue}
          />
        </div>

        <div>
          <button
            className="font-medium bg-red-500 text-white px-4 py-1 rounded-sm"
            onClick={clearFilters}
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}
