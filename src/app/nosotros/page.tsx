import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { Award, Zap, HeartHandshake, CalendarCheck } from 'lucide-react';

export default function NosotrosPage() {
  
  const team = [
    {
      name: "Laura González",
      role: "Socia Fundadora",
      image: "/team-1.jpg" 
    },
    {
      name: "Sofía Ramírez",
      role: "Especialista Tributaria",
      image: "/team-2.jpg"
    },
    {
      name: "Ana Ruiz",
      role: "Consultora Laboral",
      image: "/team-3.jpg"
    },
    {
      name: "Elena Castillo",
      role: "Auditora Senior",
      image: "/team-4.jpg"
    }
  ];

  const values = [
    {
      icon: <Award size={32} className="text-blue-600" />,
      title: "Transparencia",
      description: "Honestidad absoluta en cada cifra y reporte entregado."
    },
    {
      icon: <Zap size={32} className="text-blue-600" />,
      title: "Innovación",
      description: "Tecnología de vanguardia al servicio de tu crecimiento."
    },
    {
      icon: <HeartHandshake size={32} className="text-blue-600" />,
      title: "Empoderamiento",
      description: "Impulsamos el liderazgo femenino en el sector financiero."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Espaciador del Navbar */}
      <div className="h-24 bg-[#001233]"></div>

      {/* HEADER GEOMÉTRICO "TECH" */}
      <section className="relative bg-[#001233] text-white py-16 overflow-hidden">
        {/* Decoración de fondo (Triángulos azules abstractos) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Equipo</h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Somos una firma contable líder, 100% conformada por <span className="font-bold text-white">mujeres expertas</span>, 
            dedicadas a la excelencia profesional y la innovación tecnológica. Nuestra pasión es transformar 
            la contabilidad a través de soluciones digitales avanzadas.
          </p>
        </div>
      </section>

      {/* GRILLA DEL EQUIPO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Aquí está la adaptación a PC:
           En móvil (grid-cols-1) se ve una debajo de otra.
           En PC (md:grid-cols-4) se ven las 4 en fila.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Foto con efecto de marco suave */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-4 rounded-2xl overflow-hidden shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-slate-200 animate-pulse"></div> {/* Placeholder gris mientras carga imagen */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE VALORES */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-white rounded-full shadow-sm mb-4 text-blue-600">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{val.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER (Agenda una cita) */}
      <CtaSection />
      <Footer />
    </main>
  );
}