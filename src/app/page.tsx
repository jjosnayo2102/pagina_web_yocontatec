import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  // Iconos de Features
  Cloud, LineChart, ShieldCheck, 
  // Iconos de Trust
  Layers, Zap, Globe, TrendingUp, Hexagon,
  // Iconos generales
  ArrowRight 
} from 'lucide-react';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  
  // --- DATOS: FEATURES ---
  const features = [
    {
      icon: Cloud,
      color: "text-[#38bdf8]", // Sky blue
      bg: "bg-sky-50",
      title: "Contabilidad en la Nube",
      description: "Acceso seguro 24/7 a tus datos financieros desde cualquier dispositivo."
    },
    {
      icon: LineChart,
      color: "text-[#a3e635]", // Lime green
      bg: "bg-lime-50",
      title: "Reportes en tiempo real",
      description: "Toma decisiones informadas con información actualizada al instante."
    },
    {
      icon: ShieldCheck,
      color: "text-[#FF451A]", // Brand Red/Orange
      bg: "bg-orange-50",
      title: "Asesoría experta",
      description: "Maximiza tus beneficios y cumple con la normativa fiscal sin preocupaciones."
    }
  ];

  // --- DATOS: TRUST / EMPRESAS ---
  const companies = [
    { name: "TechStart Solutions", icon: <Layers size={24} /> },
    { name: "InnovateNow", icon: <Zap size={24} /> },
    { name: "GlobalFinance", icon: <Globe size={24} /> },
    { name: "DigitalGrowth", icon: <TrendingUp size={24} /> },
    { name: "FutureWorks", icon: <Hexagon size={24} /> },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#000428] to-[#004e92]">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-3xl rounded-full translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Columna Texto */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Contabilidad <br/>
              Inteligente para <br/>
              las Empresas <br/>
              de <span className="text-blue-400">Hoy</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              Impulsamos tu crecimiento con tecnología de vanguardia y asesoramiento experto.
            </p>
            
            <div className="pt-4">
              <Link href="/contacto">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/40 hover:scale-105">
                  Contáctanos
                </button>
              </Link>
            </div>
          </div>

          {/* Columna Imagen */}
          <div className="relative h-[400px] md:h-[600px] w-full flex justify-center items-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* Asegúrate de tener esta imagen en tu carpeta public */}
                  <Image 
                    src="/hero-image.png" 
                    alt="Profesional contable con tecnología"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000428] via-transparent to-transparent opacity-60"></div>
              </div>
          </div>
        </div>
      </section>

      {/* ----------------- FEATURES SECTION ----------------- */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001233] mb-16">
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-slate-100 group">
                
                <div className={`p-5 rounded-full mb-6 ${feature.bg} transition-transform group-hover:scale-110`}>
                  <feature.icon size={48} className={feature.color} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-[#001233] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- TRUST SECTION ----------------- */}
      <section className="w-full py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#001233] mb-12">
            Empresas que confían en nosotras
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center gap-3 font-bold text-slate-500 text-xl select-none hover:text-blue-600 transition-colors">
                {company.icon}
                <span>{company.name}</span>
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