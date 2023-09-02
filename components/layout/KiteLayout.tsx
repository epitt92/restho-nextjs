import { o1, o11, o2, o3, o4 } from "@/assets";
import Image from "next/image";

const KiteRight = () => {
  return (
    <div className="w-[250px] h-auto p-4">
      <Image src={o2} alt="" width={250} height={250} />
    </div>
  );
};
const KiteLeft = () => {
  return (
    <div className="w-[250px] h-auto  p-4">
      <Image src={o3} alt="" width={250} height={250} />
    </div>
  );
};
const KiteTop = () => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] border-b-16 border-yellow-500 border-solid">
      <Image src={o11} alt="" width={250} height={250} />
    </div>
  );
};

const KiteBottom = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] border-t-16 border-red-500 border-solid">
      <Image src={o4} alt="" width={250} height={250} />
    </div>
  );
};

const KiteLayout = () => {
  return (
    <div className="flex justify-center items-center h-[500px]  w-full">
      <div className="relative h-full">
        <KiteTop />
        <div className="flex absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 ">
          <KiteLeft />
          <KiteRight />
        </div>
        <KiteBottom />
      </div>
    </div>
  );
};

export default KiteLayout;
