import Image from "next/image";
import Car from "/public/img/car.jpg";
import Form from "./Form";
import HeroText from "./HeroText";

const Header = () => {
  return (
    <>
      <div className="-z-10 fixed hidden lg:block">
        <Image alt="Background Image" src={Car} />
      </div>

      <div className="w-full lg:flex lg:flex-row flex-col items-center justify-center gap-[10vw] mt-4 lg:my-[72px]">
        <div className="mx-[20vw] block lg:hidden text-[32px] mb-4 ">
          <p className="scroller font-bold">
            BE
            <span className="font-bold text-primary">
              SECURE
              <br />
              INSURED <br />
              WITH J & R <br />
              ...↓
            </span>
          </p>
        </div>
        <HeroText />
        <Form />
      </div>
    </>
  );
};

export default Header;
