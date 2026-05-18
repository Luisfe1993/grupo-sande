export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  companyId: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "levante-sincronico-record",
    title: "Sandiman completa levante sincrónico récord de 1.500 toneladas en Minera Los Pelambres",
    excerpt:
      "Nuestro equipo de ingeniería ejecutó exitosamente el levante de un chancador primario, estableciendo un nuevo récord de capacidad para operaciones en la Región de Coquimbo.",
    date: "2025-03-15",
    category: "Proyectos",
    companyId: "sandiman",
  },
  {
    id: "iso-9001-renovacion",
    title: "Fijaciones Mamut renueva certificación ISO 9001:2015 por quinto período consecutivo",
    excerpt:
      "Tecbolt S.A. reafirma su compromiso con la calidad al renovar exitosamente su certificación ISO 9001, avalando más de 20 años de manufactura bajo estándares internacionales.",
    date: "2025-02-20",
    category: "Certificaciones",
    companyId: "fijaciones",
  },
  {
    id: "nueva-linea-cnc",
    title: "Sande incorpora nueva línea de centros de mecanizado CNC de última generación",
    excerpt:
      "Ampliamos nuestro catálogo con tornos y centros de mecanizado CNC de 5 ejes, ofreciendo la tecnología más avanzada para la manufactura de precisión en Chile.",
    date: "2025-01-10",
    category: "Productos",
    companyId: "sande",
  },
  {
    id: "expo-mineria-2025",
    title: "Grupo Sande presente en Expo Minería Chile 2025",
    excerpt:
      "Participamos con stand propio exhibiendo soluciones de levante sincrónico, herramientas industriales y fijaciones de alta resistencia para el sector minero.",
    date: "2024-11-05",
    category: "Eventos",
    companyId: "grupo",
  },
  {
    id: "nanoburbujas-agricultura",
    title: "Tecnología de nanoburbujas de Sandiman llega al sector agrícola del Valle Central",
    excerpt:
      "Implementamos generadores de nanoburbujas en sistemas de riego, logrando incrementos de hasta 15% en rendimiento de cultivos y ahorro significativo de agua.",
    date: "2024-10-18",
    category: "Innovación",
    companyId: "sandiman",
  },
  {
    id: "antofagasta-expansion",
    title: "Sandiman amplía oficinas y bodega en Antofagasta para estar más cerca de la minería",
    excerpt:
      "Con la expansión de nuestra sucursal en Antofagasta, reforzamos la capacidad de respuesta y soporte técnico para la gran minería del norte de Chile.",
    date: "2024-09-01",
    category: "Empresa",
    companyId: "sandiman",
  },
];
