export interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
  companyId: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "gf-sande",
    name: "Gerencia Familiar Sande",
    role: "Directorio — Grupo Sande",
    company: "Grupo Sande",
    companyId: "grupo",
    bio: "Tres generaciones de la familia Sande lideran el grupo empresarial, combinando visión estratégica con conocimiento profundo de la industria chilena.",
  },
  {
    id: "gg-sande",
    name: "Gerencia General",
    role: "Gerente General — Sande S.A.",
    company: "Sande",
    companyId: "sande",
    bio: "Más de 20 años liderando la operación comercial de herramientas industriales, con foco en expansión de productos y servicio al cliente.",
  },
  {
    id: "gg-tecbolt",
    name: "Gerencia General",
    role: "Gerente General — Tecbolt S.A.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    bio: "Especialista en manufactura metalmecánica con experiencia en mercados internacionales y certificación de calidad ISO 9001.",
  },
  {
    id: "gg-sandiman",
    name: "Gerencia General",
    role: "Gerente General — Sandiman S.A.",
    company: "Sandiman",
    companyId: "sandiman",
    bio: "Ingeniero con amplia experiencia en automatización industrial y servicios de levante sincrónico para minería y obras civiles.",
  },
  {
    id: "dt-sandiman",
    name: "Dirección Técnica",
    role: "Director Técnico — Sandiman S.A.",
    company: "Sandiman",
    companyId: "sandiman",
    bio: "Lidera los equipos de ingeniería en proyectos de levante sincrónico, piping e implementación de sistemas de automatización.",
  },
  {
    id: "gc-sande",
    name: "Gerencia Comercial",
    role: "Gerente Comercial — Sande S.A.",
    company: "Sande",
    companyId: "sande",
    bio: "Responsable de la relación con clientes de gran minería, construcción e industria. Gestión del catálogo de más de 5.000 SKUs.",
  },
];
