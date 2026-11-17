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
