import useFilterContext from "../hooks/useFilterContext";
import GridLayout from "./GridLayout";
import LinearLayout from "./LinearLayout";
import Sort from "./Sort";

export default function ProductsList() {
  const { filter_products, grid_view } = useFilterContext();

  return (
    <div>
      <Sort />
      {grid_view ? (
        <GridLayout filterProduct={filter_products} />
      ) : (
        <LinearLayout filterProduct={filter_products} />
      )}
    </div>
  );
}
