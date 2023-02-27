export default function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
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

    default:
      return state;
  }
}
