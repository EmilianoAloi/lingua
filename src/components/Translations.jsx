const Translations = () => {
  return (
    <section className="translations-section bg-bg1 wave">
      <div className="container  mx-auto px-4 py-10 pb-20 md:py-20 md:mt-10 ">
        <h2 className="text-customPink  mb-4 title-border-radius text-md md:text-2xl font-semibold inline-block p-4 mb-6 ">
          Traducciones Públicas
        </h2>
        <h3 className="text-customBlack mb-4 text-xl md:text-4xl md:text-start  font-bold">
          Ofrecemos servicio de traducciones públicas para personas,
          instituciones o empresas.
        </h3>
        <p className="text-sm md:text-lg text-customBlack mb-4">
          Las traducciones públicas son documentos cuya traducción a otro idioma
          tiene valor legal a través del sello y firma del traductor público,
          quien brinda un aval de fidelidad acerca del contenido del texto
          traducido. Todos los traductores públicos habilitados se encuentran
          inscriptos en el Colegio de Traductores Publicos de la Ciudad de
          Buenos Aires.
        </p>

        <div className="text-center md:text-start">
          <button
            href="#"
            className="btn text-white shadow-xl mt-5 md:mt-5 ms-3 "
          >
            + Informacion sobre Traducciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Translations;
