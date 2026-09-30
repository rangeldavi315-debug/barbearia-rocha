/* =========================================================
   BARBEARIA ROCHA — script.js
   JS mínimo: menu mobile, header no scroll, reveal on scroll.
   ========================================================= */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  var navOverlay = document.getElementById('navOverlay');
  var yearEl = document.getElementById('ano');

  /* Ano dinâmico no rodapé */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Header sólido ao rolar */
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  function openMenu() {
    mainNav.classList.add('is-open');
    navOverlay.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mainNav.classList.remove('is-open');
    navOverlay.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.contains('is-open');
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });
  }
  if (navOverlay) navOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* Fecha o menu ao clicar em um link (mobile) */
  document.querySelectorAll('#mainNav a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  }
})();
