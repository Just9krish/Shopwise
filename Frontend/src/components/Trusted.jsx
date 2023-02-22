import google from "../assets/company/logo-google.png";
import microsoft from "../assets/company/logo-microsoft.png";
import hp from "../assets/company/logo-hp.png";
import ibm from "../assets/company/logo-ibm.png";
import vectorGraphic from "../assets/company/logo-vector-graphics.png";
import ReadyToContact from "../components/ReadyToContact";

export default function Trusted() {
  return (
    <section className="container relative py-8 mx-auto">
      <div className="max-w-6xl mx-auto mb-28 md:mb-32 lg:mb-44">
        <h2 className="text-center capitalize font-bold text-4xl mb-9 md:mb-12">
          Trusted by 500+ Companies
        </h2>
        <figure className="flex flex-col justify-center items-center gap-10 md:flex-row md:flex-wrap md:gap-20">
          <img src={google} alt="google" />
          <img src={ibm} alt="ibm" />
          <img src={hp} alt="hp" />
          <img src={microsoft} alt="microsoft" />
          <img src={vectorGraphic} alt="vector graphics" />
        </figure>
      </div>
      <ReadyToContact />
    </section>
  );
}
