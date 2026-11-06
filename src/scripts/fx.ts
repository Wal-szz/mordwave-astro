// Efectos de interacción compartidos por toda la web.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

// 0. Enlaces internos (#seccion) que siempre llegan a su sección.
// Si algo cambia de alto mientras se desplaza (una pregunta que se abre, la tipografía que termina
// de cargar), al terminar el recorrido se revisa la posición y se corrige.
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!a || a.target === '_blank' || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  const id = decodeURIComponent(a.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (!target) return;
  e.preventDefault();
  history.pushState(null, '', `#${id}`);
  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const go = (behavior: ScrollBehavior) => scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior });
  go(reduce ? 'auto' : 'smooth');
  let done = false;
  const check = () => {
    if (done) return;
    done = true;
    if (Math.abs(target.getBoundingClientRect().top - offset) > 4) go('auto');
  };
  addEventListener('scrollend', check, { once: true });
  setTimeout(check, 1600); // por si el navegador no tiene el evento scrollend
});

// 1. Aparición al entrar en pantalla
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

if (!reduce && finePointer) {
  // 3. Inclinación 3D ([data-tilt="grados"])
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt) || 8;
    el.style.transition = 'transform .5s cubic-bezier(.2,.8,.2,1)';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform .1s linear';
      el.style.transform = `perspective(1000px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)';
      el.style.transform = '';
    });
  });

  // 4. Botones magnéticos
  document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
    });
    el.addEventListener('pointerleave', () => (el.style.transform = ''));
  });
}

// 5. Números que cuentan ([data-count="50"] con data-suffix opcional)
const countIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target as HTMLElement;
      countIO.unobserve(el);
      const end = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? '';
      if (reduce) { el.textContent = end + suffix; continue; }
      const t0 = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(end * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  },
  { threshold: 0.6 }
);
document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));
