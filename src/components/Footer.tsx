import { Linkedin, Facebook, Phone, MapPin, Mail, ArrowRight } from 'lucide-react'; 
import Link from 'next/link';

export default function Footer() {
  return (
    // CAMBIO DE COLOR: El fondo más oscuro para el final (Ancla visual)
    <footer className="w-full bg-[#020617] text-slate-400 text-sm pt-20 pb-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: Empresa + Redes */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">YOCONTA TEC</h3>
            <p className="text-slate-400 leading-relaxed pr-4 mb-6">
              Expertos en gestión contable y financiera. Combinamos experiencia con tecnología para la estabilidad de tu negocio.
            </p>
            {/* Redes Sociales: Colores específicos solo en HOVER */}
            <div className="flex gap-3">
              <SocialLink href="#" color="hover:bg-[#0A66C2] hover:text-white" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="#" color="hover:bg-[#1877F2] hover:text-white" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="https://wa.me/123456789" color="hover:bg-[#25D366] hover:text-white" icon={<Phone size={20} />} label="WhatsApp" />
            </div>
          </div>

          {/* COLUMNA 2: Conócenos */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Nuestra Empresa</h4>
            <ul className="space-y-3">
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/nosotros">Sobre Nosotros</FooterLink>
              <FooterLink href="/blog">Blog y Noticias</FooterLink>
              <FooterLink href="/faq">Preguntas Frecuentes</FooterLink>
            </ul>
          </div>

          {/* COLUMNA 3: Servicios */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3">
              <FooterLink href="/servicios/fiscal">Contabilidad Fiscal</FooterLink>
              <FooterLink href="/servicios/nominas">Gestión de Nóminas</FooterLink>
              <FooterLink href="/servicios/auditoria">Auditoría Financiera</FooterLink>
              <FooterLink href="/servicios/consultoria">Consultoría Estratégica</FooterLink>
            </ul>
          </div>

          {/* COLUMNA 4: Contáctanos */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-blue-500 mt-0.5 flex-shrink-0 group-hover:text-blue-400 transition-colors" size={20} />
                <span className="group-hover:text-slate-300 transition-colors">C. Maximiliano Carranza 486<br/>San juan de Miraflores</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" size={20} />
                <span className="group-hover:text-slate-300 transition-colors">+51 987 889 073</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" size={20} />
                <span className="group-hover:text-slate-300 transition-colors">yocontatec@outlook.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} YOCONTATEC S.A.C. Todos los derechos reservados.</p>
          <div className="flex gap-6">
              <Link href="/privacidad" className="hover:text-blue-400 transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-blue-400 transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Componentes auxiliares para limpiar el código
function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
      <li>
        <Link href={href} className="hover:text-white transition-colors flex items-center gap-2 group w-fit">
          <ArrowRight size={14} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          <span className="-translate-x-4 group-hover:translate-x-0 transition-transform">{children}</span>
        </Link>
      </li>
    );
  }

function SocialLink({ href, color, icon, label }: { href: string, color: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      // Base gris, color solo en hover
      className={`bg-slate-800/50 p-3 rounded-lg text-slate-400 transition-all duration-300 ${color} hover:-translate-y-1 border border-slate-700/50 hover:border-transparent`}
    >
      {icon}
    </a>
  );
}