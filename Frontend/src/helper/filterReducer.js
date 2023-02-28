export default function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_LAYOUT":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_LAYOUT":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // const sortElem = document.getElementById("sort");
      // const sortValue = sortElem[sortElem.selectedIndex].value;
      return {
        ...state,
        sort_value: action.payload,
      };

    case "SORT_PRODUCTS":
      const { filter_products } = state;
      const products = [...filter_products];
      // let sortedProduct;

      // if (state.sort_value == "random") {
      //   sortedProduct = products.sort(() => (Math.random() > 0.5 ? 1 : -1));
      // } else if (state.sort_value == "ltoh") {
      //   sortedProduct = products.sort((a, b) => a.price - b.price);
      // } else if (state.sort_value == "htol") {
      //   sortedProduct = products.sort((a, b) => b.price - a.price);
      // } else {
      //   sortedProduct = products;
      // }

      const sortFunctions = {
        random: () => (Math.random() > 0.5 ? 1 : -1),
        ltoh: (a, b) => a.price - b.price,
        htol: (a, b) => b.price - a.price,
      };

      const sort_value = state.sort_value;
      const sortFunction = sortFunctions[sort_value] || (() => {});
      const sortedProduct = sort_value ? products.sort(sortFunction) : products;

      return {
        ...state,
        filter_products: sortedProduct,
      };

    case "UPDATE_FILTER_TEXT":
      const { name, value } = action.payload;
      console.log(name, value);

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let temp = [...state.all_products];
      const { filterText, category, company } = state.filters;

      // if (filterText) {
      //   temp = temp.filter((product) =>
      //     product.name.toLowerCase().includes(filterText.toLowerCase())
      //   );
      // }

      // if (category.toLowerCase() != "all") {
      //   temp = temp.filter(
      //     (product) => product.category.toLowerCase() == category.toLowerCase()
      //   );
      // }

      // if (company.toLowerCase() != "all") {
      //   temp = temp.filter(
      //     (product) => product.company.toLowerCase() == company.toLowerCase()
      //   );
      // }

      // To make the code more DRY, we can refactor it to use
      // a single filter function instead of repeating the filtering logic multiple times.

      const filterProduct = (product) => {
        let filterResult = true;

        if (filterText) {
          filterResult =
            filterResult &&
            product.name.toLowerCase().includes(filterText.toLowerCase());
        }
        if (category.toLowerCase() !== "all") {
          filterResult =
            filterResult &&
            product.category.toLowerCase() === category.toLowerCase();
        }
        if (company.toLowerCase() !== "all") {
          filterResult =
            filterResult &&
            product.company.toLowerCase() === company.toLowerCase();
        }

        return filterResult;
      };

      // The function uses the same filtering conditions as the original code,
      //but checks each condition against the product using the "&&" operator.
      //This ensures that all conditions must be true for the product to be included in the result.

      temp = temp.filter(filterProduct);

      return {
        ...state,
        filter_products: temp,
      };

    default:
      return state;
  }
}
