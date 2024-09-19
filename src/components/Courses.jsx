import Card from "./Card";

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="container  mx-auto px-4 py-20  mb-20 text-center">
        <h2 class="text-customPink  mb-4 title-border-radius text-2xl font-semibold inline-block p-4 mb-6 ">
          Cursos de Inglés a medida
        </h2>
        <h3 class="text-customViolet mb-12 text-4xl font-bold">
          Ofrecemos cursos exclusivos para <br /> niños, adolescentes, adultos y
          empresas
        </h3>

        <div className="flex justify-between">
          <Card
            text="de 5 a 10 años"
            title="Cursos para niños"
            img={"/img/kids.jpg"}
          />
          <Card
            text="de 10 a 16 años"
            title="Cursos para adolescentes"
            img={"/img/curso-kids.png"}
          />

          <Card
            text="a partir de los 16"
            title="Cursos para adultos"
            img={"/img/adultos.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
