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
