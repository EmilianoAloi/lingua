import Image from "next/image";
import cardImg from "@/assets/cards/0.jpg";

const Card = () => {
  return (
    <div className="w-[32rem] flex flex-col justify-center">
      <div className="p-3 rounded-full bg-customPink overflow-hidden w-2/4  mx-auto z-20">
        <Image
          src="/img/curso-kids.png"
          alt="card img"
          className="rounded-full"
          width={300}
          height={300}
        />
      </div>

      <div className="bg-customPink text-white -mt-10 p-8 pt-16 rounded-lg w-full text-start">
        <h4 className="text-2xl font-bold mb-6">Cursos para niños</h4>
        <p className="">
          Los alumnos entran en contacto con el idioma a través de juegos,
          canciones, dramatizaciones e historias. Las clases son dinámicas e
          interactivas. Desarrollamos las cuatro habilidades del lenguaje:
          habla, lectura, escritura y comprensión auditiva.
        </p>
      </div>
    </div>

    // <div className="classNamees-item">
    //   <div className="bg-gray-100 rounded-full w-3/4 mx-auto p-3">
    //     <Image
    //       width={50}
    //       height={50}
    //       className=" rounded-full"
    //       src="/img/kids.jpg"
    //       alt="website template image"
    //     />
    //   </div>
    //   <div className="bg-gray-100 rounded p-4 pt-5 -mt-10">
    //     <a
    //       className="block text-center text-2xl mt-3 mb-4"
    //       href="https://www.free-css.com/free-css-templates"
    //     >
    //       Art &amp; Drawing
    //     </a>
    //     <div className="flex items-center justify-between mb-4">
    //       <div className="flex items-center">
    //         <Image
    //           width={100}
    //           height={100}
    //           className="rounded-full w-11 h-11"
    //           src="/img/user.jpg"
    //           alt="website template image"
    //         />
    //         <div className="ml-3">
    //           <h6 className="text-primary mb-1">Jhon Doe</h6>
    //           <small>Teacher</small>
    //         </div>
    //       </div>
    //       <span className="bg-primary text-white rounded-full py-2 px-3">
    //         $99
    //       </span>
    //     </div>
    //     <div className="grid grid-cols-3 gap-1">
    //       <div>
    //         <div className="border-t-4 border-primary pt-2">
    //           <h6 className="text-primary mb-1">Age:</h6>
    //           <small>3-5 Years</small>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="border-t-4 border-green-500 pt-2">
    //           <h6 className="text-green-500 mb-1">Time:</h6>
    //           <small>9-10 AM</small>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="border-t-4 border-yellow-500 pt-2">
    //           <h6 className="text-yellow-500 mb-1">Capacity:</h6>
    //           <small>30 Kids</small>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
