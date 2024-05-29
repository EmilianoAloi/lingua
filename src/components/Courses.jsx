import Card from "./Card"

const Courses = () => {
    return (
        <section className="text-center ">
            <div className="py-10 max-w-screen-xl mx-auto w-50 text-white">
                <h2 className=" text-5xl font-bold ">Cursos a tu medida </h2>
                <p className="text-xl pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, nesciunt ratione amet nam nihil reiciendis quidem eum eos mollitia, quisquam in libero tenetur odio laudantium ipsa placeat et eaque sed.</p>
            </div>

            <div className=" grid grid-cols-4">
                <Card />
                <Card />
                <Card />
                <Card />


            </div>

        </section>
    )
}

export default Courses