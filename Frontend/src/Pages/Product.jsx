import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductContext from "../hooks/useProductContext";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import { formattedPrice } from "../helper/formatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiQuickMan } from "react-icons/gi";

export default function Product() {
  const { id } = useParams();
  const url = import.meta.env.VITE_URL;
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();

  useEffect(() => {
    getSingleProduct(`${url}?id=${id}`);
  }, []);

  return isSingleLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <Pagination productName={singleProduct.name} />
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto py-20 md:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <Carousel images={singleProduct.image} />
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-black">{singleProduct.name}</h2>
                <p className="text-lg">{singleProduct.stars} stars</p>
                <p className="text-lg ">{singleProduct.reviews} reviews</p>
              </div>
              <div className="mb-8">
                <p className="text-gray-400">
                  MRP:
                  <del>{formattedPrice(singleProduct.price + 250000)}</del>
                </p>
                <p className="text-green-800 font-black">
                  Deal of the day {formattedPrice(singleProduct.price)}
                </p>
              </div>
              <p className="text-sm mb-8">{singleProduct.description}</p>
              <div className="flex justify-between items-center mb-8">
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm">
                  <TbTruckDelivery />
                  <p>Free Delivery</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm">
                  <TbReplace />
                  <p>14 Days Replacement</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm">
                  <GiQuickMan />
                  <p>Fast Delivery</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-[#f5f5f5] p-4 rounded-md text-sm">
                  <MdSecurity />
                  <p>2 Year Warranty</p>
                </div>
              </div>
              <div>
                <p className="mb-8">
                  Available:{" "}
                  <span className="text-green-700 font-semibold">
                    {singleProduct.stock > 0 ? "Available" : "Not-Available"}
                  </span>
                </p>
                <p className="text-sm">Brand: {singleProduct.company}</p>
                <p className="text-sm">Product id: {singleProduct.id}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
