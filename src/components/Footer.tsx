import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'; 
// Nota: Importé Facebook por si quieres que sea idéntico a la imagen, 
// pero abajo usé los que tú tenías.
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#001233] text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Enlaces Legales */}
        <div className="flex gap-8 font-medium">
          <Link href="/legal" className="hover:text-white transition-colors">Aviso Legal</Link>
          <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
          <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
        </div>

        {/* Redes Sociales - Colores extraídos de la imagen */}
        <div className="flex gap-5 items-center">
          {/* 1. Icono Izquierdo: Rojo/Naranja (Como en la imagen) */}
          <a href="#" className="bg-[#FF451A] p-2 rounded text-white hover:bg-white hover:text-[#FF451A] transition-all duration-300 shadow-lg shadow-orange-900/20">
             {/* Usualmente Facebook va primero, puedes cambiar <Linkedin> por <Facebook> si prefieres */}
             <Linkedin size={20} /> 
          </a>

          {/* 2. Icono Central: Verde Lima */}
          <a href="#" className="bg-[#a3e635] p-2 rounded text-[#001233] hover:bg-white hover:text-[#84cc16] transition-all duration-300 shadow-lg shadow-lime-900/20">
             <Twitter size={20} />
          </a>

          {/* 3. Icono Derecho: Azul Cian */}
          <a href="#" className="bg-[#22D3EE] p-2 rounded text-[#001233] hover:bg-white hover:text-[#06b6d4] transition-all duration-300 shadow-lg shadow-cyan-900/20">
             <Instagram size={20} />
          </a>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="text-center mt-10 pt-8 border-t border-slate-800/50 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} YOCONTATEC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}