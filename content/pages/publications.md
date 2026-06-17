---
title: Publications
permalink: /publications/
eyebrow: Publications
subtitle: "PLACEHOLDER: Replace these sample entries with your real papers, preprints, talks, and code links."
---

<div class="filter-panel">
  <label for="publication-search">Search publications</label>
  <input id="publication-search" type="search" placeholder="Search title, author, venue, tags...">
  <div class="filter-buttons" aria-label="Publication filters">
    <button class="filter-button active" data-filter="all" type="button">All</button>
    <button class="filter-button" data-filter="preprint" type="button">Preprints</button>
    <button class="filter-button" data-filter="journal" type="button">Journal</button>
    <button class="filter-button" data-filter="conference" type="button">Conference</button>
  </div>
</div>

<div class="stack publication-list">
{% assign publications_sorted = site.publications | sort: "year" | reverse %}
{% for publication in publications_sorted %}
  {% include publication-card.html publication=publication %}
{% endfor %}
</div>

## How to edit this page

Each publication lives in `content/collections/_publications/` as a separate Markdown file. Copy one of the placeholder files, rename it, and edit the front matter fields such as `title`, `authors`, `venue`, `year`, `paper_url`, and `tags`.
