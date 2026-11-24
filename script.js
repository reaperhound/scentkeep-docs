document.body.classList.add('js');

const navToggle = document.querySelector('.nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');
if (navToggle && primaryNavigation) {
  const closeNavigation = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNavigation.classList.remove('is-open');
  };
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(open));
    primaryNavigation.classList.toggle('is-open', open);
  });
  primaryNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.masthead')) closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
      navToggle.focus();
    }
  });
  window.matchMedia('(min-width: 60.0625rem)').addEventListener('change', closeNavigation);
}

const tabs = [...document.querySelectorAll('.feature-tab')];
const selectTab = (selected) => {
  tabs.forEach((tab) => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
};
if (tabs.length) {
  selectTab(tabs[0]);
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    });
  });
}

const search = document.getElementById('guide-search');
if (search) {
  const cards = [...document.querySelectorAll('[data-guide-search]')];
  const normalize = (text) => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const filterGuides = () => {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    cards.forEach((card) => {
      const content = normalize(`${card.dataset.guideSearch} ${card.textContent}`);
      card.hidden = !terms.every((term) => content.includes(term));
      if (!card.hidden) count++;
    });
    document.getElementById('no-results').hidden = count !== 0;
    document.getElementById('search-status').textContent = `${count} ${count === 1 ? 'guide' : 'guides'} found.`;
  };
  search.addEventListener('input', filterGuides);
  filterGuides();
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input, textarea, select, [contenteditable]')) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === 'Escape' && document.activeElement === search) {
      search.value = '';
      filterGuides();
    }
  });
}

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  const target = document.getElementById(button.dataset.copyTarget);
  const status = document.getElementById(button.getAttribute('aria-describedby'));
  const label = button.textContent;
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
    window.setTimeout(() => { button.textContent = label; }, 2400);
  });
});
