export interface Company {
  id: string;
  name: string;
  tradeName: string;
  description: string;
  longDescription: string;
  founded?: string;
  website: string;
  logo: string;
  image?: string;
  color: string;
  colorLight: string;
  address: string;
  offices?: string[];
  phone: string;
  email: string;
  certifications: string[];
  sectors: string[];
  highlights: { label: string; value: string }[];
  pillars?: { title: string; description: string }[];
}

export const companies: Company[] = [
  {
    id: "sande",
    name: "Sande S.A.",
    tradeName: "Sande",
    description:
      "Comercialización de herramientas, maquinarias y productos de fijación para la industria y construcción. Representa marcas internacionales líderes con cobertura nacional.",
    longDescription:
      "Sande se dedica a la comercialización de herramientas, maquinarias y productos de fijación para la industria y construcción. Representa marcas internacionales líderes y ofrece soluciones técnicas especializadas a través de una red de ventas profesional, con fuerte foco en distribución, logística y stock disponible.",
    website: "https://sande.cl",
    logo: "/logos/sande.svg",
    image: "/images/sande-warehouse.png",
    color: "#1e40af",
    colorLight: "#dbeafe",
    address: "Av. L. Bdo. O'Higgins N° 1771, Santiago, Chile",
    offices: [
      "Santiago Centro",
      "Santiago Logística",
      "Antofagasta",
      "Copiapó",
      "Talca",
      "Concepción",
      "Temuco",
      "Puerto Montt",
    ],
    phone: "+56 2 2476 7000",
    email: "contacto@sande.cl",
    certifications: [],
    sectors: ["Minería", "Construcción", "Manufactura", "Industria Pesada"],
    highlights: [
      { label: "Sucursales", value: "8" },
      { label: "SKUs Activos", value: "5.000+" },
      { label: "Cobertura", value: "Nacional" },
    ],
    pillars: [
      {
        title: "Maquinaria Pesada",
        description:
          "Equipos industriales y de construcción de alto rendimiento, importados de marcas líderes y adaptados a necesidades técnicas locales.",
      },
      {
        title: "Herramientas",
        description:
          "Amplio portafolio de herramientas manuales, eléctricas y neumáticas para faenas de alta exigencia, con foco en durabilidad y precisión.",
      },
      {
        title: "Servicio Técnico",
        description:
          "Soporte postventa, capacitaciones y asesoría especializada en terreno para asegurar el uso correcto y eficiente de sus productos.",
      },
      {
        title: "Cobertura Nacional",
        description:
          "Presencia comercial a lo largo de Chile, red de ejecutivos en terreno y stock permanente que permite entregas rápidas y confiables.",
      },
    ],
  },
  {
    id: "fijaciones",
    name: "Tecbolt S.A.",
    tradeName: "Fijaciones Mamut",
    description:
      "Fabricación y distribución de elementos de fijación como pernos, tuercas, anclajes y soluciones en acero. Más de 1.000 referencias con estándar internacional.",
    longDescription:
      "Tecbolt se especializa en la fabricación y distribución de elementos de fijación como pernos, tuercas, anclajes y soluciones en acero. Atiende principalmente a sectores industriales, mineros y de construcción, destacando por su capacidad logística y calidad de sus productos.",
    founded: "1939",
    website: "https://fijaciones.com",
    logo: "/logos/mamut.svg",
    image: "/images/tecbolt-products.png",
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
      "Estructuras Metálicas",
    ],
    highlights: [
      { label: "Años de Trayectoria", value: "85+" },
      { label: "Referencias", value: "1.000+" },
      { label: "Certificación", value: "ISO 9001" },
    ],
    pillars: [
      {
        title: "Portafolio Técnico",
        description:
          "Más de 1.000 referencias en elementos de fijación, incluyendo pernos estructurales, tornillos especiales, remaches, anclajes y accesorios normados.",
      },
      {
        title: "Estándar Internacional",
        description:
          "Productos con recubrimientos certificados (ruspert, galvanizado) que cumplen con estándares internacionales para estructuras metálicas y hormigón.",
      },
      {
        title: "Fabricación Propia",
        description:
          "Capacidad de fabricación local bajo la reconocida marca MAMUT, con control de calidad ISO 9001 en todo el proceso productivo.",
      },
      {
        title: "Cobertura Comercial",
        description:
          "Distribución a nivel nacional con foco en constructoras, industrias, ferreterías técnicas y proyectos de gran escala.",
      },
    ],
  },
  {
    id: "sandiman",
    name: "Sandiman S.A.",
    tradeName: "Sandiman",
    description:
      "Soluciones tecnológicas que mejoran la productividad industrial: servicios de intervención de tuberías, levante sincronizado, automatización y robótica colaborativa.",
    longDescription:
      "Sandiman S.A. entrega soluciones tecnológicas que mejoran la productividad en procesos industriales. Su oferta incluye por una parte servicios industriales: como intervención de tuberías (Hot Tapping, Pipe Freezing) y levante sincronizado. Y por otra parte nuevas tecnologías: como automatización industrial y robótica colaborativa.",
    website: "https://sandiman.cl",
    logo: "/logos/sandiman.svg",
    image: "/images/sandiman-service.png",
    color: "#047857",
    colorLight: "#d1fae5",
    address: "Manuel Rivas Vicuña N°160, Estación Central, Santiago, Chile",
    offices: ["Santiago", "Antofagasta"],
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
      { label: "Servicios", value: "Hot Tapping" },
      { label: "Sucursales", value: "Stgo & Antof" },
    ],
    pillars: [
      {
        title: "Automatización Industrial",
        description:
          "Soluciones completas con sensores, PLC, pantallas HMI y robótica colaborativa para líneas de producción automatizadas.",
      },
      {
        title: "Servicios Técnicos",
        description:
          "Intervenciones complejas como Hot Tapping y Pipe Freezing, levante sincronizado y retrofit de maquinaria.",
      },
      {
        title: "Equipos y Arriendo",
        description:
          "Arriendo, mantención y operación de equipos hidráulicos, mesas de corte láser y herramientas de precisión para uso industrial.",
      },
      {
        title: "Cobertura Nacional",
        description:
          "Sucursales en Santiago y Antofagasta, atención directa en terreno y soporte a clientes de la macrozona norte y centro.",
      },
    ],
  },
  {
    id: "inmobiliaria",
    name: "Inmobiliaria Sande Ltda.",
    tradeName: "Inmobiliaria Sande",
    description:
      "Brazo patrimonial del grupo, administrando activos inmobiliarios productivos, locales comerciales y terrenos estratégicos.",
    longDescription:
      "La Inmobiliaria Sande opera como el brazo patrimonial del grupo, administrando activos inmobiliarios. Gestiona activos inmobiliarios productivos, locales comerciales y terrenos estratégicos a nivel nacional.",
    website: "",
    logo: "",
    image: "/images/inmobiliaria-building.jpg",
    color: "#6d28d9",
    colorLight: "#ede9fe",
    address: "Santiago, Chile",
    phone: "+56 2 2476 7000",
    email: "contacto@gruposande.cl",
    certifications: [],
    sectors: ["Inmobiliaria", "Gestión de Activos"],
    highlights: [
      { label: "Tipo", value: "Patrimonial" },
      { label: "Activos", value: "Comerciales" },
      { label: "Cobertura", value: "Nacional" },
    ],
  },
];
