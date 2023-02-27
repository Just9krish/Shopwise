import { createContext, useReducer, useEffect } from "react";
import useProductContext from "../hooks/useProductContext";
import reducer from "../helper/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort_value: "random",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridLayout = () => {
    return dispatch({ type: "SET_GRID_LAYOUT" });
  };

  const setListLayout = () => {
    return dispatch({ type: "SET_LIST_LAYOUT" });
  };

  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS", payload: products });
  }, [state.sort_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridLayout, setListLayout, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};
