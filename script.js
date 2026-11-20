window.hallmarkSlots = (mapping) => {
  for (const [key, value] of Object.entries(mapping)) {
    const slot = document.querySelector(`[data-slot="${key}"]`);
    if (!slot) continue;
    const image = new Image();
    image.src = typeof value === 'string' ? value : value.src;
    image.alt = (typeof value === 'object' && value.alt) || slot.dataset.alt || '';
    slot.querySelectorAll(':scope > img').forEach((oldImage) => oldImage.remove());
    slot.prepend(image);
  }
};

document.querySelectorAll('[data-slot] img').forEach((image) => {
  if (image.complete && !image.naturalWidth) image.remove();
  else image.addEventListener('error', () => image.remove(), { once: true });
});

const navToggle = document.querySelector('.nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');

if (navToggle && primaryNavigation) {
  const closeNavigation = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNavigation.classList.remove('is-open');
  };

  navToggle.addEventListener('click', () => {
    const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(willOpen));
    primaryNavigation.classList.toggle('is-open', willOpen);
  });

  primaryNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
      navToggle.focus();
    }
  });

  window.matchMedia('(min-width: 60.0625rem)').addEventListener('change', closeNavigation);
}

const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const navigationSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && navigationSections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    sectionLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${visibleSection.target.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.5] });

  navigationSections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  const target = document.getElementById(button.dataset.copyTarget);
  const status = button.getAttribute('aria-describedby')
    ? document.getElementById(button.getAttribute('aria-describedby'))
    : null;
  const originalLabel = button.textContent;

  if (!target) return;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = 'Copied';
      if (status) status.textContent = 'The complete product image prompt is ready to paste.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Select and copy';
      if (status) status.textContent = 'The prompt is selected. Use your device copy command.';
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 2400);
  });
});

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!motionQuery.matches && window.gsap && window.ScrollTrigger) {
  window.gsap.registerPlugin(window.ScrollTrigger);

  document.querySelectorAll('[data-reveal-section]').forEach((section) => {
    const revealItems = section.querySelectorAll('h2, .lead, .product-shot, .integration-copy, .sync-caveat');
    window.gsap.from(revealItems, {
      scrollTrigger: { trigger: section, start: 'top 78%', once: true },
      y: 16,
      opacity: 0,
      duration: 0.62,
      stagger: 0.07,
      ease: 'power3.out'
    });
  });

  const syncPath = document.querySelector('.sync-path');
  if (syncPath) {
    const timeline = window.gsap.timeline({
      scrollTrigger: { trigger: syncPath, start: 'top 76%', once: true }
    });
    timeline
      .from(syncPath.querySelectorAll('[data-sync-step]'), { y: 12, opacity: 0, duration: 0.5, stagger: 0.16, ease: 'power3.out' })
      .from(syncPath.querySelectorAll('.sync-connector span'), { scaleX: 0, duration: 0.34, stagger: 0.16, ease: 'power2.out' }, 0.18);
  }
}
