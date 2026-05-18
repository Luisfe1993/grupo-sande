export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  company: string;
  companyId: string;
  icon: string;
  products: string[];
  image?: string;
}

export const productCategories: ProductCategory[] = [
  // === SANDE S.A. ===
  {
    id: "bombas",
    name: "Bombas Industriales",
    description:
      "Bombas slurry, de agua, arena, ácido inoxidable, agua salada y más para aplicaciones mineras e industriales.",
    company: "Sande",
    companyId: "sande",
    icon: "Droplets",
    products: [
      "Bomba Slurry (GPN)",
      "Bomba Agua Arena HS",
      "Bomba Agua Ácido Inoxidable",
      "Bomba Negra (C)",
      "Bomba Agua Salada TM",
    ],
  },
  {
    id: "tornillos-sande",
    name: "Tornillería Industrial",
    description:
      "Tornillos para volcanita, madera, autoperforantes y fijaciones especializadas para construcción e industria.",
    company: "Sande",
    companyId: "sande",
    icon: "Wrench",
    products: [
      "Tornillo Volcanita Rigido",
      "Tornillo Madera Turbo",
      "Autoperforante Punta Broca",
      "Autoperforante Hexagonal",
      "Tornillo Volcanita Placa",
    ],
  },
  {
    id: "tecle",
    name: "Tecles y Levante",
    description:
      "Tecles manuales, eléctricos y a batería para levante de cargas en aplicaciones industriales y mineras.",
    company: "Sande",
    companyId: "sande",
    icon: "ArrowUpFromLine",
    products: [
      "Tecle Palanca Cadena",
      "Tecle Manual Cadena",
      "Tecle Batería",
      "Tecle Eléctrico Cadena",
    ],
  },
  {
    id: "hidraulica",
    name: "Hidráulica",
    description:
      "Gatos hidráulicos, bombas, cilindros y equipos hidráulicos de alta capacidad para minería y construcción.",
    company: "Sande",
    companyId: "sande",
    icon: "Gauge",
    products: [
      "Gato Camión Minero",
      "Bomba Hidráulica Eléctrica",
      "Bomba Hidráulica Manual",
      "Cilindro Hidráulico Simple",
      "Cilindro Hidráulico Doble",
    ],
  },
  {
    id: "maquinas",
    name: "Máquinas Herramientas",
    description:
      "Tornos mecánicos, fresadoras, plegadoras, cizallas, punzonadoras y sierras para manufactura industrial.",
    company: "Sande",
    companyId: "sande",
    icon: "Cog",
    products: [
      "Torno Mecánico Universal",
      "Fresadora",
      "Plegadora",
      "Cizalla Punzonadora",
      "Sierra Huincha",
    ],
  },
  {
    id: "maq-cnc",
    name: "Máquinas CNC",
    description:
      "Tornos CNC, centros de mecanizado y centros de torneado de última generación para manufactura de precisión.",
    company: "Sande",
    companyId: "sande",
    icon: "Cpu",
    products: [
      "Torno CNC",
      "Centro Mecanizado",
      "Centro Torneado DN",
      "Centro Mecanizado DN",
    ],
  },
  {
    id: "abrasivos",
    name: "Abrasivos",
    description:
      "Discos de corte, desbaste, traslapados y fibra cerámica para acero, inoxidable y materiales especiales.",
    company: "Sande",
    companyId: "sande",
    icon: "Circle",
    products: [
      "Disco Corte Inox",
      "Disco Corte Acero",
      "Disco Traslapado Acero",
      "Disco Fibra Cerámico",
      "Disco Desbaste Acero",
    ],
  },
  {
    id: "soldadura",
    name: "Soldadura y Equipos",
    description:
      "Electrodos, alambres MIG, soldadoras de arco, MIG y mesa de corte CNC para todos los procesos de soldadura.",
    company: "Sande",
    companyId: "sande",
    icon: "Flame",
    products: [
      "Alambre MIG Sólido",
      "Electrodo E6011",
      "Electrodo E7018",
      "Soldadora Arco Ignis",
      "Soldadora MIG Fortis",
      "Mesa Corte CNC",
    ],
  },
  {
    id: "neumatica",
    name: "Herramientas Neumáticas",
    description:
      "Llaves de impacto, filtros, reguladores y lubricadores neumáticos para taller y líneas de producción.",
    company: "Sande",
    companyId: "sande",
    icon: "Wind",
    products: [
      "Llave Impacto Apriete 1/2\"",
      "Llave Impacto Apriete 3/4\"",
      "Llave Impacto Apriete 1\"",
      "Filtro Regulador Lubricador",
    ],
  },
  {
    id: "electricas",
    name: "Herramientas Eléctricas",
    description:
      "Llaves de impacto a batería, esmeriles angulares, taladros atornilladores y herramientas eléctricas profesionales.",
    company: "Sande",
    companyId: "sande",
    icon: "Zap",
    products: [
      "Llave Impacto Batería",
      "Esmeril Angular",
      "Batería Ion-Litio",
      "Taladro Atornillador",
      "Esmeril Angular Batería",
    ],
  },
  {
    id: "brocas",
    name: "Brocas y Accesorios",
    description:
      "Brocas para metal, concreto, cerámica en todos los diámetros y juegos profesionales.",
    company: "Sande",
    companyId: "sande",
    icon: "Drill",
    products: [
      "Broca Metal Cilíndrica HSS",
      "Broca Concreto SDS-Plus",
      "Juego Brocas Metal HSS",
      "Broca Cerámica Punta Diamante",
    ],
  },

  // === FIJACIONES MAMUT / TECBOLT ===
  {
    id: "fijaciones-metal",
    name: "Fijaciones para Metal",
    description:
      "Tornillos autoperforantes, hexagonales con y sin golilla, de acero inoxidable para uniones metal-metal.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    icon: "Link",
    products: [
      "Autoperforante Lata-Lata Stitch Fina",
      "Autoperforante Hexagonal con Golilla Inoxidable",
      "Autoperforante Hexagonal con Golilla",
      "Autoperforante Hexagonal sin Golilla",
    ],
  },
  {
    id: "fijaciones-tabiqueria",
    name: "Fijaciones para Tabiquería",
    description:
      "Tornillos drywall, conectores Deklick, fijaciones para fachadas y tabiquería en construcción liviana.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    icon: "LayoutGrid",
    products: [
      "Conector Abrazadera Deklick",
      "Tornillo Fachadas Cabeza Plana",
      "Tornillo Fachadas Cilíndrica",
      "Drywall Punta Broca",
      "Autoperforante Alas Cabeza Plana",
    ],
  },
  {
    id: "fijaciones-madera",
    name: "Fijaciones para Madera",
    description:
      "Tornillos para madera con diferentes cabezas, largos y tratamientos para construcción en madera.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    icon: "TreePine",
    products: [
      "Tornillo Madera Cabeza Plana",
      "Tornillo Madera Hexagonal",
      "Tornillo Madera Turbo",
      "Tirafondo Madera",
    ],
  },
  {
    id: "fijaciones-concreto",
    name: "Fijaciones para Concreto",
    description:
      "Anclajes mecánicos y químicos, pernos métricos y fijaciones especializadas para concreto y hormigón.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    icon: "Building",
    products: [
      "Perno Métrico",
      "Anclaje Mecánico",
      "Anclaje Químico",
      "Fulminantes y Clavos",
      "Remaches",
    ],
  },

  // === SANDIMAN ===
  {
    id: "plc",
    name: "Controladores PLC",
    description:
      "Controladores lógicos programables para automatización de procesos industriales y control de maquinaria.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "Cpu",
    products: [
      "PLC Compacto",
      "PLC Modular",
      "Módulos de Expansión",
      "Software de Programación",
    ],
  },
  {
    id: "variadores",
    name: "Variadores de Frecuencia",
    description:
      "Variadores de frecuencia para control de velocidad de motores eléctricos en aplicaciones industriales.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "Activity",
    products: [
      "Variador Monofásico",
      "Variador Trifásico",
      "Variador Alta Potencia",
      "Accesorios y Filtros",
    ],
  },
  {
    id: "sensores",
    name: "Sensores Industriales",
    description:
      "Sensores de proximidad, fotoeléctricos, inductivos, capacitivos y de presión para automatización.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "Radar",
    products: [
      "Sensor de Proximidad",
      "Sensor Fotoeléctrico",
      "Sensor Inductivo",
      "Sensor Capacitivo",
      "Sensor de Presión",
    ],
  },
  {
    id: "hmi",
    name: "Pantallas HMI",
    description:
      "Interfaces hombre-máquina para monitoreo y control de procesos industriales en tiempo real.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "Monitor",
    products: [
      "Pantalla HMI 7\"",
      "Pantalla HMI 10\"",
      "Pantalla HMI 15\"",
      "Software SCADA",
    ],
  },
  {
    id: "seguridad-industrial",
    name: "Seguridad Industrial",
    description:
      "Barreras de seguridad, cortinas de luz y sistemas de protección para máquinas y líneas de producción.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "ShieldCheck",
    products: [
      "Barrera de Seguridad",
      "Cortina de Luz",
      "Relé de Seguridad",
      "Interruptor de Emergencia",
    ],
  },
];
