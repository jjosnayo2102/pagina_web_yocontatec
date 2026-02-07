import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiciosPage() {
  
  const services = [
    {
      id: "contabilidad",
      title: "Asesoría Contable Digital",
      description: "Transformamos la contabilidad tradicional en un sistema inteligente. Mantenemos tus libros al día utilizando software en la nube, permitiéndote acceder a tu información financiera en tiempo real desde cualquier dispositivo.",
      image: "/service-accounting.jpg", // Asegúrate de tener estas imágenes
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
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* Espaciador para el Navbar fijo */}
      <div className="h-20 lg:h-24 bg-[#0A192F]"></div>

      {/* 1. HERO SECTION: Full Width Image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Imagen de Fondo */}
        <div className="absolute inset-0 z-0">
            <Image
              src="/servicios-header.jpg" // Imagen general de servicios (ej. equipo trabajando, laptop, etc)
              alt="Nuestros Servicios Profesionales"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay oscuro para legibilidad del texto */}
            <div className="absolute inset-0 bg-[#0A192F]/80 mix-blend-multiply"></div>
        </div>

        {/* Contenido Texto Centrado */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
            Excelencia y Precisión
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales diseñadas para impulsar la eficiencia y el crecimiento sostenible de tu negocio.
          </p>
        </div>
      </section>

      {/* 2. LISTA DE SERVICIOS (Zig-Zag Layout) */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24 lg:space-y-32">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                // Alternamos el orden: Pares normal, Impares invertido (Imagen a la izquierda)
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Columna de TEXTO */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-600 font-bold uppercase tracking-wide text-sm">
                    0{index + 1}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
                  {service.title}
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Lista de características (Features) */}
                <ul className="space-y-3 pt-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href={service.link}>
                    <button className="group flex items-center gap-2 text-[#0A192F] font-bold border-b-2 border-blue-200 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all duration-300">
                      Más información
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Columna de IMAGEN */}
              <div className="flex-1 w-full relative">
                <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                  {/* Imagen del servicio específico */}
                  <Image
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Efecto de borde sutil al hover */}
                  <div className="absolute inset-0 border-[6px] border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-2xl"></div>
                </div>
                
                {/* Elemento decorativo detrás de la imagen (cuadrado de puntos o color sólido) */}
                <div className={`absolute -z-10 w-2/3 h-2/3 bg-cyan-100 rounded-3xl -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'}`}></div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA FOOTER */}
      <CtaSection />
      <Footer />
    </main>
  );
}