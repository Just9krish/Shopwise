import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export default function useProductContext() {
  const context = useContext(ProductContext);

  if (!context) {
    throw Error(
      `"useProductContext" must be used inside an ProductContextProvider`
    );
  }

  return context;
}
