import Logo from '../../public/black_backgroundless.png';	

const Navegator = () => {

    return (
            <div className="flex justify-between items-center md:gap-12 px-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500">
                <div className="">
                    <img src={Logo} alt="Logo" className="w-40" />
                </div>
                <div className="flex justify-between items-center gap-4">
                    <a href='/' className='text-slate-200 hover:text-slate-400'><button>Inicio</button></a>
                    <a href='/blog' className='text-slate-200 hover:text-slate-400'><button>Blog</button></a>
                    <a href='/galery' className='text-slate-200 hover:text-slate-400'><button>Galeria</button></a>
                    <a href='/videos' className='text-slate-200 hover:text-slate-400'><button>Videos</button></a>
                    <a href='/about' className='text-slate-200 hover:text-slate-400'><button>Sobre Nosotros</button></a>
                </div>
            </div>
    );
};

export default Navegator;