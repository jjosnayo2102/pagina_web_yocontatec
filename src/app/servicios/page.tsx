import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { CheckCircle2 } from 'lucide-react';

export default function ServiciosPage() {
  
    const services = [
    {
      id: "contabilidad",
      title: "Asesoría Contable Digital",
      description: "Transformamos la contabilidad tradicional en un sistema inteligente. Mantenemos tus libros al día utilizando software en la nube, permitiéndote acceder a tu información financiera en tiempo real desde cualquier dispositivo.",
      image: "/service-accounting.jpg",
      link: "/servicios/contabilidad",
      features: ["Libros electrónicos PLE/SIRE", "Estados financieros mensuales", "Dashboard de métricas en vivo"]
    },
    {
      id: "tributaria",
      title: "Gestión Tributaria Estratégica",
      description: "No solo liquidamos impuestos; diseñamos estrategias para optimizar tu carga fiscal cumpliendo rigurosamente con la ley. Evita multas y aprovecha todos los beneficios tributarios disponibles para tu sector.",
      image: "/service-tax.jpg",
      link: "/servicios/tributaria",
      features: ["Auditoría preventiva SUNAT", "Devoluciones y compensaciones", "Planeamiento tributario anual"]
    },
    {
      id: "auditoria",
      title: "Auditoría Financiera",
      description: "Aportamos credibilidad a tus cifras. Nuestra evaluación rigurosa y transparente fortalece la confianza de inversionistas, bancos y socios estratégicos sobre la salud financiera de tu empresa.",
      image: "/service-audit.jpg",
      link: "/servicios/auditoria",
      features: ["Auditoría de estados financieros", "Control interno y riesgos", "Due Diligence"]
    },
    {
      id: "laboral",
      title: "Asesoría Laboral y Planillas",
      description: "Gestionamos tu activo más valioso: tu equipo. Nos encargamos del cálculo de planillas, contratos y beneficios sociales, asegurando un clima laboral estable y cumplimiento normativo.",
      image: "/service-hr.jpg",
      link: "/servicios/laboral",
      features: ["Cálculo de nóminas y PLAME", "Contratos y renovaciones", "Seguridad y Salud en el Trabajo"]
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
              src="/servicios-header.jpg"
              alt="Nuestros Servicios Profesionales"
              fill
              className="object-cover"
              priority
            />
            {/* Mantengo el #0A192F aquí para que conecte con el Navbar/Header */}
            <div className="absolute inset-0 bg-[#0A192F]/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Nuestros Servicios</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para impulsar la eficiencia y el crecimiento sostenible de tu negocio.
          </p>
        </div>
      </section>

      {/* 2. LISTA DE SERVICIOS CON FONDO ALTERNADO (Nuevo Tono) */}
      {services.map((service, index) => {
        const isDark = index % 2 === 1;

        return (
          <section 
            key={service.id} 
            className={`py-20 lg:py-32 overflow-hidden ${
              // Nuevo tono: #112240 (Un azul marino más vibrante y profundo)
              isDark ? 'bg-[#112240]' : 'bg-white'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* TEXTO */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`h-1 w-12 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`}></div>
                    <span className={`font-bold uppercase tracking-widest text-xs ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      Módulo 0{index + 1}
                    </span>
                  </div>
                  
                  <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    {service.title}
                  </h2>
                  
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-blue-100/80' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 gap-4 pt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className={`${isDark ? 'text-cyan-400' : 'text-cyan-500'} flex-shrink-0`} size={20} />
                        <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Link href={service.link}>
                      <button className={`group flex items-center gap-3 font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                        isDark 
                        ? 'text-white hover:text-cyan-400' 
                        : 'text-[#0A192F] hover:text-blue-600'
                      }`}>
                        Explorar Servicio
                        <div className={`w-10 h-[2px] transition-all duration-300 group-hover:w-16 ${
                          isDark ? 'bg-cyan-400' : 'bg-blue-600'
                        }`}></div>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* IMAGEN CON DECORACIÓN MEJORADA */}
                <div className="flex-1 w-full relative">
                  <div className={`relative z-10 h-[350px] md:h-[500px] w-full rounded-tr-[60px] rounded-bl-[60px] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2`}>
                    <Image
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent"></div>
                  </div>
                  
                  {/* Decoración geométrica */}
                  <div className={`absolute -z-0 w-full h-full border-2 rounded-tr-[60px] rounded-bl-[60px] top-6 ${
                    index % 2 === 1 
                      ? '-left-6 border-cyan-500/30' 
                      : '-right-6 border-blue-600/20'
                  }`}></div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      <CtaSection />
      <Footer />
    </main>
  );
}