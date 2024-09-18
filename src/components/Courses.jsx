import Card from "./Card";

const Courses = () => {
  return (
    <section className="courses-section ">
      <div className="container  mx-auto px-4 py-20 text-center">
        <h2 class="text-customPink  mb-4 title-border-radius text-2xl font-semibold inline-block p-4 mb-6 ">
          Cursos de Inglés a medida
        </h2>
        <h3 class="text-customViolet mb-12 text-4xl font-bold">
          Ofrecemos cursos exclusivos para <br /> niños, adolesentes adultos y
          empresas
        </h3>

        <div className="flex justify-center gap-10">
          <Card />
          <Card />
        </div>

        <div className="flex justify-center gap-10 mt-20">
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Courses;
