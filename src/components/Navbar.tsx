"use client"; // 1. OBLIGATORIO para usar hooks y onClick

import { useState } from 'react'; // 2. Importamos el estado
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Importamos X para el botón de cerrar

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace (UX básica)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full py-4 px-8 fixed top-0 z-50 bg-white text-slate-800 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <div className="relative w-40 h-12 flex items-center z-50"> 
           <Link href="/" onClick={handleLinkClick}>
             <Image 
             src="/logo.png" 
             alt="YOCONTATEC Logo"
             width={250}
             height={100}
             className="object-contain cursor-pointer mix-blend-multiply"
             priority
             />
           </Link>
        </div>

        {/* MENÚ DE ESCRITORIO (Hidden en móvil) */}
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
        </div>

        {/* BOTÓN CONTACTO DE ESCRITORIO (Hidden en móvil) */}
        <div className="hidden md:block">
          <Link href="/contacto"> 
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold px-7 py-2.5 rounded-lg transition-all">
              Contáctanos
            </button>
          </Link>
        </div>

        {/* BOTÓN DE MENÚ MÓVIL (HAMBURGUESA / X) */}
        {/* Usamos z-50 para asegurarnos de que el botón siempre sea clicable */}
        <div 
            className="md:hidden text-slate-800 cursor-pointer z-50 transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>

      {/* ==============================
          BARRA LATERAL MÓVIL (Overlay)
         ============================== */}
      
      {/* Fondo oscuro traslúcido (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)} // Cierra el menú si tocan fuera
      />

      {/* Contenedor del Menú Lateral (Slide desde la derecha) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out pt-24 px-8 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 text-lg font-medium text-slate-700">
          <Link 
            href="/" 
            className="hover:text-[#FF451A] transition-colors border-b border-slate-100 pb-2"
            onClick={handleLinkClick}
          >
            Inicio
          </Link>
          <Link 
            href="/nosotros" 
            className="hover:text-[#FF451A] transition-colors border-b border-slate-100 pb-2"
            onClick={handleLinkClick}
          >
            Nosotros
          </Link>
          <Link 
            href="/servicios" 
            className="hover:text-[#FF451A] transition-colors border-b border-slate-100 pb-2"
            onClick={handleLinkClick}
          >
            Servicios
          </Link>

          {/* Botón de Contacto en Móvil */}
          <Link href="/contacto" onClick={handleLinkClick} className="mt-4"> 
            <button className="w-full bg-blue-600 active:bg-blue-700 text-white text-[16px] font-bold px-7 py-3 rounded-lg shadow-md transition-all">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>

    </nav>
  );
}