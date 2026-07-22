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
  <p class="news-archive-item">
    <time datetime="{{ item.date }}">{{ item.date | date: "%Y.%m.%d" }}</time>
    <span>{{ item.text }}</span>
  </p>
{% endfor %}
</div>
