import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../helper/productReducer";

export const ProductContext = createContext();

const url = import.meta.env.VITE_URL;

const initialState = {
  products: [],
  featuredProducts: [],
  isLoading: false,
  isError: false,
  isSingleLoading: false,
  singleProduct: {},
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getData(url) {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  }

  async function getSingleProduct(url) {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (err) {
      dispatch({ type: "API_SINGLE_ERROR" });
    }
  }

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
