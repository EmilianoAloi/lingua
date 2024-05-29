import Image from "next/image"
import oval from '@/assets/esfera.png'
const Hero = () => {
    return (
        <section className="container min-h-screen max-w-screen-xl mx-auto grid grid-cols-3  gap-4">
            <div className="col-span-2 self-center pt-20">
                <h1 class="text-4xl lg:text-5xl font-bold text-customPink ">
                    Aprendé inglés en Lingua <br /> Transformá tu Futuro.
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-2xl ">
                    Somos Lingua, la Casa de Idiomas de Escobar con más de <br /> <strong> 30 años de experiencia </strong> en la enseñanza del idioma Inglés. Nuestros cursos a medida y la calidez de los docentes ofrece una experiencia de aprendizaje dinámica y atractiva.
                </p>

                <button class="mt-8 px-8 py-4 bg-customPink text-white text-lg font-semibold rounded hover:bg-pink-600 transition duration-300">
                    ¡Inscríbete Ahora!
                </button>
                {/* <Image src={oval} width={200} alt="oval pattern" /> */}
            </div>

            <div className="pt-20 self-center justify-self-center">
                <Image src={oval} width={200} alt="oval pattern" />

            </div>

        </section>
    )
}

export default Hero