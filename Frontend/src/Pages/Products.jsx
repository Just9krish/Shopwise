import ProductsList from "../components/ProductsList";
import FilterSection from "../components/FilterSection";
import useFilterContext from "../hooks/useFilterContext";

export default function Products() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-16 md:my-28">
        <div className="grid grid-cols-4 gap-8 min-h-screen">
          <FilterSection />
          <div className="col-span-3">
            <ProductsList />
          </div>
        </div>
      </div>
    </section>
  );
}
