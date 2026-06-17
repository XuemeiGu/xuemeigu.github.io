---
title: Talks
permalink: /talks/
eyebrow: Talks
subtitle: "PLACEHOLDER: Invited talks, conference presentations, seminars, and workshops."
---

<div class="stack">
{% assign talks_sorted = site.talks | sort: "date" | reverse %}
{% for talk in talks_sorted %}
<article class="card">
  <div class="card-meta">
    <span>{{ talk.date | date: "%B %-d, %Y" }}</span>
    {% if talk.location %}<span>{{ talk.location }}</span>{% endif %}
  </div>
  <h3>{{ talk.title }}</h3>
  <p><strong>{{ talk.event }}</strong></p>
  {{ talk.content }}
  {% if talk.slides_url and talk.slides_url != "" %}
  <div class="link-row">
    <a href="{{ talk.slides_url }}">Slides</a>
  </div>
  {% endif %}
</article>
{% endfor %}
</div>
