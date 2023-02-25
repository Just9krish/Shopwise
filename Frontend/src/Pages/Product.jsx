import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductContext from "../hooks/useProductContext";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import { formattedPrice } from "../helper/formatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiQuickMan } from "react-icons/gi";
import Slider from "../components/Slider";
import Loader from "../components/Loader";
import Star from "../components/Star";
import ColorPicker from "../components/ColorPicker";
import AddtoCart from "../components/AddtoCart";

export default function Product() {
  const { id } = useParams();
  const url = import.meta.env.VITE_URL;
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();

  useEffect(() => {
    getSingleProduct(`${url}?id=${id}`);

    window.scrollTo(0, 0);
  }, []);

  return isSingleLoading ? (
    <section className="flex justify-center items-center h-screen">
      <Loader />
    </section>
  ) : (
    <>
      <Pagination productName={singleProduct.name} />
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <Carousel images={singleProduct.image} />
            <Slider images={singleProduct.image} />
            <div className="space-y-6">
              <div className="">
                <h2 className="text-3xl font-black">{singleProduct.name}</h2>
                <Star
                  stars={singleProduct.stars}
                  reviews={singleProduct.reviews}
                />
              </div>
              <div className="">
                <p className="text-gray-400">
                  MRP:
                  <del>{formattedPrice(singleProduct.price + 250000)}</del>
                </p>
                <p className="text-green-800 font-black">
                  Deal of the day {formattedPrice(singleProduct.price)}
                </p>
              </div>
              <p className="text-sm mb-8">{singleProduct.description}</p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm lg:text-base lg:p-6">
                  <TbTruckDelivery />
                  <p>Free Delivery</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm lg:text-base lg:p-6">
                  <TbReplace />
                  <p>14 Days Return</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm lg:text-base lg:p-6">
                  <GiQuickMan />
                  <p>Fast Delivery</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm lg:text-base lg:p-6">
                  <MdSecurity />
                  <p>2 Year Warranty</p>
                </div>
              </div>
              <div>
                <p className="mb-6">
                  Available:{" "}
                  <span className="text-green-700 font-semibold">
                    {singleProduct.stock > 0 ? "Available" : "Not-Available"}
                  </span>
                </p>
                <p className="text-sm">Brand: {singleProduct.company}</p>
                <p className="text-sm">Product id: {singleProduct.id}</p>
              </div>
              <hr className="max-w-full w-[90%] bg-gray-100" />
              <div>
                {singleProduct.stock < 0 ? (
                  <div>
                    <p className="text-red-600 font-bold text-2xl">
                      Out of stock currently
                    </p>
                  </div>
                ) : (
                  <>
                    <ColorPicker product={singleProduct} />
                    <AddtoCart product={singleProduct} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
