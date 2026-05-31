/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Testimonial, ServiceOffer, FAQItem } from "./types";

export const services: ServiceOffer[] = [
  {
    id: "1_1_elite",
    title: "Coaching 1:1 Elite",
    badge: "PROGRAMA INSIGNIA INDIVIDUAL",
    description: "Un proceso de alta intensidad de 12 semanas diseñado exclusivamente para fundadores, CEOs y directores ejecutivos cansados de ser esclavos tácticos de sus empresas.",
    duration: "12 Semanas (Inmersivo)",
    features: [
      "Diagnóstico heurístico y auditoría horaria drástica.",
      "Sesiones semanales 1:1 privadas con Alejandro Vargas.",
      "Línea caliente directa vía WhatsApp exclusiva (Lunes a Viernes).",
      "Estructuración de sistemas de delegación autónoma.",
      "Protocolo científico anti-burnout y rediseño de energía vital."
    ],
    image: "/src/assets/images/luxury_consultation_1780242882049.png",
    priceEstimate: "$3,500 - $6,000 USD",
    targetClient: "Empresarios con facturación sólida pero sin libertad temporal"
  },
  {
    id: "mastermind",
    title: "Mástermind de Escala",
    badge: "COMUNIDAD EXCLUSIVA DE NEGOCIOS",
    description: "Una mesa redonda de mentes brillantes. Para dueños de negocios facturando de 6 a 7 cifras que buscan profesionalizar su directiva, sistematizar ventas y escalar al siguiente nivel.",
    duration: "6 Meses (Mentoría Grupal)",
    features: [
      "Reuniones de tracción ejecutiva quincenales (grupales).",
      "Plantillas construidas de manuales corporativos y KPIs.",
      "Acceso directo a la red privada de proveedores y socios de Alejandro Vargas.",
      "Workshops prácticos presenciales en hubs financieros clave.",
      "Pares en tu misma inercia de facturación y retos comerciales."
    ],
    image: "/src/assets/images/mastermind_boardroom_1780242843517.png",
    priceEstimate: "$7,500 - $12,000 USD",
    targetClient: "Fundadores comprometidos con la automatización y escala comercial"
  },
  {
    id: "retreat",
    title: "Retiro Inmersión y Legado",
    badge: "EXPERIENCIA SOBERANA PRESENCIAL",
    description: "Un fin de semana diseñado para redefinir el rumbo de tu vida. Apartado del ruido cotidiano en una villa alpina de súper lujo, reconectamos soberanía personal, visión existencial e inyección espiritual.",
    duration: "4 Días (Presencial)",
    features: [
      "Todo incluido en villa privada de 5 estrellas con chef privado.",
      "Ejercicios inmersivos de descomprensión mental profunda.",
      "Trazamiento del plan de vida trascendental para los próximos 10 años.",
      "Comidas temáticas de discusión de negocios de alto nivel.",
      "Solo para 10 mentes en un ambiente íntimo y confidencial."
    ],
    image: "/src/assets/images/retreat_villa_1780242862029.png",
    priceEstimate: "Desde $4,500 USD",
    targetClient: "Líderes consolidados buscando mayor trascendencia y balance vital"
  }
];

export const phases = [
  {
    num: "01",
    title: "Claridad Concreta",
    desc: "Desmontamos los mitos de actividad que consumen tu agenda. Sometemos tu negocio a una auditoría despiadada para identificar la fuga real de tu soberanía temporal y tu margen neto.",
    color: "from-amber-600 to-amber-500"
  },
  {
    num: "02",
    title: "Consciencia e Identidad",
    desc: "Alineamos tu mentalidad con el rol que necesitas ejercer. Pasas de bombero reactivo a un arquitecto de sistemas. Destruimos los patrones neuróticos de control e hiper-vigilancia.",
    color: "from-amber-500 to-amber-400"
  },
  {
    num: "03",
    title: "Ejecución de Alto Impacto",
    desc: "Colocamos en su sitio marcos de trabajo autónomos. Implementamos sistemas de delegación con límites claros de responsabilidad y canales ágiles, garantizando control y tracción.",
    color: "from-amber-400 to-emerald-600"
  },
  {
    num: "04",
    title: "Legado y Trascendencia",
    desc: "Consolidas un negocio que genera riqueza sin demandar tu pulso vital. Recuperas tiempo para el diseño de tu futuro familiar, tu vitalidad biológica y la construcción de tu legado supremo.",
    color: "from-emerald-600 to-emerald-500"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Héctor Villanueva",
    role: "CEO de Nexus Health Group",
    image: "https://picsum.photos/seed/doctor/120/120",
    result: "Duplicó facturación y bajó su jornada de 75h a 35h semanales",
    quote: "Acepté iniciar el Coaching 1:1 Elite de Alejandro cuando sentía que mi negocio me estaba costando la vida. En 9 meses logramos reestructurar toda la jerarquía de la clínica, sistematizar operaciones y duplicar ingresos. Pero lo más valioso: volví a cenar con mis hijos cada noche.",
    rating: 5
  },
  {
    id: "t2",
    name: "Sofía Montenegro",
    role: "Fundadora de Alura Brands (E-commerce)",
    image: "https://picsum.photos/seed/sofia/120/120",
    result: "Aumentó sus ingresos netos un 340% en solo 9 meses",
    quote: "Ingresar al Mástermind de Alejandro transformó el desorden de mi e-commerce en un reloj suizo. Pasé de liderar operaciones caóticas a contratar directores calificados. La claridad que Alejandro aporta corta el ruido de manera inmediata.",
    rating: 5
  },
  {
    id: "t3",
    name: "Ing. Alejandro Garay",
    role: "Socio Principal en Garay & Asociados S.A.",
    image: "https://picsum.photos/seed/garay/120/120",
    result: "Sistematizó la consultora reduciendo su presencia al 10%",
    quote: "Pensaba que nadie podía entregar la calidad técnica de mis consultorías. Alejandro destruyó mis creencias de hiper-control. Diseñamos un manual de gobernanza y un plan de incentivos. Hoy la firma opera con total soberanía y yo solo atiendo la dirección mensual.",
    rating: 5
  },
  {
    id: "t4",
    name: "Patricia Belmont",
    role: "VP de Operaciones en Fintech América",
    image: "https://picsum.photos/seed/patricia/120/120",
    result: "Ascendió a mesa directiva y superó el burnout severo",
    quote: "El cansancio me estaba apagando la mente y afectando mis decisiones. No dormía. Alejandro me enseñó la ingeniería del bio-hacking y la soberanía de límites de tiempo. Recuperé mi vitalidad y mi rendimiento ejecutivo se multiplicó por tres.",
    rating: 5
  },
  {
    id: "t5",
    name: "Mauricio Benavides",
    role: "Inversionista de Capital de Riesgo",
    image: "https://picsum.photos/seed/mauricio/120/120",
    result: "Trazó visión corporativa y fundó fondo de legado",
    quote: "El Retiro de Inmersión y Legado es la mejor inversión de mi década. Apartado de la urbe, en un entorno de primer nivel con empresarios notables, logré rediseñar mi visión vital para mis próximos 15 años. Una experiencia sobria e inolvidable.",
    rating: 5
  },
  {
    id: "t6",
    name: "Lucía De Las Casas",
    role: "CEO de Green Solutions Latam",
    image: "https://picsum.photos/seed/lucia/120/120",
    result: "Estructuró junta de socios y expandió 3 filiales extranjeras",
    quote: "La autoridad con la que Alejandro enseña es admirable. No hay palabras desperdiciadas. Su proceso te obliga a mirarte al espejo y ejecutar de inmediato. Expandimos a 3 nuevos países con total calma directiva.",
    rating: 5
  }
];

export const articles = [
  {
    id: "a1",
    title: "La Trampa de los 7 Ítemes en Ejecutivos de Alto Rendimiento",
    category: "SOBERANÍA DEL TIEMPO",
    readTime: "6 min lectura",
    summary: "Por qué los líderes más productivos no tienen metas interminables, sino una disciplina drástica enfocada en solo 3 prioridades diarias que mueven la aguja real de ingresos.",
    date: "Mayo 2026"
  },
  {
    id: "a2",
    title: "Sistemas Autónomos: Cómo Reclutar y Delegar sin Confiar de Más",
    category: "INGENIERÍA ESTRUCTURAL",
    readTime: "8 min lectura",
    summary: "La confianza ciega es un error. Te mostramos cómo diseñar marcos asíncronos de rendición de cuentas (SOPs) que minimizan errores ejecutivos y aseguran inercia sin tu intervención constante.",
    date: "Abril 2026"
  },
  {
    id: "a3",
    title: "El Antídoto Científico al Cansancio Selectivo del Emprendedor",
    category: "VITALIDAD CORPORAL",
    readTime: "7 min lectura",
    summary: "Cómo calibrar tus ventanas de descanso, nutrición celular profunda y ayunos de dopamina para sostener jornadas directivas nítidas sin caer víctima de la inercia del cortisol elevado.",
    date: "Marzo 2026"
  }
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "¿Para quién es ideal AV Mastery?",
    answer: "Nuestros programas están diseñados específicamente para dueños de negocios veteranos, directores de agencias, profesionales independientes altamente exitosos que facturan mínimo 6 cifras anuales o ejecutivos C-Level. No brindamos asesoría corporativa básica para principiantes. Filtramos candidatos buscando un alto compromiso de acción táctica inmediata."
  },
  {
    id: "f2",
    question: "¿Qué es la certificación ICF y qué valor aporta?",
    answer: "La International Coaching Federation (ICF) es el estándar de oro global para el coaching ejecutivo y de vida. Contratar un coach certificado por ICF como Alejandro Vargas garantiza una metodología científica estructurada, libre de motivaciones banales o improvisaciones del mercado. Operamos con los más altos estándares de rigor confidencial, ética empresarial y pedagogía de transformación."
  },
  {
    id: "f3",
    question: "¿En cuánto tiempo puedo ver resultados tangibles?",
    answer: "Los cambios a nivel de agenda y descomprensión de burnout son notorios desde la primera quincena. En términos de optimización corporativa y reestructuración de sistemas de delegación, la transformación completa toma entre 8 y 12 semanas, coincidiendo con la duración del Coaching Elite privado."
  },
  {
    id: "f4",
    question: "¿Esto requiere que trabaje más horas o dedique más tiempo?",
    answer: "Todo lo contrario. El objetivo nuclear de AV Mastery es la desoperacionalización drástica. Consiste en reestructurar tu agenda para que pases de trabajar 60-70 horas semanales a menos de 40h de alta intensidad directiva, delegando efectivamente el resto en personal clave o sistemas asíncronos estructurados."
  },
  {
    id: "f5",
    question: "¿Cómo se implementan las sesiones de coaching?",
    answer: "Nuestras sesiones 1:1 Elite se realizan vía videoconferencia securizada de alta definición, en horarios estratégicos programados previamente. Las comunicaciones complementarias y soporte continuo se gestionan a través de una línea premium cifrada directa de WhatsApp personal de Alejandro Vargas."
  },
  {
    id: "f6",
    question: "¿Tienen políticas de reembolso o garantía?",
    answer: "Establecemos un acuerdo mutuo antes de arrancar. Si tras la primera sesión de alineación estratégica determinamos que tu perfil o el de Alejandro no coincide para sostener el rigor de ejecución, cancelamos la consultoría y devolvemos el 100% de los honorarios iniciales de manera inmediata."
  }
];
