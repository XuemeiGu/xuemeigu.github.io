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

## Methods and themes

<div class="card-grid three">
  <article class="card">
    <h3>Physics-informed machine learning</h3>
    <p>PLACEHOLDER: Describe how you use symmetries, constraints, conservation laws, or physical priors.</p>
  </article>
  <article class="card">
    <h3>Scientific foundation models</h3>
    <p>PLACEHOLDER: Describe your interest in LLMs, multimodal models, or agents for scientific reasoning.</p>
  </article>
  <article class="card">
    <h3>Quantum simulation and control</h3>
    <p>PLACEHOLDER: Describe your quantum-optics, many-body, control, or experimental collaborations.</p>
  </article>
</div>
