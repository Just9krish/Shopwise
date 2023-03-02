export default function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const prices = action.payload.map((product) => product.price);

      const maxPrice = Math.max(...prices);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
        },
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

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      // let temp = [...state.all_products];
      // const { filterText, category, company, color, price } = state.filters;

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

      // if (color !== "all") {
      //   temp = temp.filter((product) => product.colors.includes(color));
      // }

      // if (price === 0) {
      //   temp = temp.filter((product) => product.price == price);
      // } else {
      //   temp = temp.filter((product) => product.price <= price);
      // }

      // return {
      //   ...state,
      //   filter_products: temp,
      // };

      const applyFilters = (products, filters) => {
        const { filterText, category, company, color, price } = filters;

        let filteredProducts = products;

        if (filterText) {
          filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(filterText.toLowerCase())
          );
        }

        if (category !== "all") {
          filteredProducts = filteredProducts.filter(
            (product) => product.category === category
          );
        }

        if (company !== "all") {
          filteredProducts = filteredProducts.filter(
            (product) => product.company === company
          );
        }

        if (color !== "all") {
          filteredProducts = filteredProducts.filter((product) =>
            product.colors.includes(color)
          );
        }

        if (price !== null && price !== "") {
          filteredProducts = filteredProducts.filter(
            (product) => parseInt(product.price) <= parseInt(price)
          );
        }

        return filteredProducts;
      };

      const filteredProducts = applyFilters(state.all_products, state.filters);

      return {
        ...state,
        filter_products: filteredProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          filterText: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice,
          maxPrice: 0,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
}
