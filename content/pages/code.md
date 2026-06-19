---
title: Code
permalink: /code/
---

<p class="code-note">
  Selected open-source repositories from research at the interface of AI and quantum physics.
</p>

<section class="code-profile" aria-label="GitHub profile summary">
  <div class="github-stats">
    <img
      src="https://github-readme-stats.vercel.app/api?username=XuemeiGu&amp;show_icons=true&amp;hide=prs,issues,contribs&amp;hide_title=true&amp;hide_border=true&amp;theme=github_dark&amp;rank_icon=github"
      alt="GitHub statistics for Xuemei Gu"
      loading="lazy">
  </div>
</section>

<section class="code-section">
  <div class="code-section-heading">
    <h2>Open-Source Repositories</h2>
  </div>
  <div class="repo-list">
    {% for repo in site.data.repositories %}
      <article class="repo-entry">
        <div>
          <h3><a href="{{ repo.url }}">{{ repo.name }}</a></h3>
          <p>{{ repo.description }}</p>
        </div>
        <a class="publication-link" href="{{ repo.url }}" aria-label="Open {{ repo.name }} on GitHub" title="Repo">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          <span>Repo</span>
        </a>
      </article>
    {% endfor %}
  </div>
</section>
