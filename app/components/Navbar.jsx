import Image from "next/image";
import WhatsApp from "/public/img/WhatsAppButtonGreenMedium.svg";

const Navbar = () => {
  return (
    <div className="text-white bg-dark w-full flex lg:justify-around items-center px-8">
      <a href="tel:0772718377">
        <div className="text-white font-thin lg:flex gap-2 lg:text-2xl text-md hidden">
          <p>Call Us:</p>
          <p className="lg:font-bold">07727183774</p>
        </div>
      </a>
      <div className="my-4">
        <span className="font-extrabold text-5xl ">J&R </span>
        <span className="font-bold text-xl"> INSURANCE</span>
      </div>
      <div className="text-white hover:scale-110 hidden lg:block">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/4407727183774"
          target="_blank"
        >
          <Image alt="Chat on WhatsApp" src={WhatsApp} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
