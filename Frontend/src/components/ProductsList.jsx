import useFilterContext from "../hooks/useFilterContext";
import GridLayout from "./GridLayout";
import LinearLayout from "./LinearLayout";

export default function ProductsList() {
  const { filter_products, grid_view } = useFilterContext();

  return (
    <div>
      {grid_view ? (
        <LinearLayout filterProduct={filter_products} />
      ) : (
        <GridLayout filterProduct={filter_products} />
      )}
    </div>
  );
}
