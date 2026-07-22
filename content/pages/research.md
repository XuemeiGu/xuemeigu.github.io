---
title: Research
permalink: /research/
---

<p class="research-note">
  My work brings together artificial intelligence, quantum science, and scientific discovery. See also the <a href="{{ '/code/' | relative_url }}">code and repositories</a>.
</p>

<section class="project-showcase" aria-label="Research projects">
{% assign projects_sorted = site.projects | sort: "order" %}
{% for project in projects_sorted %}
  {% include project-card.html project=project %}
{% endfor %}
</section>
