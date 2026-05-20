export interface BlogPost {
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
  author: string;
  authorRole: string;
  authorRoleEn?: string;
  readTime: number;
  tags: string[];
  tagsEn?: string[];
  sector: string; // "mineria" | "construccion" | "general" | "manufactura"
}

export const blogPosts: BlogPost[] = [
  {
    id: "como-elegir-fijaciones-mineria",
    title: "Cómo Elegir Fijaciones de Alta Resistencia para Minería",
    titleEn: "How to Choose High-Strength Fasteners for Mining",
    excerpt:
      "Guía técnica para seleccionar los tornillos, pernos y anclajes correctos según las condiciones extremas de la minería a gran escala.",
    excerptEn:
      "Technical guide for selecting the right bolts, screws and anchors for extreme conditions in large-scale mining.",
    content: `<p>La minería a gran escala somete cada componente a condiciones extremas: vibraciones constantes, cargas cíclicas, ambientes corrosivos y temperaturas variables. Elegir la fijación incorrecta puede significar paradas no programadas, costos de mantención elevados o, en el peor de los casos, accidentes graves.</p>

<h3>1. Entienda las Cargas</h3>
<p>Antes de seleccionar cualquier fijación, clasifique el tipo de carga:</p>
<ul>
<li><strong>Carga estática:</strong> peso permanente de estructuras, equipos montados. Requiere tornillos de grado 8.8 o superior.</li>
<li><strong>Carga dinámica:</strong> vibraciones de chancadores, molinos, correas. Necesita sistemas anti-afloje (tuercas autoblocantes, arandelas Nord-Lock).</li>
<li><strong>Carga de impacto:</strong> explosiones de tronadura, caída de material. Exige fijaciones con alta tenacidad (grado 10.9 o 12.9).</li>
</ul>

<h3>2. El Factor Corrosión</h3>
<p>En minería, el ambiente corrosivo es la norma. La selección del recubrimiento es tan importante como la del acero base:</p>
<ul>
<li><strong>Galvanizado en caliente:</strong> protección de 50-80 μm, ideal para estructuras expuestas. Vida útil de 15-25 años en ambiente minero moderado.</li>
<li><strong>Zinc-Níquel:</strong> resistencia superior a la corrosión (1.000+ horas en cámara salina). Recomendado para zonas costeras como Antofagasta.</li>
<li><strong>Acero Inoxidable 316L:</strong> para ambientes ácidos o contacto con agua de proceso.</li>
</ul>

<h3>3. Normas que Debe Exigir</h3>
<p>Toda fijación crítica en minería debe cumplir:</p>
<ul>
<li>ASTM A325 / A490 para conexiones estructurales</li>
<li>DIN 6914 / ISO 7411 para uniones de alta resistencia</li>
<li>Trazabilidad completa: número de colada, certificado de calidad 3.1</li>
</ul>

<h3>4. La Regla del Par de Apriete</h3>
<p>El 80% de las fallas en fijaciones mineras se deben a un torque incorrecto. Use siempre tablas de torque calibradas según el diámetro, grado y lubricación del perno. Las Fijaciones Mamut incluyen tablas de torque específicas en cada embalaje.</p>

<h3>Conclusión</h3>
<p>La fijación correcta no es la más cara — es la que se diseñó para las condiciones específicas de su operación. En Tecbolt fabricamos bajo estándares ISO 9001 con trazabilidad completa, y nuestro equipo técnico puede asesorarle en la selección exacta para su proyecto.</p>`,
    contentEn: `<p>Large-scale mining subjects every component to extreme conditions: constant vibrations, cyclic loads, corrosive environments, and variable temperatures. Choosing the wrong fastener can mean unplanned shutdowns, elevated maintenance costs, or, in the worst case, serious accidents.</p>

<h3>1. Understand the Loads</h3>
<p>Before selecting any fastener, classify the load type:</p>
<ul>
<li><strong>Static load:</strong> permanent weight of structures, mounted equipment. Requires grade 8.8 bolts or higher.</li>
<li><strong>Dynamic load:</strong> vibrations from crushers, mills, conveyors. Needs anti-loosening systems (self-locking nuts, Nord-Lock washers).</li>
<li><strong>Impact load:</strong> blasting explosions, material falls. Demands high toughness fasteners (grade 10.9 or 12.9).</li>
</ul>

<h3>2. The Corrosion Factor</h3>
<p>In mining, corrosive environments are the norm. Coating selection is as important as base steel:</p>
<ul>
<li><strong>Hot-dip galvanizing:</strong> 50-80 μm protection, ideal for exposed structures. 15-25 year lifespan in moderate mining environments.</li>
<li><strong>Zinc-Nickel:</strong> superior corrosion resistance (1,000+ hours in salt spray). Recommended for coastal zones like Antofagasta.</li>
<li><strong>316L Stainless Steel:</strong> for acidic environments or process water contact.</li>
</ul>

<h3>3. Standards You Should Demand</h3>
<p>Every critical mining fastener must comply with:</p>
<ul>
<li>ASTM A325 / A490 for structural connections</li>
<li>DIN 6914 / ISO 7411 for high-strength joints</li>
<li>Full traceability: heat number, 3.1 quality certificate</li>
</ul>

<h3>4. The Torque Rule</h3>
<p>80% of mining fastener failures are due to incorrect torque. Always use calibrated torque tables based on bolt diameter, grade, and lubrication. Mamut Fasteners include specific torque tables in every package.</p>

<h3>Conclusion</h3>
<p>The right fastener isn't the most expensive — it's the one designed for your operation's specific conditions. At Tecbolt, we manufacture under ISO 9001 standards with full traceability, and our technical team can advise you on the exact selection for your project.</p>`,
    date: "2026-05-15",
    category: "Guía Técnica",
    categoryEn: "Technical Guide",
    author: "Equipo Técnico Tecbolt",
    authorRole: "Ingeniería de Aplicaciones",
    authorRoleEn: "Applications Engineering",
    readTime: 6,
    tags: ["fijaciones", "minería", "tornillos", "corrosión", "normas"],
    tagsEn: ["fasteners", "mining", "bolts", "corrosion", "standards"],
    sector: "mineria",
  },
  {
    id: "guia-levante-sincronico-industrial",
    title: "Guía Completa de Levante Sincrónico: Cómo Funciona y Cuándo Usarlo",
    titleEn: "Complete Guide to Synchronized Lifting: How It Works and When to Use It",
    excerpt:
      "Todo lo que necesita saber sobre el levante sincrónico controlado por PLC: tecnología, aplicaciones y ventajas frente a métodos convencionales.",
    excerptEn:
      "Everything you need to know about PLC-controlled synchronized lifting: technology, applications, and advantages over conventional methods.",
    content: `<p>El levante sincrónico es una de las tecnologías más avanzadas para el manejo de cargas pesadas en entornos industriales. A diferencia de los métodos convencionales con grúas, este sistema permite controlar múltiples puntos de apoyo de forma simultánea con precisión milimétrica.</p>

<h3>¿Qué es el Levante Sincrónico?</h3>
<p>Es un sistema hidráulico en el que múltiples cilindros son controlados de forma independiente por un PLC (Controlador Lógico Programable). El software coordina la fuerza y el desplazamiento de cada punto de levante en tiempo real, garantizando que la carga se mueva de manera uniforme sin concentrar esfuerzos.</p>

<h3>Componentes Clave del Sistema</h3>
<ul>
<li><strong>Cilindros hidráulicos:</strong> capacidades desde 50 hasta 1.000 toneladas por punto. Doble efecto con retorno automático.</li>
<li><strong>Central hidráulica:</strong> unidades de 6, 8, 12 y 16 salidas. Presión de trabajo hasta 700 bar.</li>
<li><strong>PLC de control:</strong> monitoreo en pantalla de desplazamiento, presión y velocidad de cada cilindro.</li>
<li><strong>Sensores de posición:</strong> precisión de ±0.5 mm. Encoders lineales resistentes a ambientes hostiles.</li>
<li><strong>Estación Total Robotizada:</strong> verificación topográfica en tiempo real de la posición de la carga.</li>
</ul>

<h3>Aplicaciones Típicas</h3>
<p>El levante sincrónico es la solución preferida cuando:</p>
<ul>
<li>La carga supera la capacidad de grúas disponibles (> 500 ton)</li>
<li>No hay espacio para grúas convencionales (dentro de plantas, túneles)</li>
<li>Se requiere precisión milimétrica (alineación de equipos rotativos)</li>
<li>La carga debe moverse en horizontal y vertical simultáneamente</li>
</ul>

<h3>Levante Sincrónico vs. Grúas Convencionales</h3>
<p>Una comparación directa muestra las ventajas:</p>
<ul>
<li><strong>Capacidad:</strong> Grúas hasta 1.200 ton (con demoras logísticas). Sincrónico hasta 40.000+ ton.</li>
<li><strong>Precisión:</strong> Grúas ±50 mm. Sincrónico ±0.5 mm.</li>
<li><strong>Espacio requerido:</strong> Grúas necesitan radio de giro libre. Sincrónico trabaja in situ.</li>
<li><strong>Costo por tonelada:</strong> En cargas > 500 ton, el sincrónico es 30-50% más económico.</li>
</ul>

<h3>Casos de Éxito</h3>
<p>Sandiman ha ejecutado más de 200 operaciones de levante sincrónico en Chile, incluyendo el récord de 1.500 toneladas en Minera Los Pelambres. Nuestra experiencia abarca minería, puentes, puertos y plantas industriales.</p>`,
    contentEn: `<p>Synchronized lifting is one of the most advanced technologies for heavy load handling in industrial environments. Unlike conventional crane methods, this system allows controlling multiple support points simultaneously with millimetric precision.</p>

<h3>What is Synchronized Lifting?</h3>
<p>It's a hydraulic system where multiple cylinders are independently controlled by a PLC (Programmable Logic Controller). The software coordinates force and displacement at each lifting point in real time, ensuring the load moves uniformly without stress concentration.</p>

<h3>Key System Components</h3>
<ul>
<li><strong>Hydraulic cylinders:</strong> capacities from 50 to 1,000 tons per point. Double-acting with automatic return.</li>
<li><strong>Hydraulic power unit:</strong> 6, 8, 12, and 16-output units. Working pressure up to 700 bar.</li>
<li><strong>Control PLC:</strong> on-screen monitoring of displacement, pressure, and speed for each cylinder.</li>
<li><strong>Position sensors:</strong> ±0.5 mm precision. Linear encoders resistant to hostile environments.</li>
<li><strong>Robotic Total Station:</strong> real-time topographic verification of load position.</li>
</ul>

<h3>Typical Applications</h3>
<p>Synchronized lifting is the preferred solution when:</p>
<ul>
<li>The load exceeds available crane capacity (> 500 tons)</li>
<li>There's no space for conventional cranes (inside plants, tunnels)</li>
<li>Millimetric precision is required (rotating equipment alignment)</li>
<li>The load must move horizontally and vertically simultaneously</li>
</ul>

<h3>Synchronized Lifting vs. Conventional Cranes</h3>
<p>A direct comparison shows the advantages:</p>
<ul>
<li><strong>Capacity:</strong> Cranes up to 1,200 tons (with logistics delays). Synchronized up to 40,000+ tons.</li>
<li><strong>Precision:</strong> Cranes ±50 mm. Synchronized ±0.5 mm.</li>
<li><strong>Space required:</strong> Cranes need free swing radius. Synchronized works in situ.</li>
<li><strong>Cost per ton:</strong> For loads > 500 tons, synchronized is 30-50% more economical.</li>
</ul>

<h3>Success Stories</h3>
<p>Sandiman has executed over 200 synchronized lifting operations in Chile, including the record 1,500-ton lift at Minera Los Pelambres. Our experience spans mining, bridges, ports, and industrial plants.</p>`,
    date: "2026-05-08",
    category: "Guía Técnica",
    categoryEn: "Technical Guide",
    author: "Departamento de Ingeniería Sandiman",
    authorRole: "Ingeniería de Levante",
    authorRoleEn: "Lifting Engineering",
    readTime: 7,
    tags: ["levante sincrónico", "hidráulica", "PLC", "minería", "construcción"],
    tagsEn: ["synchronized lifting", "hydraulics", "PLC", "mining", "construction"],
    sector: "mineria",
  },
  {
    id: "mecanizado-cnc-precision-chile",
    title: "Mecanizado CNC en Chile: Capacidades, Tolerancias y Cuándo Externalizar",
    titleEn: "CNC Machining in Chile: Capabilities, Tolerances, and When to Outsource",
    excerpt:
      "Análisis del estado del mecanizado CNC en la industria chilena: qué tolerancias son alcanzables localmente y cuándo conviene fabricar en Chile vs. importar.",
    excerptEn:
      "Analysis of CNC machining in Chilean industry: achievable tolerances locally and when it's better to manufacture in Chile vs. import.",
    content: `<p>Chile ha experimentado un crecimiento importante en capacidad de mecanizado CNC durante la última década, impulsado por la demanda minera y la necesidad de reducir tiempos de importación. Sin embargo, aún existen brechas importantes respecto a mercados como Alemania o Japón.</p>

<h3>Estado Actual del Mecanizado CNC en Chile</h3>
<p>El parque de máquinas CNC en Chile se concentra principalmente en:</p>
<ul>
<li><strong>Tornos CNC:</strong> capacidades hasta ø800 mm y 3.000 mm entre puntos. Tolerancias estándar de ±0.02 mm.</li>
<li><strong>Centros de mecanizado:</strong> recorridos hasta 2.000 x 1.000 x 800 mm. Precisión de posicionamiento de ±0.005 mm.</li>
<li><strong>Fresadoras CNC de gran formato:</strong> mesas hasta 4.000 x 2.000 mm para piezas de minería.</li>
</ul>

<h3>¿Cuándo Fabricar Localmente?</h3>
<p>La fabricación local en Chile conviene cuando:</p>
<ul>
<li>La pieza es urgente (parada de planta) — entrega en 48-72 horas vs. 4-6 semanas de importación</li>
<li>Se requieren lotes pequeños (1-50 piezas) — sin mínimos de importación</li>
<li>La pieza necesita ajustes iterativos — comunicación directa con el taller</li>
<li>El costo de parada supera el diferencial de precio local vs. importado</li>
</ul>

<h3>¿Cuándo Importar?</h3>
<p>Conviene importar cuando:</p>
<ul>
<li>Se necesitan tolerancias sub-micrométrica (< ±0.005 mm)</li>
<li>Los volúmenes son altos (> 500 piezas) y hay tiempo de planificación</li>
<li>Se requieren materiales especiales no disponibles localmente (Inconel, Hastelloy)</li>
</ul>

<h3>Caso Práctico: Tecbolt</h3>
<p>En Tecbolt, nuestro taller de mecanizado CNC produce piezas de precisión para la industria minera con tolerancias de ±0.01 mm. Fabricamos desde prototipos unitarios hasta series de 200 piezas, con trazabilidad de material y certificados dimensionales incluidos.</p>

<h3>Recomendación</h3>
<p>Para piezas críticas de mantención minera, la combinación ideal es: fabricación local para urgencias y lotes pequeños, importación planificada para consumibles de alto volumen. Nuestro equipo puede asesorarlo en la estrategia óptima para su operación.</p>`,
    contentEn: `<p>Chile has experienced significant growth in CNC machining capacity over the past decade, driven by mining demand and the need to reduce import times. However, significant gaps remain compared to markets like Germany or Japan.</p>

<h3>Current State of CNC Machining in Chile</h3>
<p>Chile's CNC machine park is primarily concentrated in:</p>
<ul>
<li><strong>CNC lathes:</strong> capacities up to ø800 mm and 3,000 mm between centers. Standard tolerances of ±0.02 mm.</li>
<li><strong>Machining centers:</strong> travels up to 2,000 x 1,000 x 800 mm. Positioning accuracy of ±0.005 mm.</li>
<li><strong>Large-format CNC mills:</strong> tables up to 4,000 x 2,000 mm for mining parts.</li>
</ul>

<h3>When to Manufacture Locally?</h3>
<p>Local manufacturing in Chile makes sense when:</p>
<ul>
<li>The part is urgent (plant shutdown) — delivery in 48-72 hours vs. 4-6 weeks import</li>
<li>Small batches are needed (1-50 pieces) — no import minimums</li>
<li>The part requires iterative adjustments — direct communication with the shop</li>
<li>Downtime cost exceeds the local vs. imported price differential</li>
</ul>

<h3>When to Import?</h3>
<p>Importing makes sense when:</p>
<ul>
<li>Sub-micrometric tolerances are needed (< ±0.005 mm)</li>
<li>Volumes are high (> 500 pieces) and there's planning time</li>
<li>Special materials not available locally are required (Inconel, Hastelloy)</li>
</ul>

<h3>Case Study: Tecbolt</h3>
<p>At Tecbolt, our CNC machining shop produces precision parts for the mining industry with tolerances of ±0.01 mm. We manufacture from single prototypes to runs of 200 pieces, with material traceability and dimensional certificates included.</p>

<h3>Recommendation</h3>
<p>For critical mining maintenance parts, the ideal combination is: local manufacturing for emergencies and small batches, planned importing for high-volume consumables. Our team can advise you on the optimal strategy for your operation.</p>`,
    date: "2026-04-28",
    category: "Industria",
    categoryEn: "Industry",
    author: "Equipo Técnico Tecbolt",
    authorRole: "Gerencia de Producción",
    authorRoleEn: "Production Management",
    readTime: 5,
    tags: ["CNC", "mecanizado", "manufactura", "minería", "tolerancias"],
    tagsEn: ["CNC", "machining", "manufacturing", "mining", "tolerances"],
    sector: "manufactura",
  },
  {
    id: "seguridad-levante-cargas-pesadas",
    title: "5 Errores Críticos en el Levante de Cargas Pesadas (y Cómo Evitarlos)",
    titleEn: "5 Critical Mistakes in Heavy Load Lifting (and How to Avoid Them)",
    excerpt:
      "Los errores más comunes que generan accidentes y paradas en operaciones de levante industrial. Lecciones de más de 200 proyectos ejecutados.",
    excerptEn:
      "The most common mistakes causing accidents and shutdowns in industrial lifting operations. Lessons from over 200 executed projects.",
    content: `<p>En más de 20 años ejecutando operaciones de levante pesado, hemos visto repetirse los mismos errores en distintas industrias. Estos errores no solo generan paradas costosas sino que ponen en riesgo la vida de las personas.</p>

<h3>Error 1: Subestimar el Peso Real de la Carga</h3>
<p>El error más frecuente y más peligroso. El peso teórico de planos raramente coincide con el peso real, especialmente en equipos usados con incrustaciones, recubrimientos o modificaciones no documentadas.</p>
<p><strong>Solución:</strong> Siempre pese la carga con celdas de carga certificadas antes del levante. Si no es posible, aplique un factor de seguridad mínimo de 1.5x sobre el peso estimado.</p>

<h3>Error 2: No Considerar el Centro de Gravedad</h3>
<p>Un chancador primario de 800 toneladas no tiene el centro de gravedad en su centro geométrico. La distribución de masa interna (mantos, blindajes, contraeje) genera asimetrías que deben calcularse.</p>
<p><strong>Solución:</strong> Realice un estudio de centro de gravedad con software CAD 3D. Verifique con medición de reacciones en los puntos de apoyo antes de levantar.</p>

<h3>Error 3: Usar Aparejos No Certificados</h3>
<p>Eslingas desgastadas, grilletes sin trazabilidad, ganchos sin pestillo de seguridad. Es sorprendente cuántas operaciones millonarias se ejecutan con aparejos que deberían estar en desuso.</p>
<p><strong>Solución:</strong> Exija certificación vigente (máx. 12 meses) de todo aparejo. Inspección visual antes de cada uso. Retire inmediatamente cualquier elemento con deformación visible.</p>

<h3>Error 4: Plan de Izaje Incompleto</h3>
<p>Un plan de izaje no es solo un diagrama con flechas. Debe incluir: secuencia paso a paso, roles y responsabilidades, comunicaciones de emergencia, condiciones meteorológicas límite, y plan de contingencia.</p>
<p><strong>Solución:</strong> Use la norma ASME B30 como guía mínima. Revise el plan con todo el equipo antes de iniciar. Designe un supervisor de izaje independiente del operador de grúa.</p>

<h3>Error 5: Ignorar las Condiciones Ambientales</h3>
<p>Viento, temperatura y visibilidad afectan directamente la seguridad del levante. En minería de altura (> 3.000 msnm), la rarefacción del aire reduce la capacidad de equipos diésel y las ráfagas son impredecibles.</p>
<p><strong>Solución:</strong> Establezca límites operacionales claros: viento máximo de 30 km/h para grúas, 50 km/h para levante sincrónico. Monitoreo meteorológico continuo durante toda la operación.</p>

<h3>La Diferencia Profesional</h3>
<p>En Sandiman, cada operación comienza con un estudio de ingeniería completo, incluye simulación por elementos finitos cuando es necesario, y se ejecuta con personal certificado. Más de 200 operaciones sin accidentes lo respaldan.</p>`,
    contentEn: `<p>In over 20 years executing heavy lifting operations, we've seen the same mistakes repeated across different industries. These errors not only generate costly shutdowns but put people's lives at risk.</p>

<h3>Mistake 1: Underestimating the Actual Load Weight</h3>
<p>The most frequent and dangerous mistake. Theoretical drawing weight rarely matches actual weight, especially for used equipment with encrustations, coatings, or undocumented modifications.</p>
<p><strong>Solution:</strong> Always weigh the load with certified load cells before lifting. If not possible, apply a minimum safety factor of 1.5x on the estimated weight.</p>

<h3>Mistake 2: Not Considering the Center of Gravity</h3>
<p>An 800-ton primary crusher doesn't have its center of gravity at its geometric center. Internal mass distribution (mantles, liners, countershaft) creates asymmetries that must be calculated.</p>
<p><strong>Solution:</strong> Perform a center of gravity study using 3D CAD software. Verify with reaction measurements at support points before lifting.</p>

<h3>Mistake 3: Using Non-Certified Rigging</h3>
<p>Worn slings, shackles without traceability, hooks without safety latches. It's surprising how many million-dollar operations run with rigging that should be retired.</p>
<p><strong>Solution:</strong> Demand current certification (max. 12 months) for all rigging. Visual inspection before each use. Immediately retire any element with visible deformation.</p>

<h3>Mistake 4: Incomplete Lift Plan</h3>
<p>A lift plan isn't just a diagram with arrows. It must include: step-by-step sequence, roles and responsibilities, emergency communications, weather limit conditions, and contingency plan.</p>
<p><strong>Solution:</strong> Use ASME B30 as a minimum guide. Review the plan with the entire team before starting. Designate a lift supervisor independent of the crane operator.</p>

<h3>Mistake 5: Ignoring Environmental Conditions</h3>
<p>Wind, temperature, and visibility directly affect lifting safety. In high-altitude mining (> 3,000 masl), air rarefaction reduces diesel equipment capacity and gusts are unpredictable.</p>
<p><strong>Solution:</strong> Establish clear operational limits: maximum wind of 30 km/h for cranes, 50 km/h for synchronized lifting. Continuous weather monitoring throughout the entire operation.</p>

<h3>The Professional Difference</h3>
<p>At Sandiman, every operation begins with a complete engineering study, includes finite element simulation when necessary, and is executed with certified personnel. Over 200 operations with zero accidents back this up.</p>`,
    date: "2026-04-15",
    category: "Seguridad",
    categoryEn: "Safety",
    author: "Departamento de Ingeniería Sandiman",
    authorRole: "Gerencia de Seguridad y Operaciones",
    authorRoleEn: "Safety & Operations Management",
    readTime: 8,
    tags: ["seguridad", "levante", "cargas pesadas", "ASME", "minería"],
    tagsEn: ["safety", "lifting", "heavy loads", "ASME", "mining"],
    sector: "mineria",
  },
  {
    id: "automatizacion-plc-industria-chilena",
    title: "Automatización con PLC en la Industria Chilena: Estado y Tendencias 2026",
    titleEn: "PLC Automation in Chilean Industry: Status and Trends 2026",
    excerpt:
      "Panorama actual de la automatización industrial en Chile: niveles de adopción, tecnologías dominantes y oportunidades para la industria local.",
    excerptEn:
      "Current landscape of industrial automation in Chile: adoption levels, dominant technologies, and opportunities for local industry.",
    content: `<p>La automatización industrial en Chile ha crecido a un ritmo del 12% anual durante la última década, impulsada principalmente por la gran minería. Sin embargo, la adopción en sectores como manufactura, agroindustria y logística sigue siendo baja comparada con el promedio OCDE.</p>

<h3>Niveles de Automatización por Sector</h3>
<ul>
<li><strong>Gran minería:</strong> 70-85% automatizada. Líderes en adopción de sistemas SCADA, PLC Siemens S7-1500 y Allen-Bradley ControlLogix.</li>
<li><strong>Mediana minería:</strong> 40-55%. Oportunidad significativa de mejora en control de procesos y telemetría.</li>
<li><strong>Manufactura:</strong> 25-40%. Aún predominan procesos manuales y semi-automáticos.</li>
<li><strong>Agroindustria:</strong> 15-25%. Adopción incipiente de riego automatizado y clasificación óptica.</li>
</ul>

<h3>Tecnologías Dominantes en Chile</h3>
<p>El mercado chileno está dominado por tres plataformas de PLC:</p>
<ul>
<li><strong>Siemens (TIA Portal / S7):</strong> ~45% del mercado. Dominante en minería y energía.</li>
<li><strong>Rockwell (Allen-Bradley):</strong> ~30% del mercado. Fuerte en minería y petróleo.</li>
<li><strong>Schneider (Modicon):</strong> ~15% del mercado. Presente en agua y edificación.</li>
</ul>

<h3>Tendencias 2026</h3>
<ul>
<li><strong>Edge Computing:</strong> Procesamiento local de datos para reducir latencia en control de procesos críticos.</li>
<li><strong>Digital Twins:</strong> Gemelos digitales de plantas completas para simulación y optimización.</li>
<li><strong>Ciberseguridad OT:</strong> Normativa IEC 62443 cada vez más exigida por operadores mineros.</li>
<li><strong>Integración IT/OT:</strong> Convergencia de redes industriales con sistemas corporativos.</li>
</ul>

<h3>La Oportunidad</h3>
<p>Sandiman ofrece soluciones de automatización con PLC Siemens y Rockwell, integrando variadores de frecuencia, instrumentación de campo y sistemas SCADA. Nuestra ventaja: conocemos la realidad operacional chilena y podemos implementar soluciones que funcionen en terreno, no solo en el papel.</p>`,
    contentEn: `<p>Industrial automation in Chile has grown at a rate of 12% annually over the past decade, driven primarily by large-scale mining. However, adoption in sectors like manufacturing, agribusiness, and logistics remains low compared to the OECD average.</p>

<h3>Automation Levels by Sector</h3>
<ul>
<li><strong>Large mining:</strong> 70-85% automated. Leaders in SCADA systems, Siemens S7-1500 PLCs, and Allen-Bradley ControlLogix adoption.</li>
<li><strong>Mid-tier mining:</strong> 40-55%. Significant opportunity for improvement in process control and telemetry.</li>
<li><strong>Manufacturing:</strong> 25-40%. Manual and semi-automatic processes still predominate.</li>
<li><strong>Agribusiness:</strong> 15-25%. Emerging adoption of automated irrigation and optical sorting.</li>
</ul>

<h3>Dominant Technologies in Chile</h3>
<p>The Chilean market is dominated by three PLC platforms:</p>
<ul>
<li><strong>Siemens (TIA Portal / S7):</strong> ~45% market share. Dominant in mining and energy.</li>
<li><strong>Rockwell (Allen-Bradley):</strong> ~30% market share. Strong in mining and oil.</li>
<li><strong>Schneider (Modicon):</strong> ~15% market share. Present in water and buildings.</li>
</ul>

<h3>2026 Trends</h3>
<ul>
<li><strong>Edge Computing:</strong> Local data processing to reduce latency in critical process control.</li>
<li><strong>Digital Twins:</strong> Complete plant digital twins for simulation and optimization.</li>
<li><strong>OT Cybersecurity:</strong> IEC 62443 standard increasingly demanded by mining operators.</li>
<li><strong>IT/OT Integration:</strong> Convergence of industrial networks with corporate systems.</li>
</ul>

<h3>The Opportunity</h3>
<p>Sandiman offers automation solutions with Siemens and Rockwell PLCs, integrating variable frequency drives, field instrumentation, and SCADA systems. Our advantage: we know Chilean operational reality and can implement solutions that work in the field, not just on paper.</p>`,
    date: "2026-04-02",
    category: "Tendencias",
    categoryEn: "Trends",
    author: "Departamento de Automatización Sandiman",
    authorRole: "Gerencia de Automatización",
    authorRoleEn: "Automation Management",
    readTime: 6,
    tags: ["automatización", "PLC", "Siemens", "industria 4.0", "SCADA"],
    tagsEn: ["automation", "PLC", "Siemens", "industry 4.0", "SCADA"],
    sector: "general",
  },
  {
    id: "fijaciones-construccion-sismica",
    title: "Fijaciones para Construcción Sísmica: Normativa NCh y Mejores Prácticas",
    titleEn: "Fasteners for Seismic Construction: NCh Standards and Best Practices",
    excerpt:
      "Chile es uno de los países más sísmicos del mundo. Conozca la normativa chilena para fijaciones en estructuras sísmicas y las mejores prácticas de instalación.",
    excerptEn:
      "Chile is one of the most seismic countries in the world. Learn about Chilean standards for fasteners in seismic structures and installation best practices.",
    content: `<p>Chile se ubica en el cinturón de fuego del Pacífico y experimenta un sismo significativo cada 10-15 años en promedio. Esto hace que las fijaciones estructurales no sean un commodity sino un componente de seguridad vital.</p>

<h3>Marco Normativo Chileno</h3>
<p>Las fijaciones estructurales en Chile deben cumplir:</p>
<ul>
<li><strong>NCh 427:</strong> Construcción en acero — especificaciones para tornillos de alta resistencia.</li>
<li><strong>NCh 2369:</strong> Diseño sísmico de estructuras e instalaciones industriales.</li>
<li><strong>AISC 341:</strong> Disposiciones sísmicas para edificios de acero estructural (adoptada como referencia).</li>
<li><strong>ASTM F3125:</strong> Reemplaza ASTM A325/A490 — tornillos estructurales de alta resistencia.</li>
</ul>

<h3>Requisitos Críticos para Fijaciones Sísmicas</h3>
<ul>
<li><strong>Ductilidad:</strong> las fijaciones deben deformarse sin fractura frágil. Aceros con elongación mínima del 14%.</li>
<li><strong>Resistencia al corte:</strong> las conexiones sísmicas trabajan predominantemente en corte. Use tornillos de cuerpo corto para maximizar el área de corte.</li>
<li><strong>Pretensión:</strong> todas las fijaciones en zonas sísmicas deben instalarse con pretensión controlada (método de giro tuerca o indicador de tensión directa DTI).</li>
<li><strong>Trazabilidad:</strong> cada lote debe tener certificado de ensayo (tracción, dureza, composición química).</li>
</ul>

<h3>Errores Comunes en Chile</h3>
<ul>
<li>Usar fijaciones grado 4.6 (no sísmicas) en conexiones que requieren grado 8.8.</li>
<li>No aplicar pretensión: el 60% de las fijaciones estructurales en Chile se instalan "apretadas a mano" sin torque controlado.</li>
<li>Mezclar normas: usar dimensiones DIN con propiedades ASTM sin verificar compatibilidad.</li>
</ul>

<h3>Fijaciones Mamut para Construcción Sísmica</h3>
<p>Tecbolt fabrica la línea Mamut Sismic con acero SAE 4140 templado y revenido, certificación por lote con ensayo de tracción y Charpy a -20°C, y trazabilidad de colada completa. Cumplimos NCh 427 y ASTM F3125 — las dos normas más exigidas en construcción sísmica chilena.</p>`,
    contentEn: `<p>Chile sits on the Pacific Ring of Fire and experiences a significant earthquake every 10-15 years on average. This makes structural fasteners not a commodity but a vital safety component.</p>

<h3>Chilean Regulatory Framework</h3>
<p>Structural fasteners in Chile must comply with:</p>
<ul>
<li><strong>NCh 427:</strong> Steel construction — specifications for high-strength bolts.</li>
<li><strong>NCh 2369:</strong> Seismic design of industrial structures and installations.</li>
<li><strong>AISC 341:</strong> Seismic provisions for structural steel buildings (adopted as reference).</li>
<li><strong>ASTM F3125:</strong> Replaces ASTM A325/A490 — high-strength structural bolts.</li>
</ul>

<h3>Critical Requirements for Seismic Fasteners</h3>
<ul>
<li><strong>Ductility:</strong> fasteners must deform without brittle fracture. Steels with minimum 14% elongation.</li>
<li><strong>Shear resistance:</strong> seismic connections work predominantly in shear. Use short-body bolts to maximize shear area.</li>
<li><strong>Pre-tension:</strong> all fasteners in seismic zones must be installed with controlled pre-tension (turn-of-nut method or Direct Tension Indicator DTI).</li>
<li><strong>Traceability:</strong> each lot must have a test certificate (tensile, hardness, chemical composition).</li>
</ul>

<h3>Common Mistakes in Chile</h3>
<ul>
<li>Using grade 4.6 fasteners (non-seismic) in connections requiring grade 8.8.</li>
<li>Not applying pre-tension: 60% of structural fasteners in Chile are installed "hand-tight" without controlled torque.</li>
<li>Mixing standards: using DIN dimensions with ASTM properties without verifying compatibility.</li>
</ul>

<h3>Mamut Fasteners for Seismic Construction</h3>
<p>Tecbolt manufactures the Mamut Sismic line with quenched and tempered SAE 4140 steel, per-lot certification with tensile and Charpy testing at -20°C, and full heat traceability. We comply with NCh 427 and ASTM F3125 — the two most demanded standards in Chilean seismic construction.</p>`,
    date: "2026-03-20",
    category: "Normativa",
    categoryEn: "Regulations",
    author: "Equipo Técnico Tecbolt",
    authorRole: "Control de Calidad",
    authorRoleEn: "Quality Control",
    readTime: 7,
    tags: ["fijaciones", "sísmica", "NCh", "construcción", "normativa"],
    tagsEn: ["fasteners", "seismic", "NCh", "construction", "standards"],
    sector: "construccion",
  },
  {
    id: "bombas-slurry-seleccion-mantenimiento",
    title: "Bombas Slurry: Guía de Selección y Mantenimiento para Minería",
    titleEn: "Slurry Pumps: Selection and Maintenance Guide for Mining",
    excerpt:
      "Cómo seleccionar la bomba slurry correcta según su aplicación y un programa de mantenimiento que maximice la vida útil del equipo.",
    excerptEn:
      "How to select the right slurry pump for your application and a maintenance program that maximizes equipment lifespan.",
    content: `<p>Las bombas slurry son el corazón de cualquier operación minera de procesamiento. Transportan la pulpa mineral — una mezcla abrasiva de roca molida y agua — a través de kilómetros de tuberías. Una selección incorrecta puede resultar en paradas de planta costosas y reemplazo prematuro de componentes.</p>

<h3>Factores de Selección</h3>
<ul>
<li><strong>Concentración de sólidos:</strong> medida en % de peso (Cw). Slurries mineras típicas van de 30% a 65%. A mayor concentración, mayor desgaste y se requiere una bomba con mayor espesor de blindaje.</li>
<li><strong>Tamaño de partícula:</strong> d50 y d80 determinan el tipo de impulsor. Partículas > 25 mm requieren impulsores de tipo canal o vortex.</li>
<li><strong>pH del fluido:</strong> slurries ácidas (pH < 4) requieren materiales resistentes como hierro alto cromo (28% Cr) o revestimiento de caucho natural.</li>
<li><strong>Altura dinámica total (TDH):</strong> incluya las pérdidas por fricción del slurry, que son 1.5-3x mayores que con agua limpia.</li>
</ul>

<h3>Materiales de Construcción</h3>
<ul>
<li><strong>Hierro alto cromo:</strong> el estándar para minería. Dureza de 600-650 HB. Excelente resistencia a la abrasión.</li>
<li><strong>Caucho natural:</strong> superior al hierro en slurries finas (< 1 mm) y ácidas. Absorbe impacto de partículas.</li>
<li><strong>Acero inoxidable duplex:</strong> para aplicaciones con alta corrosión y abrasión moderada (agua de mar con arena).</li>
</ul>

<h3>Programa de Mantenimiento Preventivo</h3>
<ul>
<li><strong>Diario:</strong> verificar sello mecánico (goteo máx. 60 gotas/min), temperatura de rodamientos (< 80°C), vibración.</li>
<li><strong>Semanal:</strong> inspeccionar desgaste de impulsor y blindaje con medición ultrasónica de espesor.</li>
<li><strong>Mensual:</strong> lubricación de rodamientos, ajuste de prensa estopas, verificación de alineación.</li>
<li><strong>Trimestral:</strong> inspección interna completa con registro fotográfico de desgaste.</li>
</ul>

<h3>Stock de Repuestos Críticos</h3>
<p>Mantenga siempre en stock: 1 impulsor, 1 juego de blindajes (succión + carcasa), 2 sellos mecánicos, y 1 juego de rodamientos. El costo de estos repuestos es insignificante comparado con una parada no programada que puede costar US$ 50.000-200.000 por hora en una concentradora.</p>

<h3>Sande S.A.: Su Proveedor de Bombas</h3>
<p>Distribuimos las principales marcas de bombas slurry con stock permanente en Santiago y Antofagasta. Nuestro equipo técnico puede ayudarle a seleccionar la bomba correcta y diseñar un programa de mantenimiento optimizado para su operación.</p>`,
    contentEn: `<p>Slurry pumps are the heart of any mineral processing mining operation. They transport mineral pulp — an abrasive mixture of ground rock and water — through kilometers of piping. An incorrect selection can result in costly plant shutdowns and premature component replacement.</p>

<h3>Selection Factors</h3>
<ul>
<li><strong>Solids concentration:</strong> measured in weight % (Cw). Typical mining slurries range from 30% to 65%. Higher concentration means more wear, requiring a pump with greater liner thickness.</li>
<li><strong>Particle size:</strong> d50 and d80 determine the impeller type. Particles > 25 mm require channel or vortex-type impellers.</li>
<li><strong>Fluid pH:</strong> acid slurries (pH < 4) require resistant materials like high-chrome iron (28% Cr) or natural rubber lining.</li>
<li><strong>Total Dynamic Head (TDH):</strong> include slurry friction losses, which are 1.5-3x greater than with clean water.</li>
</ul>

<h3>Construction Materials</h3>
<ul>
<li><strong>High-chrome iron:</strong> the mining standard. Hardness of 600-650 HB. Excellent abrasion resistance.</li>
<li><strong>Natural rubber:</strong> superior to iron in fine (< 1 mm) and acidic slurries. Absorbs particle impact.</li>
<li><strong>Duplex stainless steel:</strong> for applications with high corrosion and moderate abrasion (seawater with sand).</li>
</ul>

<h3>Preventive Maintenance Program</h3>
<ul>
<li><strong>Daily:</strong> check mechanical seal (max 60 drops/min drip), bearing temperature (< 80°C), vibration.</li>
<li><strong>Weekly:</strong> inspect impeller and liner wear with ultrasonic thickness measurement.</li>
<li><strong>Monthly:</strong> bearing lubrication, stuffing box adjustment, alignment verification.</li>
<li><strong>Quarterly:</strong> complete internal inspection with photographic wear record.</li>
</ul>

<h3>Critical Spare Parts Stock</h3>
<p>Always keep in stock: 1 impeller, 1 set of liners (suction + casing), 2 mechanical seals, and 1 set of bearings. The cost of these spares is insignificant compared to an unplanned shutdown that can cost US$ 50,000-200,000 per hour in a concentrator.</p>

<h3>Sande S.A.: Your Pump Supplier</h3>
<p>We distribute major slurry pump brands with permanent stock in Santiago and Antofagasta. Our technical team can help you select the right pump and design an optimized maintenance program for your operation.</p>`,
    date: "2026-03-05",
    category: "Guía Técnica",
    categoryEn: "Technical Guide",
    author: "Equipo Comercial Sande",
    authorRole: "División Bombas Industriales",
    authorRoleEn: "Industrial Pumps Division",
    readTime: 7,
    tags: ["bombas", "slurry", "minería", "mantenimiento", "hidráulica"],
    tagsEn: ["pumps", "slurry", "mining", "maintenance", "hydraulics"],
    sector: "mineria",
  },
  {
    id: "eficiencia-energetica-variadores-frecuencia",
    title: "Eficiencia Energética con Variadores de Frecuencia: ROI Real en la Industria Chilena",
    titleEn: "Energy Efficiency with Variable Frequency Drives: Real ROI in Chilean Industry",
    excerpt:
      "Análisis de retorno de inversión real en proyectos de variadores de frecuencia implementados en Chile. Casos con datos concretos de ahorro.",
    excerptEn:
      "Real ROI analysis of variable frequency drive projects implemented in Chile. Cases with concrete savings data.",
    content: `<p>Los variadores de frecuencia (VFD) son una de las inversiones con mayor retorno en eficiencia energética industrial. En Chile, donde la tarifa eléctrica industrial promedia US$ 0.11/kWh, los ahorros pueden ser enormes.</p>

<h3>¿Cómo Ahorran Energía los VFD?</h3>
<p>La ley de afinidad establece que la potencia consumida por una bomba o ventilador es proporcional al cubo de la velocidad. Es decir:</p>
<ul>
<li>Reducir la velocidad un 20% → ahorro del 49% en energía</li>
<li>Reducir la velocidad un 30% → ahorro del 66% en energía</li>
<li>Reducir la velocidad un 50% → ahorro del 87% en energía</li>
</ul>

<h3>Caso Real 1: Planta Concentradora — Bombas de Proceso</h3>
<p>Una concentradora de cobre en la Región de Antofagasta instaló VFDs en 6 bombas de proceso de 250 HP cada una. El sistema anterior usaba válvulas de estrangulación para regular caudal.</p>
<ul>
<li><strong>Inversión:</strong> US$ 180.000 (6 VFDs + instalación + puesta en marcha)</li>
<li><strong>Ahorro anual:</strong> US$ 142.000 en consumo eléctrico</li>
<li><strong>Payback:</strong> 15 meses</li>
<li><strong>Bonus:</strong> reducción del 40% en fallas de sellos mecánicos por arranques suaves</li>
</ul>

<h3>Caso Real 2: Planta de Celulosa — Ventiladores de Secado</h3>
<p>Una planta de celulosa en la Región del Biobío reemplazó dampers mecánicos por VFDs en 4 ventiladores de 150 HP.</p>
<ul>
<li><strong>Inversión:</strong> US$ 95.000</li>
<li><strong>Ahorro anual:</strong> US$ 78.000</li>
<li><strong>Payback:</strong> 14.6 meses</li>
</ul>

<h3>Errores al Implementar VFDs</h3>
<ul>
<li><strong>No considerar armónicos:</strong> los VFDs generan armónicos que pueden afectar equipos sensibles. Instale filtros de armónicos cuando la potencia total en VFDs supere el 30% de la capacidad del transformador.</li>
<li><strong>Cables inadecuados:</strong> use cables apantallados (VFD-rated) para distancias > 30 metros. Los cables estándar pueden generar picos de tensión que dañan el bobinado del motor.</li>
<li><strong>No programar rampas de aceleración:</strong> rampas muy agresivas generan picos de corriente y estrés mecánico.</li>
</ul>

<h3>Sandiman: Implementación Completa</h3>
<p>Ofrecemos el ciclo completo: estudio de factibilidad con medición de consumo real, selección del VFD (ABB, Siemens, Danfoss), instalación, programación y puesta en marcha. Incluimos monitoreo de ahorro durante 6 meses post-instalación para verificar el ROI proyectado.</p>`,
    contentEn: `<p>Variable Frequency Drives (VFDs) are one of the highest-return investments in industrial energy efficiency. In Chile, where industrial electricity rates average US$ 0.11/kWh, savings can be enormous.</p>

<h3>How Do VFDs Save Energy?</h3>
<p>The affinity law states that power consumed by a pump or fan is proportional to the cube of speed. That is:</p>
<ul>
<li>Reducing speed by 20% → 49% energy savings</li>
<li>Reducing speed by 30% → 66% energy savings</li>
<li>Reducing speed by 50% → 87% energy savings</li>
</ul>

<h3>Real Case 1: Concentrator Plant — Process Pumps</h3>
<p>A copper concentrator in the Antofagasta Region installed VFDs on 6 process pumps of 250 HP each. The previous system used throttling valves to regulate flow.</p>
<ul>
<li><strong>Investment:</strong> US$ 180,000 (6 VFDs + installation + commissioning)</li>
<li><strong>Annual savings:</strong> US$ 142,000 in electricity consumption</li>
<li><strong>Payback:</strong> 15 months</li>
<li><strong>Bonus:</strong> 40% reduction in mechanical seal failures due to soft starts</li>
</ul>

<h3>Real Case 2: Pulp Mill — Drying Fans</h3>
<p>A pulp mill in the Biobío Region replaced mechanical dampers with VFDs on 4 fans of 150 HP.</p>
<ul>
<li><strong>Investment:</strong> US$ 95,000</li>
<li><strong>Annual savings:</strong> US$ 78,000</li>
<li><strong>Payback:</strong> 14.6 months</li>
</ul>

<h3>Mistakes When Implementing VFDs</h3>
<ul>
<li><strong>Not considering harmonics:</strong> VFDs generate harmonics that can affect sensitive equipment. Install harmonic filters when total VFD power exceeds 30% of transformer capacity.</li>
<li><strong>Inadequate cables:</strong> use shielded (VFD-rated) cables for distances > 30 meters. Standard cables can generate voltage spikes that damage motor windings.</li>
<li><strong>Not programming acceleration ramps:</strong> overly aggressive ramps generate current spikes and mechanical stress.</li>
</ul>

<h3>Sandiman: Complete Implementation</h3>
<p>We offer the complete cycle: feasibility study with real consumption measurement, VFD selection (ABB, Siemens, Danfoss), installation, programming, and commissioning. We include savings monitoring for 6 months post-installation to verify projected ROI.</p>`,
    date: "2026-02-18",
    category: "Eficiencia",
    categoryEn: "Efficiency",
    author: "Departamento de Automatización Sandiman",
    authorRole: "Ingeniería de Eficiencia Energética",
    authorRoleEn: "Energy Efficiency Engineering",
    readTime: 6,
    tags: ["variadores", "eficiencia energética", "VFD", "ahorro", "industria"],
    tagsEn: ["VFD", "energy efficiency", "drives", "savings", "industry"],
    sector: "general",
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}
