import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart-icon.svg";
import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  const links = [
    { path: "/", name: "Home", id: 1 },
    { path: "/products", name: "Products", id: 2 },
    { path: "/about", name: "About", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* for mobile navigation */}
      <header className="bg-white w-full shadow-md z-40 lg:hidden">
        <div className="flex justify-between items-center px-6 py-4">
          <div
            className="z-40 cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CgClose color="white" fontSize="1.25em" /> : <CgMenu />}
          </div>
          <NavLink>
            <img src={logo} className="h-6" alt="Company logo" />
          </NavLink>
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="Cart" />
            <div className="absolute bg-orange-400 text-white text-[9px] flex justify-center items-center rounded-full p-1 h-3 w-3 -top-1 -right-1">
              10
            </div>
          </div>
        </div>

        <div
          className={`bg-orange-400 w-4/5 z-30 h-screen fixed top-0 flex flex-col items-start shadow-xl transition-all duration-500 ${
            isOpen ? "left-0" : "-left-[100%]"
          }`}
        >
          <ul
            className={`flex flex-col mt-24 space-y-6 pl-6 text-white font-semibold 
            }`}
          >
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-gray-200 transition-all"
              >
                <NavLink key={link.id} to={link.path}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* for desktop navigation */}
      <header className="hidden lg:block w-full shadow-md px-28">
        <div className="flex justify-between items-center p-6 border-b">
          <NavLink to="/">
            <img src={logo} className="h-7" alt="Logo" />
          </NavLink>
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  !isActive
                    ? "block relative hover:after:absolute after:top-12 after:h-1 after:inset-x-0 after:w-full after:bg-orange-500 after:transition-all after:duration-300"
                    : "text-orange-500 relative after:absolute after:top-12 after:h-1 after:inset-x-0 after:w-full after:bg-orange-500 after:transition-all after:duration-300"
                }
                key={link.id}
                to={link.path}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="relative">
              <NavLink to="/cart">
                <AiOutlineShoppingCart fontSize="1.2em" />
              </NavLink>
              <div className="absolute bg-orange-500 text-white text-[8px] flex justify-center items-center rounded-full p-1 h-3 w-3 -top-1 -right-1">
                10
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
