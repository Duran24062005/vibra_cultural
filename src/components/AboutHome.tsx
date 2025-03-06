import React from 'react';
import img1 from '../../public/dbb125a9-ae2b-43bd-90e4-b111721c6c42.jpeg';
import img2 from '../../public/descarga (6).jpeg'

const AboutHome: React.FC = () => {
    return (
        <div className="grid grid-cols-2 items-center bg-slate-600 py-8 px-20">
            <div>
                <div className="absolute border border-amber-400 w-96 ml-8 p-1 shadow-lg transform -rotate-3 rounded-md hover:-translate-2">
                    <img src={img2} alt="Description" className='w-96 h-70 rounded-lg' />
                </div>
                <div className="border border-amber-400 w-96 ml-16 p-1 shadow-lg shadow-gradient-to-b from-gray-700 rounded-md hover:-translate-2">
                    <img src={img1} alt="Description" className='w-96 h-70 rounded-md' />
                </div>
            </div>
            <div className="container">
                <h1 
                    className='mb-6 lg:text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-800 text-transparent bg-clip-text'
                >Blog de Ingeniería, Programación y Desarrollo de Software</h1>
                <p className='text-gray-200 mb-2'>
                        Este proyecto es un blog personal diseñado para compartir conocimientos, ideas y experiencias en el ámbito de la ingeniería,
                    la creación de proyectos, la programación y el desarrollo de software. También incluirá análisis y reflexiones sobre teorías
                    y teoremas matemáticos, así como otros temas de interés dentro del mundo tecnológico y científico.
                </p>
                <p className='text-gray-200'>
                        A través de este espacio, quiero documentar mis aprendizajes, compartir avances en mis proyectos y proporcionar recursos que
                    puedan ser útiles tanto para estudiantes como para profesionales interesados en estas disciplinas. Además, el blog servirá
                    como un portafolio en línea donde podré mostrar mi trabajo y habilidades de una manera estructurada y accesible.
                </p>
                <p className='text-gray-200'>Your text goes here. This is a description or any other content you want to display.</p>
                <div className="bg-yellow-300 hover:bg-yellow-400 text-black p-2 my-4 rounded-md w-26 text-center">
                    <a href="/about">Conoce más</a>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;