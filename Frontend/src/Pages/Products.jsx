import ProductsList from "../components/ProductsList";
import FilterSection from "../components/FilterSection";
import useProductContext from "../hooks/useProductContext";

export default function Products() {
  const { products } = useProductContext();

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-16 md:my-28">
        {products.length != 0 ? (
          <div className="lg:grid lg:grid-cols-4 gap-8 lg:min-h-screen">
            <FilterSection />
            <div className="lg:col-span-3">
              <ProductsList />
            </div>
          </div>
        ) : (
          <div className="flex justify-center min-h-screen">
            <h1 className="text-3xl mt-24 font-bold">
              Sorry, Currently we don't have any products to show you.
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
