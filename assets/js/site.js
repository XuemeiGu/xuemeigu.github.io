(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  root.setAttribute('data-theme', storedTheme || 'dark');

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.textContent = root.getAttribute('data-theme') === 'dark' ? '☾' : '☀';
    themeButton.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      themeButton.textContent = current === 'dark' ? '☾' : '☀';
    });
  }

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const searchInput = document.querySelector('#publication-search');
  const filterButtons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.publication-card');
  let activeFilter = 'all';

  function applyPublicationFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const type = card.dataset.type || '';
      const matchesQuery = !query || text.includes(query);
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      card.style.display = matchesQuery && matchesFilter ? '' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyPublicationFilters);
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.filter || 'all';
      applyPublicationFilters();
    });
  });
})();
