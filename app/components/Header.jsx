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
        <div className="text-white sm:invisible">
          <p className="scroller font-bold text-[48px]">
            BE
            <span className="font-bold text-[48px] text-primary">
              SECURE
              <br />
              INSURED <br />
              SMART <br />↘
            </span>
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
