import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; // Ajusta la ruta si es necesario (../components/Navbar)
import Footer from '@/components/Footer'; // Ajusta la ruta si es necesario
import CtaSection from '@/components/CtaSection';
import { Laptop, Calculator, FileSearch, Users, ArrowRight, CalendarCheck } from 'lucide-react';

export default function ServiciosPage() {
  
  const services = [
    {
      icon: <Laptop size={32} className="text-blue-600" />,
      title: "Asesoría Contable Digital",
      description: "Contabilidad inteligente y automatizada para tu empresa. Acceso en tiempo real a tus finanzas.",
      link: "/contacto"
    },
    {
      icon: <Calculator size={32} className="text-blue-600" />,
      title: "Gestión Tributaria Estratégica",
      description: "Optimización fiscal y cumplimiento normativo. Maximizamos tus beneficios legalmente.",
      link: "/contacto"
    },
    {
      icon: <FileSearch size={32} className="text-blue-600" />,
      title: "Auditoría Financiera",
      description: "Evaluación rigurosa y transparente de tus estados financieros para garantizar confianza.",
      link: "/contacto"
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: "Asesoría Laboral",
      description: "Asesoramiento experto en gestión de talento, planillas y relaciones laborales.",
      link: "/contacto"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Espaciador para el Navbar fijo */}
      <div className="h-24 bg-[#001233]"></div>

      {/* Encabezado con Título e Imagen */}
      <section className="relative bg-[#001233] pb-20 rounded-b-[3rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center pt-8 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Nuestros Servicios
          </h1>
          <p className="text-blue-200 text-lg">Soluciones integrales para tu crecimiento</p>
        </div>

        {/* Imagen Hero Recortada */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image
              src="/servicios-header.jpg"
              alt="Equipo trabajando"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="max-w-7xl mx-auto px-6 py-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Conoce más <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER (Agenda una cita) */}
      <CtaSection />

      <Footer />
    </main>
  );
}