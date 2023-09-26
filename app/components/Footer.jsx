import Image from "next/image";
import Link from "next/link";
import WhatsApp from "/public/img/WhatsAppButtonGreenMedium.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      {/* Large screen footer */}
      <div className="text-white lg:flex justify-evenly bg-black w-screen hidden">
        <p>© J&R Insurance {currentYear}. All rights reserved.</p>
        <p>
          Built by{" "}
          <Link
            href="https://studiozubair.com/"
            className="underline underline-offset-1"
          >
            Studio Zubair
          </Link>
        </p>
        <Link href="/" className="underline">
          Privacy Policy
        </Link>
      </div>
      {/* small screen footer */}
      <div className="text-black mt-6 lg:hidden flex gap-8 px-8">
        <div className="">
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/4407727183774"
            target="_blank"
          >
            <Image alt="Chat on WhatsApp" src={WhatsApp} />
          </a>
        </div>
        <div>
          <a href="tel:07727183774">
            <div className="font-bold flex flex-col  items-center">
              <p>Call On:</p>
              <p className="">07727183774</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-evenly mt-6 w-screen lg:hidden">
        <p>© J&R Insurance</p>
        <p>
          Built by{" "}
          <Link
            href="https://studiozubair.com/"
            className="underline underline-offset-1"
          >
            Studio Zubair
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
