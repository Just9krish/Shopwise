import useFilterContext from "../hooks/useFilterContext";

export default function FilterSection() {
  const {
    filters: { filterText },
    setFilterValue,
    all_products,
  } = useFilterContext();

  function getUniqueProductProp(data, query) {
    const propArr = data.map((product) => product[query]);
    return ["All", ...new Set(propArr)];
  }

  const categorys = getUniqueProductProp(all_products, "category");

  return (
    <div className="">
      <div class="flex rounded border-2">
        <div class="flex items-center justify-center px-4 border-r">
          <svg
            class="w-6 h-6 text-gray-600"
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
          class="px-3 py-1 w-full"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-col">
        {categorys.map((category) => (
          <button>{category}</button>
        ))}
      </div>
    </div>
  );
}
