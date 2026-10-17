const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const carousel = document.querySelector('[data-carousel]');
const revealItems = document.querySelectorAll('.reveal');

const langToggle = document.querySelector('[data-lang-toggle]');

const applyLang = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach((el) => {
    if (!el.dataset.es) {
      el.dataset.es = el.innerHTML;
    }
    el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.es;
  });
  langToggle?.querySelectorAll('span').forEach((badge) => {
    badge.classList.toggle('is-active', badge.dataset.langLabel === lang);
  });
};

applyLang('es');

langToggle?.addEventListener('click', () => {
  const next = document.documentElement.lang === 'es' ? 'en' : 'es';
  applyLang(next);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

nav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menú');
  }
});

if (carousel) {
  const track = carousel.querySelector('[data-track]');
  const prev = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');
  const originals = track ? Array.from(track.querySelectorAll('.project-card')) : [];
  const N = originals.length;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (track && N > 0) {
    const frag = document.createDocumentFragment();
    const cards = [];

    // Clones exist only for the infinite loop effect: hide them from
    // screen readers and keyboard so each project is announced once.
    const makeClone = (card) => {
      const c = card.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      c.querySelectorAll('a, button').forEach(el => el.setAttribute('tabindex', '-1'));
      return c;
    };

    for (let i = 0; i < N; i++) {
      const c = makeClone(originals[i]);
      frag.appendChild(c);
      cards.push(c);
    }
    originals.forEach(c => { frag.appendChild(c); cards.push(c); });
    for (let i = 0; i < N; i++) {
      const c = makeClone(originals[i]);
      frag.appendChild(c);
      cards.push(c);
    }
    track.innerHTML = '';
    track.appendChild(frag);

    let activeIndex = N;
    let autoplay;
    let scrollTimer;

    const updateCoverflow = () => {
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closestIndex = activeIndex;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(trackCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      activeIndex = closestIndex;
      cards.forEach((card, index) => {
        card.classList.toggle('is-active', index === activeIndex);
        card.classList.toggle('is-before', index === activeIndex - 1);
        card.classList.toggle('is-after', index === activeIndex + 1);
      });
    };

    const scrollToCard = (index, behavior) => {
      const card = cards[index];
      const left = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
      track.scrollTo({ left, behavior });
    };

    const centerCard = (index) => {
      activeIndex = index;
      scrollToCard(index, 'smooth');
      window.setTimeout(() => {
        updateCoverflow();
        if (activeIndex >= 2 * N) {
          activeIndex -= N;
          scrollToCard(activeIndex, 'instant');
          updateCoverflow();
        } else if (activeIndex < N) {
          activeIndex += N;
          scrollToCard(activeIndex, 'instant');
          updateCoverflow();
        }
      }, 420);
    };

    const move = (direction) => {
      centerCard(activeIndex + direction);
    };

    const startAutoplay = () => {
      if (reduceMotion || autoplay) return;
      autoplay = window.setInterval(() => move(1), 2800);
    };

    const stopAutoplay = () => {
      window.clearInterval(autoplay);
      autoplay = undefined;
    };

    prev?.addEventListener('click', () => move(-1));
    next?.addEventListener('click', () => move(1));
    track?.addEventListener('scroll', () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(updateCoverflow, 80);
    });
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    scrollToCard(N, 'instant');
    updateCoverflow();
    startAutoplay();
  }
}

const orbitMounts = document.querySelectorAll('.orbit-mount');

if (orbitMounts.length > 0) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  orbitMounts.forEach(m => {
    m.style.setProperty('--r', m.dataset.r);
    m.style.setProperty('--d', m.dataset.d || '0s');
    m.style.setProperty('--a', `${m.dataset.a}deg`);
  });

  if (!reduceMotion) {
    let orbitStart;

    const animateOrbit = (timestamp) => {
      if (!orbitStart) orbitStart = timestamp;
      const elapsed = (timestamp - orbitStart) / 1000;

      orbitMounts.forEach(m => {
        const dir = parseFloat(m.dataset.dir) || 1;
        const initialA = parseFloat(m.dataset.a) || 0;
        const period = parseFloat(m.dataset.period) || (dir > 0 ? 30 : 22);
        const a = initialA + dir * (elapsed / period) * 360;
        m.style.setProperty('--a', `${a}deg`);
      });

      requestAnimationFrame(animateOrbit);
    };

    requestAnimationFrame(animateOrbit);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const statNumbers = document.querySelectorAll('.stat-number[data-target]');

const animateStat = (el) => {
  const target = parseInt(el.dataset.target, 10);
  if (!Number.isFinite(target)) return;

  const duration = 1400;
  const start = performance.now();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    el.textContent = `+${target}`;
    return;
  }

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `+${Math.round(eased * target)}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if (statNumbers.length > 0) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  statNumbers.forEach((el) => statsObserver.observe(el));
}
