---
title: Research
permalink: /research/
---

<p class="research-note">
  My research is organized around three connected directions: AI for science and autonomous discovery, de novo design of physics experiments, and quantum science and photonic technologies. See also the <a href="{{ '/code/' | relative_url }}">code and repositories</a>.
</p>

<section class="project-showcase" aria-label="Research projects">
{% assign projects_sorted = site.projects | sort: "order" %}
{% for project in projects_sorted %}
  {% include project-card.html project=project %}
{% endfor %}
</section>
