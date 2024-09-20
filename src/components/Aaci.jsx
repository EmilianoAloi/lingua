import Timeline from "./Timeline";

const Aaci = () => {
  return (
    <>
      <div className="section-aaci">
        <div className="aaci-overlay"></div>
        <div className="container py-10 mx-auto z-50">
          <div className="flex flex-col md:justify-center items-start">
            <h2 className="text-customPink  mb-4 title-border-radius text-md md:text-2xl inline-block font-semibold  p-4 mb-6 ">
              Examen AACI
            </h2>
            <h3 class="text-slate-800 text-2xl md:text-4xl md:text-start  font-bold">
              Rendí el Examen AACI (Asociación Argentina de Cultura Inglesa)
            </h3>
            <p className=" mt-2">
              Lingua Casa de Idiomas está suscripta a la AACI (Asociación
              Argentina de Cultura Inglesa) y todos nuestros exámenes están
              basados en el Common European Framework o Marco Común de
              Referencia para las Lenguas Europeas.
            </p>
          </div>

          <Timeline />
        </div>
      </div>
    </>
  );
};

export default Aaci;
