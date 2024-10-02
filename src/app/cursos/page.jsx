import VerticalTab from "@/components/courses/VerticalTab";

const CoursesPage = () => {
  return (
    <div>
      <section className="bg-cursos flex items-center">
        <h2 className="container text-white   text-2xl md:text-4xl font-semibold inline-block p-4  ">
          CURSOS DE INGLÉS
        </h2>
      </section>

      <section className="container pt-8">
        <h3 className="text-customBlack text-xl md:text-4xl  font-semibold mb-4">
          Cursos para niños de 3 a 7 años
        </h3>
        <div className="my-6">
          <VerticalTab />
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
