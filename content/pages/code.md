---
title: Code
permalink: /code/
---

<p class="code-note">
  Research code, tools, and open-source projects related to AI-assisted scientific discovery and quantum physics.
</p>

<section class="code-section">
  <div class="code-section-heading">
    <h2>Open-Source Repositories</h2>
  </div>
  <div class="repo-list">
    {% for repo in site.data.repositories %}
      {% assign repo_path = repo.url | remove: "https://github.com/" | remove: "http://github.com/" %}
      <article class="repo-entry">
        <div>
          <h3><a href="{{ repo.url }}">{{ repo.name }}</a></h3>
          <p>{{ repo.description }}</p>
        </div>
        <a class="repo-stars" href="{{ repo.url }}" aria-label="GitHub stars for {{ repo.name }}" title="GitHub stars">
          <img src="https://img.shields.io/github/stars/{{ repo_path }}?style=flat&amp;label=%E2%98%85&amp;color=4f8de8&amp;labelColor=242733" alt="GitHub stars for {{ repo.name }}" loading="lazy">
        </a>
      </article>
    {% endfor %}
  </div>
</section>
