---
title: Blog
permalink: /blog/
eyebrow: Blog
subtitle: "PLACEHOLDER: Short research updates, reading notes, announcements, and reflections."
---

<div class="stack">
{% for post in site.posts %}
<article class="card">
  <div class="card-meta"><span>{{ post.date | date: "%B %-d, %Y" }}</span>{% if post.tags %}<span>{{ post.tags | join: ', ' }}</span>{% endif %}</div>
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
</div>

## Suggested note types

- Research updates after a preprint, conference, or workshop
- Reading notes on AI for science, quantum optics, or foundation models
- Short explainers for students
- Notes about reproducibility, scientific workflows, or useful tools
