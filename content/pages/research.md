---
title: Research
permalink: /research/
---

<p class="research-note">
  Research themes at the interface of artificial intelligence, quantum optics, and scientific discovery.
</p>

<section class="project-showcase" aria-label="Research projects">
{% assign projects_sorted = site.projects | sort: "order" %}
{% for project in projects_sorted %}
  {% include project-card.html project=project %}
{% endfor %}
</section>
