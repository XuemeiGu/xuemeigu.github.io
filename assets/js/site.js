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
  const publicationList = document.querySelector('.publication-list');
  const cards = Array.from(document.querySelectorAll('.publication-card'));
  const resultsLabel = document.querySelector('#publication-results');
  const emptyMessage = document.querySelector('#publication-empty');
  const pagination = document.querySelector('.publication-pagination');
  const pageButtons = document.querySelector('.pagination-pages');
  const prevButton = document.querySelector('[data-pagination="prev"]');
  const nextButton = document.querySelector('[data-pagination="next"]');
  const pageSize = publicationList ? Number(publicationList.dataset.pageSize) || 5 : 5;
  let activeFilter = 'all';
  let currentPage = 1;

  function getMatchingPublicationCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    return cards.filter((card) => {
      const text = (card.dataset.search || card.textContent).toLowerCase();
      const type = card.dataset.type || '';
      const matchesQuery = !query || text.includes(query);
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }

  function getVisiblePublicationPages(totalPages) {
    const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
    const visiblePages = Array.from(pages)
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);

    return visiblePages.reduce((items, page, index) => {
      const previous = visiblePages[index - 1];
      if (previous && page - previous === 2) {
        items.push(previous + 1);
      } else if (previous && page - previous > 2) {
        items.push('ellipsis');
      }
      items.push(page);
      return items;
    }, []);
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
      resultsLabel.hidden = false;
      if (matchingCards.length) {
        const firstVisible = pageStart + 1;
        const lastVisible = Math.min(pageEnd, matchingCards.length);
        resultsLabel.textContent = `Total of ${matchingCards.length} entries: showing ${firstVisible}-${lastVisible}`;
      } else {
        resultsLabel.textContent = 'Total of 0 entries';
      }
    }

    if (emptyMessage) {
      emptyMessage.hidden = matchingCards.length > 0;
    }

    if (pagination && pageButtons && prevButton && nextButton) {
      pagination.hidden = matchingCards.length <= pageSize;
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
      pageButtons.replaceChildren();

      getVisiblePublicationPages(totalPages).forEach((page) => {
        if (page === 'ellipsis') {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'pagination-ellipsis';
          ellipsis.textContent = '...';
          pageButtons.append(ellipsis);
          return;
        }

        const button = document.createElement('button');
        button.className = 'pagination-button';
        button.type = 'button';
        button.textContent = formatPublicationPageRange(page, matchingCards.length);
        button.setAttribute('aria-label', `Show entries ${button.textContent}`);
        if (page === currentPage) {
          button.classList.add('active');
          button.setAttribute('aria-current', 'page');
        }
        button.addEventListener('click', () => {
          currentPage = page;
          updatePublicationPagination();
        });
        pageButtons.append(button);
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

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.filter || 'all';
      resetPublicationPage();
    });
  });

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      currentPage = Math.max(1, currentPage - 1);
      updatePublicationPagination();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      currentPage += 1;
      updatePublicationPagination();
    });
  }

  updatePublicationPagination();
})();
