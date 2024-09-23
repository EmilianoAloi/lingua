import React from "react";
import Image from "next/image";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiChairFill } from "react-icons/pi";

const Card = ({ title, text, img }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 max-w-[320px] shadow-xl overflow-hidden  md:mx-0">
        <figure>
          <Image src={img} width={500} height={500} alt="img card" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{title}</h2>
          <p className="text-start">{text}</p>

          <div className="card-actions justify-end my-2">
            <button className="btn btn-primary ">Leer mas</button>
          </div>
        </div>
        <div className="flex justify-around text-white bg-customPink text-xs md:text-sm">
          <h6 class="text-xs flex items-center gap-2 py-2 px-2">
            <PiChairFill color="white" />
            20 asientos
          </h6>
          <h6 class="text-xs flex items-center gap-2 py-2 px-2">
            <IoMdCheckmarkCircle color="white" />
            20 clases
          </h6>
          <h6 class="text-xs flex items-center gap-2 py-2 px-2">
            <MdOutlineAccessTimeFilled color="white" />
            10 semanas
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
