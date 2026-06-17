---
title: Research
permalink: /research/
eyebrow: Research
subtitle: "PLACEHOLDER: A concise overview of your research program, methods, and open directions."
---

## Research overview

PLACEHOLDER: Write a 1–2 paragraph overview of your research. A strong academic website usually makes the following clear:

- What scientific problem do you study?
- Why does it matter now?
- What is your methodological angle?
- What makes your perspective distinctive?

For example:

> My research develops machine learning methods that help model, control, and interpret quantum systems. I am especially interested in methods that combine physical structure with modern AI architectures, including neural representations, differentiable simulations, and foundation-model-assisted scientific workflows.

## Research projects

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

## Collaboration interests

PLACEHOLDER: Mention the types of collaborations you welcome. For example, theory groups, experimental quantum optics labs, AI-for-science teams, or students interested in interpretable ML for physics.
