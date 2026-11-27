// Precios de MordWave (fuente: "Planes y precios", diciembre 2026). Todos con IVA incluido.
// Cambia los valores aquí y se actualizan en toda la web.

export const clp = (n: number) => '$' + n.toLocaleString('es-CL');

export type Size = { size: string; units: string; price: number };
export type Product = {
  id: string;
  name: string;
  from: number;
  summary: string;
  structure: string;
  includes: string[];
  includesPrefix?: string;
  sizesLabel: string;
  sizes: Size[];
  rounds: string;
  time: string;
  note?: string;
  wa: string;
};

const baseIncludes = [
  'Diseño adaptado a tu marca, que se ve bien en celular y computador',
  'Formulario de contacto, botón de WhatsApp y enlaces a tus redes',
  'SEO básico: títulos, descripciones y alta en Google Search Console',
  'Aviso de privacidad, conexión de tu dominio y publicación',
  'Primer mes del plan Soporte incluido',
];

export const products: Product[] = [
  {
    id: 'landing',
    name: 'Landing Esencial',
    from: 119990,
    summary: 'Una página para presentar tu negocio y recibir contactos.',
    structure: '1 página',
    includes: baseIncludes,
    sizesLabel: 'Secciones',
    sizes: [
      { size: 'S', units: 'Hasta 5', price: 119990 },
      { size: 'M', units: 'Hasta 7', price: 169990 },
      { size: 'L', units: 'Hasta 9', price: 219990 },
    ],
    rounds: '1 ronda de revisión',
    time: '5 a 7 días hábiles',
    wa: 'Hola MordWave, quiero cotizar una Landing Esencial.',
  },
  {
    id: 'agenda',
    name: 'Landing + Agenda',
    from: 169990,
    summary: 'Tu landing con agenda en línea para que tus clientes reserven.',
    structure: '1 página',
    includesPrefix: 'Todo lo de la Landing Esencial, más:',
    includes: [
      'Agenda en línea integrada, para reservar sin salir de tu sitio',
      'Usamos tu agenda actual (Google Calendar u otra) o te ayudamos a crear una',
      'Configuración de 1 calendario: servicios, duración y horarios',
      'Prueba de reserva completa antes de publicar',
    ],
    sizesLabel: 'Secciones',
    sizes: [
      { size: 'S', units: 'Hasta 5', price: 169990 },
      { size: 'M', units: 'Hasta 7', price: 219990 },
      { size: 'L', units: 'Hasta 9', price: 269990 },
    ],
    rounds: '2 rondas de revisión',
    time: '7 a 10 días hábiles',
    note: 'Profesional o calendario adicional: $24.990 cada uno.',
    wa: 'Hola MordWave, quiero cotizar una Landing + Agenda.',
  },
  {
    id: 'sitio',
    name: 'Sitio web',
    from: 299990,
    summary: 'Sitio de varias páginas para empresas y servicios profesionales.',
    structure: '4 a 8 páginas',
    includes: [
      'Diseño personalizado para tu marca, adaptado a celular y computador',
      'Páginas independientes, cada una con hasta 5 secciones',
      'Formulario de contacto, WhatsApp y redes',
      'SEO básico en cada página y alta en Google Search Console',
      'Aviso de privacidad, conexión de tu dominio y publicación',
      'Primer mes del plan Soporte incluido',
    ],
    sizesLabel: 'Páginas',
    sizes: [
      { size: 'S', units: '4', price: 299990 },
      { size: 'M', units: '6', price: 399990 },
      { size: 'L', units: '8', price: 499990 },
    ],
    rounds: '2 rondas de revisión',
    time: '10 a 15 días hábiles',
    note: 'Página adicional: $49.990.',
    wa: 'Hola MordWave, quiero cotizar un sitio web.',
  },
];

export const addons = [
  { name: 'Agenda en línea integrada', price: '$49.990' },
  { name: 'Blog o noticias que puedes actualizar tú', price: '$99.990' },
  { name: 'Catálogo de productos sin carrito (hasta 30)', price: '$79.990' },
  { name: 'Segundo idioma', price: '40% del desarrollo' },
  { name: 'Traspaso de contenido desde tu sitio anterior', price: 'desde $49.990' },
];

export const extras = [
  { name: 'Redacción de textos (landing completa)', price: '$39.990' },
  { name: 'Redacción de textos (por página del sitio web)', price: '$19.990' },
  { name: 'Ficha de Google Business Profile (aparecer en Google Maps)', price: '$24.990' },
  { name: 'Configuración de correo corporativo (la licencia la contratas tú)', price: '$24.990' },
  { name: 'Ronda de revisión adicional', price: '$19.990' },
  { name: 'Entrega express (la mitad del plazo)', price: '+30%' },
];

export const plans = [
  {
    name: 'Base',
    monthly: 9990,
    yearly: 99900,
    features: [
      'Hosting y certificado de seguridad (SSL)',
      'Monitoreo de que tu sitio esté en línea',
      'Respaldo y actualizaciones de seguridad',
      'Ayuda con la configuración de tu dominio',
      'Cambios cuando los necesites, a $9.990 cada uno',
    ],
  },
  {
    name: 'Soporte',
    monthly: 19990,
    yearly: 199900,
    recommended: true,
    features: ['Todo lo del plan Base', '2 cambios menores al mes incluidos', 'Respuesta en hasta 3 días hábiles'],
  },
  {
    name: 'Plus',
    monthly: 34990,
    yearly: 349900,
    features: [
      'Todo lo del plan Soporte',
      'Hasta 5 cambios o 2 horas de trabajo al mes',
      'Respuesta en 1 a 2 días hábiles',
      'Informe trimestral de visitas y 1 ajuste de SEO',
    ],
  },
];

export const minPrice = Math.min(...products.map((p) => p.from));
export const minPlan = Math.min(...plans.map((p) => p.monthly));
