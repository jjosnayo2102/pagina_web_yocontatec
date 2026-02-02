import { CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-20 px-6 text-center bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
          ¿Lista para transformar tu contabilidad? <br />
          {/* Mantenemos el degradado tricolor en el texto como pediste antes */}
          <span className="bg-gradient-to-r from-orange-600 via-lime-500 to-cyan-500 bg-clip-text text-transparent">
            Agenda una cita hoy mismo.
          </span>
        </h2>
        
        <Link href="/contacto">
            {/* Botón cambiado a azul estándar (bg-blue-600) para coincidir con Contáctanos */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-1 inline-flex items-center gap-3">
            <CalendarCheck size={24} />
            Agenda una cita
            </button>
        </Link>
      </div>
    </section>
  );
}