import Image from "next/image";
import Car from "/public/img/car.jpg";
import Form from "./Form";

const Header = () => {
  return (
    <>
      <div className="-z-10 fixed">
        <Image alt="Chat on WhatsApp" src={Car} />
      </div>
      <div className="w-full flex items-center justify-center gap-[20vw]">
        <div className="text-white text-[100px]">Text</div>
        {/* form start */}
        <Form />

        {/* form end */}
      </div>
    </>
  );
};

export default Header;
