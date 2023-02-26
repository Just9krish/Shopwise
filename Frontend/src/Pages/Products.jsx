import ProductsList from "../components/ProductsList";
import FilterSection from "../components/FilterSection";
import useFilterContext from "../hooks/useFilterContext";

export default function Products() {
  const { filter_products } = useFilterContext();

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-20 md:my-32">
        <div className="grid grid-cols-4 gap-8">
          <FilterSection />
          <div className="col-span-3">
            <ProductsList />
          </div>
        </div>
      </div>
    </section>
  );
}
