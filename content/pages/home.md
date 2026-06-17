---
layout: default
title: Home
permalink: /
description: "Personal website for Xuemei Gu."
---

<section id="home" class="intro-section">
  <aside class="academic-profile">
    <img src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="Profile portrait for {{ site.data.profile.name }}" class="profile-photo">
    <h1>{{ site.data.profile.name }}</h1>
    <p class="profile-title">{{ site.data.profile.position }}</p>
    <p class="profile-affiliation">{{ site.data.profile.institution }}</p>
    <div class="profile-links icon-links">
      {% for link in site.data.profile.links %}
        {% include social-link.html link=link %}
      {% endfor %}
    </div>
  </aside>

  <div class="about-panel">
    <h2>About me</h2>
    <p>{{ site.data.profile.summary }}</p>

    <h3>Research interests</h3>
    <ul class="interest-list">
      {% for keyword in site.data.profile.research_keywords %}
        <li>{{ keyword }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section id="news" class="academic-section section-grid">
  <div class="section-label">
    <h2>Last news</h2>
  </div>
  <div class="section-body">
    <div class="filter-tabs" aria-label="News categories">
      <span class="active">All</span>
      <span>Research</span>
      <span>Teaching</span>
      <span>Personal</span>
    </div>

    <div class="news-list">
      {% for item in site.data.news %}
        <article class="news-item">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <time>Posted {{ item.date | date: "%b %-d, %Y" }}</time>
          </div>
          <span class="news-mark">{{ item.title | slice: 0 }}</span>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section id="contact" class="academic-section section-grid">
  <div class="section-label">
    <h2>Contact</h2>
  </div>
  <div class="section-body contact-list">
    <ul class="contact-details">
      <li>
        <strong>Email</strong>
        <span><a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a></span>
      </li>
      <li>
        <strong>Institution</strong>
        <span>{{ site.data.profile.institution }}</span>
      </li>
      <li>
        <strong>Visitor address</strong>
        <span>{{ site.data.profile.institution }}<br>{{ site.data.profile.location }}</span>
      </li>
    </ul>
  </div>
</section>
