/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Check, Calendar, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: string;
  initialMessage?: string;
}

export default function LeadModal({ isOpen, onClose, selectedProgram, initialMessage }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: selectedProgram || "1_1_elite",
    revenue: "100k_500k",
    message: initialMessage || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (selectedProgram) {
      setFormData(prev => ({ ...prev, program: selectedProgram }));
    }
  }, [selectedProgram]);

  React.useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-end scheduling API integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "1_1_elite",
      revenue: "100k_500k",
      message: "",
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#0E0E0E] rounded-sm border border-white/10 overflow-hidden shadow-2xl z-10"
          >
            {/* Top Gold Accent Border */}
            <div className="h-1 w-full bg-[#D4AF37]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-sm bg-neutral-900 border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors z-20 cursor-pointer"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Success State */}
            {isSuccess ? (
              <div className="p-8 text-center flex flex-col items-center justify-center font-sans">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500 text-emerald-400 mb-6 relative">
                  <Check size={32} className="relative z-10" />
                  <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md animate-ping" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3 font-display">
                  Tu Llamada Estratégica ha sido Solicitada
                </h3>
                <p className="text-neutral-400 text-sm max-w-sm mx-auto leading-relaxed mb-6 font-sans">
                  Hemos reservado tu lugar de prioridad. Alejandro o su director de consultoría evaluará tu perfil y se pondrá en contacto contigo en las próximas 12 horas vía WhatsApp y Correo Electrónico. Rellena también tu calendario si lo deseas.
                </p>
                <div className="w-full bg-[#111] rounded-sm p-4 border border-white/5 text-left mb-6 font-sans">
                  <div className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest mb-1 font-semibold flex items-center gap-1.5">
                    <Zap size={12} /> STATUS: PRIORIDAD PREMIUM
                  </div>
                  <div className="text-sm font-medium text-white mb-0.5">AV Mastery Consultation</div>
                  <div className="text-xs text-neutral-500">Alejandro Vargas • Coach de Alto Impacto</div>
                </div>
                <button
                  onClick={handleReset}
                  className="w-full py-3.5 px-6 rounded-sm bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-[#D4AF37]/20 border-none cursor-pointer"
                >
                  Entendido y Volver
                </button>
              </div>
            ) : (
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-sm mb-3 font-semibold">
                    <Calendar size={12} /> Postular a Llamada Estratégica
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight font-display">
                    Inicia Tu Transformación de Alto Nivel
                  </h3>
                  <p className="text-neutral-400 text-xs mt-1.5 leading-relaxed font-sans">
                    Acceso exclusivo para líderes dispuestos a elevar sus ingresos, estructurar sus sistemas de negocio y conquistar soberanía absoluta sobre su agenda. No hay costo, pero filtramos rigurosamente.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Roberto Sánchez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-neutral-600 font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">
                        Correo Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@negocio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-neutral-600 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">
                        WhatsApp (con código)
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+52 55..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-neutral-600 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">
                        Programa de Interés
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors font-sans"
                      >
                        <option value="1_1_elite">Coaching 1:1 Elite (12 sem)</option>
                        <option value="mastermind">Mástermind de Escala Directa</option>
                        <option value="retreat">Retiro de Inmersión y Legado</option>
                        <option value="general">Llamada de Diagnóstico General</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">
                        Facturación de tu Negocio
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors font-sans"
                      >
                        <option value="under_100k">Menos de $100k USD / año</option>
                        <option value="100k_500k">$100k - $500k USD / año</option>
                        <option value="500k_2m">$500k - $2M USD / año</option>
                        <option value="above_2m">Más de $2M USD / año</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">
                      ¿Cuál es tu mayor cuello de botella en este momento? (Opcional)
                    </label>
                    <textarea
                      placeholder="Ej. Siento burnout continuo, mi equipo depende 100% de mí para tomar decisiones."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-neutral-600 resize-none animate-none font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full py-4 rounded-sm bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-[#D4AF37]/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 border-none"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Enviando Postulación...</span>
                        </>
                      ) : (
                        <>
                          <span>Postular de Inmediato</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Trust Signals Footer */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                  <div className="flex items-center gap-1 font-sans">
                    <ShieldCheck size={12} className="text-[#D4AF37]/80" />
                    <span>Tus datos están protegidos en servidor seguro.</span>
                  </div>
                  <div className="font-mono uppercase tracking-wider text-[9px]">ICF Certificado</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
