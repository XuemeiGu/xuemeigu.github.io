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

<div class="stack publication-list">
{% assign publications_sorted = site.publications | sort: "year" | reverse %}
{% for publication in publications_sorted %}
  {% include publication-card.html publication=publication %}
{% endfor %}
</div>
