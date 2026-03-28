/* ============================================
   SARA BARKAT — PORTFOLIO v2 SCRIPT
   ============================================ */

// ---- CUSTOM CURSOR ----
const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .skill-card, .proj-card, .project-hero, input, textarea').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
    cursorRing.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
    cursorRing.classList.remove('hovered');
  });
});

// ---- HEADER SCROLL ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
}, { passive: true });

// ---- BURGER MENU ----
const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  const open = navbar.classList.toggle('open');
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  }
});

// Close on nav click
navbar.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  });
});

// Close on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target) && !burger.contains(e.target)) {
    navbar.classList.remove('open');
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  }
});

// ---- ACTIVE NAV ----
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}

// ---- SCROLL REVEAL ----
const revealTargets = document.querySelectorAll(
  '.section-header, .about-text-col, .about-info-col, ' +
  '.skill-card, .project-hero, .proj-card, ' +
  '.contact-left, .contact-right, .astat, .clink, .info-card'
);

revealTargets.forEach(el => el.classList.add('reveal'));

// Stagger grid children
['.skills-grid', '.projects-grid', '.about-stats-row', '.contact-links'].forEach(sel => {
  const grid = document.querySelector(sel);
  if (!grid) return;
  grid.querySelectorAll('.reveal').forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.07}s`;
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

revealTargets.forEach(el => observer.observe(el));

// ---- CONTACT FORM ----
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-send');
    const span = btn.querySelector('span');
    const originalText = span.textContent;

    span.textContent = 'Envoi en cours…';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        span.textContent = 'Message envoyé ✓';
        btn.style.background = '#4ade80';
        btn.style.opacity = '1';
        form.reset();
        setTimeout(() => {
          span.textContent = originalText;
          btn.style.background = '';
          btn.style.opacity = '';
          btn.disabled = false;
        }, 4000);
      } else {
        throw new Error('Erreur serveur');
      }
    } catch {
      span.textContent = 'Erreur — Réessayer';
      btn.style.background = '#ef4444';
      btn.style.opacity = '1';
      setTimeout(() => {
        span.textContent = originalText;
        btn.style.background = '';
        btn.style.opacity = '';
        btn.disabled = false;
      }, 3000);
    }
  });
}

// ---- SMOOTH SCROLL OFFSET (for fixed header) ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});