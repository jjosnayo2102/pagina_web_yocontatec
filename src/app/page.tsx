import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  // Iconos Features
  ShieldCheck, Clock, Award,
  // Iconos Servicios
  Calculator, Users, FileText, BarChart3,
  // Iconos UI
  ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function Home() {
  
  // --- DATOS: FEATURES ---
  const features = [
    { icon: Clock, title: "Eficiencia de Tiempo", description: "Automatizamos procesos para que obtengas tus balances en tiempo récord." },
    { icon: ShieldCheck, title: "Seguridad Garantizada", description: "Tus datos están protegidos con los estándares más altos de la industria." },
    { icon: Award, title: "Excelencia Profesional", description: "Un equipo con años de experiencia en normativa fiscal y contable." }
  ];

  // --- DATOS: SERVICIOS ---
  const services = [
    {
      title: "Contabilidad Fiscal",
      desc: "Gestión completa de impuestos y declaraciones mensuales.",
      link: "/servicios/fiscal",
      icon: Calculator,
      colorAccent: "text-blue-600 bg-blue-50 group-hover:bg-blue-600"
    },
    {
      title: "Gestión de Nóminas",
      desc: "Administración eficiente de sueldos, beneficios y contratos.",
      link: "/servicios/nominas",
      icon: Users,
      colorAccent: "text-green-600 bg-green-50 group-hover:bg-green-600"
    },
    {
      title: "Auditoría Financiera",
      desc: "Revisión detallada para garantizar la salud de tu empresa.",
      link: "/servicios/auditoria",
      icon: FileText,
      colorAccent: "text-red-500 bg-red-50 group-hover:bg-red-500"
    },
    {
      title: "Consultoría Estratégica",
      desc: "Asesoramiento para la expansión y optimización de recursos.",
      link: "/servicios/consultoria",
      icon: BarChart3,
      colorAccent: "text-sky-500 bg-sky-50 group-hover:bg-sky-500"
    }
  ];

  // --- DATOS: TRUST (Estadísticas) ---
  const stats = [
    { number: "+2,000", label: "Clientes satisfechos" },
    { number: "+900", label: "Fiscalizaciones atendidas" },
    { number: "+500", label: "Empresas constituidas" },
    { number: "+20", label: "Años en el mercado" },
  ];

  // --- DATOS: TRUST (Logos) ---
  const clientLogos = [
    "Renzo Costa", "iShop", "Sedapal", "Corpac", "Univ. Continental", "Mivivienda"
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* ----------------- HERO SECTION (VIDEO) ----------------- */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        
        {/* FONDO DE VIDEO */}
        <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
            >
                <source src="/hero-video.webm" type="video/webm" />
                {/* <source src="/hero-video.mp4" type="video/mp4" /> */}
            </video>

            {/* CORRECCIÓN DE COLOR: Capa oscura (blue-950) al 60% de opacidad. 
                Ya no usa 'mix-blend-multiply', por lo que el video conserva sus colores naturales pero más oscuros. */}
            <div className="absolute inset-0 bg-blue-950/60"></div>
            
            {/* Gradiente sutil desde la izquierda para asegurar legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-transparent to-transparent"></div>
        </div>

        {/* CONTENIDO DEL HERO */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center pt-20">
            <div className="max-w-3xl">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
                    Impulsamos el <br/>
                    <span className="text-sky-300">Futuro Financiero</span> <br/>
                    de tu Empresa.
                </h1>
                
                <p className="text-xl text-blue-100 mb-10 font-light max-w-2xl leading-relaxed">
                    Soluciones contables integrales diseñadas para la era digital. Precisión, rapidez y estrategia en un solo lugar.
                </p>

                {/* BOTÓN ÚNICO (Se eliminó "Explorar Servicios") */}
                <div className="flex flex-wrap gap-4">
                    <Link href="/contacto">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-10 py-4 rounded-lg font-semibold transition-all shadow-lg hover:-translate-y-1 hover:shadow-blue-500/30">
                            Contáctanos Ahora
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* ----------------- FEATURES SECTION ----------------- */}
      <section className="w-full py-24 bg-white relative z-20 rounded-t-3xl -mt-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Nuestros Pilares</span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-16">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-8 rounded-2xl transition-all duration-300 group hover:shadow-xl hover:shadow-blue-900/5 border border-transparent hover:border-blue-100 hover:-translate-y-1 bg-white">
                <div className="p-5 bg-blue-50 rounded-2xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <feature.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SERVICIOS SECTION ----------------- */}
      <section className="w-full py-24 bg-sky-50/80 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Soluciones Integrales</span>
                <h2 className="text-4xl font-bold text-blue-950 mt-2">Servicios Especializados</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((svc, idx) => (
                    <Link href={svc.link} key={idx} className="group h-full">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-sky-200 h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-full h-1 ${svc.colorAccent.split(' ')[1].replace('bg-', 'bg-')}`}></div>
                            
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${svc.colorAccent.split('group-hover')[0]} ${svc.colorAccent.split(' ')[2] || ''} group-hover:text-white`}>
                                <svc.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                                {svc.title}
                            </h3>
                            <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                                {svc.desc}
                            </p>
                            <span className="text-sm font-bold text-blue-600 flex items-center gap-2 mt-auto">
                                Detalles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/servicios" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline">
                    Ver catálogo completo de servicios <ArrowRight size={18}/>
                </Link>
            </div>
        </div>
      </section>

      {/* ----------------- TRUST SECTION PT 1: Estadísticas ----------------- */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
                <div key={i}>
                    <p className="text-5xl md:text-6xl font-bold text-sky-200 mb-2 tracking-tight drop-shadow-sm">{stat.number}</p>
                    <p className="text-blue-100 font-medium text-lg">{stat.label}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- TRUST SECTION PT 2: Clientes ----------------- */}
      <section className="w-full py-24 bg-white text-blue-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">

            <h2 className="text-center text-3xl font-bold mb-16 uppercase tracking-wide text-[#001233]">
              Algunos Clientes
            </h2>

            <div className="relative flex items-center group">
                {/* Flecha Izquierda */}
                <button className="absolute left-0 z-10 p-3 rounded-full bg-white shadow-lg text-blue-600 hover:bg-blue-50 transition-all opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 hidden md:block border border-sky-100">
                    <ChevronLeft size={32} />
                </button>

                {/* Lista de Logos */}
                <div className="w-full overflow-hidden px-4 md:px-12">
                    <div className="flex justify-between items-center gap-8 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {clientLogos.map((name, index) => (
                        <div key={index} className="flex-shrink-0 h-20 w-40 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center p-4">
                            <span className="text-slate-400 font-bold italic text-center text-sm">{name}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Flecha Derecha */}
                <button className="absolute right-0 z-10 p-3 rounded-full bg-white shadow-lg text-blue-600 hover:bg-blue-50 transition-all opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 hidden md:block border border-sky-100">
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
