import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Services() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-20 md:my-32">
        <h2 className="text-2xl text-center mb-9 font-bold md:text-4xl md:mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div className="lg:row-span-2 bg-slate-200 rounded-md p-6 flex justify-center items-center lg:flex-col gap-3">
            <TbTruckDelivery fontSize="1.5em" color="orange" />
            <p>Super Fast and Free Delivery</p>
          </div>
          <div className="bg-slate-200 rounded-md p-6 flex justify-center items-center gap-3">
            <BiShieldQuarter fontSize="1.5em" color="orange" />
            <p>Non-contact Shipping</p>
          </div>
          <div className="lg:row-span-2 bg-slate-200 rounded-md p-6 flex justify-center items-center lg:flex-col gap-3">
            <GiReceiveMoney fontSize="1.5em" color="orange" />
            <p>Money-back Guraranteed</p>
          </div>
          <div className="bg-slate-200 rounded-md p-6 flex justify-center items-center gap-3">
            <RiSecurePaymentLine fontSize="1.5em" color="orange" />
            <p>Super Secure Payment System</p>
          </div>
        </div>
      </div>
    </section>
  );
}
