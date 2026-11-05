// Efectos compartidos: aparición al hacer scroll y reloj de Chillán.
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal, .lines').forEach((el) => io.observe(el));

// Hora local de Chillán en los elementos [data-clock]
const clocks = document.querySelectorAll<HTMLElement>('[data-clock]');
if (clocks.length) {
  const fmt = new Intl.DateTimeFormat('es-CL', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'America/Santiago' });
  const tick = () => clocks.forEach((c) => (c.textContent = fmt.format(new Date())));
  tick();
  setInterval(tick, 15000);
}
