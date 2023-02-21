import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto mt-10 md:mt-16">
        <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="text-center md:text-left">
            <p className="uppercase">Welcome to</p>
            <h1 className="text-orange-500 text-5xl font-semibold lg:text-6xl">
              E-Shop
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              aliquam placeat earum repellat blanditiis libero expedita ex!
              Nobis, ratione? Similique accusantium incidunt corrupti eum saepe
              deserunt asperiores necessitatibus recusandae delectus!
            </p>
            <NavLink to="/products">
              <button className="bg-orange-500 text-white my-4 px-5 py-2 rounded-md cursor-pointer">
                Shop Now
              </button>
            </NavLink>
          </div>
          <div className="">
            <img src={heroImage} className="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
