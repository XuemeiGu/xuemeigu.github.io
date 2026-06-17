---
title: Research
permalink: /research/
eyebrow: Research
subtitle: "Research Topics"
---

## Research

<div class="project-list">
{% assign ordered_projects = site.projects | sort: "order" %}
{% for project in ordered_projects %}
  <article class="project-list-item">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <div class="item-meta">
      {% if project.status %}<span>{{ project.status }}</span>{% endif %}
      {% if project.period %}<span>{{ project.period }}</span>{% endif %}
    </div>
    {% if project.short_description %}<p>{{ project.short_description }}</p>{% endif %}
    {% if project.tags %}
      <p class="project-tags">{{ project.tags | join: " · " }}</p>
    {% endif %}
  </article>
{% endfor %}
</div>
