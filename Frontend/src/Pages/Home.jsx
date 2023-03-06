import Hero from "../components/Hero";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import ProductGroups from "../components/ProductGroups";
import useProductContext from "../hooks/useProductContext";

export default function Home() {
  const { featuredProducts, trendingProducts, isLoading } = useProductContext();
  return (
    <>
      <Hero />
      <ProductGroups
        products={featuredProducts}
        title="Featured Products"
        isLoading={isLoading}
      />
      <ProductGroups
        products={trendingProducts}
        title="Trending Products"
        isLoading={isLoading}
      />
      <Services />
      <Trusted />
    </>
  );
}
