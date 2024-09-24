import React from "react";
import Image from "next/image";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiChairFill } from "react-icons/pi";

const Card2 = ({ title, text, img }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 max-w-[350px]   mx-6 md:mx-0 shadow-xl overflow-hidden ">
        <figure>
          <Image src={img} width={350} height={200} alt="img card" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{title}</h2>
          <p className="text-start">{text}</p>

          <div className="card-actions justify-end my-2">
            <button className="btn btn-primary ">Leer mas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
