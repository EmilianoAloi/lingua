import React from "react";
import Image from "next/image";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { PiChairFill } from "react-icons/pi";

const Card = ({ title, text, img }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 max-w-[370px] shadow-xl overflow-hidden   md:mx-0">
        <figure>
          <Image src={img} width={500} height={500} alt="img card" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-md">{title}</h2>
          <p className="text-start text-xs">{text}</p>

          <div className="card-actions justify-end mt-2">
            <a className="text-md py-2 text-customPink flex  gap-2 items-center ">
              Ver detalles{" "}
              <FaArrowRight color="#f04967" className="mt-0.5" fontSize={15} />
            </a>
          </div>
        </div>
        <div className="flex justify-around text-white bg-customPink text-xs md:text-sm">
          <h6 className="text-xs flex items-center gap-2 py-2 px-2">
            <PiChairFill color="white" />
            20 asientos
          </h6>
          {/* <h6 className="text-xs flex items-center gap-2 py-2 px-2">
            <IoMdCheckmarkCircle color="white" />
            20 clases
          </h6> */}
          <h6 className="text-xs flex items-center gap-2 py-2 px-2">
            <MdOutlineAccessTimeFilled color="white" />
            10 semanas
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
