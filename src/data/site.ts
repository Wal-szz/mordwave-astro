// Datos de contacto y textos compartidos. Cambia aquí y se actualiza en toda la web.
export const site = {
  name: 'MordWave',
  url: 'https://mordwave.com',
  email: 'mordewave@gmail.com',
  whatsapp: '56983960591',
  instagram: 'mordwaves',
  location: 'Chillán, Ñuble — atendemos todo Chile',
};

export const waLink = (text = 'Hola, vi MordWave y me gustaría cotizar un proyecto web.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];
