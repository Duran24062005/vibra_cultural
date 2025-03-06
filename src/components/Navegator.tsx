import Logo from '../../public/black_backgroundless.png';	

const Navegator = () => {

    return (
            <div className="flex justify-between items-center md:gap-12 px-6 bg-slate-700">
                <div className="">
                    <img src={Logo} alt="Logo" className="w-40" />
                </div>
                <div className="flex justify-between items-center gap-4">
                    <button className='text-slate-200 hover:text-slate-400'><a href='/'>Inicio</a></button>
                    <button className='text-slate-200 hover:text-slate-400'><a href='/blog'>Blog</a></button>
                    <button className='text-slate-200 hover:text-slate-400'><a href='/galery'>Galeria</a></button>
                    <button className='text-slate-200 hover:text-slate-400'><a href='/videos'>Videos</a></button>
                    <button className='text-slate-200 hover:text-slate-400'><a href='/about'>Sobre Nosotros</a></button>
                </div>
            </div>
    );
};

export default Navegator;