import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from '../../public/black_backgroundless.png';	

const Navegator = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

    return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="">
          {/* Using a placeholder for the logo - replace with your actual logo */}
          <img src={Logo} alt="Logo" className="w-40" />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-slate-200 hover:text-slate-400" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex justify-between items-center gap-4">
          <a href="/" className="text-slate-200 hover:text-slate-400 hover:border-b border-rose-400">
            <button>Inicio</button>
          </a>
          <a href="/blog" className="text-slate-200 hover:text-slate-400 hover:border-b border-rose-400">
            <button>Blog</button>
          </a>
          <a href="/galery" className="text-slate-200 hover:text-slate-400 hover:border-b border-rose-400">
            <button>Galeria</button>
          </a>
          <a href="/videos" className="text-slate-200 hover:text-slate-400 hover:border-b border-rose-400">
            <button>Videos</button>
          </a>
          <a href="/about" className="text-slate-200 hover:text-slate-400 hover:border-b border-rose-400">
            <button>Sobre Nosotros</button>
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="/" className="text-slate-200 hover:text-slate-400 hover:border-b border-slate-400">
            <button className="w-full text-left py-2">Inicio</button>
          </a>
          <a href="/blog" className="text-slate-200 hover:text-slate-400 hover:border-b border-slate-400">
            <button className="w-full text-left py-2">Blog</button>
          </a>
          <a href="/galery" className="text-slate-200 hover:text-slate-400 hover:border-b border-slate-400">
            <button className="w-full text-left py-2">Galeria</button>
          </a>
          <a href="/videos" className="text-slate-200 hover:text-slate-400 hover:border-b border-slate-400">
            <button className="w-full text-left py-2">Videos</button>
          </a>
          <a href="/about" className="text-slate-200 hover:text-slate-400 hover:border-b border-slate-400">
            <button className="w-full text-left py-2">Sobre Nosotros</button>
          </a>
        </div>
      )}
    </nav>
    );
};

export default Navegator;