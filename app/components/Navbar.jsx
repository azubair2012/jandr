import React from "react";
import Image from "next/image";
import Logo from "/public/img/logo-png.png";
import WhatsApp from "/public/img/WhatsAppButtonGreenMedium.svg";

import { FcPhoneAndroid } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className=" bg-[#202020] w-full flex justify-around items-center px-8">
      <a href="tel:017XXXXXXX">
        <div className="text-white text-lg border-white border-2 rounded-md flex items-center px-2">
          <FcPhoneAndroid size="50" />
          <div>
            <p>Call Us</p>
            <p>017XXXXXXX</p>
          </div>
        </div>
      </a>
      <div>
        <Image alt="Logo" src={Logo} width={144} height={144} />
      </div>
      <div className="text-white">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/1XXXXXXXXXX">
          <Image alt="Chat on WhatsApp" src={WhatsApp} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
