/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Calendar, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Clock, 
  Check, 
  MessageCircle, 
  Flame, 
  Play, 
  Instagram, 
  Youtube, 
  Linkedin, 
  ArrowUpRight, 
  HelpCircle,
  Gem
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { services, phases, testimonials, articles, faqs } from "./data";
import DiagnosticQuiz from "./components/DiagnosticQuiz";
import LeadModal from "./components/LeadModal";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Booking Modal States
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("1_1_elite");
  const [initialMsg, setInitialMsg] = useState("");

  // FAQ Accordion States (stores active index)
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBookingModal = (programId: string = "general", customMsg: string = "") => {
    setSelectedProgram(programId);
    setInitialMsg(customMsg);
    setBookingOpen(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div id="av-mastery-root" className="min-h-screen text-neutral-200 bg-[#0A0A0A] selection:bg-amber-500/30 selection:text-white">
      
      {/* Header / Navigation */}
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4 shadow-xl" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center rounded-sm font-display font-black text-black text-xl transition-transform duration-300 group-hover:scale-105">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white text-lg tracking-wider leading-none transition-colors">
                AV <span className="text-[#D4AF37]">Mastery</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#D4AF37]/80 uppercase font-semibold mt-0.5">
                HIGH PERFORMANCE
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono font-semibold">
            <a href="#sobre-mi" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Sobre Mí</a>
            <a href="#servicios" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Servicios</a>
            <a href="#metodo" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Metodología</a>
            <a href="#diagnostico" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">AI Test</a>
            <a href="#resultados" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Resultados</a>
            <a href="#precios" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Tarifas</a>
          </div>

          {/* Nav CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => openBookingModal("general", "Hola Alejandro, quiero reservar mi llamada de diagnóstico estratégico inicial.")}
              className="py-2.5 px-6 rounded-sm bg-transparent hover:bg-[#D4AF37] border border-[#D4AF37] hover:text-black text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition-all duration-300 cursor-pointer"
            >
              Llamada de Estrategia
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-1.5 rounded-sm bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#D4AF37] transition-colors"
            aria-label="Menú"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div id="mobile-menu-overlay" className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            
            {/* Drawer Body */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-80 max-w-full bg-[#0A0A0A] h-full border-l border-white/10 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="font-display font-bold text-white tracking-widest text-[11px] uppercase">NAVEGACIÓN DIRECTA</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex flex-col gap-6 text-sm uppercase tracking-widest font-mono font-bold">
                  <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Sobre Mí</a>
                  <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Servicios</a>
                  <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Metodología</a>
                  <a href="#diagnostico" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">AI Test de Diagnóstico</a>
                  <a href="#resultados" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Resultados</a>
                  <a href="#precios" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Precios y Tarifas</a>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal("general", "Hola Alejandro, quiero reservar mi llamada de diagnóstico desde móvil.");
                  }}
                  className="w-full py-4 text-center rounded-sm bg-[#D4AF37] text-black font-extrabold text-xs tracking-widest uppercase hover:bg-[#b5942e] transition-all mb-4 shadow-lg shadow-[#D4AF37]/10"
                >
                  Llamada de Estrategia
                </button>
                <div className="text-[10px] text-neutral-600 text-center font-mono">
                  AV Mastery de Alejandro Vargas
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* Section 1: Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Gradients and Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A] z-10" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-[350px] h-[350px] bg-[#0A6640]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Diagonal Light Accent */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(45deg,#D4AF37_10%,transparent_11%,transparent_50%,#D4AF37_51%,transparent_52%)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20 pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0A6640]/20 text-white rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#0A6640]/45">
                <span className="w-2 h-2 rounded-full bg-[#0A6640] animate-pulse"></span>
                Coach Certificado por ICF (Elite Leader)
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase font-display">
                El momento de <span className="text-[#D4AF37]">dejar de sobrevivir</span> y empezar a liderar tu vida ya llegó.
              </h1>
              
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Desbloquea tu máximo potencial y construye la vida y el negocio que mereces. Coaching estratégico de alto rendimiento para líderes, empresarios y profesionales altamente ambiciosos.
              </p>

              {/* Conversion Actions Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => openBookingModal("general", "Hola Alejandro, vi tu Hero de AV Mastery y quiero postular a una sesión estratégica de claridad para auditar mi balance ejecutivo.")}
                  className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-xs tracking-widest uppercase rounded-sm transition-all shadow-lg shadow-[#D4AF37]/10 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Reservar Llamada de Estrategia</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#servicios"
                  className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 text-neutral-300 hover:text-white font-extrabold text-xs tracking-widest uppercase rounded-sm transition-all text-center flex items-center justify-center"
                >
                  Conocer Más
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-4 gap-x-8 text-neutral-500 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0A6640]" />
                  <span>Más de 340 clientes transformados</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-bold">★ 4.98/5</span>
                  <span>en satisfacción ejecutiva</span>
                </div>
              </div>
            </div>

            {/* Right Column: Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-sm border border-white/15 bg-neutral-950 p-2 shadow-2xl overflow-hidden group">
                {/* Thin gold neon halo */}
                <span className="absolute -inset-10 bg-gradient-to-br from-[#D4AF37]/15 to-transparent blur-2xl opacity-80 rounded-full" />
                
                {/* Embedded high-end portrait */}
                <div className="rounded-sm overflow-hidden relative aspect-[3/4] bg-neutral-900">
                  <img 
                    src="/src/assets/images/alejandro_portrait_1780242824462.png" 
                    alt="Alejandro Vargas - Sovereign High Performance Coach"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 hover:brightness-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glass Card Caption Over Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 rounded-sm p-4">
                    <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase mb-0.5">Fundador, AV Mastery</div>
                    <div className="text-sm font-bold text-white tracking-wide">Alejandro Vargas</div>
                    <div className="text-[10px] text-neutral-400 mt-1.5 flex items-center justify-between">
                      <span>Certificado ICF PCC</span>
                      <span>+15 Años de Mentoría</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Section 2: Sobre Mí (About) */}
      <section id="sobre-mi" className="py-24 border-y border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A] relative">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Biography Image / Quote Grid */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold block">EL HOMBRE DETRÁS DE LAS ACCIONES</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-display leading-tight">
                "NO SOY TU AMIGO MOTIVACIONAL. SOY TU CONSEJERO TÁCTICO."
              </h2>
              
              <div className="bg-neutral-950 rounded-sm p-6 border border-white/10 relative">
                <p className="text-serif text-neutral-300 italic leading-relaxed text-sm">
                  "Pasé demasiados años creyendo que la riqueza requería el sacrificio absoluto de mi tiempo, mi salud y mi espíritu. Estaba quemado a las 80 horas de trabajo semanales, sosteniendo un negocio robusto pero vacío. Fue cuando rediseñé mi vida táctica y sistemática que logré facturación de 7 cifras sin perder mi soberanía personal. Te enseño las mismas reglas frías y de alto calibre."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                    <img 
                      src="/src/assets/images/alejandro_portrait_1780242824462.png" 
                      alt="Firma" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Alejandro Vargas</div>
                    <div className="text-[9px] text-[#D4AF37] font-mono uppercase">Mastermind Coach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story, Credentials, and Proofs */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase">SOBRE MI BIOGRAFÍA</span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight font-display">
                De la esclavitud operacional a la soberanía corporativa de 7 cifras.
              </h3>
              
              <div className="text-neutral-400 text-sm space-y-4 leading-relaxed font-sans">
                <p>
                  Como Coach de Alto Rendimiento, entiendo perfectamente lo complejo que es construir una corporación rentable mientras la cabeza te quema. El mercado vende la falacia de que más horas invertidas siempre se traducen en más resultados. He aprendido que la inercia sin dirección táctica es solo un boleto al colapso biológico.
                </p>
                <p>
                  A lo largo de los últimos 15 años, me he certificado a nivel internacional bajo las rigurosas normativas de la **ICF (PCC Coach Executive)** y he tenido la responsabilidad de capacitar directores de operaciones de firmas en la prestigiosa lista Fortune 500. He sistematizado y automatizado manuales de escalamiento para 3 de mis marcas comerciales propias. Mi misión no es sugerirte ideas abstractas; te entrego protocolos con un retorno directo sobre tu libertad temporal y tu bolsillo.
                </p>
              </div>

              {/* Icon Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3 bg-neutral-950 rounded-sm p-4 border border-white/10">
                  <Award className="text-[#D4AF37] flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xs uppercase text-white mb-0.5">Certificación ICF Global</h4>
                    <p className="text-[11px] text-neutral-500 leading-normal">Estándar de oro ético y pedagógico de coaching de transformación ejecutiva.</p>
                  </div>
                </div>
                <div className="flex gap-3 bg-neutral-950 rounded-sm p-4 border border-white/10">
                  <ShieldCheck className="text-[#D4AF37] flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xs uppercase text-white mb-0.5">Ex-Ejecutivo de Consulta</h4>
                    <p className="text-[11px] text-neutral-500 leading-normal">Sistemas de procesos puestos a prueba en compañías de Fortune 500.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openBookingModal("general", "Hola Alejandro, leí tu biografía corporativa y tu enfoque directivo. Quiero postular a tu proceso 1:1 Elite.")}
                  className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Verificar Disponibilidad Ejecutiva</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Section 3: Servicios / Ofertas (Estilo Bento Grid) */}
      <section id="servicios" className="py-24 bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#D4AF37] tracking-widest uppercase">PORTAFOLIO DE TRANSFORMACIÓN</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
              Programas Premium de Intervención
            </h2>
            <div className="h-0.5 w-20 bg-[#D4AF37] mx-auto" />
            <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
              Soluciones estructuradas diseñadas para inyectar claridad, diseñar sistemas operativos sólidos y construir legado corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((offer) => (
              <div 
                key={offer.id} 
                className="bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/35 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl relative group"
              >
                {/* Image & Badge overlay */}
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 brightness-75"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-black/85 backdrop-blur-md border border-[#D4AF37]/45 text-[#D4AF37] text-[10px] font-mono px-3 py-1.5 rounded-full font-bold">
                      {offer.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-block bg-black/90 text-white text-[10px] font-mono px-2.5 py-1 rounded-sm">
                      {offer.duration}
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight uppercase font-display mb-2">{offer.title}</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">{offer.description}</p>
                    
                    {/* List of Features */}
                    <ul className="space-y-2.5 pt-4">
                      {offer.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-2 text-xs text-neutral-300">
                          <Check className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={13} />
                          <span className="leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and CTAs */}
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <div className="flex justify-between items-center bg-neutral-900 rounded-sm p-3 border border-white/10">
                      <div>
                        <div className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase font-semibold">Inversión Estimada</div>
                        <div className="text-xs font-bold text-white">{offer.priceEstimate}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase font-semibold">Perfil Ideal</div>
                        <div className="text-[10px] font-medium text-[#D4AF37] max-w-[140px] truncate">{offer.targetClient.split(" ")[0]}...</div>
                      </div>
                    </div>

                    <button
                      onClick={() => openBookingModal(offer.id, `Hola Alejandro, revisé tu portafolio de programas y mi perfil coincide con el sector ideal para postular al programa: ${offer.title}. ¿Podemos agendar una llamada exploratoria?`)}
                      className="w-full py-3.5 rounded-sm bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-[#D4AF37]/15 cursor-pointer flex items-center justify-center gap-2 border-none"
                    >
                      <span>Postular a este Programa</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Section 4: Metodología (Proceso de 4 fases) */}
      <section id="metodo" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left sticky column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
              <span className="text-xs font-mono font-extrabold text-[#D4AF37] tracking-widest uppercase">EL MAPA DE ACCIÓN</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-display leading-tight">
                Ingeniería Vital de 4 Fases para tu Éxito Escalonado
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                Nuestra metodología rompe con el mito del esfuerzo desordenado. Estructuramos un avance progresivo, enfocado en asegurar tracción de facturación mientras recuperas soberanía temporal total sobre tu proyecto de vida.
              </p>
              <div className="pt-4">
                <a
                  href="#diagnostico"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black text-xs font-bold uppercase transition-all duration-300"
                >
                  <span>Evaluar mi fase actual con el IA Test</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Right progress phases column */}
            <div className="lg:col-span-8 space-y-8">
              {phases.map((phase) => (
                <div 
                  key={phase.num} 
                  className="bg-neutral-950 rounded-sm border border-white/10 overflow-hidden shadow-xl p-8 relative flex flex-col sm:flex-row gap-6 hover:border-[#D4AF37]/25 transition-all duration-300 group"
                >
                  {/* Phase number with glowing line */}
                  <div className="flex-shrink-0 flex items-center justify-center sm:flex-col sm:justify-start">
                    <span className="text-4xl sm:text-5xl font-black text-[#D4AF37] font-display leading-none tracking-tight">
                      {phase.num}
                    </span>
                    <div className="hidden sm:block w-0.5 h-12 bg-white/10 mt-3 group-hover:bg-[#D4AF37]/40 transition-colors" />
                  </div>

                  {/* Info details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide font-display">{phase.title}</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Section 5: AI Diagnostic Section (The Core Tool Hook!) */}
      <section id="diagnostico" className="py-24 bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#D4AF37] tracking-widest uppercase">EVALUACIÓN DE CARGAS DIRECTAS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display flex flex-col sm:flex-row items-center justify-center gap-1.5">
              <span>IA Diagnóstico de</span>
              <span className="text-[#D4AF37]">Alto Rendimiento</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#D4AF37] mx-auto animate-pulse" />
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              No dejes tu futuro al azar de mercadeo barato. Registra tu perfil en nuestra herramienta inteligente para generar a nivel de servidor un informe de eficiencia calibrado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <DiagnosticQuiz onOpenBooking={openBookingModal} />
          </div>
        </div>
      </section>


      {/* Section 6: Resultados de Clientes (Testimonios con Quantified Metrics) */}
      <section id="resultados" className="py-24 bg-[#0A0A0A] relative">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#0A6640]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#D4AF37] tracking-widest uppercase">EVIDENCIA REAL DE SOBERANÍA</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
              Resultados de Clientes Satisfechos
            </h2>
            <div className="h-0.5 w-20 bg-[#D4AF37] mx-auto" />
            <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
              Casos documentados de líderes y dueños de empresas que abandonaron el cansancio operativo para constituir soberanía corporativa.
            </p>
          </div>

          {/* Testimonials 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div 
                key={test.id}
                className="bg-neutral-950 rounded-sm p-6 border border-white/10 flex flex-col justify-between hover:border-[#D4AF37]/25 transition-colors shadow-xl"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-[#D4AF37]">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>

                  {/* Quantified Result Highlight Box */}
                  <div className="bg-neutral-900 text-[#D4AF37] font-mono text-[11px] uppercase tracking-wider font-bold px-3 py-2 rounded-sm border-l-2 border-[#D4AF37] flex items-center justify-between">
                    <span>RESULTADO:</span>
                    <span>{test.result}</span>
                  </div>

                  {/* Quote text */}
                  <p className="text-neutral-400 text-xs leading-relaxed italic font-sans">
                    "{test.quote}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-neutral-900 border border-white/10 flex-shrink-0">
                    <img 
                      src={test.image} 
                      alt={test.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white uppercase tracking-wide">{test.name}</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Brand Logotypes */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="text-center font-mono text-[10px] text-neutral-600 uppercase tracking-widest mb-6">EMPRESAS ATENDIDAS DE NUESTRA RED DIRECCIÓN</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center opacity-40">
              <span className="font-display font-black text-white text-base tracking-widest text-center uppercase block">NEXUS S.A.</span>
              <span className="font-display font-black text-white text-base tracking-widest text-center uppercase block">ALURA BRANDS</span>
              <span className="font-display font-black text-white text-base tracking-widest text-center uppercase block">FINTECH Latam</span>
              <span className="font-display font-black text-white text-base tracking-widest text-center uppercase block">SAPIENS LTD</span>
              <span className="font-display font-black text-white text-base tracking-widest text-center uppercase block">GARAY ASOC.</span>
              <span className="font-display font-black text-white text-base tracking-widest text-center uppercase block">GREEN ENERGY</span>
            </div>
          </div>

        </div>
      </section>


      {/* Section 7: Sección de Contenido (Podcast / Valor Gratuito) */}
      <section id="recursos" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-xs font-mono font-extrabold text-[#D4AF37] tracking-widest uppercase">CONOCIMIENTO SOBERANO</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">
                Episodios de Podcast y Artículos Directos
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-md leading-relaxed font-sans">
                Mentoría asíncrona destilada semanalmente sin costo. Tácticas duras de desoperacionalización comercial para consumir de inmediato.
              </p>
            </div>
            
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-3 rounded-sm bg-neutral-950 border border-white/10 text-neutral-300 hover:text-white hover:border-[#D4AF37]/45 text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer"
            >
              <Youtube size={15} className="text-[#0A6640]" />
              <span>Ver en Canales Oficiales</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((item) => (
              <div 
                key={item.id}
                className="bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/25 rounded-sm p-6 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                    <span className="text-[#D4AF37] tracking-wider uppercase">{item.category}</span>
                    <span className="text-neutral-600">{item.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide uppercase font-display leading-snug">{item.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[11px] text-neutral-500">
                  <span>{item.date}</span>
                  <button 
                    onClick={() => openBookingModal("general", `Hola Alejandro, leí tu publicación: "${item.title}" y me interesó mucho el concepto. Me gustaría postular a la llamada exploratoria gratuita.`)}
                    className="text-[#D4AF37] hover:text-white font-bold inline-flex items-center gap-1.5 transition-colors uppercase text-[10px] font-mono cursor-pointer"
                  >
                    <span>Lanzar Podcast</span>
                    <Play size={10} className="fill-[#D4AF37] text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Section 8: Sección de Precios (Pricing) */}
      <section id="precios" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#D4AF37] tracking-widest uppercase">HONORARIOS DE INVERSIÓN</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
              Rangos y Tarifas Claras
            </h2>
            <div className="h-0.5 w-20 bg-[#D4AF37] mx-auto" />
            <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
              No ocultamos cifras. Buscamos relaciones de mutua responsabilidad comercial. Estas son las bandas de inversión de nuestros tres niveles de intervención.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1: Elite 1:1 */}
            <div className="bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/35 rounded-sm p-8 flex flex-col justify-between shadow-xl relative transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold block mb-1">PROGRAMA INDIVIDUAL</span>
                  <h3 className="text-xl font-bold text-white uppercase font-display">Elite 1:1 Inmersivo</h3>
                  <div className="h-0.5 w-10 bg-[#D4AF37] mt-2" />
                </div>
                
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Para fundadores y CEOs que requieren una intervención táctica a medida para desoperacionalizar su agenda corporativa urgente.
                </p>

                <div className="bg-neutral-900 rounded-sm p-4 border border-white/5">
                  <div className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase font-semibold">BANDA DE INVERSIÓN</div>
                  <div className="text-2xl font-black text-white mt-1">$3,500 - $6,000</div>
                  <div className="text-[10px] text-neutral-600 mt-0.5 font-mono">DÓLARES AMERICANOS (BIMESTRAL)</div>
                </div>

                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Sesiones exclusivas 1:1 de 1h</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Soporte personalizado WhatsApp</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Máxima reserva y confidencialidad</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Plantillas de SOPs y automatización</li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openBookingModal("1_1_elite", "Hola Alejandro, leí las tarifas de tu Coaching Elite 1:1. Quiero postular para auditar la compatibilidad de mi negocio y agenda.")}
                  className="w-full py-3 rounded-sm bg-transparent hover:bg-[#D4AF37] border border-white/10 hover:border-transparent text-neutral-300 hover:text-black font-extrabold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  Postular al 1:1 Elite
                </button>
              </div>
            </div>

            {/* Box 2: Mastermind Direct Scaling */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-950 to-[#231E15] border border-[#D4AF37]/45 rounded-sm p-8 flex flex-col justify-between shadow-2xl relative transition-all duration-300">
              <div className="absolute -top-3 right-6">
                <span className="bg-[#D4AF37] text-black text-[9px] font-mono tracking-widest uppercase font-extrabold px-3 py-1 rounded-sm shadow-md">
                  RECOMENDACIÓN EMPRESARIAL
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-extrabold block mb-1">MESA DE TRACCIÓN GRUPAL</span>
                  <h3 className="text-xl font-bold text-white uppercase font-display">Mástermind de Escala</h3>
                  <div className="h-0.5 w-10 bg-[#D4AF37] mt-2" />
                </div>
                
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Para dueños de negocios facturando de 6 a 7 cifras que desean consolidar un equipo directivo y automatizar sistemas comerciales.
                </p>

                <div className="bg-neutral-950 rounded-sm p-4 border border-white/5">
                  <div className="text-[10px] text-[#D4AF37] font-mono tracking-wider uppercase font-semibold">BANDA DE INVERSIÓN</div>
                  <div className="text-2xl font-black text-white mt-1">$7,500 - $12,000</div>
                  <div className="text-[10px] text-neutral-600 mt-0.5 font-mono">DÓLARES AMERICANOS (6 MESES TOTAL)</div>
                </div>

                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Sesiones quincenales directas</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Soporte asíncrono y red de partners</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Workshops presenciales del sector</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Acceso ilimitado a biblioteca SOPs</li>
                </ul>
              </div>

              <div className="pt-8 bg-none">
                <button
                  onClick={() => openBookingModal("mastermind", "Hola Alejandro, quiero postular como miembro oficial al Mástermind de Escala. Reúno los requisitos de facturación anual.")}
                  className="w-full py-4 rounded-sm bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-[#D4AF37]/20 cursor-pointer border-none"
                >
                  Postular a Mástermind
                </button>
              </div>
            </div>

            {/* Box 3: Immersive Retreat */}
            <div className="bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/25 rounded-sm p-8 flex flex-col justify-between shadow-xl relative transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold block mb-1">INMERSIÓN EXISTENCIAL</span>
                  <h3 className="text-xl font-bold text-white uppercase font-display">Retiro de Legado</h3>
                  <div className="h-0.5 w-10 bg-[#D4AF37] mt-2" />
                </div>
                
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Para ejecutivos y altos empresarios que buscan rediseñar su visión integral de vida en un entorno de descanso absoluto y privacidad.
                </p>

                <div className="bg-neutral-900 rounded-sm p-4 border border-white/5">
                  <div className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase font-semibold">BANDA DE INVERSIÓN</div>
                  <div className="text-2xl font-black text-white mt-1">Desde $4,500</div>
                  <div className="text-[10px] text-neutral-600 mt-0.5 font-mono">DÓLARES AMERICANOS (EXPERIENCIA SEDE)</div>
                </div>

                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Estadía en villa privada alpina</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Alimentación gastronómica de autor</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Máximo 10 empresarios por edición</li>
                  <li className="flex gap-2"><Check size={12} className="text-[#D4AF37] mt-1 flex-shrink-0" /> Dinámicas privadas de trascendencia</li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openBookingModal("retreat", "Hola Alejandro, me interesa altamente asistir al próximo Retiro presencial de Inmersión y Legado en la villa privada. Solicito cupo exploratorio.")}
                  className="w-full py-3 rounded-sm bg-transparent hover:bg-white/5 border border-white/10 text-neutral-300 hover:text-white font-bold text-xs tracking-widest uppercase transition-all cursor-pointer"
                >
                  Postular a Retiro
                </button>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-neutral-950/40 border border-white/5 rounded-sm p-6 text-center max-w-2xl mx-auto">
            <p className="text-[11px] text-neutral-500 italic leading-relaxed">
              * Nota: Todos los honorarios se analizan y coordinan formalmente durante la llamada exploratoria gratuita corporativa. No procesamos pagos inmediatos sin comprobar antes la coincidencia ética de objetivos.
            </p>
          </div>

        </div>
      </section>


      {/* Section 9: Preguntas Frecuentes (FAQ Accordion) */}
      <section id="faq" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-extrabold text-[#D4AF37] tracking-widest uppercase">RESOLUCIÓN DE DUDAS DIRECTAS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
              Preguntas Frecuentes
            </h2>
            <div className="h-0.5 w-16 bg-[#D4AF37] mx-auto" />
            <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
              Respuestas directas del máster coach Alejandro Vargas a las preguntas habituales sobre la operativa y el rigor del programa.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={faq.id}
                className="bg-neutral-950 border border-white/10 rounded-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center text-white font-bold text-sm select-none hover:text-[#D4AF37] cursor-pointer"
                >
                  <span className="uppercase tracking-wide font-display leading-snug">{faq.question}</span>
                  <span className={`text-[#D4AF37] font-mono text-lg transition-transform duration-300 inline-block ${activeFaq === idx ? "rotate-45" : "rotate-0"}`}>
                    +
                  </span>
                </button>

                {/* Accordion Content with framer animation */}
                <span className="block border-t border-white/5" />
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === idx ? "max-h-[300px] border-t border-white/10 p-6 bg-neutral-900/40" : "max-h-0"
                  }`}
                >
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Section 10: Final Lead Capture Banner */}
      <section id="captura-final" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
        {/* Radial backing */}
        <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-neutral-950 border border-white/10 rounded-sm p-8 sm:p-12 text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-[#0A6640]/20 border border-[#0A6640]/30 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
              <Gem size={11} className="text-[#D4AF37]" /> INGRESO FILTRADO EXCLUSIVO
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-display max-w-2xl mx-auto leading-tight">
              ¿Estás Listo para Tomar Soberanía Plena Sobre Tu Tiempo y Facturación?
            </h2>

            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Las vacantes del Coach de Alto Rendimiento son limitadas debido a la intensidad dedicada en los análisis directos. Completa tu solicitud y programa tu llamada hoy mismo.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => openBookingModal("general", "Hola Alejandro Vargas, quiero postular formalmente a la sesión estratégica privada de desoperacionalización desde el banner final de AV Mastery.")}
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-xs tracking-widest uppercase rounded-sm transition-all shadow-xl hover:shadow-[#D4AF37]/25 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Programar Llamada Gratuita</span>
                <Calendar size={14} />
              </button>
              <a
                href="#diagnostico"
                className="px-6 py-4 rounded-sm border border-white/10 hover:border-[#D4AF37]/35 text-neutral-400 hover:text-white text-xs font-bold uppercase transition-all"
              >
                Realizar Diagnóstico AI de 3 min
              </a>
            </div>

            <div className="pt-6 flex justify-center gap-8 items-center text-[10px] text-neutral-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="text-[#0A6640]">✓</span>
                <span>Análisis Confidencial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#0A6640]">✓</span>
                <span>Procesos Sin Costo Inicial</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 11: Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 py-16 text-xs text-neutral-500 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
            
            {/* Widget 1: Brand details */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center rounded-sm font-display font-black text-black text-lg">
                  AV
                </div>
                <span className="font-display font-extrabold text-white text-base tracking-widest uppercase">AV <span className="text-[#D4AF37]">Mastery</span></span>
              </div>
              <p className="leading-relaxed max-w-sm text-neutral-500">
                Lujo accesible, maestría directiva y transformación. Coach de Alto Rendimiento acreditado por la ICF encargado de auditar y desoperacionalizar agendas de ejecutivos ocupados.
              </p>
            </div>

            {/* Widget 2: Nav Quicklinks */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-extrabold text-white uppercase tracking-wider font-mono text-[10px]">PROGRAMAS</h4>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-medium">
                <a href="#sobre-mi" className="hover:text-[#D4AF37] transition-colors">Biografía y Trayecto</a>
                <a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Coaching Elite 1:1</a>
                <a href="#metodo" className="hover:text-[#D4AF37] transition-colors">Metodología Procesal</a>
                <a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Mástermind de Escala</a>
                <a href="#diagnostico" className="hover:text-[#D4AF37] transition-colors">Test de Eficiencia</a>
                <a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Retiro Presencial</a>
              </div>
            </div>

            {/* Widget 3: Contact details & social media links */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-extrabold text-white uppercase tracking-wider font-mono text-[10px]">CONTACTO Y CONFIDENCIALIDAD</h4>
              <div className="space-y-1.5 leading-normal">
                <div className="text-white font-medium">AV Mastery International Consulting Ltd.</div>
                <div>Línea Directa Directiva: office@avmastery.com</div>
                <div>Oficinas de Consulta Presencial: San Pedro Garza García, NL / CDMX</div>
              </div>
              
              {/* Social Channels */}
              <div className="flex gap-4 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-sm bg-neutral-900 border border-white/5 text-neutral-400 hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                  <Instagram size={14} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-sm bg-neutral-900 border border-white/5 text-neutral-400 hover:text-[#D4AF37] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={14} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-sm bg-neutral-900 border border-white/5 text-neutral-400 hover:text-[#D4AF37] transition-colors" aria-label="Youtube">
                  <Youtube size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Legal Notice / Disclaimer */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-neutral-600">
            <div className="leading-relaxed max-w-3xl font-sans text-neutral-500">
              AV Mastery® es una marca registrada de Alejandro Vargas Consulting. El coaching de alto rendimiento no sustituye asesoramiento jurídico calificado, terapias clínicas ni auditoría financiera formal. Los resultados cuantificados en los testimonios pertenecen a ejecutivos que aplicaron de inmediato y con disciplina estricta las pautas del programa; el éxito individual dependerá de tu inercia y ritmo de ejecución empresarial.
            </div>
            <div className="flex-shrink-0 font-mono text-neutral-600">
              © {new Date().getFullYear()} AV Mastery. Todos los derechos reservados.
            </div>
          </div>

        </div>
      </footer>


      {/* Floating Elegant WhatsApp Hook Channel */}
      <a 
        href="https://wa.me/525500000000?text=Hola%20Alejandro,%20vengo%20de%20tu%20sitio%20web%20AV%20Mastery.%20Me%20gustar%C3%ADa%20solicitar%20un%20cupo%20para%20tu%20sesi%C3%B3n%20exploratoria%20gratuita."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#0A6640] hover:bg-[#0D7F50] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 hover:shadow-emerald-500/20 duration-300 flex items-center justify-center group"
        aria-label="Charlar por WhatsApp con Alejandro Vargas"
      >
        <div className="relative">
          <MessageCircle size={22} className="relative z-10" />
          {/* Pulsing indicator loop */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 border border-[#0A6640] animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 border border-[#0A6640]" />
        </div>
        
        {/* Caption slider on hover for CTR optimization */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out inline-block align-middle font-mono text-[10px] uppercase font-bold tracking-widest pl-0 group-hover:pl-2">
          WhatsApp Directo
        </span>
      </a>


      {/* Unified Lead Scheduling Captures Modal popup */}
      <LeadModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
        selectedProgram={selectedProgram}
        initialMessage={initialMsg}
      />

    </div>
  );
}
