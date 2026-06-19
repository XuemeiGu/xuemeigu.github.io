---
title: CV
permalink: /cv/
---

<a class="button" href="{{ '/assets/files/cv-placeholder.md' | relative_url }}">Open CV placeholder</a>

## Current position

**{{ site.data.profile.position }}**, {{ site.data.profile.institution }}  
PLACEHOLDER: Start date – Present  
PLACEHOLDER: One-sentence description of your current role.

## Education

<div class="timeline">
  <article>
    <time>PLACEHOLDER: 2022–2026</time>
    <h3>PhD / Postdoc / Research position</h3>
    <p>PLACEHOLDER: Institution, supervisor, thesis topic, research field.</p>
  </article>
  <article>
    <time>PLACEHOLDER: 2020–2022</time>
    <h3>Master’s degree</h3>
    <p>PLACEHOLDER: Institution, thesis title, advisor.</p>
  </article>
  <article>
    <time>PLACEHOLDER: 2016–2020</time>
    <h3>Bachelor’s degree</h3>
    <p>PLACEHOLDER: Institution, major, thesis/project.</p>
  </article>
</div>

## Awards and fellowships

- PLACEHOLDER: Award / Fellowship, year
- PLACEHOLDER: Travel grant / Best poster / Scholarship, year
- PLACEHOLDER: Competitive program or school, year

## Invited talks and selected presentations

{% assign talks_sorted = site.data.talks | sort: "date" | reverse %}
{% for talk in talks_sorted %}
- **{{ talk.title }}**, {{ talk.event }}, {{ talk.location }}, {{ talk.date | date: "%Y" }}.
{% endfor %}

## Academic service

- PLACEHOLDER: Reviewer for journal/conference/workshop
- PLACEHOLDER: Organizer of seminar/workshop/reading group
- PLACEHOLDER: Outreach, mentoring, or community service

## Skills

- **Scientific areas:** PLACEHOLDER: quantum optics, quantum many-body physics, AI for science
- **Methods:** PLACEHOLDER: deep learning, probabilistic modeling, differentiable simulation, optimization
- **Programming:** PLACEHOLDER: Python, PyTorch/JAX, Julia, Mathematica, LaTeX
- **Languages:** PLACEHOLDER: English, Chinese, German beginner
