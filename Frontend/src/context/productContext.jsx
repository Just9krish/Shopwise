import { createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const data = [1, 24, 3, 433, 5, 34, 3, 43, 43, 34];
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};
