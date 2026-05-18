export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  company: string;
  companyId: string;
  icon: string;
  features: string[];
  sectors: string[];
}

export const services: Service[] = [
  {
    id: "levante-sincronico",
    name: "Levante Sincrónico de Estructuras",
    description:
      "Sistema de levante sincrónico controlado por PLC con más de 40.000 toneladas de capacidad total.",
    longDescription:
      "Sandiman S.A. cuenta con una variedad de equipos hidráulicos de levante sincrónicos comandados vía PLC. Este sistema controla el desplazamiento de múltiples cilindros en forma independiente, teniendo el control total de la maniobra en el ascenso y descenso de las cargas sostenidas. Todo se visualiza en pantalla y se complementa con una Estación Total Robotizada para monitoreo en tiempo real.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "ArrowUpFromLine",
    features: [
      "Control PLC de múltiples cilindros independientes",
      "Unidades de 6, 8, 12 y 16 salidas",
      "Estación Total Robotizada",
      "Monitoreo en tiempo real",
      "Más de 40.000 toneladas de capacidad",
      "20+ años de experiencia",
    ],
    sectors: [
      "Minería (molinos, chancadores, palas, correas)",
      "Obras Viales (puentes, pasos superiores, pasarelas)",
      "Construcción (edificios, casas, losas, balcones)",
      "Puertos (grúas pantográficas, grúas pórtico)",
      "Celulosas (hornos, estanques)",
    ],
  },
  {
    id: "piping",
    name: "Intervención de Tuberías (Piping)",
    description:
      "Servicios especializados de intervención, mantenimiento y reparación de sistemas de tuberías industriales.",
    longDescription:
      "Ofrecemos servicios integrales de intervención de tuberías para la industria minera, petrolera y de procesos. Nuestro equipo técnico calificado realiza trabajos de alta complejidad con los más altos estándares de seguridad y calidad.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "PipetteIcon",
    features: [
      "Intervención de tuberías de gran diámetro",
      "Mantenimiento preventivo y correctivo",
      "Personal técnico calificado",
      "Altos estándares de seguridad",
    ],
    sectors: ["Minería", "Petróleo", "Industria de Procesos"],
  },
  {
    id: "arriendo-cilindros",
    name: "Arriendo de Equipos Hidráulicos",
    description:
      "Arriendo de cilindros hidráulicos de alto tonelaje y equipos especializados para proyectos industriales.",
    longDescription:
      "Contamos con una gran variedad de cilindros hidráulicos que suman en capacidad total más de 40.000 toneladas. Ofrecemos arriendo de equipos para proyectos puntuales, con asesoría técnica completa y soporte durante toda la operación.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "Container",
    features: [
      "Cilindros de alto tonelaje",
      "Asesoría técnica incluida",
      "Soporte durante la operación",
      "Variedad de capacidades disponibles",
    ],
    sectors: ["Minería", "Construcción", "Puertos", "Obras Viales"],
  },
  {
    id: "nanoburbujas",
    name: "Generadores de Nanoburbujas",
    description:
      "Tecnología de nanoburbujas para tratamiento de agua, procesos industriales y aplicaciones agrícolas.",
    longDescription:
      "Nuestra tecnología de generación de nanoburbujas ofrece soluciones innovadoras para el tratamiento de agua, optimización de procesos industriales y aplicaciones en la industria agrícola. Las nanoburbujas mejoran la eficiencia de los procesos y contribuyen a la sustentabilidad.",
    company: "Sandiman",
    companyId: "sandiman",
    icon: "Waves",
    features: [
      "Tratamiento de agua industrial",
      "Optimización de procesos",
      "Tecnología sustentable",
      "Aplicaciones agrícolas e industriales",
    ],
    sectors: [
      "Tratamiento de Aguas",
      "Minería",
      "Agricultura",
      "Industria de Procesos",
    ],
  },
  {
    id: "asesoria-tecnica",
    name: "Asesoría Técnica en Fijaciones",
    description:
      "Asesoría técnica especializada en selección de fijaciones, tornillería y sistemas de anclaje para proyectos.",
    longDescription:
      "Con más de 85 años de experiencia en fabricación de tornillería y fijaciones, ofrecemos asesoría técnica especializada para la correcta selección de productos según la aplicación: tipos de cabeza, recubrimientos, galvanizado, materiales y normativas aplicables.",
    company: "Fijaciones Mamut",
    companyId: "fijaciones",
    icon: "BookOpen",
    features: [
      "Selección de fijaciones por aplicación",
      "Información técnica de galvanizado y recubrimientos",
      "Asesoría en normativas y marcas",
      "Material de apoyo técnico",
      "85+ años de experiencia",
    ],
    sectors: ["Construcción", "Minería", "Manufactura", "Ferretería"],
  },
  {
    id: "suministro-industrial",
    name: "Suministro Industrial Integral",
    description:
      "Provisión integral de herramientas, maquinaria y equipos para operaciones industriales y mineras.",
    longDescription:
      "Sande S.A. ofrece un servicio de suministro integral que abarca desde herramientas manuales hasta maquinaria CNC, pasando por soldadura, hidráulica, neumática y equipos eléctricos. Atendemos las necesidades de mantenimiento, producción y proyectos de ampliación de nuestros clientes.",
    company: "Sande",
    companyId: "sande",
    icon: "Package",
    features: [
      "Catálogo de 5.000+ SKUs",
      "15+ categorías de productos",
      "Entregas a nivel nacional",
      "Soporte técnico pre y post venta",
    ],
    sectors: [
      "Minería",
      "Construcción",
      "Manufactura",
      "Mantenimiento Industrial",
    ],
  },
];
