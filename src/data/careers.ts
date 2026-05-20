export interface JobPosition {
  id: string;
  title: string;
  titleEn?: string;
  company: string;
  companyId: string;
  location: string;
  type: "full-time" | "contract";
  typeLabel: string;
  typeLabelEn?: string;
  description: string;
  descriptionEn?: string;
  requirements: string[];
  requirementsEn?: string[];
  postedDate: string;
}

export const jobPositions: JobPosition[] = [
  {
    id: "vendedor-tecnico-sande",
    title: "Vendedor Técnico — Maquinaria Industrial",
    titleEn: "Technical Sales — Industrial Machinery",
    company: "Sande S.A.",
    companyId: "sande",
    location: "Santiago, Chile",
    type: "full-time",
    typeLabel: "Tiempo completo",
    typeLabelEn: "Full-time",
    description:
      "Responsable de la venta consultiva de maquinaria industrial y herramientas a clientes del sector minería, construcción y manufactura. Manejo de cartera de clientes y desarrollo de nuevas cuentas.",
    descriptionEn:
      "Responsible for consultative sales of industrial machinery and tools to mining, construction, and manufacturing clients. Client portfolio management and new account development.",
    requirements: [
      "Ingeniería Mecánica, Industrial o carrera afín",
      "3+ años de experiencia en ventas técnicas B2B",
      "Conocimiento del mercado de maquinaria industrial en Chile",
      "Licencia de conducir clase B",
      "Disponibilidad para viajes a regiones",
    ],
    requirementsEn: [
      "Mechanical, Industrial Engineering or related degree",
      "3+ years B2B technical sales experience",
      "Knowledge of the industrial machinery market in Chile",
      "Valid driver's license",
      "Availability for regional travel",
    ],
    postedDate: "2025-03-01",
  },
  {
    id: "ingeniero-proyectos-sandiman",
    title: "Ingeniero de Proyectos — Levante y Automatización",
    titleEn: "Project Engineer — Lifting & Automation",
    company: "Sandiman S.A.",
    companyId: "sandiman",
    location: "Santiago / Antofagasta, Chile",
    type: "full-time",
    typeLabel: "Tiempo completo",
    typeLabelEn: "Full-time",
    description:
      "Diseño, planificación y ejecución de proyectos de levante sincrónico y automatización industrial para clientes del sector minero. Coordinación de equipos en terreno y elaboración de informes técnicos.",
    descriptionEn:
      "Design, planning, and execution of synchronized lifting and industrial automation projects for mining sector clients. Field team coordination and technical report preparation.",
    requirements: [
      "Ingeniería Civil Mecánica o Eléctrica",
      "5+ años de experiencia en proyectos industriales",
      "Experiencia en sistemas hidráulicos y PLC",
      "Certificación en seguridad minera (deseable)",
      "Disponibilidad para trabajo en faenas mineras",
    ],
    requirementsEn: [
      "Civil Mechanical or Electrical Engineering",
      "5+ years industrial project experience",
      "Experience with hydraulic systems and PLCs",
      "Mining safety certification (preferred)",
      "Availability for mining site work",
    ],
    postedDate: "2025-02-15",
  },
  {
    id: "operador-cnc-tecbolt",
    title: "Operador CNC — Línea de Producción",
    titleEn: "CNC Operator — Production Line",
    company: "Tecbolt S.A.",
    companyId: "fijaciones",
    location: "Santiago, Chile",
    type: "full-time",
    typeLabel: "Tiempo completo",
    typeLabelEn: "Full-time",
    description:
      "Operación de tornos y centros de mecanizado CNC para la fabricación de fijaciones de alta resistencia bajo estándares ISO 9001. Control de calidad dimensional y mantenimiento preventivo de equipos.",
    descriptionEn:
      "Operation of CNC lathes and machining centers for high-strength fastener manufacturing under ISO 9001 standards. Dimensional quality control and equipment preventive maintenance.",
    requirements: [
      "Técnico en Mecánica Industrial o Mecanizado",
      "2+ años de experiencia en operación CNC",
      "Conocimiento de programación G-code",
      "Lectura de planos técnicos",
      "Experiencia con instrumentos de medición (micrómetros, calibradores)",
    ],
    requirementsEn: [
      "Industrial Mechanics or Machining Technician",
      "2+ years CNC operation experience",
      "G-code programming knowledge",
      "Technical drawing reading",
      "Experience with measurement instruments (micrometers, calipers)",
    ],
    postedDate: "2025-03-10",
  },
  {
    id: "analista-comercial-grupo",
    title: "Analista Comercial — Grupo Sande",
    titleEn: "Commercial Analyst — Grupo Sande",
    company: "Grupo Sande",
    companyId: "grupo",
    location: "Santiago, Chile",
    type: "full-time",
    typeLabel: "Tiempo completo",
    typeLabelEn: "Full-time",
    description:
      "Análisis de datos comerciales del grupo, reportería de gestión, soporte a la toma de decisiones estratégicas y seguimiento de KPIs comerciales para las tres unidades de negocio.",
    descriptionEn:
      "Commercial data analysis for the group, management reporting, strategic decision-making support, and commercial KPI tracking for all three business units.",
    requirements: [
      "Ingeniería Comercial, Civil Industrial o carrera afín",
      "2+ años de experiencia en análisis comercial o business intelligence",
      "Dominio avanzado de Excel y herramientas de BI (Power BI, Tableau)",
      "Capacidad analítica y orientación a resultados",
      "Inglés intermedio-avanzado",
    ],
    requirementsEn: [
      "Business Administration, Industrial Engineering or related degree",
      "2+ years in commercial analysis or business intelligence",
      "Advanced Excel and BI tools (Power BI, Tableau)",
      "Analytical mindset and results-oriented",
      "Intermediate-advanced English",
    ],
    postedDate: "2025-02-28",
  },
  {
    id: "tecnico-hidraulica-sandiman",
    title: "Técnico en Hidráulica — Servicio en Terreno",
    titleEn: "Hydraulic Technician — Field Service",
    company: "Sandiman S.A.",
    companyId: "sandiman",
    location: "Antofagasta, Chile",
    type: "full-time",
    typeLabel: "Tiempo completo",
    typeLabelEn: "Full-time",
    description:
      "Mantención, reparación y calibración de equipos hidráulicos de levante en faenas mineras. Trabajo en terreno con sistema de turnos rotativos.",
    descriptionEn:
      "Maintenance, repair, and calibration of hydraulic lifting equipment at mining sites. Field work with rotating shift system.",
    requirements: [
      "Técnico en Mecánica, Hidráulica o Mantención Industrial",
      "3+ años de experiencia en sistemas hidráulicos industriales",
      "Conocimiento de bombas, cilindros y válvulas de alta presión",
      "Licencia de conducir clase B",
      "Residencia en Antofagasta o disponibilidad para reubicación",
    ],
    requirementsEn: [
      "Mechanical, Hydraulic or Industrial Maintenance Technician",
      "3+ years experience in industrial hydraulic systems",
      "Knowledge of high-pressure pumps, cylinders, and valves",
      "Valid driver's license",
      "Antofagasta residence or willingness to relocate",
    ],
    postedDate: "2025-03-05",
  },
];

export const companyColors: Record<string, string> = {
  sande: "blue",
  fijaciones: "red",
  sandiman: "emerald",
  grupo: "gray",
};
