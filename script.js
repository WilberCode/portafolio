const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const carousel = document.querySelector('[data-carousel]');
const revealItems = document.querySelectorAll('.reveal');

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

    for (let i = 0; i < N; i++) {
      const c = originals[i].cloneNode(true);
      frag.appendChild(c);
      cards.push(c);
    }
    originals.forEach(c => { frag.appendChild(c); cards.push(c); });
    for (let i = 0; i < N; i++) {
      const c = originals[i].cloneNode(true);
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
