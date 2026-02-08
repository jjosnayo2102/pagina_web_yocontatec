'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { submitContactForm } from '@/actions/contact-action';
import Link from 'next/link';

// --- MODIFICACIÓN AQUÍ: Separamos la URL del Embed y la URL del Enlace ---
const locationData = {
  sjm: {
    id: 'sjm',
    shortName: 'San Juan de Miraflores',
    fullName: 'Sede San Juan de Miraflores',
    address: 'C. Maximiliano Carranza 486',
    city: 'San Juan de Miraflores, Lima',
    phone: '+51 987 889 073',
    hours: 'Lun - Vie: 9:00 AM - 6:00 PM',
    // URL para el IFRAME (Embed)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.556736458368!2d-76.96967562402777!3d-12.142385443714243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b86134a490d1%3A0x6334690380065706!2sC.%20Maximiliano%20Carranza%20486%2C%20San%20Juan%20de%20Miraflores%2015801!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe",
    // URL para el BOTÓN (Link externo)
    mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=C.+Maximiliano+Carranza+486,+San+Juan+de+Miraflores"
  },
  surco: {
    id: 'surco',
    shortName: 'Surco',
    fullName: 'Sede Santiago de Surco',
    address: 'Jr. David Roca Varea Sur 306',
    city: 'Santiago de Surco, Lima',
    phone: '+51 987 889 073',
    hours: 'Lun - Vie: 9:00 AM - 6:00 PM',
    // URL para el IFRAME (Embed)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8987654321!2d-77.005177!3d-12.119022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzA4LjUiUyA3N8KwMDAnMTguNiJX!5e0!3m2!1ses-419!2spe!4v1600000000000!5m2!1ses-419!2spe", 
    // URL para el BOTÓN (Link externo)
    mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=Jr.+David+Roca+Varea+Sur+306,+Santiago+de+Surco"
  }
};

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{success: boolean, message: string} | null>(null);
  
  const [activeLocation, setActiveLocation] = useState<'sjm' | 'surco'>('sjm');
  
  const currentLocation = locationData[activeLocation];

  const formRef = useRef<HTMLFormElement>(null);

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
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* 1. HEADER */}
      <section className="bg-[#0A192F] pt-40 pb-32 px-6 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              ¿Hablamos de tu <span className="text-sky-300">empresa?</span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Estamos listas para escuchar tus necesidades y diseñar una estrategia contable a tu medida.
            </p>
         </div>
      </section>

      {/* 2. SECCIÓN FORMULARIO */}
      <section className="relative z-20 -mt-16 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A192F]">Envíanos un mensaje</h2>
            <p className="text-slate-500 mt-2">Te responderemos en menos de 24 horas hábiles.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-bold text-slate-700 ml-1">Nombre Completo</label>
                      <input type="text" id="nombre" name="nombre" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Correo Corporativo</label>
                      <input type="email" id="email" name="email" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="ejemplo@empresa.com" />
                  </div>
              </div>
              <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-bold text-slate-700 ml-1">Asunto</label>
                  <input type="text" id="asunto" name="asunto" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-bold text-slate-700 ml-1">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" required rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none" placeholder="Cuéntanos sobre tu situación actual..." />
              </div>

              {responseMessage && (
                  <div className={`p-4 rounded-xl text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${responseMessage.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    <CheckCircle2 size={18} />
                    {responseMessage.message}
                  </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#0A192F] hover:bg-blue-600 disabled:bg-slate-300 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 active:scale-[0.98]">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Procesando...</> : <><Send size={20} /> Enviar Consulta</>}
              </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-100 text-center">
              <p className="text-slate-500 mb-4 font-medium">¿Necesitas una respuesta inmediata?</p>
              <a href="https://wa.me/51987889073" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-green-500/20 hover:scale-105">
                  <MessageCircle size={22} /> Escríbanos por WhatsApp
              </a>
          </div>
        </div>
      </section>

      {/* 3. TARJETAS DE CONTACTO RÁPIDO */}
      <section className="py-24 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:rotate-12 transition-transform">
                      <Phone size={30} />
                  </div>
                  <div>
                      <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Llámanos</h4>
                      <p className="text-2xl font-bold text-[#0A192F]">+51 987 889 073</p>
                  </div>
              </div>
              <div className="flex items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 bg-cyan-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:rotate-12 transition-transform">
                      <Mail size={30} />
                  </div>
                  <div>
                      <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Escríbanos</h4>
                      <p className="text-2xl font-bold text-[#0A192F]">yocontatec@outlook.com</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. SECCIÓN: SEDES */}
      <section className="bg-sky-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A192F] mb-4">
                  Nuestras Sedes
                </h3>
                
                <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-slate-200 mt-4">
                    <button 
                        onClick={() => setActiveLocation('sjm')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                            activeLocation === 'sjm' 
                            ? 'bg-blue-600 text-white shadow-md' 
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                        {locationData.sjm.shortName}
                    </button>
                    <button 
                        onClick={() => setActiveLocation('surco')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                            activeLocation === 'surco' 
                            ? 'bg-blue-600 text-white shadow-md' 
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                        {locationData.surco.shortName}
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px] border border-white transition-all duration-500">
                
                {/* Lado Izquierdo: Mapa (Usa mapEmbedUrl) */}
                <div className="w-full md:w-1/2 h-[300px] md:h-full bg-slate-200 relative">
                    <iframe 
                        key={activeLocation} 
                        src={currentLocation.mapEmbedUrl} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'contrast(1.05) opacity(0.95)' }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full object-cover animate-in fade-in duration-700"
                        title={`Mapa de ${currentLocation.fullName}`}
                    ></iframe>
                </div>

                {/* Lado Derecho: Información */}
                <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center animate-in slide-in-from-right-4 fade-in duration-500 key={activeLocation}">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-8">
                        {currentLocation.fullName}
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mt-1">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1">Dirección</p>
                                <p className="text-slate-800 font-semibold">{currentLocation.address}</p>
                                <p className="text-slate-400 text-sm">{currentLocation.city}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                             <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1">Teléfono</p>
                                <p className="text-slate-800 font-semibold">{currentLocation.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                             <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mt-1">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium mb-1">Horario de Atención</p>
                                <p className="text-slate-800 font-semibold">{currentLocation.hours}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100">
                        {/* Lado Derecho: Link (Usa mapLinkUrl) */}
                        <a 
                            href={currentLocation.mapLinkUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
                        >
                            Ver en Google Maps <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}