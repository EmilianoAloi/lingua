"use client";

import { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const timelineRef = useRef(null);
  const [activeItems, setActiveItems] = useState([]);

  const handleScroll = () => {
    const timelineItems = Array.from(
      timelineRef.current.querySelectorAll("li")
    );

    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight * 0.35 && rect.bottom >= 0;

      if (isVisible) {
        setActiveItems((prev) => [...new Set([...prev, index])]);
      } else {
        setActiveItems((prev) => prev.filter((i) => i !== index));
      }
    });

    const mainTimelineContainer = timelineRef.current;
    if (mainTimelineContainer) {
      const mainTimelineBottom =
        mainTimelineContainer.getBoundingClientRect().bottom -
        window.innerHeight * 0.5;
      const innerElement = mainTimelineContainer.querySelector(".inner");

      if (innerElement) {
        innerElement.style.height = `${mainTimelineBottom}px`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="timeline-section section-padding md:mt-20 mt-10"
      id="section_3"
    >
      <div className="section-overlay"></div>

      <div className="">
        <div className="">
          <div className="mx-auto mt-16 md:w-3/4">
            <div className="timeline-container">
              <ul
                className="vertical-scrollable-timeline"
                id="vertical-scrollable-timeline"
                ref={timelineRef}
              >
                <div className="list-progress">
                  <div className="inner"></div>
                </div>

                <li className={activeItems.includes(0) ? "active" : ""}>
                  <h4 className="text-lg md:text-2xl font-bold text-slate-800 mb-3">
                    Prepará tu inscripción al examen:
                  </h4>
                  <p className="text-slate-800 text-sm md:text-lg">
                    Regístrate con tiempo y asegúrate de cumplir con todos los
                    requisitos. Escoge la fecha del examen y completa el
                    formulario de inscripción online para reservar tu lugar.
                  </p>
                  <div className="icon-holder text-white text-3xl font-bold">
                    1
                  </div>
                </li>

                <li className={activeItems.includes(1) ? "active" : ""}>
                  <h4 className="text-lg md:text-2xl font-bold text-slate-800 mb-3">
                    Estudiá con materiales oficiales:
                  </h4>
                  <p className="text-slate-800 text-sm md:text-lg">
                    Dedica tiempo a estudiar con los recursos proporcionados por
                    el instituto. Aprovecha las clases de preparación y
                    ejercicios prácticos diseñados para que domines todas las
                    habilidades del idioma: lectura, escritura, comprensión
                    auditiva y expresión oral.
                  </p>
                  <div className="icon-holder text-white text-3xl font-bold">
                    2
                  </div>
                </li>

                <li className={activeItems.includes(2) ? "active" : ""}>
                  <h4 className="text-lg md:text-2xl font-bold text-slate-800 mb-3">
                    Presenta el examen y recibe tu certificación:
                  </h4>
                  <p className="text-slate-800 text-sm md:text-lg">
                    Llega el día de la prueba. Mantén la calma, demuestra lo que
                    has aprendido y una vez aprobado, obtendrás un certificado
                    internacionalmente reconocido por tu nivel de inglés.
                  </p>
                  <div className="icon-holder text-white text-3xl font-bold">
                    3
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 text-center mt-10">
            <p className="text-slate-800">
              ¿Querés saber mas?
              <button
                href="#"
                className="btn text-white shadow-xl mt-5 md:mt-0 md:ms-3"
              >
                + Informacion sobre Examen AACI
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
