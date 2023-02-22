import { NavLink } from "react-router-dom";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { MdLocationOn, MdWifiCalling3, MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#00252E] pt-32 pb-16 px-4 lg:pt-32 lg:pb-8 lg:px-0 text-white">
      <div className="container mx-auto px-4 max-w-lg md:max-w-5xl lg:max-w-7xl">
        <h3 className="mb-6 text-2xl font-semibold lg:text-4xl">E-shop</h3>
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="mb-12 md:max-w-sm">
            <div className="flex items-center mb-4">
              <span className="mr-4">
                <MdLocationOn fontSize="1.2em" />
              </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi dolores similique repudiandae?
              </p>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-4">
                <MdWifiCalling3 fontSize="1.2em" />
              </span>
              <p>+91 0123456789</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-4">
                <MdEmail fontSize="1.2em" />
              </span>
              <p>example@eshop.com</p>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="mb-2">Subcribe to get notified for latest offer</h4>
            <form action="">
              <input
                type="text"
                placeholder="Your Email"
                autoComplete="off"
                name="subscribe"
                className="rounded-md px-2 py-1 mr-4 text-gray-500"
                required
              />
              <button className="bg-orange-500 py-1 px-3.5 rounded-md uppercase hover:bg-orange-300">
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-8 lg:m-0">
            <h1 className="mb-2 hidden lg:block">Follow us</h1>
            <div className="flex justify-center items-centers mb-6">
              <a
                className="flex justify-center items-center w-8 h-8 border border-white mr-4 rounded-full p-2 fill-white transition-all hover:border-orange-500 hover:fill-orange-500 hover:-translate-y-1"
                href="#"
              >
                <BsTwitter />
              </a>
              <a
                className="flex justify-center items-center w-8 h-8 border border-white mr-4 rounded-full p-2 fill-white transition-all hover:border-orange-500 hover:fill-orange-500 hover:-translate-y-1"
                href="#"
              >
                <FiInstagram />
              </a>
              <a
                className="flex justify-center items-center w-8 h-8 border border-white rounded-full p-2 fill-white transition-all hover:border-orange-500 hover:fill-orange-500 hover:-translate-y-1"
                href="#"
              >
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs lg:text-xl lg:text-right md:mb-1">
          <p>&copy; Copyright 2022 E-Shop. All rights reservered.</p>
        </div>
      </div>
    </footer>
  );
}
