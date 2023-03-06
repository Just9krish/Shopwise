import Product from "./Product";

export default function GridLayout({ filterProduct }) {
  return (
    <div className="grid gap-8 grid-cols-1 max-w-xs mx-auto md:grid-cols-3 md:gap-y-11 md:max-w-5xl">
      {filterProduct?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}
