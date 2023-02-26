import { createContext, useReducer, useEffect } from "react";
import useProductContext from "../hooks/useProductContext";
import reducer from "../helper/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
