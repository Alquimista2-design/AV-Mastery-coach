/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Zap, 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp, 
  Shield, 
  Flame, 
  Award, 
  Target, 
  Clock, 
  Activity, 
  CheckCircle,
  FileText,
  Calendar,
  Sparkles,
  RefreshCw,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DiagnosticInput, DiagnosticResult } from "../types";

interface DiagnosticQuizProps {
  onOpenBooking: (programName: string, initialMsg: string) => void;
}

export default function DiagnosticQuiz({ onOpenBooking }: DiagnosticQuizProps) {
  const [step, setStep] = useState(0); // 0: intro, 1: personal registration, 2: focus, 3: metrics & time, 4: bottleneck & vision, 5: loading, 6: results
  const [inputs, setInputs] = useState<DiagnosticInput>({
    name: "",
    email: "",
    phone: "",
    focusArea: "escala",
    currentLevel: "$100k - $500k USD / año",
    bottleneck: "Falta de delegación y sistemas autónomos",
    workHours: "60",
    vision3Years: ""
  });

  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const loadingSequence = [
    "Sondeando inercia de agenda y distribución horaria...",
    "Evaluando madurez de sistemas operativos de negocio...",
    "Sincronizando con los principios de soberanía de Alejandro Vargas...",
    "Estructurando tu Blueprint táctico de 24 horas..."
  ];

  const handleNext = () => {
    // Basic validation
    if (step === 1) {
      if (!inputs.name.trim() || !inputs.email.trim()) {
        setErrorMsg("Por favor, ingresa tu nombre y correo para continuar.");
        return;
      }
      setErrorMsg("");
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setErrorMsg("");
    setStep(prev => prev - 1);
  };

  const selectFocus = (area: string) => {
    setInputs(prev => ({ ...prev, focusArea: area }));
    setStep(prev => prev + 1);
  };

  const runAnalysis = async () => {
    setStep(5); // Show loading
    setLoadingStep(0);
    setLoadingMessage(loadingSequence[0]);

    // Animate loader steps
    const timer1 = setTimeout(() => {
      setLoadingStep(1);
      setLoadingMessage(loadingSequence[1]);
    }, 1500);

    const timer2 = setTimeout(() => {
      setLoadingStep(2);
      setLoadingMessage(loadingSequence[2]);
    }, 3000);

    const timer3 = setTimeout(() => {
      setLoadingStep(3);
      setLoadingMessage(loadingSequence[3]);
    }, 4500);

    try {
      const response = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();
      
      // Delay finishing loader slightly to feel extremely premium and thoughtful
      setTimeout(() => {
        setResult(data);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        setStep(6); // Show results
      }, 5500);

    } catch (err) {
      console.error("Error generating diagnostic:", err);
      // Fallback is handled directly inside the Express server anyway to guarantee success!
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setResult(null);
    setInputs({
      name: "",
      email: "",
      phone: "",
      focusArea: "escala",
      currentLevel: "$100k - $500k USD / año",
      bottleneck: "Falta de delegación y sistemas autónomos",
      workHours: "60",
      vision3Years: ""
    });
  };

  // Focus areas translation map
  const focusData = [
    {
      id: "escala",
      title: "Escalar mi Negocio",
      desc: "Quiero sistematizar operaciones, delegar y superar el techo de facturación.",
      icon: <TrendingUp className="text-[#D4AF37]" size={24} />
    },
    {
      id: "liderazgo",
      title: "Liderazgo Ejecutivo",
      desc: "Quiero mejorar mi toma de decisiones, asertividad y liderar equipos de alto nivel.",
      icon: <Award className="text-[#D4AF37]" size={24} />
    },
    {
      id: "equilibrio",
      title: "Equilibrio y Antidoto Burnout",
      desc: "Quiero recuperar autonomía, dormir y trabajar menos horas sin que caiga la empresa.",
      icon: <Flame className="text-[#D4AF37]" size={24} />
    },
    {
      id: "legado",
      title: "Propósito y Legado",
      desc: "He logrado riqueza material, ahora busco trascendencia, visión de futuro y claridad de vida.",
      icon: <Target className="text-[#D4AF37]" size={24} />
    }
  ];

  return (
    <div id="diagnostic-quiz-container" className="w-full bg-neutral-950 rounded-sm border border-white/10 overflow-hidden shadow-2xl relative">
      {/* Absolute Amber Radial Glow behind the container */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#0A6640]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Intro Screen */}
      {step === 0 && (
        <div className="p-8 sm:p-12 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-6 font-semibold">
            <Sparkles size={11} /> Diagnóstico Impulsado por IA
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
            ¿Qué Está Frenando Tu Negocio de Alcanzar las 7 Cifras?
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Responde 5 preguntas tácticas de alta dirección y recibe un **Blueprint de Rendimiento e Ingeniería de Negocio** personalizado por Alejandro Vargas. Evaluamos de inmediato tu inercia, tus frenos invisibles y tus cuellos de botella reales.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
            <div className="bg-neutral-900 border border-white/5 rounded-sm p-4">
              <div className="text-[#D4AF37] font-mono text-xl font-bold mb-1">~3 Min</div>
              <div className="text-white text-xs font-semibold uppercase tracking-wider">Duración Corta</div>
              <p className="text-neutral-500 text-[11px] mt-1 leading-normal">Preguntas precisas, sin rodeos corporativos.</p>
            </div>
            <div className="bg-neutral-900 border border-white/5 rounded-sm p-4">
              <div className="text-[#D4AF37] font-mono text-xl font-bold mb-1">Algoritmo GenV</div>
              <div className="text-white text-xs font-semibold uppercase tracking-wider">Plan Heurístico</div>
              <p className="text-neutral-500 text-[11px] mt-1 leading-normal">Construido con las reglas de alto impacto de ICF.</p>
            </div>
            <div className="bg-neutral-900 border border-white/5 rounded-sm p-4">
              <div className="text-[#D4AF37] font-mono text-xl font-bold mb-1">100% Gratis</div>
              <div className="text-white text-xs font-semibold uppercase tracking-wider">Soberanía de Valor</div>
              <p className="text-neutral-500 text-[11px] mt-1 leading-normal">Estrategias procesables entregadas de inmediato.</p>
            </div>
          </div>

          <button
            onClick={() => setStep(1)}
            className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-sm tracking-widest uppercase rounded-sm transition-all shadow-xl hover:shadow-[#D4AF37]/20 active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 border-none"
          >
            <span>Iniciar Diagnóstico Gratuito</span>
            <ChevronRight size={16} />
          </button>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
            <Lock size={12} className="text-neutral-600" />
            <span>Tus respuestas y datos son 100% confidenciales. No compartimos información comercial.</span>
          </div>
        </div>
      )}

      {/* Screen 1: Personal Registration */}
      {step === 1 && (
        <div className="p-8 sm:p-12 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">Paso 1 de 4</span>
            <span className="text-xs text-neutral-500">Identificación de Perfil</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            ¿Con quién tenemos el honor de hablar?
          </h3>
          <p className="text-neutral-400 text-xs mb-6 font-sans">
            Necesitamos las credenciales correctas para registrar tu perfil de líder y poder dar seguimiento personalizado a tus respuestas.
          </p>

          <div className="space-y-4 max-w-xl">
            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">Nombre Completo</label>
              <input
                type="text"
                placeholder="Ej. Dr. Mauricio Estrada"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">Correo de Contacto</label>
                <input
                  type="email"
                  placeholder="mauricio@empresa.com"
                  value={inputs.email}
                  onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                  className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">WhatsApp / Móvil (Opcional)</label>
                <input
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  value={inputs.phone}
                  onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                  className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                />
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="mt-4 text-xs text-red-500 font-semibold bg-red-500/10 border border-red-500/20 rounded-sm p-3">
              {errorMsg}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-sm border border-white/10 text-neutral-400 text-xs font-bold hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              Atrás
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-sm bg-[#111] text-[#D4AF37] border border-[#D4AF37]/35 hover:bg-[#D4AF37] hover:text-black hover:border-transparent text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Continuar</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Screen 2: Focus Area Select */}
      {step === 2 && (
        <div className="p-8 sm:p-12 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">Paso 2 de 4</span>
            <span className="text-xs text-neutral-500">Área de Cuello de Botella</span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            ¿Cuál es tu campo de batalla crucial en este momento?
          </h3>
          <p className="text-neutral-400 text-xs mb-6 font-sans">
            Selecciona la categoría operativa que más demanda tu atención o que limita tu felicidad y crecimiento de ingresos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusData.map((item) => (
              <button
                key={item.id}
                onClick={() => selectFocus(item.id)}
                className={`text-left p-5 rounded-sm border transition-all cursor-pointer flex gap-4 ${
                  inputs.focusArea === item.id 
                    ? "bg-[#18150F] border-[#D4AF37]/65 shadow-md shadow-[#D4AF37]/5 text-white" 
                    : "bg-neutral-900 border-white/5 hover:border-white/15 text-neutral-300"
                }`}
              >
                <div className="p-2.5 rounded-sm bg-neutral-950 border border-white/10 flex-shrink-0 self-start">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1 font-display">{item.title}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-sm border border-white/10 text-neutral-400 text-xs font-bold hover:text-white cursor-pointer"
            >
              Atrás
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-sm bg-[#111] text-[#D4AF37] border border-[#D4AF37]/35 hover:bg-[#D4AF37] hover:text-black hover:border-transparent text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Siguiente Paso</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Screen 3: Metrics & Time */}
      {step === 3 && (
        <div className="p-8 sm:p-12 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">Paso 3 de 4</span>
            <span className="text-xs text-neutral-500">Métricas y Energía</span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            Métricas de Escala y Distribución de Tiempo
          </h3>
          <p className="text-neutral-400 text-xs mb-6 font-sans">
            Queremos cruzar tus resultados económicos con tu balance de vida física para calcular tu nivel de fatiga sistémica.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1 font-mono">
                <Activity size={12} className="text-[#D4AF37]" /> Facturación Anual Estimada
              </label>
              <div className="space-y-2">
                {[
                  "Menos de $50k USD / año",
                  "$50k - $150k USD / año",
                  "$150k - $500k USD / año",
                  "Más de $500k USD / año"
                ].map((val) => (
                  <label 
                    key={val}
                    className={`flex items-center gap-3 px-4 py-3 rounded-sm border border-white/5 bg-neutral-900 cursor-pointer text-xs text-neutral-300 transition-all ${
                      inputs.currentLevel === val ? "border-[#D4AF37]/50 bg-[#18150f]" : "hover:border-white/15"
                    }`}
                  >
                    <input
                      type="radio"
                      name="revenue_radio"
                      checked={inputs.currentLevel === val}
                      onChange={() => setInputs({ ...inputs, currentLevel: val })}
                      className="accent-[#D4AF37]"
                    />
                    <span>{val}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1 font-mono">
                <Clock size={12} className="text-[#D4AF37]" /> Horas de trabajo semanales
              </label>
              <p className="text-neutral-500 text-[11px] mb-3 leading-normal">
                Sé honesto. Cuenta las horas de fin de semana, el chat en la cama y la contabilidad nocturna.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-neutral-900 border border-white/10 rounded-sm px-4 py-3">
                  <span className="text-sm font-semibold text-white">{inputs.workHours} Horas</span>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase">
                    {parseInt(inputs.workHours) > 65 ? "⚠️ Riesgo de Combustión" : "Promedio Operativo"}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={inputs.workHours}
                  onChange={(e) => setInputs({ ...inputs, workHours: e.target.value })}
                  className="w-full accent-[#D4AF37] h-1.5 bg-neutral-900 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-600 font-mono">
                  <span>20h (Equilibrista)</span>
                  <span>50h (Lunes a Viernes)</span>
                  <span>100h (Hiper-Esclavitud)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-sm border border-white/10 text-neutral-400 text-xs font-bold hover:text-white cursor-pointer"
            >
              Atrás
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-sm bg-[#111] text-[#D4AF37] border border-[#D4AF37]/35 hover:bg-[#D4AF37] hover:text-black hover:border-transparent text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Siguiente Paso</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Screen 4: Bottleneck & Vision */}
      {step === 4 && (
        <div className="p-8 sm:p-12 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold font-mono">Paso 4 de 4</span>
            <span className="text-xs text-neutral-500">Soberanía de Negocio</span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            Obstáculo Crítico e Imagen de Futuro
          </h3>
          <p className="text-neutral-400 text-xs mb-6 font-sans">
            Identifica el bloqueo principal que detiene tu crecimiento y describe brevemente dónde sueñas posicionar tu vida y negocio en 3 años.
          </p>

          <div className="space-y-4 max-w-xl">
            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">¿Cuál es tu mayor reto operativo presente?</label>
              <select
                value={inputs.bottleneck}
                onChange={(e) => setInputs({ ...inputs, bottleneck: e.target.value })}
                className="w-full bg-neutral-900 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
              >
                <option value="Falta de delegación y sistemas autónomos">Falta de delegación y sistemas autónomos (todo cae sobre mí)</option>
                <option value="El negocio no frena el burnout, me falta vitalidad física">El negocio no frena el burnout, me falta vitalidad física</option>
                <option value="Tengo dinero pero ya no disfruto lo que hago, perdí el propósito">Tengo dinero pero ya no disfruto lo que hago, perdí el propósito</option>
                <option value="Problemas con mi equipo, directivos no alineados">Problemas con mi equipo, directivos no alineados</option>
                <option value="No sé cómo superar la barrera actual de ingresos de mi sector">No sé cómo superar la barrera actual de ingresos de mi sector</option>
                <option value="Falta de sistemas escalables de marketing y ventas">Falta de sistemas escalables de marketing y ventas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5 font-mono">Completa: "En 3 años, mi negocio facturará ____ y yo seré _____"</label>
              <textarea
                placeholder="Ej. Facturará 1.5 millones anuales con un CEO encargado y yo tendré fin de semana libre total enfocándome en el diseño del producto."
                value={inputs.vision3Years}
                onChange={(e) => setInputs({ ...inputs, vision3Years: e.target.value })}
                rows={3}
                className="w-full bg-neutral-900 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors placeholder:text-neutral-600 resize-none animate-none"
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-sm border border-white/10 text-neutral-400 text-xs font-bold hover:text-white cursor-pointer"
            >
              Atrás
            </button>
            <button
              onClick={runAnalysis}
              className="px-8 py-3 bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-xs tracking-widest uppercase rounded-sm transition-all shadow-xl hover:shadow-[#D4AF37]/20 active:scale-[0.98] cursor-pointer inline-flex items-center gap-1.5 border-none"
            >
              <span>Generar Análisis de Impacto</span>
              <Sparkles size={14} className="animate-pulse text-black" />
            </button>
          </div>
        </div>
      )}

      {/* Screen 5: Loading State */}
      {step === 5 && (
        <div className="p-12 sm:p-24 text-center flex flex-col items-center justify-center min-h-[380px] relative z-10">
          <div className="relative mb-8">
            <div className="w-20 h-20 rounded-full border border-[#D4AF37]/15 flex items-center justify-center">
              <RefreshCw className="animate-spin text-[#D4AF37]" size={36} />
            </div>
            <span className="absolute inset-0 rounded-full bg-[#D4AF37]/5 blur-md" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Ingeniería de Diagnóstico en Progreso
          </h3>
          
          <div className="w-64 h-1.5 bg-[#111] rounded-sm overflow-hidden mb-6 mx-auto">
            <motion.div 
              className="h-full bg-[#D4AF37]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5.5, ease: "linear" }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={loadingStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[#D4AF37]/90 font-mono text-[11px] uppercase tracking-wider max-w-sm"
            >
              {loadingMessage}
            </motion.p>
          </AnimatePresence>

          <p className="text-neutral-500 text-xs mt-6 max-w-xs leading-normal">
            Alejandro Vargas AI Engine está contrastando tu perfil con las métricas de más de 340 ejecutivos de alto rendimiento.
          </p>
        </div>
      )}

      {/* Screen 6: Results Screen */}
      {step === 6 && result && (
        <div className="p-6 sm:p-10 relative z-10">
          {/* Header Banner */}
          <div className="bg-neutral-900 border border-white/10 rounded-sm p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1 bg-[#D4AF37]/15 text-[#D4AF37] text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm mb-2 font-semibold">
                INFORME MAESTRO AV MASTERY • CONFIDENCIAL
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Blueprint Estratégico de {inputs.name}
              </h3>
              <p className="text-neutral-400 text-xs mt-1 font-sans">
                Análisis táctico personalizado para el de {inputs.focusArea === "escala" ? "Escala de Negocios" : "Dirección Ejecutiva"}.
              </p>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-4 bg-neutral-950 rounded-sm p-4 border border-white/5">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-white/10">
                {/* Simulated circle stroke coloring based on score */}
                <div 
                  className={`absolute inset-[-4px] rounded-full border-4 ${
                    result.efficiencyScore < 50 
                      ? "border-red-500/70" 
                      : result.efficiencyScore < 75 
                        ? "border-[#D4AF37]/70" 
                        : "border-[#0A6640]/70"
                  }`} 
                />
                <span className="text-xl font-mono text-white font-extrabold">{result.efficiencyScore}</span>
              </div>
              <div>
                <div className="text-white text-xs font-bold leading-none mb-1">Índice de Eficiencia</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                  {result.efficiencyScore < 50 
                    ? "🚨 Alerta Crítica" 
                    : result.efficiencyScore < 75 
                      ? "⚡ Operación Ineficiente" 
                      : "✅ Alta Sincronía"}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Inside Analysis */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overall Diagnostic */}
              <div className="bg-neutral-900 rounded-sm p-6 border border-white/5 relative">
                <span className="absolute top-4 right-4 text-xs font-mono text-neutral-600">ANÁLISIS DE EFICIENCIA</span>
                <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-3">Diagnóstico Maestro</h4>
                <p className="text-neutral-200 text-sm italic leading-relaxed font-serif pl-4 border-l-2 border-[#D4AF37] py-1">
                  "{result.overallDiagnostic}"
                </p>
              </div>

              {/* Core Bottleneck critique */}
              <div className="bg-neutral-900 rounded-sm p-6 border border-white/5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5 font-display">
                  <Activity size={14} className="text-[#D4AF37]" /> Rompiendo el Cuello de Botella
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {result.coreBottlenecksAnalyzed}
                </p>
              </div>

              {/* Tailored Strategies */}
              <div>
                <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5 font-mono">
                  <Zap size={14} className="text-[#D4AF37]" /> Tres Pilares de Choque Inmediatos
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  {result.tailoredStrategies.map((strategy, idx) => (
                    <div key={idx} className="bg-[#121212] border border-white/5 rounded-sm p-5 transition-colors">
                      <div className="flex gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-mono font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <h5 className="text-white font-bold text-sm mb-1 font-display">{strategy.title}</h5>
                          <p className="text-neutral-400 text-xs leading-relaxed">{strategy.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 1 Col: Urgent Plan & Program alignment */}
            <div className="space-y-6">
              {/* Immediate action 24h */}
              <div className="bg-neutral-900 rounded-sm p-6 border-l-2 border-[#D4AF37] shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                  <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono">Acción Inmediata (24 Horas)</h4>
                </div>
                <h5 className="text-white font-bold text-sm mb-2">Tu Primer Movimiento de Poder:</h5>
                <p className="text-neutral-300 text-xs leading-relaxed font-medium mb-4">
                  {result.immediateAction24h}
                </p>
                <div className="text-[10px] text-neutral-500">
                  ⚠️ No lo postergues. El éxito empresarial pertenece a quienes ejecutan con velocidad implacable.
                </div>
              </div>

              {/* Recommended Program Card */}
              <div className="bg-neutral-900 border border-white/5 rounded-sm p-6 text-neutral-200">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono mb-3">Programa Sugerido para {inputs.name}</h4>
                <div className="bg-black/45 rounded-sm p-4 border border-white/5 text-white mb-4">
                  <div className="text-xs text-[#D4AF37] font-semibold mb-1">Alineado con tu nivel de escala y horas:</div>
                  <div className="text-sm font-bold text-white">{result.recommendedProgram.split("(")[0]}</div>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-sans">
                  Tu perfil ha calificado con prioridad táctica para este programa específico. Sincroniza una sesión estratégica directamente con Alejandro para discutir el diagnóstico.
                </p>

                <button
                  onClick={() => onOpenBooking(
                    result.recommendedProgram, 
                    `Hola Alejandro, completé mi Diagnóstico de un Índice de ${result.efficiencyScore}/100. Mi reto es: ${inputs.bottleneck}. Me interesa discutir tu recomendación sobre el programa: ${result.recommendedProgram}.`
                  )}
                  className="w-full py-3 px-4 bg-[#D4AF37] hover:bg-[#b5942e] text-black font-extrabold text-xs tracking-wider uppercase rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border-none"
                >
                  <Calendar size={13} />
                  <span>Agendar Consultoría Gratuita</span>
                </button>
              </div>

              {/* Reset Quiz Button */}
              <button
                onClick={resetQuiz}
                className="w-full py-2.5 rounded-sm border border-white/10 text-neutral-500 hover:text-white transition-colors text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw size={12} />
                <span>Volver a realizar test</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
