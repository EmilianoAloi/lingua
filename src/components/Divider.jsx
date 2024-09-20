const Divider = () => {
  return (
    <div className="py-8 bg-customPink text-white">
      <div className="mx-auto flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center container ">
        <div className="max-w-[600px]">
          <h3 className="text-center md:text-start text-xl font-semibold">
            Descargá el programa de todos los cursos
          </h3>
          <p className="hidden md:block text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="btn btn2 bg-white text-white shadow-xl">
          Descargar programa
        </button>
      </div>
    </div>
  );
};

export default Divider;
