export interface Company {
  id: string;
  name: string;
  tradeName: string;
  description: string;
  longDescription: string;
  founded?: string;
  website: string;
  logo: string;
  color: string;
  colorLight: string;
  address: string;
  phone: string;
  email: string;
  certifications: string[];
  sectors: string[];
  highlights: { label: string; value: string }[];
}

export const companies: Company[] = [
  {
    id: "sande",
    name: "Sande S.A.",
    tradeName: "Sande",
    description:
      "Proveedor líder de herramientas industriales, maquinaria pesada, equipos de soldadura, hidráulica y herramientas eléctricas para la industria chilena.",
    longDescription:
      "Sande S.A. es un referente en la distribución de herramientas industriales y maquinaria de alta calidad. Nuestra amplia gama de productos incluye bombas industriales, tornillería especializada, tecles, equipos hidráulicos, máquinas CNC, abrasivos, soldadura, herramientas neumáticas y eléctricas, brocas, y suministros de taller. Servimos a los sectores de minería, construcción, manufactura e industria pesada en todo Chile.",
    website: "https://sande.cl",
    logo: "/logos/sande.svg",
    color: "#1e40af",
    colorLight: "#dbeafe",
    address: "Av. L. Bdo. O'Higgins N° 1771, Santiago, Chile",
    phone: "+56 2 2476 7000",
    email: "contacto@sande.cl",
    certifications: [],
    sectors: ["Minería", "Construcción", "Manufactura", "Industria Pesada"],
    highlights: [
      { label: "Categorías de Productos", value: "15+" },
      { label: "SKUs Activos", value: "5.000+" },
      { label: "Años de Experiencia", value: "30+" },
    ],
  },
  {
    id: "fijaciones",
    name: "Tecbolt S.A.",
    tradeName: "Fijaciones Mamut",
    description:
      "Fabricante de tornillería y fijaciones de alta calidad desde 1939. Marca MAMUT. Certificación ISO 9001 con presencia en Chile, Perú y América.",
    longDescription:
      "Fundada en 1939, Tecbolt S.A. tiene una extensa trayectoria en el área metalmecánica. Primero como fabricante de artículos de ferretería, luego en máquinas herramientas y a partir de los años 60 nos hemos especializado en la fabricación de fijaciones y tornillería bajo la reconocida marca MAMUT. Aumentos en la capacidad de producción nos han permitido extender con éxito nuestra presencia en los mercados de países vecinos, Centro y Norteamérica. Basamos nuestro éxito en la calidad de nuestros productos expresada no sólo en términos de características mecánicas y dimensionales, sino también en la entrega oportuna y la constante voluntad de servicio para con nuestros clientes.",
    founded: "1939",
    website: "https://fijaciones.com",
    logo: "/logos/mamut.svg",
    color: "#b91c1c",
    colorLight: "#fee2e2",
    address: "Av. Gladys Marin N° 5760, Estación Central, Chile",
    phone: "+56 2 2476 7000",
    email: "contacto@mamut.cl",
    certifications: ["ISO 9001"],
    sectors: [
      "Construcción",
      "Minería",
      "Ferretería",
      "Manufactura",
      "Exportación",
    ],
    highlights: [
      { label: "Años de Trayectoria", value: "85+" },
      { label: "Certificación", value: "ISO 9001" },
      { label: "Presencia Internacional", value: "América" },
    ],
  },
  {
    id: "sandiman",
    name: "Sandiman S.A.",
    tradeName: "Sandiman",
    description:
      "Tecnologías innovadoras de automatización industrial, servicios de levante sincrónico, intervención de tuberías y soluciones de nanoburbujas.",
    longDescription:
      "Sandiman S.A. es líder en tecnologías innovadoras para la automatización industrial. Ofrecemos productos de última generación como PLCs, variadores de frecuencia, sensores, pantallas HMI y barreras de seguridad industrial. Además, brindamos servicios especializados de levante sincrónico de estructuras con más de 40.000 toneladas de capacidad, intervención de tuberías (piping), arriendo de cilindros hidráulicos y generadores de nanoburbujas. Con más de 20 años de experiencia, servimos a los sectores de minería, obras viales, construcción, puertos y celulosas.",
    website: "https://sandiman.cl",
    logo: "/logos/sandiman.svg",
    color: "#047857",
    colorLight: "#d1fae5",
    address: "Manuel Rivas Vicuña N°160, Estación Central, Santiago, Chile",
    phone: "+56 2 2476 7000",
    email: "contacto@sandiman.cl",
    certifications: [],
    sectors: [
      "Minería",
      "Obras Viales",
      "Construcción",
      "Puertos",
      "Celulosas",
    ],
    highlights: [
      { label: "Capacidad de Levante", value: "40.000+ ton" },
      { label: "Años de Experiencia", value: "20+" },
      { label: "Sucursales", value: "Santiago & Antofagasta" },
    ],
  },
];
