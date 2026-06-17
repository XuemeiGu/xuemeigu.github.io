---
title: Teaching
permalink: /teaching/
eyebrow: Teaching
subtitle: "Courses and tutorials"
---

> I enjoy teaching at the interface of physics, computation, and machine learning. My goal is to help students build both conceptual intuition and practical research skills: clean mathematical reasoning, reproducible coding habits, and the confidence to ask sharp scientific questions.

## Courses and tutorials

<div class="stack">
{% for course in site.data.teaching.courses %}
<article class="card">
  <div class="card-meta"><span>{{ course.term }}</span><span>{{ course.role }}</span></div>
  <h3>{{ course.title }}</h3>
  <p><em>{{ course.institution }}</em></p>
  <p>{{ course.description }}</p>
</article>
{% endfor %}
</div>
