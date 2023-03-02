import ProductsList from "../components/ProductsList";
import FilterSection from "../components/FilterSection";
import useFilterContext from "../hooks/useFilterContext";

export default function Products() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-16 md:my-28">
        <div className="lg:grid lg:grid-cols-4 gap-8 lg:min-h-screen">
          <FilterSection />
          <div className="lg:col-span-3">
            <ProductsList />
          </div>
        </div>
      </div>
    </section>
  );
}
