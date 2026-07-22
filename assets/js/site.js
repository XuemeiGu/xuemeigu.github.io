(function () {
  const root = document.documentElement;
  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem('theme');
  } catch (error) {
    storedTheme = null;
  }
  root.setAttribute('data-theme', storedTheme || 'dark');

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.textContent = root.getAttribute('data-theme') === 'dark' ? '☾' : '☀';
    themeButton.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      try {
        localStorage.setItem('theme', current);
      } catch (error) {
        // Theme persistence is optional.
      }
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
  const typeSelect = document.querySelector('#publication-type');
  const sortSelect = document.querySelector('#publication-sort');
  const publicationList = document.querySelector('.publication-list');
  const cards = Array.from(document.querySelectorAll('.publication-card'));
  const publicationControls = document.querySelector('.publication-controls');
  const resultsLabel = document.querySelector('#publication-results');
  const emptyMessage = document.querySelector('#publication-empty');
  const paginationControls = Array.from(document.querySelectorAll('.publication-pagination'));
  const paginationStatus = Array.from(document.querySelectorAll('.pagination-status'));
  const prevButtons = Array.from(document.querySelectorAll('[data-pagination="prev"]'));
  const nextButtons = Array.from(document.querySelectorAll('[data-pagination="next"]'));
  const pageSize = publicationList ? Number(publicationList.dataset.pageSize) || 5 : 5;
  let currentPage = 1;

  function sortPublicationCards() {
    if (!publicationList || !cards.length) {
      return;
    }

    const sortMode = sortSelect ? sortSelect.value : 'date-desc';

    cards.sort((firstCard, secondCard) => {
      const firstYear = Number(firstCard.dataset.year) || 0;
      const secondYear = Number(secondCard.dataset.year) || 0;

      if (firstYear !== secondYear) {
        return sortMode === 'date-asc' ? firstYear - secondYear : secondYear - firstYear;
      }

      return (firstCard.dataset.title || '').localeCompare(secondCard.dataset.title || '');
    });

    cards.forEach((card) => {
      publicationList.append(card);
    });
  }

  function getMatchingPublicationCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeFilter = typeSelect ? typeSelect.value : 'all';
    return cards.filter((card) => {
      const text = (card.dataset.search || card.textContent).toLowerCase();
      const type = card.dataset.type || '';
      const matchesQuery = !query || text.includes(query);
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }

  function formatPublicationPageRange(page, totalEntries) {
    const firstEntry = (page - 1) * pageSize + 1;
    const lastEntry = Math.min(page * pageSize, totalEntries);
    return firstEntry === lastEntry ? String(firstEntry) : `${firstEntry}-${lastEntry}`;
  }

  function updatePublicationPagination() {
    if (!cards.length) {
      return;
    }

    const matchingCards = getMatchingPublicationCards();
    const totalPages = Math.max(1, Math.ceil(matchingCards.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const pageStart = (currentPage - 1) * pageSize;
    const pageEnd = pageStart + pageSize;

    cards.forEach((card) => {
      card.style.display = 'none';
    });

    matchingCards.slice(pageStart, pageEnd).forEach((card) => {
      card.style.display = '';
    });

    if (resultsLabel) {
      if (matchingCards.length) {
        resultsLabel.textContent = `Total of ${matchingCards.length} entries`;
      } else {
        resultsLabel.textContent = 'Total of 0 entries';
      }
    }

    if (emptyMessage) {
      emptyMessage.hidden = matchingCards.length > 0;
    }

    if (publicationControls) {
      publicationControls.hidden = false;
    }

    if (paginationControls.length) {
      paginationControls.forEach((control) => {
        control.hidden = matchingCards.length <= pageSize;
      });

      prevButtons.forEach((button) => {
        button.disabled = currentPage === 1;
      });

      nextButtons.forEach((button) => {
        button.disabled = currentPage === totalPages;
      });

      paginationStatus.forEach((status) => {
        if (matchingCards.length <= pageSize) {
          status.textContent = '';
        } else {
          status.textContent = `Page ${currentPage} of ${totalPages} · ${formatPublicationPageRange(currentPage, matchingCards.length)}`;
        }
      });
    }
  }

  function resetPublicationPage() {
    currentPage = 1;
    updatePublicationPagination();
  }

  if (searchInput) {
    searchInput.addEventListener('input', resetPublicationPage);
  }

  if (typeSelect) {
    typeSelect.addEventListener('change', resetPublicationPage);
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortPublicationCards();
      resetPublicationPage();
    });
  }

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentPage = Math.max(1, currentPage - 1);
      updatePublicationPagination();
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentPage += 1;
      updatePublicationPagination();
    });
  });

  sortPublicationCards();
  updatePublicationPagination();
})();
