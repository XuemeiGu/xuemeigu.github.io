---
layout: default
title: Home
permalink: /
description: "PLACEHOLDER: Personal academic website for Mei YourSurname."
---

<section class="hero-grid">
  <div class="hero-copy">
    <p class="eyebrow">{{ site.data.profile.position }} · {{ site.data.profile.institution }}</p>
    <h1>{{ site.data.profile.name }}</h1>
    <p class="lead">{{ site.data.profile.summary }}</p>

    <div class="hero-actions">
      <a class="button" href="{{ '/research/' | relative_url }}">Explore research</a>
      <a class="button secondary" href="{{ '/publications/' | relative_url }}">Publications</a>
    </div>

    <div class="tag-row spacious">
      {% for keyword in site.data.profile.research_keywords %}
        <span class="tag">{{ keyword }}</span>
      {% endfor %}
    </div>
  </div>

  <aside class="profile-card">
    <img src="{{ '/assets/img/profile-placeholder.svg' | relative_url }}" alt="PLACEHOLDER profile portrait for {{ site.data.profile.name }}" class="profile-photo">
    <h2>{{ site.data.profile.name }}</h2>
    <p>{{ site.data.profile.headline }}</p>
    <p class="small">{{ site.data.profile.location }}</p>
    <div class="profile-links">
      {% for link in site.data.profile.links %}
        <a href="{{ link.url }}">{{ link.label }}</a>
      {% endfor %}
    </div>
  </aside>
</section>

<section class="content-section split">
  <div>
    <p class="eyebrow">Research mission</p>
    <h2>Reliable AI methods for quantum science</h2>
    <p>
      PLACEHOLDER: Use this paragraph to explain your central research question. For example:
      how can machine learning help us represent, control, and understand quantum systems while
      remaining physically interpretable, reproducible, and scientifically useful?
    </p>
    <p>
      PLACEHOLDER: Add 2–3 sentences about your long-term academic vision, the problems you care
      about, and the kind of collaborations you are looking for.
    </p>
  </div>
  <div class="visual-card">
    <img src="{{ '/assets/img/quantum-hero-placeholder.svg' | relative_url }}" alt="Abstract quantum science placeholder illustration">
  </div>
</section>

<section class="content-section">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected projects</p>
      <h2>Current research directions</h2>
    </div>
    <a href="{{ '/research/' | relative_url }}">View all projects →</a>
  </div>

  <div class="card-grid three">
    {% assign selected_projects = site.projects | where: "featured", true | sort: "order" %}
    {% for project in selected_projects limit:3 %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>

<section class="content-section">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Publications</p>
      <h2>Selected papers and preprints</h2>
    </div>
    <a href="{{ '/publications/' | relative_url }}">All publications →</a>
  </div>

  <div class="stack">
    {% assign selected_publications = site.publications | where: "featured", true | sort: "year" | reverse %}
    {% for publication in selected_publications limit:3 %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>

<section class="content-section">
  <div class="section-heading">
    <div>
      <p class="eyebrow">News</p>
      <h2>Recent updates</h2>
    </div>
    <a href="{{ '/notes/' | relative_url }}">Notes →</a>
  </div>

  <div class="timeline">
    {% for item in site.data.news %}
      <article>
        <time>{{ item.date | date: "%b %-d, %Y" }}</time>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    {% endfor %}
  </div>
</section>
