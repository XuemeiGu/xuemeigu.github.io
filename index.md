---
layout: default
title: Home
permalink: /
description: "Personal academic website for Xuemei Gu."
---

<section id="home" class="intro-section">
  <aside class="academic-profile">
    <img src="{{ '/assets/img/profile-placeholder.svg' | relative_url }}" alt="Profile portrait for {{ site.data.profile.name }}" class="profile-photo">
    <h1>{{ site.data.profile.name }}</h1>
    <p class="profile-title">{{ site.data.profile.position }}</p>
    <p class="profile-affiliation">{{ site.data.profile.institution }}</p>
    <div class="profile-links icon-links">
      {% for link in site.data.profile.links %}
        <a href="{{ link.url }}">{{ link.label }}</a>
      {% endfor %}
    </div>
  </aside>

  <div class="about-panel">
    <h2>About me</h2>
    <p>{{ site.data.profile.summary }}</p>

    <h3>Research interests</h3>
    <ul class="interest-list">
      {% for keyword in site.data.profile.research_keywords %}
        <li>{{ keyword }}</li>
      {% endfor %}
    </ul>

    <h3>Open directions</h3>
    <p>
      My work connects machine learning, quantum physics, and AI-assisted scientific workflows,
      with an emphasis on AI methods that can support modeling, control, and discovery.
    </p>
  </div>
</section>

<section id="news" class="academic-section section-grid">
  <div class="section-label">
    <h2>Last news</h2>
  </div>
  <div class="section-body">
    <div class="filter-tabs" aria-label="News categories">
      <span class="active">All</span>
      <span>Research</span>
      <span>Teaching</span>
      <span>Personal</span>
    </div>

    <div class="news-list">
      {% for item in site.data.news %}
        <article class="news-item">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <time>Posted {{ item.date | date: "%b %-d, %Y" }}</time>
          </div>
          <span class="news-mark">{{ item.title | slice: 0 }}</span>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section id="background" class="academic-section section-grid">
  <div class="section-label">
    <h2>Background</h2>
  </div>
  <div class="section-body two-column">
    <div>
      <h3>Interests</h3>
      <ul class="interest-list compact">
        {% for keyword in site.data.profile.research_keywords limit:5 %}
          <li>{{ keyword }}</li>
        {% endfor %}
      </ul>
    </div>
    <div>
      <h3>Current position</h3>
      <div class="timeline-list">
        <article>
          <h4>{{ site.data.profile.position }}</h4>
          <p>{{ site.data.profile.institution }}</p>
          <span>{{ site.data.profile.location }}</span>
        </article>
        <article>
          <h4>Research focus</h4>
          <p>{{ site.data.profile.subheadline }}</p>
          <span>AI for Science and Quantum Physics</span>
        </article>
      </div>
    </div>
  </div>
</section>

<section id="experience" class="academic-section section-grid">
  <div class="section-label">
    <h2>Experience</h2>
  </div>
  <div class="section-body">
    <div class="experience-list">
      {% assign selected_projects = site.projects | sort: "order" %}
      {% for project in selected_projects limit:4 %}
        <article class="experience-item">
          <div class="experience-logo">{{ project.title | slice: 0 }}</div>
          <div>
            <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
            {% if project.period %}<p class="item-meta">{{ project.period }}</p>{% endif %}
            {% if project.short_description %}<p>{{ project.short_description }}</p>{% endif %}
            {% if project.tags %}
              <div class="tag-row">
                {% for tag in project.tags limit:3 %}<span class="tag">{{ tag }}</span>{% endfor %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section id="publications" class="academic-section section-grid">
  <div class="section-label">
    <h2>Last publications</h2>
  </div>
  <div class="section-body">
    <div class="publication-list compact-publications">
      {% assign selected_publications = site.publications | sort: "year" | reverse %}
      {% for publication in selected_publications limit:6 %}
        <article class="publication-row">
          <p>
            {{ publication.authors }} ({{ publication.year }}).
            <a href="{{ publication.url | relative_url }}">{{ publication.title }}</a>.
            <em>{{ publication.venue }}</em>.
          </p>
          <div class="link-row">
            {% if publication.paper_url and publication.paper_url != "" %}<a href="{{ publication.paper_url }}">Paper</a>{% endif %}
            {% if publication.code_url and publication.code_url != "" %}<a href="{{ publication.code_url }}">Code</a>{% endif %}
            {% if publication.data_url and publication.data_url != "" %}<a href="{{ publication.data_url }}">Data</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
    <p class="more-link"><a href="{{ '/publications/' | relative_url }}">See all publications</a></p>
  </div>
</section>

<section id="contact" class="academic-section section-grid">
  <div class="section-label">
    <h2>Contact</h2>
  </div>
  <div class="section-body contact-list">
    <p><a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a></p>
    <p>{{ site.data.profile.institution }} · {{ site.data.profile.location }}</p>
  </div>
</section>
