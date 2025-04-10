import img1 from '../../public/imgs/img (14).jpg';
import img2 from '../../public/imgs/img (15).jpg'
interface AboutHomeProps {
  btnIf: boolean;
}

const AboutHome = ({btnIf}:AboutHomeProps) => {
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
          <h1 className="mb-2 pb-4 text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-800 text-transparent bg-clip-text">
            ¿Qué es exactamente Cultural Vibes?
          </h1>

          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            Este es un sitio web tipo blog enfocado en rescatar, compartir y promover la identidad cultural de nuestro pueblo natal, a través de contenido multimedia, 
            artículos, historias, costumbres, personajes históricos y actuales, además de videos y fotografías que documenten su riqueza cultural.
          </p>

          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            A través de este espacio, quiero documentar y compartir la riqueza cultural de mi pueblo natal, explorando sus raíces, tradiciones, historia y 
            expresiones artísticas. Este blog no solo busca preservar nuestra identidad cultural, sino también ofrecer un recurso valioso para estudiantes, 
            investigadores y amantes de la cultura local. Además, funcionará como un archivo digital y portafolio donde quedará reflejado el trabajo 
            colaborativo de quienes desean mostrar y fortalecer el legado de nuestra comunidad de forma estructurada y accesible.
          </p>

          {btnIf && (  
            <div className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black p-2 my-2 rounded-md text-center transition-colors duration-300">
              <a href="/about" className="block px-4">
                Conoce más
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default AboutHome;