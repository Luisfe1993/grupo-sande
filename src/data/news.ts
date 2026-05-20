export interface NewsArticle {
  id: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string;
  contentEn?: string;
  date: string;
  category: string;
  categoryEn?: string;
  companyId: string;
  image: string;
  readTime: number;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "levante-sincronico-record",
    title:
      "Sandiman completa levante sincrónico récord de 1.500 toneladas en Minera Los Pelambres",
    titleEn:
      "Sandiman completes record 1,500-ton synchronized lift at Minera Los Pelambres",
    excerpt:
      "Nuestro equipo de ingeniería ejecutó exitosamente el levante de un chancador primario, estableciendo un nuevo récord de capacidad para operaciones en la Región de Coquimbo.",
    excerptEn:
      "Our engineering team successfully executed the lift of a primary crusher, setting a new capacity record for operations in the Coquimbo Region.",
    content: `<p>En un hito significativo para la industria minera chilena, Sandiman S.A. completó exitosamente el levante sincrónico de un chancador primario de 1.500 toneladas en las instalaciones de Minera Los Pelambres, ubicada en la Región de Coquimbo.</p>

<h3>El Desafío</h3>
<p>El proyecto requería retirar y reposicionar el chancador primario de la planta concentradora durante una ventana de mantención programada de solo 72 horas. La pieza, con dimensiones de 12 x 8 x 15 metros, debía ser levantada con precisión milimétrica para evitar daños a la infraestructura circundante.</p>

<h3>La Solución</h3>
<p>El equipo de ingeniería de Sandiman desplegó un sistema de levante sincrónico con 24 cilindros hidráulicos controlados por PLC, permitiendo coordinar la fuerza y desplazamiento en tiempo real. Se utilizaron sensores de posición con precisión de ±0.5 mm y un sistema redundante de seguridad.</p>

<h3>Resultados</h3>
<p>La operación se completó en 48 horas — 24 horas antes del plazo — sin incidentes de seguridad. Este levante establece un nuevo récord para Sandiman y posiciona a la empresa como referente en operaciones de levante pesado en la minería chilena.</p>

<blockquote>"La precisión y profesionalismo del equipo de Sandiman fue excepcional. Completaron un trabajo de enorme complejidad antes de plazo y con cero incidentes." — Roberto Muñoz, Jefe de Mantención, Minera Los Pelambres</blockquote>`,
    contentEn: `<p>In a significant milestone for the Chilean mining industry, Sandiman S.A. successfully completed the synchronized lift of a 1,500-ton primary crusher at Minera Los Pelambres facilities in the Coquimbo Region.</p>

<h3>The Challenge</h3>
<p>The project required removing and repositioning the primary crusher from the concentrator plant during a scheduled maintenance window of only 72 hours. The piece, measuring 12 x 8 x 15 meters, had to be lifted with millimetric precision to avoid damage to surrounding infrastructure.</p>

<h3>The Solution</h3>
<p>Sandiman's engineering team deployed a synchronized lifting system with 24 PLC-controlled hydraulic cylinders, allowing real-time coordination of force and displacement. Position sensors with ±0.5 mm precision and a redundant safety system were used.</p>

<h3>Results</h3>
<p>The operation was completed in 48 hours — 24 hours ahead of schedule — with zero safety incidents. This lift sets a new record for Sandiman and positions the company as a benchmark in heavy lifting operations in Chilean mining.</p>

<blockquote>"The precision and professionalism of the Sandiman team was exceptional. They completed an enormously complex job ahead of schedule with zero incidents." — Roberto Muñoz, Maintenance Chief, Minera Los Pelambres</blockquote>`,
    date: "2025-03-15",
    category: "Proyectos",
    categoryEn: "Projects",
    companyId: "sandiman",
    image: "/images/news/levante-sincronico.svg",
    readTime: 4,
  },
  {
    id: "iso-9001-renovacion",
    title:
      "Fijaciones Mamut renueva certificación ISO 9001:2015 por quinto período consecutivo",
    titleEn:
      "Fijaciones Mamut renews ISO 9001:2015 certification for fifth consecutive period",
    excerpt:
      "Tecbolt S.A. reafirma su compromiso con la calidad al renovar exitosamente su certificación ISO 9001, avalando más de 20 años de manufactura bajo estándares internacionales.",
    excerptEn:
      "Tecbolt S.A. reaffirms its quality commitment by successfully renewing its ISO 9001 certification, backing over 20 years of manufacturing under international standards.",
    content: `<p>Tecbolt S.A., fabricante de las reconocidas Fijaciones Mamut, ha renovado por quinto período consecutivo su certificación ISO 9001:2015, reafirmando su posición como líder en manufactura de calidad en el sector de fijaciones industriales en Chile.</p>

<h3>Un Compromiso de Dos Décadas</h3>
<p>Desde 2005, Tecbolt ha mantenido ininterrumpidamente su certificación ISO 9001, siendo una de las primeras empresas del rubro en Chile en obtenerla. Cada ciclo de renovación ha representado una oportunidad para mejorar procesos, actualizar protocolos y elevar los estándares de producción.</p>

<h3>Alcance de la Certificación</h3>
<p>La certificación cubre todo el ciclo productivo: desde la recepción de materias primas (acero SAE 1020, 1045 y 4140), pasando por los procesos de forjado en caliente, mecanizado CNC, tratamiento térmico y galvanizado, hasta el despacho final al cliente.</p>

<h3>Impacto en el Mercado</h3>
<p>Con más de 5.000 SKUs activos y una capacidad de producción de 200 toneladas mensuales, Fijaciones Mamut es la marca de referencia en fijaciones de alta resistencia en Chile, sirviendo a los sectores de minería, construcción y energía.</p>

<blockquote>"La certificación ISO no es un trámite para nosotros — es el fundamento de nuestra promesa al cliente. Cada fijación Mamut lleva décadas de cultura de calidad." — Ricardo Sande, Gerente General, Tecbolt S.A.</blockquote>`,
    contentEn: `<p>Tecbolt S.A., manufacturer of the renowned Fijaciones Mamut brand, has renewed its ISO 9001:2015 certification for the fifth consecutive period, reaffirming its position as a quality manufacturing leader in Chile's industrial fastener sector.</p>

<h3>A Two-Decade Commitment</h3>
<p>Since 2005, Tecbolt has continuously maintained its ISO 9001 certification, being one of the first companies in the sector in Chile to obtain it. Each renewal cycle has represented an opportunity to improve processes, update protocols, and raise production standards.</p>

<h3>Certification Scope</h3>
<p>The certification covers the entire production cycle: from receiving raw materials (SAE 1020, 1045, and 4140 steel), through hot forging, CNC machining, heat treatment, and galvanizing, to final dispatch to the client.</p>

<h3>Market Impact</h3>
<p>With over 5,000 active SKUs and a production capacity of 200 tons per month, Fijaciones Mamut is the benchmark brand for high-strength fasteners in Chile, serving the mining, construction, and energy sectors.</p>

<blockquote>"ISO certification is not a formality for us — it's the foundation of our promise to the customer. Every Mamut fastener carries decades of quality culture." — Ricardo Sande, General Manager, Tecbolt S.A.</blockquote>`,
    date: "2025-02-20",
    category: "Certificaciones",
    categoryEn: "Certifications",
    companyId: "fijaciones",
    image: "/images/news/iso-certificacion.svg",
    readTime: 3,
  },
  {
    id: "nueva-linea-cnc",
    title:
      "Sande incorpora nueva línea de centros de mecanizado CNC de última generación",
    titleEn:
      "Sande adds new line of state-of-the-art CNC machining centers",
    excerpt:
      "Ampliamos nuestro catálogo con tornos y centros de mecanizado CNC de 5 ejes, ofreciendo la tecnología más avanzada para la manufactura de precisión en Chile.",
    excerptEn:
      "We expand our catalog with 5-axis CNC lathes and machining centers, offering the most advanced technology for precision manufacturing in Chile.",
    content: `<p>Sande S.A. anuncia la incorporación a su catálogo de una completa línea de centros de mecanizado CNC de 5 ejes, consolidando su posición como el principal distribuidor de maquinaria industrial en Chile.</p>

<h3>Tecnología de Punta</h3>
<p>La nueva línea incluye centros de mecanizado vertical y horizontal con control numérico de 5 ejes simultáneos, tornos CNC de alta velocidad y centros de torneado-fresado combinados. Estas máquinas permiten mecanizar piezas complejas en una sola sujeción, reduciendo tiempos de producción hasta en un 60%.</p>

<h3>Aplicaciones Industriales</h3>
<p>Los equipos están orientados a fabricantes de piezas para minería, aeronáutica, petróleo y gas, y sector automotriz. Con precisión de posicionamiento de ±0.002 mm y velocidades de husillo de hasta 15.000 RPM, representan el estado del arte en manufactura.</p>

<h3>Soporte Integral</h3>
<p>Sande ofrece un paquete completo que incluye instalación, capacitación de operadores, puesta en marcha y servicio técnico post-venta con repuestos originales. La inversión se complementa con opciones de financiamiento a través de la red comercial de Sande.</p>

<blockquote>"No solo vendemos máquinas — entregamos soluciones de manufactura completas. Desde la selección del equipo hasta la capacitación del operador." — Luis A. Sande, Gerente General, Sande S.A.</blockquote>`,
    contentEn: `<p>Sande S.A. announces the addition to its catalog of a complete line of 5-axis CNC machining centers, consolidating its position as Chile's leading industrial machinery distributor.</p>

<h3>Cutting-Edge Technology</h3>
<p>The new line includes vertical and horizontal machining centers with 5-axis simultaneous numerical control, high-speed CNC lathes, and combined turning-milling centers. These machines enable complex part machining in a single setup, reducing production times by up to 60%.</p>

<h3>Industrial Applications</h3>
<p>The equipment targets manufacturers of parts for mining, aeronautics, oil and gas, and the automotive sector. With positioning precision of ±0.002 mm and spindle speeds up to 15,000 RPM, they represent the state of the art in manufacturing.</p>

<h3>Comprehensive Support</h3>
<p>Sande offers a complete package including installation, operator training, commissioning, and after-sales technical service with original spare parts. The investment is complemented by financing options through Sande's commercial network.</p>

<blockquote>"We don't just sell machines — we deliver complete manufacturing solutions. From equipment selection to operator training." — Luis A. Sande, General Manager, Sande S.A.</blockquote>`,
    date: "2025-01-10",
    category: "Productos",
    categoryEn: "Products",
    companyId: "sande",
    image: "/images/news/cnc-mecanizado.svg",
    readTime: 3,
  },
  {
    id: "expo-mineria-2025",
    title: "Grupo Sande presente en Expo Minería Chile 2025",
    titleEn: "Grupo Sande present at Chile Mining Expo 2025",
    excerpt:
      "Participamos con stand propio exhibiendo soluciones de levante sincrónico, herramientas industriales y fijaciones de alta resistencia para el sector minero.",
    excerptEn:
      "We participated with our own booth showcasing synchronized lifting solutions, industrial tools, and high-strength fasteners for the mining sector.",
    content: `<p>Grupo Sande participó con un stand de 120 m² en la Expo Minería Chile 2025, celebrada en Espacio Riesco, Santiago. El evento reunió a más de 800 expositores y 45.000 visitantes profesionales del sector minero.</p>

<h3>Exhibición Integrada</h3>
<p>Por primera vez, las tres empresas del grupo — Sande, Tecbolt y Sandiman — exhibieron conjuntamente sus soluciones, demostrando la propuesta de valor integrada del grupo. Los visitantes pudieron conocer desde herramientas manuales hasta sistemas completos de levante sincrónico.</p>

<h3>Destacados del Stand</h3>
<ul>
<li>Demostración en vivo de sistema de control PLC para levante sincrónico (Sandiman)</li>
<li>Muestrario de la línea completa de Fijaciones Mamut con pruebas de torque en vivo (Tecbolt)</li>
<li>Exhibición de la nueva línea CNC de 5 ejes (Sande)</li>
<li>Zona de consultas técnicas con ingenieros especializados</li>
</ul>

<h3>Resultados Comerciales</h3>
<p>El stand generó más de 300 contactos comerciales calificados y se cerraron acuerdos preliminares con tres nuevas faenas mineras para suministro de fijaciones y servicios de levante. La participación reforzó el posicionamiento del grupo como proveedor integral para la minería.</p>`,
    contentEn: `<p>Grupo Sande participated with a 120 m² booth at Chile Mining Expo 2025, held at Espacio Riesco, Santiago. The event brought together over 800 exhibitors and 45,000 professional visitors from the mining sector.</p>

<h3>Integrated Exhibition</h3>
<p>For the first time, the group's three companies — Sande, Tecbolt, and Sandiman — exhibited their solutions together, demonstrating the group's integrated value proposition. Visitors could explore everything from hand tools to complete synchronized lifting systems.</p>

<h3>Booth Highlights</h3>
<ul>
<li>Live demonstration of PLC control system for synchronized lifting (Sandiman)</li>
<li>Complete Fijaciones Mamut product line with live torque testing (Tecbolt)</li>
<li>Exhibition of the new 5-axis CNC line (Sande)</li>
<li>Technical consultation area with specialized engineers</li>
</ul>

<h3>Commercial Results</h3>
<p>The booth generated over 300 qualified commercial contacts and preliminary agreements were closed with three new mining operations for fastener supply and lifting services. The participation reinforced the group's positioning as a comprehensive supplier for mining.</p>`,
    date: "2024-11-05",
    category: "Eventos",
    categoryEn: "Events",
    companyId: "grupo",
    image: "/images/news/expo-mineria.svg",
    readTime: 3,
  },
  {
    id: "nanoburbujas-agricultura",
    title:
      "Tecnología de nanoburbujas de Sandiman llega al sector agrícola del Valle Central",
    titleEn:
      "Sandiman's nanobubble technology reaches the Central Valley agricultural sector",
    excerpt:
      "Implementamos generadores de nanoburbujas en sistemas de riego, logrando incrementos de hasta 15% en rendimiento de cultivos y ahorro significativo de agua.",
    excerptEn:
      "We implemented nanobubble generators in irrigation systems, achieving up to 15% increases in crop yield and significant water savings.",
    content: `<p>Sandiman S.A. ha completado la implementación de generadores de nanoburbujas en tres campos agrícolas del Valle Central de Chile, marcando la diversificación de esta tecnología desde el sector minero hacia la agricultura.</p>

<h3>La Tecnología</h3>
<p>Los generadores de nanoburbujas producen burbujas de oxígeno de entre 70 y 200 nanómetros de diámetro en el agua de riego. A diferencia de las burbujas convencionales, las nanoburbujas permanecen suspendidas en el agua durante semanas, oxigenando continuamente la zona radicular de las plantas.</p>

<h3>Resultados en Campo</h3>
<p>Tras 6 meses de operación en cultivos de uva de mesa, paltos y cerezos, los resultados han sido consistentes:</p>
<ul>
<li>Incremento promedio de 15% en rendimiento por hectárea</li>
<li>Reducción del 20% en consumo de agua de riego</li>
<li>Disminución significativa en uso de fertilizantes y pesticidas</li>
<li>Mejora en la calidad de fruta exportable</li>
</ul>

<h3>Proyección</h3>
<p>Ante estos resultados, Sandiman proyecta expandir la instalación a 15 campos adicionales en las regiones de O'Higgins y Maule durante 2025, con un enfoque particular en viñedos y frutales de exportación.</p>`,
    contentEn: `<p>Sandiman S.A. has completed the implementation of nanobubble generators in three agricultural fields in Chile's Central Valley, marking the diversification of this technology from the mining sector to agriculture.</p>

<h3>The Technology</h3>
<p>Nanobubble generators produce oxygen bubbles between 70 and 200 nanometers in diameter in irrigation water. Unlike conventional bubbles, nanobubbles remain suspended in water for weeks, continuously oxygenating the root zone of plants.</p>

<h3>Field Results</h3>
<p>After 6 months of operation in table grape, avocado, and cherry crops, results have been consistent:</p>
<ul>
<li>Average 15% increase in yield per hectare</li>
<li>20% reduction in irrigation water consumption</li>
<li>Significant decrease in fertilizer and pesticide use</li>
<li>Improvement in exportable fruit quality</li>
</ul>

<h3>Outlook</h3>
<p>Given these results, Sandiman projects expanding installations to 15 additional fields in the O'Higgins and Maule regions during 2025, with a particular focus on vineyards and export fruit crops.</p>`,
    date: "2024-10-18",
    category: "Innovación",
    categoryEn: "Innovation",
    companyId: "sandiman",
    image: "/images/news/nanoburbujas-agro.svg",
    readTime: 3,
  },
  {
    id: "antofagasta-expansion",
    title:
      "Sandiman amplía oficinas y bodega en Antofagasta para estar más cerca de la minería",
    titleEn:
      "Sandiman expands offices and warehouse in Antofagasta to be closer to mining",
    excerpt:
      "Con la expansión de nuestra sucursal en Antofagasta, reforzamos la capacidad de respuesta y soporte técnico para la gran minería del norte de Chile.",
    excerptEn:
      "With the expansion of our branch in Antofagasta, we reinforce response capacity and technical support for large-scale mining in northern Chile.",
    content: `<p>Sandiman S.A. ha inaugurado la ampliación de sus instalaciones en Antofagasta, triplicando el espacio de bodega y duplicando las oficinas técnicas, en una inversión que refuerza el compromiso del grupo con la gran minería del norte de Chile.</p>

<h3>Nuevas Instalaciones</h3>
<p>La expansión incluye 1.200 m² adicionales de bodega techada, un taller de mantención y calibración de equipos hidráulicos, y oficinas para un equipo ampliado de 12 ingenieros y técnicos. Las instalaciones están ubicadas estratégicamente en el sector industrial La Negra, a minutos de la ruta hacia las principales faenas mineras.</p>

<h3>Capacidades Ampliadas</h3>
<p>La nueva bodega permite mantener stock local de cilindros hidráulicos, bombas, mangueras y accesorios, reduciendo los tiempos de respuesta de 5 días a 24 horas para componentes críticos. El taller permite realizar mantenciones preventivas y reparaciones menores sin necesidad de enviar equipos a Santiago.</p>

<h3>Impacto Regional</h3>
<p>La expansión crea 8 nuevos puestos de trabajo directos en Antofagasta y refuerza la presencia del Grupo Sande en la zona con mayor concentración de inversión minera del país.</p>

<blockquote>"Estar cerca de nuestros clientes no es solo tener una oficina — es tener stock, talleres y personal calificado listo para responder cuando nos necesitan." — Javier Sande, Gerente General, Sandiman S.A.</blockquote>`,
    contentEn: `<p>Sandiman S.A. has inaugurated the expansion of its facilities in Antofagasta, tripling warehouse space and doubling technical offices, in an investment that reinforces the group's commitment to large-scale mining in northern Chile.</p>

<h3>New Facilities</h3>
<p>The expansion includes 1,200 m² of additional covered warehouse, a maintenance and calibration workshop for hydraulic equipment, and offices for an expanded team of 12 engineers and technicians. The facilities are strategically located in the La Negra industrial area, minutes from the route to major mining operations.</p>

<h3>Expanded Capabilities</h3>
<p>The new warehouse allows maintaining local stock of hydraulic cylinders, pumps, hoses, and accessories, reducing response times from 5 days to 24 hours for critical components. The workshop enables preventive maintenance and minor repairs without the need to send equipment to Santiago.</p>

<h3>Regional Impact</h3>
<p>The expansion creates 8 new direct jobs in Antofagasta and reinforces Grupo Sande's presence in the area with the highest concentration of mining investment in the country.</p>

<blockquote>"Being close to our clients isn't just having an office — it's having stock, workshops, and qualified personnel ready to respond when they need us." — Javier Sande, General Manager, Sandiman S.A.</blockquote>`,
    date: "2024-09-01",
    category: "Empresa",
    categoryEn: "Company",
    companyId: "sandiman",
    image: "/images/news/antofagasta-expansion.svg",
    readTime: 3,
  },
];

export function getArticle(id: string) {
  return newsArticles.find((a) => a.id === id);
}
