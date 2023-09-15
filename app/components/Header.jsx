import Image from "next/image";
import Car from "/public/img/car.jpg";
import Form from "./Form";

const Header = () => {
  return (
    <>
      <div className="-z-10 fixed ">
        <Image alt="Background Image" src={Car} />
      </div>
      <div className="w-full flex items-center justify-center gap-[10vw] my-[95px]">
        <div className="text-white">
          <p className="font-bold text-[48px]">
            BE INSURED <br /> BE SECURE with
          </p>
          <p className="text-primary font-extrabold text-[72px]">
            J & R INSURANCE
          </p>
          <p className="font-bold text-[30px]">Your Trusted Partner</p>
        </div>
        {/* form start */}
        <Form />

        {/* form end */}
      </div>
    </>
  );
};

export default Header;
