"use client";

import { IoMdCheckmarkCircle } from "react-icons/io";

const About = () => {
  return (
    <section className="py-6 md:py-20 about-section">
      <div>
        <div class="container mx-auto py-5">
          <div class="flex flex-wrap items-center gap-20">
            <div className="hidden md:block w-full md:w-5/12">
              <div className="about-video">
                <button
                  type="button"
                  class="btn-play"
                  onClick={() =>
                    document.getElementById("modal-about").showModal()
                  }
                >
                  <span></span>
                </button>
              </div>
            </div>

            <div className="w-full md:w-6/12">
              <h2 className="text-customPink mb-4 title-border-radius text-md md:text-2xl font-semibold inline-block p-4 mb-6 ">
                Sobre nosotros
              </h2>
              <h3 className="text-slate-800 mb-4 text-2xl md:text-4xl font-bold">
                En Lingua tenemos cursos de inglés desarrollados a tu medida.
              </h3>
              <p className=" text-black mb-6">
                Contamos con docentes con amplia experiencia y hemos capacitado
                a niños, adolescentes, adultos y personal de empresas. Cada
                clase es interactiva y personalizada y nuestro objetivo es
                lograr que los alumnos aprendan el idioma comprendiendo que el
                inglés es una herramienta fundamental que les permitirá
                interactuar, comunicarse y desenvolverse en un futuro personal y
                profesional.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
                <div>
                  <h6 className="mb-3 flex items-center gap-2 font-semibold text-black">
                    <IoMdCheckmarkCircle color="#f04967" />
                    Avalados por la AACI
                  </h6>
                  <h6 className="mb-3 flex items-center gap-2 font-semibold text-black">
                    <IoMdCheckmarkCircle color="#f04967" />
                    30 años de experiencia
                  </h6>
                  <h6 className=" flex items-center gap-2 font-semibold text-black">
                    <IoMdCheckmarkCircle color="#f04967" />
                    Aulas tecnológicas
                  </h6>
                </div>
                <div className="mt-fix-1">
                  <h6 className="mb-3 flex items-center gap-2 font-semibold text-black">
                    <IoMdCheckmarkCircle color="#f04967" />
                    Contenidos Online
                  </h6>
                  <h6 className="mb-3 flex items-center gap-2 font-semibold text-black">
                    <IoMdCheckmarkCircle color="#f04967" />
                    Ambiente amigable
                  </h6>
                  <h6 className="flex items-center gap-2 font-semibold text-black">
                    <IoMdCheckmarkCircle color="#f04967" />
                    Profesores calificados
                  </h6>
                </div>
              </div>
            </div>

            <div className="md:hidden w-full ">
              <div className="about-video">
                <button
                  type="button"
                  class="btn-play"
                  onClick={() =>
                    document.getElementById("modal-about").showModal()
                  }
                >
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal video */}

      <dialog id="modal-about" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3> */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/PeXZktbTgLo?si=liwwIHXVT0CoB38o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="text-customPink">close</button>
        </form>
      </dialog>
    </section>
  );
};

export default About;
