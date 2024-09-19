import React from "react";
import Image from "next/image";

const Card2 = ({ title, text, img }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-[22rem] shadow-xl">
        <figure>
          <Image src={img} width={500} height={500} alt="img card" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{title}</h2>
          <p className="text-start">{text}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary ">Leer mas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
