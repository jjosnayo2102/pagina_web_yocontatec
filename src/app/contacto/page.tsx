'use client';

// Nota: Eliminamos 'next/image' porque ya no usamos la imagen estática
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { submitContactForm } from '@/actions/contact-action';

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{success: boolean, message: string} | null>(null);
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
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Azul */}
      <div className="bg-[#001233] h-[300px] pt-28 px-6 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
         <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Contáctanos</h1>
         <p className="text-blue-200 mt-4 text-lg relative z-10">Estamos listas para impulsar tu empresa</p>
      </div>

      {/* Contenedor Principal */}
      <section className="max-w-3xl mx-auto px-4 -mt-24 relative z-20 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          
          {/* FORMULARIO */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mb-10">
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Tu nombre completo"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="ejemplo@correo.com"
                />
            </div>

            <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-slate-700 mb-2">Asunto</label>
                <input 
                  type="text" 
                  id="asunto" 
                  name="asunto"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
            </div>

            <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
            </div>

            {responseMessage && (
                <div className={`p-4 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-2 ${responseMessage.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {responseMessage.message}
                </div>
            )}

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
                {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensaje
                    </>
                )}
            </button>
          </form>

          {/* Separador */}
          <div className="relative flex items-center py-4 mb-8">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-sm">o contáctanos directamente</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/525512345678" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 mb-10"
          >
              <MessageCircle size={24} />
              Habla con nosotras por WhatsApp
          </a>

          {/* Info Texto */}
          <div className="space-y-4 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <span>+52 55 1234 5678</span>
            </div>
            <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <span>contacto@yocontatec.com</span>
            </div>
            <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 flex-shrink-0" size={20} />
                <span>Av. Reforma 123, Ciudad de México, MX</span>
            </div>
          </div>

          {/* UBICACIÓN (Mapa con Iframe) */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Ubicación</h3>
            {/* Contenedor del diseño: rounded, shadow, etc. */}
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.3712904647855!2d-76.97728702536367!3d-12.155106043926544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b963edf34a9d%3A0xad0efb2271a2aafb!2sYOCONTA%20TEC!5e0!3m2!1ses-419!2spe!4v1769223332032!5m2!1ses-419!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}