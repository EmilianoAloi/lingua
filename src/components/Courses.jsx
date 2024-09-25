import Card from "./Card";

const Courses = () => {
  return (
    <section className="courses-section bg-bg1 wave">
      <div className="container  mx-auto px-4 py-20 pt-10 ">
        <h2 className="text-customPink mb-4 title-border-radius text-md md:text-2xl font-semibold inline-block p-4 mb-6 ">
          Cursos de Inglés a medida
        </h2>
        <h3 className="text-customBlack text-xl md:text-4xl  font-bold mb-4">
          Ofrecemos cursos exclusivos para niños, adolescentes y adultos
        </h3>
        <p className="text-sm md:text-lg text-customBlack mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas
          veniam impedit enim placeat dicta iusto amet tempora quisquam
          voluptatum ullam, quisquam voluptatum ullam, empora quisquam
          voluptatum ullam, quisquam voluptatum ullam,
        </p>

        <div className="flex flex-col lg:flex-row gap-14 items-center justify-center">
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
            title="Cursos para niños"
            img={"/img/kids2.png"}
          />
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
            title="Cursos para adolescentes"
            img={"/img/curso-kids2.png"}
          />

          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
            title="Cursos para adultos"
            img={"/img/adultos2.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
