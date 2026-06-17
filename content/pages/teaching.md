---
title: Teaching & Mentoring
permalink: /teaching/
eyebrow: Teaching
subtitle: "PLACEHOLDER: Courses, tutorials, supervision topics, and student project ideas."
---

## Teaching philosophy

PLACEHOLDER: Write a short teaching philosophy. For example:

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

## Student project ideas

<div class="card-grid three">
{% for project in site.data.teaching.student_projects %}
<article class="card">
  <p class="eyebrow">{{ project.level }}</p>
  <h3>{{ project.title }}</h3>
  <p>{{ project.description }}</p>
</article>
{% endfor %}
</div>

## Mentoring

PLACEHOLDER: Add information about supervision style, office hours, thesis topics, internship opportunities, or what students should prepare before contacting you.
