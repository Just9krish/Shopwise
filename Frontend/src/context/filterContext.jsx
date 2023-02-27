import { createContext, useReducer, useEffect } from "react";
import useProductContext from "../hooks/useProductContext";
import reducer from "../helper/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
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

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridLayout, setListLayout }}>
      {children}
    </FilterContext.Provider>
  );
};
