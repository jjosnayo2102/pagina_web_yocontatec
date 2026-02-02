'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2, Building2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { submitContactForm } from '@/actions/contact-action';

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{success: boolean, message: string} | null>(null);
  
  // Estado para controlar qué mapa se muestra (Default: 'sjm')
  const [activeLocation, setActiveLocation] = useState<'sjm' | 'surco'>('sjm');

  const formRef = useRef<HTMLFormElement>(null);

  // URLs de los mapas
  const mapUrls = {
    sjm: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.3712904647855!2d-76.97728702536367!3d-12.155106043926544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b963edf34a9d%3A0xad0efb2271a2aafb!2sYOCONTA%20TEC!5e0!3m2!1ses-419!2spe!4v1769223332032!5m2!1ses-419!2spe", 
    surco: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.640532818322!2d-76.99509752536406!3d-12.136729543581465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80c2d1a5983%3A0x2b6ddcc57c13d391!2sJir%C3%B3n%20David%20Roca%20Varea%20Sur%20306%2C%20Santiago%20de%20Surco%2015039!5e0!3m2!1ses-419!2spe!4v1770002445122!5m2!1ses-419!2spe" 
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    setIsSubmitting(true);
    setResponseMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    setResponseMessage(result);

    if (result.success) {
      formRef.current?.reset();
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      {/* 1. HEADER */}
      <div className="bg-[#0A192F] pt-32 pb-20 px-6 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
         
         <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Contáctanos
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Estamos listas para escuchar tus necesidades y diseñar una estrategia a tu medida.
            </p>
         </div>
      </div>

      {/* 2. FORMULARIO */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0A192F]">Envíanos un mensaje</h2>
          <p className="text-slate-500 mt-2">Te responderemos a la brevedad posible.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Nombre Completo</label>
                    <input type="text" id="nombre" name="nombre" required className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-800 placeholder:text-slate-400" placeholder="Tu nombre" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Correo electrónico</label>
                    <input type="email" id="email" name="email" required className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-800 placeholder:text-slate-400" placeholder="ejemplo@correo.com" />
                </div>
            </div>
            <div>
                <label htmlFor="asunto" className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Asunto</label>
                <input type="text" id="asunto" name="asunto" required className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-800 placeholder:text-slate-400" placeholder="¿En qué podemos ayudarte?" />
            </div>
            <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Mensaje</label>
                <textarea id="mensaje" name="mensaje" required rows={5} className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none text-slate-800 placeholder:text-slate-400" placeholder="Cuéntanos sobre tu proyecto o duda..." />
            </div>

            {responseMessage && (
                <div className={`p-4 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-2 ${responseMessage.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {responseMessage.message}
                </div>
            )}

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#0A192F] hover:bg-blue-900 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 hover:translate-y-[-2px]">
                {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</> : <><Send size={20} /> Enviar Mensaje</>}
            </button>
        </form>

        <div className="mt-6 text-center">
             <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-slate-300"></div>
                <span className="flex-shrink mx-4 text-slate-400 text-sm">¿Prefieres algo más rápido?</span>
                <div className="flex-grow border-t border-slate-300"></div>
            </div>
            <a href="https://wa.me/51987889073" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors bg-green-50 px-6 py-3 rounded-full hover:bg-green-100">
                <MessageCircle size={20} /> Escríbenos por WhatsApp
            </a>
        </div>
      </section>

      {/* 3. INFO DE CONTACTO (Fondo Blanco) */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
                <div className="flex flex-col items-center justify-center group">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Phone size={32} />
                    </div>
                    <h3 className="text-slate-400 font-medium mb-1 uppercase tracking-wider text-sm">Llámanos</h3>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        +51 987 889 073
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center group">
                    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-slate-400 font-medium mb-1 uppercase tracking-wider text-sm">Escríbenos</h3>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        yocontatec@outlook.com
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. SELECCIÓN DE SEDES */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-center text-[#0A192F] font-bold text-3xl md:text-4xl mb-12 flex items-center justify-center gap-3">
                <Building2 className="text-blue-600" size={40} /> Nuestras Sedes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* OPCIÓN 1: San Juan de Miraflores (CON INDICADOR PRINCIPAL) */}
                <div 
                    onClick={() => setActiveLocation('sjm')}
                    className={`relative p-8 rounded-2xl border-2 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                        activeLocation === 'sjm' 
                        ? 'bg-blue-50/80 border-blue-500 shadow-md' 
                        : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                >
                    {/* --- AQUÍ ESTÁ EL INDICADOR DE SEDE PRINCIPAL --- */}
                    {/* Se muestra siempre, independientemente de si está seleccionada o no */}
                    <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
                        Principal
                    </span>

                    <div className={`p-4 rounded-full mb-4 transition-colors ${activeLocation === 'sjm' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                        <MapPin size={28} />
                    </div>
                    <h4 className={`text-xl font-bold mb-2 ${activeLocation === 'sjm' ? 'text-blue-900' : 'text-slate-700'}`}>Sede San Juan de Miraflores</h4>
                    <p className="text-slate-600">C. Maximiliano Carranza 486</p>
                </div>

                {/* OPCIÓN 2: Surco */}
                <div 
                    onClick={() => setActiveLocation('surco')}
                    className={`relative p-8 rounded-2xl border-2 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                        activeLocation === 'surco' 
                        ? 'bg-blue-50/80 border-blue-500 shadow-md' 
                        : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                >
                    <div className={`p-4 rounded-full mb-4 transition-colors ${activeLocation === 'surco' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                        <MapPin size={28} />
                    </div>
                    <h4 className={`text-xl font-bold mb-2 ${activeLocation === 'surco' ? 'text-blue-900' : 'text-slate-700'}`}>Sede Surco</h4>
                    <p className="text-slate-600">Jr. David Roca Varea Sur 306</p>
                </div>

            </div>
        </div>
      </section>

      {/* 5. MAPA INTERACTIVO */}
      <section className="w-full h-[500px] bg-slate-200 transition-all duration-500">
        <iframe 
            key={activeLocation} 
            src={mapUrls[activeLocation]}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full animate-in fade-in duration-700"
            title={`Mapa de la sede ${activeLocation}`}
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}