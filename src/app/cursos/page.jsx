import VerticalTab from "@/components/courses/VerticalTab";

const CoursesPage = () => {
  return (
    <div>
      <section className="bg-cursos flex items-center">
        <h2 className="container text-white   text-2xl md:text-4xl font-semibold inline-block p-4  ">
          CURSOS DE INGLÉS
        </h2>
      </section>

      <section className="container pt-10">
        <h3 className="text-customBlack text-xl md:text-4xl  font-semibold mb-4">
          Cursos de inglés para niños de 6 a 11 años
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          distinctio cupiditate, libero quis tempora incidunt quam accusamus!
          Dolores nulla distinctio, harum dicta ex magnam voluptas illum sunt
          aut at cum.
        </p>
        <div className="mb-36 mt-10">
          <VerticalTab />
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
