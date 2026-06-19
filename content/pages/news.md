---
title: News
permalink: /news/
---

<p class="news-note">
  Announcements about visitors, funding, awards, group activities, talks, and other updates.
</p>

{% assign visible_news = site.data.news | where_exp: "item", "item.published != false" %}

<div class="stack">
{% for item in visible_news %}
<article class="card">
  <div class="card-meta"><span>{{ item.date | date: "%B %-d, %Y" }}</span></div>
  <h3>{{ item.title }}</h3>
  <p>{{ item.text }}</p>
</article>
{% else %}
<p class="news-note">News items will appear here soon.</p>
{% endfor %}
</div>
