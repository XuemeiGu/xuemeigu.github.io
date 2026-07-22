---
title: Outreach
permalink: /outreach/
---

<div class="outreach-page">
  <header class="outreach-intro">
    <div>
      <p class="eyebrow">Academic engagement</p>
      <p class="service-note">
        Selected talks and posters, teaching, supervision, reviewing, and academic service.
      </p>
    </div>
    <nav class="outreach-jump-links" aria-label="Outreach sections">
      <a href="#talks">Talks &amp; Posters</a>
      <a href="#teaching">Teaching</a>
      <a href="#supervision">Supervision</a>
      <a href="#academic-service">Academic Service</a>
    </nav>
  </header>

<section class="service-section" id="talks">
  <div class="service-section-heading">
    <h2>Talks &amp; Posters</h2>
    <p>A curated selection of recent and notable contributions.</p>
  </div>
  <div class="outreach-event-grid">
  {% assign talks_sorted = site.data.talks | sort: "date" | reverse %}
  {% for talk in talks_sorted %}
    <article class="outreach-event-card">
      <div class="outreach-event-meta">
        <time datetime="{{ talk.date }}">{{ talk.date | date: "%b %Y" }}</time>
        <span>{{ talk.kind | default: "Talk" }}</span>
      </div>
      <h3>{{ talk.event }}</h3>
      <p class="outreach-event-topic">{{ talk.title }}</p>
      {% if talk.location and talk.location != "" %}
        <p class="outreach-event-location">{{ talk.location }}</p>
      {% endif %}
      {% assign talk_text = talk.description | default: "" | strip %}
      {% if talk_text != "" %}
        <p class="outreach-event-description">{{ talk_text }}</p>
      {% endif %}
      {% if talk.slides_url and talk.slides_url != "" %}
        <div class="link-row">
          <a href="{{ talk.slides_url }}">Slides</a>
        </div>
      {% endif %}
    </article>
  {% endfor %}
  </div>
</section>

<section class="service-section" id="teaching">
  <div class="service-section-heading">
    <h2>Teaching</h2>
  </div>
  <div class="service-list">
    <article class="service-entry">
      <time>WS 2025/26</time>
      <div>
        <h3>AI for Quantum Physics</h3>
        <p>Lecturer, Friedrich Schiller University Jena, Germany.</p>
      </div>
    </article>
    <article class="service-entry">
      <time>SS 2026</time>
      <div>
        <h3>Advanced Topics in Quantum Information Technology</h3>
        <p>Guest lecturer, Friedrich Schiller University Jena, Germany.</p>
      </div>
    </article>
    <article class="service-entry">
      <time>SS 2025</time>
      <div>
        <h3>Advanced Quantum Communication</h3>
        <p>Guest lecturer, Friedrich Schiller University Jena, Germany.</p>
      </div>
    </article>
    <article class="service-entry">
      <time>WS 2019/20</time>
      <div>
        <h3>Introduction to Quantum Information</h3>
        <p>Teaching assistant, Nanjing University, China.</p>
      </div>
    </article>
    <article class="service-entry">
      <time>WS 2015/16</time>
      <div>
        <h3>Principles and Applications of Sensors</h3>
        <p>Lecturer, Zijin College, Nanjing University of Science and Technology, Nanjing, China.</p>
      </div>
    </article>
    <article class="service-entry">
      <time>SS 2015</time>
      <div>
        <h3>Data Communication</h3>
        <p>Teaching assistant, Nanjing University, China.</p>
      </div>
    </article>
  </div>
</section>

<section class="service-section" id="supervision">
  <div class="service-section-heading">
    <h2>Supervision</h2>
  </div>
  <article class="service-feature">
    <time>Since 2021</time>
    <div>
      <h3>Research supervision and co-supervision</h3>
      <p>5 PhD students and 3 Master's students in experimental quantum optics, quantum technologies, and AI-driven scientific discovery in physics.</p>
    </div>
  </article>
</section>

<section class="service-section" id="academic-service">
  <div class="service-section-heading">
    <h2>Reviewing &amp; Academic Service</h2>
  </div>
  <div class="service-list">
    <article class="service-panel">
      <span>Reviewer</span>
      <div>
        <h3>Journal and publication review</h3>
        <p>Nature Photonics, Nature Machine Intelligence, Light: Science &amp; Applications, Physical Review Letters, PRX Intelligence, Physical Review Applied, Physical Review A, Quantum, New Journal of Physics, Advanced Photonics Nexus, PNAS Nexus, Machine Learning: Science and Technology, and others.</p>
      </div>
    </article>
    <article class="service-panel">
      <span>Editor</span>
      <div>
        <h3>Guest editor</h3>
        <p>Topic on Nonlinear and Quantum Optics in Micro-Nano Structures for Frontiers in Physics.</p>
      </div>
    </article>
    <article class="service-panel">
      <span>Project review</span>
      <div>
        <h3>Funding review</h3>
        <p>Austrian Science Fund (FWF).</p>
      </div>
    </article>
  </div>
</section>

</div>
