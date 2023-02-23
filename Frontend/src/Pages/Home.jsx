import Hero from "../components/Hero";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeaturedProduct from "../components/FeaturedProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
}
