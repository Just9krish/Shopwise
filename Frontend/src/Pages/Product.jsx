import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductContext from "../hooks/useProductContext";

export default function Product() {
  const { id } = useParams();
  const url = import.meta.env.VITE_URL;
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();

  useEffect(() => {
    getSingleProduct(`${url}?id=${id}`);
  }, []);

  return isSingleLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      <div>{singleProduct.name}</div>
    </div>
  );
}
