---
title: Research
permalink: /research/
eyebrow: Research
subtitle: "Research Topics"
---

## Research

<div class="card-grid two">
{% assign ordered_projects = site.projects | sort: "order" %}
{% for project in ordered_projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>
