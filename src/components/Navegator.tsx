import Logo from '../../public/black_backgroundless.png';	

const Navegator = () => {

    return (
            <div className="flex justify-between items-center md:gap-12 px-6 bg-slate-700">
                <div className="">
                    <img src={Logo} alt="Logo" className="w-40" />
                </div>
                <div className="flex justify-between items-center gap-4">
                    <button className='text-slate-200 hover:text-slate-400 '>Inicio</button>
                    <button className='text-slate-200 hover:text-slate-400 '>Blog</button>
                    <button className='text-slate-200 hover:text-slate-400 '>Galeria</button>
                    <button className='text-slate-200 hover:text-slate-400 '>Videos</button>
                    <button className='text-slate-200 hover:text-slate-400 '>Sobre Nosotros</button>
                </div>
            </div>
    );
};

export default Navegator;