import { createContext, useReducer, useEffect } from "react";
import useProductContext from "../hooks/useProductContext";
import reducer from "../helper/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort_value: "random",
  filters: {
    filterText: "",
  },
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

  const sorting = (e) => {
    dispatch({ type: "GET_SORT_VALUE", payload: e.target.value });
  };

  function setFilterValue(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "UPDATE_FILTER_TEXT", payload: { name, value } });
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sort_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridLayout,
        setListLayout,
        sorting,
        setFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
