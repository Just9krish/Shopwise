import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

export default function useProductContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw Error(
      `"useProductContext" must be used inside an ProductContextProvider`
    );
  }

  return context;
}
