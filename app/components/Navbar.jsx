import React from "react";
import Image from "next/image";

import WhatsApp from "/public/img/WhatsAppButtonGreenMedium.svg";

const Navbar = () => {
  return (
    <div className="text-white bg-dark w-full flex justify-around items-center px-8">
      <a href="tel:017XXXXXXX">
        <div className="text-white flex gap-2 text-2xl">
          <p>Call Us:</p>
          <p>07568700173</p>
        </div>
      </a>
      <div className="my-4">
        <span className="font-extrabold text-5xl">J&R </span>{" "}
        <span className="font-bold text-xl"> INSURANCE</span>
      </div>
      <div className="text-white hover:scale-110">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/4407568700173"
          target="_blank"
        >
          <Image alt="Chat on WhatsApp" src={WhatsApp} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
