import useProductContext from "../hooks/useProductContext";
export default function ProductsList() {
  const { products } = useProductContext();
  return <div>ProductsList</div>;
}
