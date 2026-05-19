export interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
  companyId: string;
  generation?: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "luis-sande",
    name: "Luis A. Sande",
    role: "Gerente General — Sande S.A.",
    company: "Sande",
    companyId: "sande",
    generation: "3ª Generación",
    bio: "Lidera la operación comercial de Sande S.A., con foco en la distribución de herramientas y maquinaria industrial a lo largo de Chile.",
  },
  {
    id: "ricardo-sande",
    name: "Ricardo Sande",
    role: "Gerente General — Tecbolt S.A.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    generation: "3ª Generación",
    bio: "Dirige Tecbolt y la marca Fijaciones Mamut, con experiencia en manufactura metalmecánica y mercados internacionales.",
  },
  {
    id: "alejandro-sande",
    name: "Alejandro Sande",
    role: "Presidente del Directorio",
    company: "Grupo Sande",
    companyId: "grupo",
    generation: "3ª Generación",
    bio: "Presidente del Directorio del grupo, responsable de la visión estratégica y gobernanza del holding familiar.",
  },
  {
    id: "javier-sande",
    name: "Javier Sande",
    role: "Gerente General — Sandiman S.A.",
    company: "Sandiman",
    companyId: "sandiman",
    generation: "3ª Generación",
    bio: "Lidera Sandiman, entregando soluciones de automatización industrial, servicios de levante sincronizado y robótica colaborativa.",
  },
  {
    id: "francisco-sande",
    name: "Francisco Sande",
    role: "Sande S.A.",
    company: "Sande",
    companyId: "sande",
    generation: "4ª Generación",
    bio: "Cuarta generación de la familia Sande, incorporado a la operación de Sande S.A. desde 2022.",
  },
  {
    id: "jose-pedro-sande",
    name: "José Pedro Sande",
    role: "Tecbolt S.A.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    generation: "4ª Generación",
    bio: "Cuarta generación de la familia Sande, incorporado a la operación de Tecbolt desde 2024.",
  },
];
