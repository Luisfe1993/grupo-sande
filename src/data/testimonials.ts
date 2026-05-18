export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  sector: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Roberto Muñoz",
    role: "Jefe de Mantenimiento",
    company: "Minera Escondida",
    sector: "Minería",
    quote:
      "Llevamos más de 10 años trabajando con Sande y Sandiman. Su capacidad de respuesta y la calidad de sus equipos de levante sincrónico han sido fundamentales para nuestras paradas de planta.",
  },
  {
    id: "t2",
    name: "Carolina Vega",
    role: "Gerente de Operaciones",
    company: "Constructora Echeverría Izquierdo",
    sector: "Construcción",
    quote:
      "Fijaciones Mamut nos provee tornillería de calidad certificada ISO 9001. En proyectos de gran envergadura, no podemos arriesgarnos con proveedores que no cumplan estándares internacionales.",
  },
  {
    id: "t3",
    name: "Andrés Soto",
    role: "Director de Ingeniería",
    company: "CMPC Celulosa",
    sector: "Celulosas",
    quote:
      "El servicio de intervención de tuberías de Sandiman nos ha permitido reducir tiempos de mantención en un 30%. Su equipo técnico es de primer nivel.",
  },
  {
    id: "t4",
    name: "Patricia Herrera",
    role: "Subgerente de Compras",
    company: "CAP Acero",
    sector: "Manufactura",
    quote:
      "Grupo Sande es nuestro proveedor integral. Un solo punto de contacto para herramientas, fijaciones y automatización simplifica enormemente nuestra cadena de suministro.",
  },
];

export const clientLogos = [
  "Minera Escondida",
  "Codelco",
  "CAP Acero",
  "CMPC",
  "Echeverría Izquierdo",
  "Salfacorp",
  "Sigdo Koppers",
  "Empresas CMPC",
];
