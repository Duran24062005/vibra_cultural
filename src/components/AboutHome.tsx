import React from 'react';
import img1 from '../../public/dbb125a9-ae2b-43bd-90e4-b111721c6c42.jpeg';
import img2 from '../../public/descarga (6).jpeg'

const AboutHome: React.FC = () => {
    return (
        <div className="bg-slate-600 py-8 px-4 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image section */}
        <div className="relative h-[300px] sm:h-[400px] mx-auto md:mx-0 w-full max-w-md order-2 md:order-1 mb-8 md:mb-0">
          {/* First image (rotated) */}
          <div className="absolute top-0 left-0 sm:left-4 border border-amber-400 w-[85%] sm:w-[90%] p-1 shadow-lg transform -rotate-3 rounded-md hover:translate-y-1 transition-transform duration-300 z-10">
            <img
              src={img2}
              alt="Description"
              className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
            />
          </div>

          {/* Second image */}
          <div className="absolute top-8 left-4 sm:left-12 border border-amber-400 w-[85%] sm:w-[90%] p-1 shadow-lg rounded-md hover:translate-y-1 transition-transform duration-300 z-20">
            <img
              src={img1}
              alt="Description"
              className="w-full h-auto rounded-md object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="order-1 md:order-2">
          <h1 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-800 text-transparent bg-clip-text">
            Blog de Ingeniería, Programación y Desarrollo de Software
          </h1>

          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            Este proyecto es un blog personal diseñado para compartir conocimientos, ideas y experiencias en el ámbito
            de la ingeniería, la creación de proyectos, la programación y el desarrollo de software. También incluirá
            análisis y reflexiones sobre teorías y teoremas matemáticos, así como otros temas de interés dentro del
            mundo tecnológico y científico.
          </p>

          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            A través de este espacio, quiero documentar mis aprendizajes, compartir avances en mis proyectos y
            proporcionar recursos que puedan ser útiles tanto para estudiantes como para profesionales interesados en
            estas disciplinas. Además, el blog servirá como un portafolio en línea donde podré mostrar mi trabajo y
            habilidades de una manera estructurada y accesible.
          </p>

          <div className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black p-2 my-2 rounded-md text-center transition-colors duration-300">
            <a href="/about" className="block px-4">
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutHome;