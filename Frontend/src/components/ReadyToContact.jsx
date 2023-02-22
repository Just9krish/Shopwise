import { NavLink } from "react-router-dom";

export default function ReadyToContact() {
  return (
    <div className="bg-white ready absolute -bottom-60 lg:-bottom-72 left-2/4 -translate-x-1/2 py-8 px-6 w-4/5 rounded-lg text-center flex flex-col justify-center items-center md:py-10 md:mx-16 lg:text-base lg:w-3/5">
      <h1 className="text-lg mb-6 font-semibold lg:text-3xl">
        Ready to be join your family?
      </h1>
      <NavLink to="/products">
        <button className="bg-orange-500 text-white py-3 px-4 rounded-lg">
          Shop Now
        </button>
      </NavLink>
    </div>
  );
}
