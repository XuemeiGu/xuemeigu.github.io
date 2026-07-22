---
title: Publications
permalink: /publications/
---

{% assign scholar_url = "" %}
{% for link in site.data.profile.links %}
  {% if link.label == "Google Scholar" %}
    {% assign scholar_url = link.url %}
  {% endif %}
{% endfor %}

<p class="publication-note">
  Here I list the publications; for citations please have a look at <a href="{{ scholar_url }}">Google Scholar</a>.
</p>

<div class="filter-panel" role="search" aria-label="Filter publications">
  <label class="visually-hidden" for="publication-search">Search publications</label>
  <input id="publication-search" type="search" placeholder="Search..." autocomplete="off">

  <div class="filter-select">
    <label class="visually-hidden" for="publication-type">Publication type</label>
    <select id="publication-type">
      <option value="all">All publication types</option>
      <option value="preprint">Preprint</option>
      <option value="journal">Journal paper</option>
      <option value="conference">Conference paper</option>
    </select>
  </div>

  <div class="filter-select">
    <label class="visually-hidden" for="publication-sort">Sort publications</label>
    <select id="publication-sort">
      <option value="date-desc">Date: newest first</option>
      <option value="date-asc">Date: oldest first</option>
    </select>
  </div>
</div>

<div class="publication-controls" hidden>
  <p class="publication-results" id="publication-results" aria-live="polite"></p>
  <nav class="publication-pagination" aria-label="Publication pages" hidden>
    <button class="pagination-button" data-pagination="prev" type="button">Previous</button>
    <span class="pagination-status" aria-live="polite"></span>
    <button class="pagination-button" data-pagination="next" type="button">Next</button>
  </nav>
</div>

<div class="stack publication-list" data-page-size="10">
{% assign publications_sorted = site.data.publications | sort: "year" | reverse %}
{% for publication in publications_sorted %}
  {% include publication-card.html publication=publication %}
{% endfor %}
</div>

<p class="publication-empty" id="publication-empty" hidden>No publications match your search.</p>
