import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    // CAMBIO 1: Fondo blanco (bg-white/90), texto oscuro (text-slate-800)
    // Al quitar el /95 y el blur, el navbar es 100% sólido igual que tu logo.
<nav className="w-full py-4 px-8 fixed top-0 z-50 bg-white text-slate-800 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <div className="relative w-40 h-12 flex items-center"> 
           <Link href="/">
             {/* Asegúrate de que tu logo sea visible sobre fondo blanco */}
             <Image 
             src="/logo.png" 
             alt="YOCONTATEC Logo"
             width={250}
             height={100}
             // Agregamos mix-blend-multiply para borrar el blanco del logo visualmente
             className="object-contain cursor-pointer mix-blend-multiply"
             priority
             />
           </Link>
        </div>

        {/* MENÚ: Texto oscuro y hover en el color primario */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-600">
          <Link href="/" className="hover:text-[#FF451A] transition-colors">
            Inicio
          </Link>
          <Link href="/nosotros" className="hover:text-[#FF451A] transition-colors">
            Nosotros
          </Link>
          <Link href="/servicios" className="hover:text-[#FF451A] transition-colors">
            Servicios
          </Link>
          <Link href="/blog" className="hover:text-[#FF451A] transition-colors">
            Blog
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/contacto"> 
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold px-7 py-2.5 rounded-lg transition-all">
              Contáctanos
            </button>
          </Link>
        </div>

        {/* Menú Móvil */}
        <div className="md:hidden text-slate-800 cursor-pointer">
          <Menu size={32} />
        </div>
      </div>
    </nav>
  );
}