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

<div class="filter-panel">
  <label for="publication-search">Search publications</label>
  <input id="publication-search" type="search" placeholder="Search title, author, venue, year...">
  <div class="filter-buttons" aria-label="Publication filters">
    <button class="filter-button active" data-filter="all" type="button">All</button>
    <button class="filter-button" data-filter="preprint" type="button">Preprints</button>
    <button class="filter-button" data-filter="journal" type="button">Journal</button>
    <button class="filter-button" data-filter="conference" type="button">Conference</button>
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
