import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { Award, Zap, HeartHandshake, Target, Eye } from 'lucide-react';

export default function NosotrosPage() {
  
  const team = [
    {
      name: "Laura González",
      role: "Socia Fundadora",
      image: "/team.jpg" 
    },
    {
      name: "Sofía Ramírez",
      role: "Especialista Tributaria",
      image: "/team.jpg"
    },
    {
      name: "Ana Ruiz",
      role: "Consultora Laboral",
      image: "/team.jpg"
    },
    {
      name: "Elena Castillo",
      role: "Auditora Senior",
      image: "/team.jpg"
    }
  ];

  // Configuración de Principios con los colores del logo (Tricolor)
  const principles = [
    {
      icon: <Award size={32} />,
      title: "Transparencia Total",
      description: "Garantizamos honestidad absoluta y claridad en cada cifra.",
      // Rojo/Naranja del "YO"
      colorClass: "text-orange-600",
      bgClass: "bg-orange-50"
    },
    {
      icon: <Zap size={32} />,
      title: "Innovación Constante",
      description: "Tecnología de vanguardia para optimizar tu crecimiento.",
      // Verde del "CONTA"
      colorClass: "text-lime-600",
      bgClass: "bg-lime-50"
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Empoderamiento",
      description: "Impulsamos el talento femenino en el sector financiero.",
      // Celeste del "TEC"
      colorClass: "text-cyan-500",
      bgClass: "bg-cyan-50"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* Espaciador */}
      <div className="h-20 lg:h-24 bg-[#0A192F]"></div>

      {/* HERO SECTION: Limpio y Profesional (Sin tricolor) */}
      <section className="relative py-20 lg:py-28 bg-[#0A192F] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#112240] to-transparent opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              ¿Quiénes Somos?
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Somos una firma contable de vanguardia, conformada 100% por <span className="text-blue-400 font-semibold">mujeres expertas</span> dedicadas a redefinir los estándares de la consultoría financiera.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Nuestra esencia combina la precisión técnica con la innovación digital. No solo llevamos contabilidad; construimos estrategias que transforman datos en decisiones de valor.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
             <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10"></div>
             <Image
               src="/office-meeting.jpg" 
               alt="Equipo profesional"
               fill
               className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN (Colores Corporativos Azules) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="p-4 bg-blue-50 rounded-2xl mb-6 text-blue-700">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Misión</h2>
              <p className="text-slate-600 leading-relaxed">
                Brindar soluciones contables y tributarias de alta precisión, integrando tecnología y talento humano para liberar a nuestros clientes de la carga operativa.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="p-4 bg-indigo-50 rounded-2xl mb-6 text-indigo-700">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Visión</h2>
              <p className="text-slate-600 leading-relaxed">
                Ser la firma referente en consultoría financiera digital liderada por mujeres, reconocidas por nuestra ética inquebrantable y el éxito de nuestros socios.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPIOS (Iconos con colores del Logo: Rojo, Verde, Celeste) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Nuestros Principios</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Los pilares fundamentales que guían cada auditoría y estrategia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((prin, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  {/* Contenedor del ícono usando las clases dinámicas de color */}
                  <div className={`p-4 rounded-xl shadow-sm mb-6 transition-transform group-hover:scale-110 ${prin.bgClass} ${prin.colorClass}`}>
                    {prin.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {prin.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {prin.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EQUIPO (MODIFICADO: Cuadros grandes estilo tarjeta) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Conoce al Equipo</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col group">
                {/* CAMBIO: Eliminado 'rounded-full' y 'w-48'.
                   Ahora usa 'aspect-[3/4]' para formato retrato vertical y 'rounded-2xl'.
                */}
                <div className="relative w-full aspect-[3/4] mb-5 rounded-2xl overflow-hidden shadow-md border-4 border-white group-hover:border-blue-600 transition-all duration-300">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse"></div> 
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay gradiente opcional para que el texto resalte si quisieras ponerlo dentro, 
                      pero aquí lo dejamos limpio según tu estilo */}
                </div>
                
                <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mt-1">
                    {member.role}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}