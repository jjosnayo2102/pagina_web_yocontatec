import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { Award, Zap, HeartHandshake, Target, Eye } from 'lucide-react';

export default function NosotrosPage() {
  const team = [
    {
      name: 'Laura González',
      role: 'Socia Fundadora',
      image: '/team.jpg',
    },
    {
      name: 'Sofía Ramírez',
      role: 'Especialista Tributaria',
      image: '/team.jpg',
    },
    {
      name: 'Ana Ruiz',
      role: 'Consultora Laboral',
      image: '/team.jpg',
    },
    {
      name: 'Elena Castillo',
      role: 'Auditora Senior',
      image: '/team.jpg',
    },
  ];

  const principles = [
    {
      icon: <Award size={30} />,
      title: 'Transparencia Total',
      description: 'Garantizamos honestidad absoluta y claridad en cada cifra.',
      colorClass: 'text-red-600',
      bgClass: 'bg-red-50',
      borderClass: 'border-red-200',
    },
    {
      icon: <Zap size={30} />,
      title: 'Innovación Constante',
      description: 'Tecnología de vanguardia para optimizar tu crecimiento.',
      colorClass: 'text-emerald-600',
      bgClass: 'bg-emerald-50',
      borderClass: 'border-emerald-200',
    },
    {
      icon: <HeartHandshake size={30} />,
      title: 'Empoderamiento',
      description: 'Impulsamos el talento femenino en el sector financiero.',
      colorClass: 'text-sky-600',
      bgClass: 'bg-sky-50',
      borderClass: 'border-sky-200',
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- SECCIÓN HERO (OPCIÓN 3: SPLIT SCREEN CON GRADIENTE SUTIL) --- */}
      <section className="relative flex flex-col lg:flex-row min-h-[85vh] bg-[#071a35]">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        {/* Fondo sólido que coincide con el inicio del gradiente */}
        <div className="flex flex-1 flex-col justify-center px-6 py-20 lg:pl-24 lg:pr-16 z-10 bg-[#071a35]">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              ¿Quiénes Somos?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cyan-100">
              Somos una firma contable de vanguardia, conformada 100% por{' '}
              <span className="font-semibold text-blue-300">mujeres expertas</span> dedicadas a redefinir
              los estándares de la consultoría financiera.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cyan-100">
              Nuestra esencia combina la precisión técnica con la innovación digital. No solo llevamos
              contabilidad; construimos estrategias que transforman datos en decisiones de valor.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN FULL HEIGHT */}
        <div className="relative h-[500px] w-full lg:h-auto lg:w-[50%]">
          <Image 
            src="/office-meeting.jpg" 
            alt="Equipo profesional en reunión" 
            fill 
            className="object-cover" 
            priority 
          />
          
          {/* EL DETALLE CLAVE: Gradiente de fusión */}
          {/* Solo ocupa un pequeño ancho (w-32) a la izquierda de la imagen para suavizar el corte */}
          {/* Va del color de fondo (#071a35) a transparente */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#071a35] to-transparent z-10" />
          
          {/* Overlay opcional muy suave para unificar tonos (apenas perceptible) */}
          <div className="absolute inset-0 bg-[#071a35]/10 mix-blend-multiply" />
        </div>
      </section>

      {/* --- RESTO DE LAS SECCIONES (Sin cambios estructurales) --- */}
      
      <section className="relative overflow-hidden bg-sky-50 py-20">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-100/70 to-transparent" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Dirección estratégica</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">Misión y Visión</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-10 shadow-[0_10px_45px_rgba(14,116,144,0.10)]">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-500" />
              <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4 text-blue-700">
                <Target size={30} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Nuestra Misión</h3>
              <p className="leading-relaxed text-slate-600">
                Brindar soluciones contables y tributarias de alta precisión, integrando tecnología y
                talento humano para liberar a nuestros clientes de la carga operativa.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-red-100 bg-white p-10 shadow-[0_10px_45px_rgba(239,68,68,0.10)]">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-red-500" />
              <div className="mb-6 inline-flex rounded-2xl bg-red-50 p-4 text-red-700">
                <Eye size={30} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Nuestra Visión</h3>
              <p className="leading-relaxed text-slate-600">
                Ser la firma referente en consultoría financiera digital liderada por mujeres, reconocidas
                por nuestra ética inquebrantable y el éxito de nuestros socios.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Cultura</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">Nuestros Principios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Los pilares fundamentales que guían cada auditoría y estrategia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {principles.map((prin, index) => (
              <article
                key={index}
                className={`group relative overflow-hidden rounded-3xl border ${prin.borderClass} bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="absolute right-5 top-5 text-5xl font-black text-slate-100">0{index + 1}</div>
                <div
                  className={`relative mb-6 inline-flex rounded-2xl p-4 shadow-sm transition-transform group-hover:scale-110 ${prin.bgClass} ${prin.colorClass}`}
                >
                  {prin.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{prin.title}</h3>
                <p className="leading-relaxed text-slate-600">{prin.description}</p>
                <div
                  className={`mt-6 h-1 w-16 rounded-full ${
                    index === 0 ? 'bg-red-400' : index === 1 ? 'bg-emerald-400' : 'bg-sky-400'
                  }`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-emerald-100 bg-emerald-50 py-20">
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Nuestro talento</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">Conoce al Equipo</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {team.map((member, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-lg shadow-emerald-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-red-100" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041329]/80 via-transparent to-transparent" />
                </div>

                <div className="border-t border-sky-100 px-5 py-5 text-center">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-blue-600">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
