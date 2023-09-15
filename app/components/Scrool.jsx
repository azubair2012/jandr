import Image from "next/image";
import l1 from "/public/img/l1.jpg";
import l2 from "/public/img/l2.jpg";
import l3 from "/public/img/l3.jpg";
import l4 from "/public/img/l4.jpg";
import l5 from "/public/img/l5.jpg";
import l6 from "/public/img/l6.jpg";
import l7 from "/public/img/l7.jpg";
import l8 from "/public/img/l8.jpg";
import l9 from "/public/img/l9.jpg";
import l10 from "/public/img/l10.jpg";
import l11 from "/public/img/l11.jpg";
import l12 from "/public/img/l12.jpg";

const Scrool = () => {
  return (
    <div className="overflow-hidden w-full bg-black">
      <div className="w-full h-fit flex justify-around py-8 gap-4 animate-logo">
        <Image alt="Logo" src={l1} width={144} height={144} />
        <Image alt="Logo" src={l2} width={144} height={144} />
        <Image alt="Logo" src={l3} width={144} height={144} />
        <Image alt="Logo" src={l4} width={144} height={144} />
        <Image alt="Logo" src={l5} width={144} height={144} />
        <Image alt="Logo" src={l6} width={144} height={144} />
        <Image alt="Logo" src={l7} width={144} height={144} />
        <Image alt="Logo" src={l8} width={144} height={144} />
        <Image alt="Logo" src={l9} width={144} height={144} />
        <Image alt="Logo" src={l10} width={144} height={144} />
        <Image alt="Logo" src={l11} width={144} height={144} />
        <Image alt="Logo" src={l12} width={144} height={144} />
      </div>
    </div>
  );
};

export default Scrool;
