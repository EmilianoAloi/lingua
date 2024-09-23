import Card from "./Card";

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="container  mx-auto px-4 py-20 pt-10 ">
        <h2 class="text-customPink  mb-4 title-border-radius text-md md:text-2xl font-semibold inline-block p-4 mb-6 ">
          Cursos de Inglés a medida
        </h2>
        <h3 className="text-slate-800 mb-16 text-2xl md:text-4xl  font-bold ">
          Ofrecemos cursos exclusivos para niños, adolescentes y adultos
        </h3>

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
