import Image from "next/image"
import oval from '@/assets/esfera.png'
import marco from '@/assets/marco.png'
import hero from '@/assets/hero.png'
import hero2 from '@/assets/hero2.png'
import hero3 from '@/assets/hero3.png'

const Hero = () => {
    return (
        <section className="container min-h-screen max-w-screen-xl mx-auto grid grid-cols-3  gap-4">
            <div className="col-span-2 self-center pt-28">
                <h1 class="text-4xl lg:text-5xl font-bold text-customPink ">
                    Aprendé inglés en Lingua <br /> Transformá tu Futuro.
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-2xl ">
                    Somos Lingua, la Casa de Idiomas de Escobar con más de <br /> <strong> 30 años de experiencia </strong> en la enseñanza del idioma Inglés. <br /> Lorem ipsum dolor sit, amet consectetur adipisicing.</p>

                <button class="mt-8 px-8 py-4 bg-customPink text-white text-lg font-semibold rounded hover:bg-pink-600 transition duration-300">
                    ¡Inscríbete Ahora!
                </button>
                {/* <Image src={oval} width={200} alt="oval pattern" /> */}
            </div>

            <div className="self-center justify-self-center pt-20  ">
                <Image src={hero3} width={900} alt="oval pattern" className=" drop-shadow-2xl" />

            </div>

            {/* <div className="w-full h-full relative self-center justify-self-center pt-20">
                <Image src={hero} width={220} alt="oval pattern" className="absolute -right-16 mt-24 drop-shadow-2xl" />
                <Image src={hero2} width={220} alt="oval pattern" className="absolute -left-20 mt-36 top-24 center-0 drop-shadow-2xl" />
                <Image src={hero3} width={220} alt="oval pattern" className="absolute bottom-5 right-24 drop-shadow-2xl" />
            </div> */}

        </section>
    )
}

export default Hero