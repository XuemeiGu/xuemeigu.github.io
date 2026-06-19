---
title: Talks & Posters
permalink: /talks/
---

<p class="talk-note">
  Selected conference talks, workshop contributions, seminars, and poster presentations.
</p>

<div class="cv-list">
{% assign talks_sorted = site.data.talks | sort: "date" | reverse %}
{% for talk in talks_sorted %}
  <article class="cv-entry">
    <time>{{ talk.date | date: "%Y.%m.%d" }}</time>
    <div>
      <h3>{{ talk.title }}</h3>
      <p>
        <strong>{{ talk.event }}</strong>{% if talk.location and talk.location != "" %}, {{ talk.location }}{% endif %}.
      </p>
      {% assign talk_text = talk.description | default: "" | strip %}
      {% if talk_text != "" %}
        <p>{{ talk_text }}</p>
      {% endif %}
      {% if talk.slides_url and talk.slides_url != "" %}
        <div class="link-row">
          <a href="{{ talk.slides_url }}">Slides</a>
        </div>
      {% endif %}
  </div>
  </article>
{% endfor %}
</div>
