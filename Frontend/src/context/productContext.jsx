import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const ProductContext = createContext();

function reducer(state, action) {
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
      };

    default:
      return {
        ...state,
      };
  }
}

const initialState = {
  products: [],
  featuredProducts: [],
  isLoading: false,
  isError: false,
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getData() {
    try {
      const res = await axios.get(import.meta.env.VITE_URL);
      const products = res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  }

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
