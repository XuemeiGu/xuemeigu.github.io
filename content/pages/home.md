---
layout: default
title: Home
permalink: /
description: "Personal website for Xuemei Gu."
---

<section id="home" class="intro-section">
  <aside class="academic-profile">
    <img src="{{ '/assets/img/profile.png' | relative_url }}" alt="Profile portrait for {{ site.data.profile.name }}" class="profile-photo">
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

<section id="contact" class="academic-section section-grid">
  <div class="section-label">
    <h2>Contact</h2>
  </div>
  <div class="section-body contact-list">
    <div class="contact-layout">
      <ul class="contact-details">
        <li>
          <strong>Email</strong>
          <span><a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a></span>
        </li>
        <li>
          <strong>address</strong>
          <span>
            Institut für Festkörpertheorie und -optik<br>
            {{ site.data.profile.institution }}<br>
            Fröbelstieg 1<br>
            07743 Jena, Germany
          </span>
        </li>
      </ul>

      <div class="contact-map" aria-label="Map showing Friedrich Schiller University Jena">
        <iframe
          title="Map of Friedrich Schiller University Jena"
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.5797%2C50.9239%2C11.6002%2C50.9348&amp;layer=mapnik&amp;marker=50.9294%2C11.5899"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a href="https://www.openstreetmap.org/?mlat=50.9294&amp;mlon=11.5899#map=16/50.9294/11.5899">View larger map</a>
      </div>
    </div>
  </div>
</section>
