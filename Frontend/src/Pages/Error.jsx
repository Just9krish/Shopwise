import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center py-20 lg:py-28">
        <h1 className="text-5xl font-bold mb-4 lg:text-8xl">404</h1>
        <h2 className="text-xl uppercase mb-4 lg:text-3xl">
          UH OH! you're lost.
        </h2>
        <p className="text-sm font-light lg:text-base">
          The page you are looking for does not exist. How you get here is
          mystery. But you can click the below button to go back to the home
          page
        </p>
        <NavLink to="/">
          <button className="bg-orange-500 mt-4 text-white px-5 py-1.5 rounded-md">
            Back to Home page
          </button>
        </NavLink>
      </div>
    </section>
  );
}
