import Card from "./Card";

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="container  mx-auto px-4 py-20  text-center">
        <h2 class="text-customPink  mb-4 title-border-radius text-2xl font-semibold inline-block p-4 mb-6 ">
          Cursos de Inglés a medida
        </h2>
        <h3 class="text-customPink mb-16 text-4xl font-bold">
          Ofrecemos cursos exclusivos para <br /> niños, adolescentes y adultos
        </h3>

        <div className="flex justify-between">
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
            title="Cursos para niños"
            img={"/img/kids.jpg"}
          />
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
            title="Cursos para adolescentes"
            img={"/img/curso-kids.png"}
          />

          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
            title="Cursos para adultos"
            img={"/img/adultos.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
