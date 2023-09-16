import Image from "next/image";
import WhatsApp from "/public/img/WhatsAppButtonGreenMedium.svg";

const Footer = () => {
  return (
    <div className="text-black mt-6 lg:hidden flex gap-8 px-8">
      <div className="">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/4407568700173"
          target="_blank"
        >
          <Image alt="Chat on WhatsApp" src={WhatsApp} />
        </a>
      </div>
      <div>
        <a href="tel:017XXXXXXX">
          <div className="font-bold flex flex-col  items-center">
            <p>Call On:</p>
            <p className="">07568700173</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
