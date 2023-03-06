function productReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: action.payload.filter(
          (product) => product.featured === true
        ),
        trendingProducts: action.payload.filter(
          (product) => product.trending === true
        ),
      };

    case "SET_SINGLE_LOADING":
      return { ...state, isSingleLoading: true };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "API_SINGLE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
}

export default productReducer;
