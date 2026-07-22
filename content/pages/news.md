---
title: News
permalink: /news/
description: Recent news, talks, publications, and professional highlights from Xuemei Gu.
---

<header class="news-page-intro">
  <p class="eyebrow">Updates</p>
  <p>Recent talks, publications, awards, and professional highlights.</p>
</header>

{% assign visible_news = site.data.news | where_exp: "item", "item.published != false" | sort: "date" | reverse %}
<div class="news-archive">
{% for item in visible_news %}
  <article class="news-archive-item">
    <time datetime="{{ item.date }}">{{ item.date | date: "%Y.%m.%d" }}</time>
    <div>
      <h2>{{ item.title }}</h2>
      <p>{{ item.text }}</p>
    </div>
  </article>
{% endfor %}
</div>
