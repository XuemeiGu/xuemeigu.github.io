---
title: Blog
permalink: /blog/
---

<p class="blog-note">
  Research notes, study notes, short reflections, and occasional personal writing.
</p>

<div class="stack">
{% for post in site.posts %}
<article class="card">
  <div class="card-meta"><span>{{ post.date | date: "%B %-d, %Y" }}</span>{% if post.tags %}<span>{{ post.tags | join: ', ' }}</span>{% endif %}</div>
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% else %}
<p class="blog-note">Blog posts will appear here soon.</p>
{% endfor %}
</div>
