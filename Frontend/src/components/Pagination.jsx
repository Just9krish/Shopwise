import { NavLink } from "react-router-dom";
export default function Pagination({ productName }) {
  return (
    <div className="flex gap-2 text-lg lg:text-xl font-semibold py-5 border-b bg-slate-50 pl-6">
      <NavLink className="text-orange-500" to="/">
        Home/
      </NavLink>
      <p>{productName}</p>
    </div>
  );
}
