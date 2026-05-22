/* 派+ · 官网交互 */

(function () {
  'use strict';

  // 年份注入
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ---- 平滑滚动（处理同页锚点）----
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---- IntersectionObserver 入场动画 ----
  const items = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && items.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.delay || 0);
          setTimeout(() => el.classList.add('is-visible'), delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- Hero 手机轻微视差（鼠标移动）----
  const hero = document.querySelector('.hero');
  const heroVisual = document.querySelector('.hero-visual');
  if (hero && heroVisual && window.matchMedia('(hover: hover)').matches) {
    let raf = null;
    hero.addEventListener('mousemove', (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const phone = heroVisual.querySelector('.phone-frame');
        const cardBreath = heroVisual.querySelector('.card-breath');
        const cardLock = heroVisual.querySelector('.card-lock');
        if (phone) phone.style.transform = `translate3d(${x * -14}px, ${y * -14}px, 0) rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;
        if (cardBreath) cardBreath.style.transform = `translate3d(${x * 18}px, ${y * 18}px, 0)`;
        if (cardLock) cardLock.style.transform = `translate3d(${x * -22}px, ${y * 22}px, 0)`;
        raf = null;
      });
    });
    hero.addEventListener('mouseleave', () => {
      const phone = heroVisual.querySelector('.phone-frame');
      const cardBreath = heroVisual.querySelector('.card-breath');
      const cardLock = heroVisual.querySelector('.card-lock');
      [phone, cardBreath, cardLock].forEach((el) => {
        if (el) el.style.transform = '';
      });
    });
  }

  // ---- 滚动时导航栏阴影增强 ----
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        nav.style.boxShadow = '0 10px 40px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.08)';
      } else {
        nav.style.boxShadow = '';
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
