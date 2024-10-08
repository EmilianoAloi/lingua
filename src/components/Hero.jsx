import Image from "next/image";
import oval from "@/assets/esfera.png";
import marco from "@/assets/marco.png";
import hero from "@/assets/hero.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import heroKid from "@/assets/hero-kid.png";

const Hero = () => {
  return (
    <section className="hero relative  bg-customPink pb-14 md:pb-20">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
        <div className="col-span-2 self-center pt-8 md:pt-28">
          <div className="self-center justify-self-center">
            <Image
              src={heroKid}
              width={400}
              alt="oval"
              className="w-[75%] mx-auto mb-10 md:mb-10 sm:hidden"
            />
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold text-white ">
            Aprendé inglés en Lingua
          </h1>
          <h2 className=" md:block text-2xl lg:text-5xl font-bold text-white ">
            Transformá tu Futuro.
          </h2>
          <p className="mt-4 text-md lg:text-xl text-white max-w-2xl ">
            Somos la Casa de Idiomas de Escobar con más de
            <strong> 30 años de experiencia </strong> en la enseñanza del idioma
            Inglés.
          </p>

          <button className="btn btn-cta text-lg text-white shadow-xl mt-6  md:mt-8 px-8 bg-white text-customPink   font-semibold rounded shadow-xl">
            Empezá ahora
          </button>
        </div>

        <div className="hidden sm:block self-center justify-self-center pt-20  ">
          <Image src={heroKid} width={900} alt="oval" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
