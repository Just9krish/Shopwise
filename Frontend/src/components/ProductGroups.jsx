import Loader from "./Loader";
import Product from "./Product";

export default function ProductGroups({ products, isLoading, title }) {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-20 md:my-28">
        <h1 className="text-2xl text-center mb-9 font-bold md:text-4xl md:mb-14">
          {title}
        </h1>

        <div>
          {isLoading ? (
            <div className="flex justify-center items-center h-[50vh]">
              <Loader />
            </div>
          ) : (
            <div className="grid gap-8 grid-cols-1 max-w-xs mx-auto md:grid-cols-3 md:gap-8 md:max-w-5xl">
              {products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
