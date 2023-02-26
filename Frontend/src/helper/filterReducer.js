export default function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_LAYOUT":
      return {
        ...state,
        grid_view: true,
      };

    default:
      return state;
  }
}
