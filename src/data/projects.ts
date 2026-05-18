export interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  companyId: string;
  sector: string;
  location: string;
  year: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "levante-molino-sag",
    title: "Levante de Molino SAG — 1.200 toneladas",
    description:
      "Levante sincrónico de molino SAG de 1.200 toneladas para reemplazo de revestimientos en faena minera del norte de Chile. Operación ejecutada en 48 horas con sistema PLC de 16 salidas y monitoreo con Estación Total Robotizada.",
    company: "Sandiman",
    companyId: "sandiman",
    sector: "Minería",
    location: "Región de Antofagasta",
    year: "2024",
    highlights: [
      "1.200 toneladas levantadas",
      "48 horas de operación",
      "16 cilindros sincronizados",
      "Cero incidentes",
    ],
  },
  {
    id: "puente-biobio",
    title: "Levante de Puente sobre Río Biobío",
    description:
      "Elevación sincrónica de estructura de puente de 320 metros para reemplazo de apoyos elastoméricos. Trabajo coordinado con el MOP, ejecutado en horario nocturno para minimizar impacto en tránsito.",
    company: "Sandiman",
    companyId: "sandiman",
    sector: "Obras Viales",
    location: "Región del Biobío",
    year: "2023",
    highlights: [
      "320 metros de estructura",
      "Trabajo nocturno",
      "Coordinación con MOP",
      "Sin corte de tránsito",
    ],
  },
  {
    id: "suministro-codelco",
    title: "Suministro Integral — Contrato Marco Minería",
    description:
      "Contrato de suministro de herramientas industriales, equipos de soldadura y maquinaria CNC para operaciones de mantención de gran minería. Más de 2.000 SKUs entregados en plazo durante 3 años de contrato.",
    company: "Sande",
    companyId: "sande",
    sector: "Minería",
    location: "Región de Atacama",
    year: "2022–2025",
    highlights: [
      "2.000+ SKUs entregados",
      "3 años de contrato",
      "99.5% cumplimiento de plazo",
      "Soporte técnico en faena",
    ],
  },
  {
    id: "fijaciones-edificio",
    title: "Fijaciones Estructurales — Torre de 25 Pisos",
    description:
      "Provisión de tornillería estructural grado 8.8 y 10.9, pernos de anclaje y fijaciones especiales para construcción de torre de oficinas en Santiago. Certificación de calidad en cada lote entregado.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    sector: "Construcción",
    location: "Santiago, RM",
    year: "2024",
    highlights: [
      "25 pisos de estructura",
      "Grado 8.8 y 10.9",
      "Certificación por lote",
      "Entrega just-in-time",
    ],
  },
  {
    id: "nanoburbujas-riego",
    title: "Sistema de Nanoburbujas para Riego Agrícola",
    description:
      "Implementación de generadores de nanoburbujas en sistema de riego de viñedos en el Valle de Casablanca, mejorando la oxigenación del agua y aumentando el rendimiento de los cultivos.",
    company: "Sandiman",
    companyId: "sandiman",
    sector: "Agricultura",
    location: "Región de Valparaíso",
    year: "2024",
    highlights: [
      "200 hectáreas cubiertas",
      "+15% rendimiento",
      "Ahorro de agua 20%",
      "Tecnología sustentable",
    ],
  },
  {
    id: "grua-puerto",
    title: "Levante de Grúa Pórtico — Puerto de San Antonio",
    description:
      "Elevación sincrónica de grúa pórtico de 800 toneladas para mantenimiento de rieles. Operación en zona portuaria con estrictos protocolos de seguridad marítima.",
    company: "Sandiman",
    companyId: "sandiman",
    sector: "Puertos",
    location: "Región de Valparaíso",
    year: "2023",
    highlights: [
      "800 toneladas",
      "Zona portuaria activa",
      "Protocolos marítimos",
      "Cero incidentes",
    ],
  },
];
