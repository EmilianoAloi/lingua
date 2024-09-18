import Image from "next/image";
import oval from "@/assets/esfera.png";
import marco from "@/assets/marco.png";
import hero from "@/assets/hero.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";

const Hero = () => {
  return (
    <section className="hero relative  bg-customPink pb-20">
      <div className="container  max-w-screen-xl mx-auto grid grid-cols-3 gap-4 py-4">
        <div className="col-span-2 self-center pt-28">
          <h1 className="text-4xl lg:text-5xl font-bold text-white ">
            Aprendé inglés en Lingua <br /> Transformá tu Futuro.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white max-w-2xl ">
            Somos Lingua, la Casa de Idiomas de Escobar con más de <br />{" "}
            <strong> 30 años de experiencia </strong> en la enseñanza del idioma
            Inglés.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-customPink text-lg font-semibold rounded ">
            ¡Inscríbete Ahora!
          </button>
        </div>

        <div className="self-center justify-self-center pt-20  ">
          <Image src={hero3} width={900} alt="oval pattern" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
