import React from "react";
import Card2 from "./Card2";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="container py-10 md:py-16 md:pb-20 mx-auto ">
      <div className="flex flex flex-col lg:flex-row gap-5">
        <div className="mx-auto ">
          <h2 className="text-customPink mb-4 title-border-radius text-md md:text-2xl font-semibold inline-block p-4 mb-6 ">
            Cursos para empresas
          </h2>
          <p className="text-slate-800 mb-8 text-2xl md:text-4xl  font-bold max-w-[700px] mx-auto">
            Modalidad «in-company» o cursos regulares en Lingua.
          </p>
          <p className=" max-w-[700px] mx-auto">
            Ofrecemos cursos adaptados a las necesidades y objetivos de cada
            empresa. Preparamos al personal de empresas para exámenes
            internacionales de Cambridge o para obtener la certificación de AACI
            Certificates.
          </p>
          <div className="flex gap-10 mt-5 justify-center lg:justify-start md:mt-10 items-center ">
            <Image
              src="/img/logoAaci.png"
              width={150}
              height={150}
              alt="img card"
              className="aaci-logo"
            />
            <Image
              src="/img/logo-cambridge.png"
              width={300}
              height={250}
              alt="img card"
              className="cambridge-logo"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-around mt-10 mx-auto xl:ms-10">
          <Card2
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet Donec sed purus consectetur,"
            title="Cursos «in-company» "
            img={"/img/empresas.webp"}
          />
          <Card2
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet  Donec sed purus consectetur,"
            title="Cursos en Lingua"
            img={"/img/empresas.webp"}
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
