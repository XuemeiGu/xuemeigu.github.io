---
title: Outreach
permalink: /outreach/
---

<div class="outreach-page">
  <header class="outreach-intro">
    <div>
      <p class="service-note">
        Selected talks and posters, teaching, supervision, and academic service.
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
  <div class="outreach-content-box">
    <ul class="outreach-text-list outreach-talk-list">
    {% assign talks_sorted = site.data.talks | sort: "date" | reverse %}
    {% for talk in talks_sorted %}
      <li>
        <p>
          <time datetime="{{ talk.date }}">{{ talk.date | date: "%Y.%m.%d" }}</time>
          <span class="outreach-line-text">{{ talk.title }}, {{ talk.event }}{% if talk.location and talk.location != "" %}, {{ talk.location }}{% endif %}</span>
          {% if talk.slides_url and talk.slides_url != "" %}<a href="{{ talk.slides_url }}">Slides</a>{% endif %}
        </p>
      </li>
    {% endfor %}
    </ul>
  </div>
</section>

<section class="service-section" id="teaching">
  <div class="service-section-heading">
    <h2>Teaching</h2>
  </div>
  <div class="outreach-content-box">
    <ul class="outreach-text-list outreach-teaching-list">
      <li>
        <p><time>WS 2025/26</time><span class="outreach-line-text">AI for Quantum Physics, Lecturer, Friedrich Schiller University Jena, Germany</span></p>
      </li>
      <li>
        <p><time>SS 2026</time><span class="outreach-line-text">Advanced Topics in Quantum Information Technology, Guest lecturer, Friedrich Schiller University Jena, Germany</span></p>
      </li>
      <li>
        <p><time>SS 2025</time><span class="outreach-line-text">Advanced Quantum Communication, Guest lecturer, Friedrich Schiller University Jena, Germany</span></p>
      </li>
      <li>
        <p><time>WS 2019/20</time><span class="outreach-line-text">Introduction to Quantum Information, Teaching assistant, Nanjing University, China</span></p>
      </li>
      <li>
        <p><time>WS 2015/16</time><span class="outreach-line-text">Principles and Applications of Sensors, Lecturer, Zijin College, Nanjing University of Science and Technology, Nanjing, China</span></p>
      </li>
      <li>
        <p><time>SS 2015</time><span class="outreach-line-text">Data Communication, Teaching assistant, Nanjing University, China</span></p>
      </li>
    </ul>
  </div>
</section>

<section class="service-section" id="supervision">
  <div class="service-section-heading">
    <h2>Supervision</h2>
  </div>
  <div class="outreach-content-box">
    <ul class="outreach-text-list outreach-supervision-list">
      <li>
        <p><span class="outreach-entry-key">Since 2021</span><span class="outreach-line-text">Research supervision and co-supervision, 5 PhD students and 3 Master's students in experimental quantum optics, quantum technologies, and AI-driven scientific discovery in physics</span></p>
      </li>
    </ul>
  </div>
</section>

<section class="service-section" id="academic-service">
  <div class="service-section-heading">
    <h2>Reviewing &amp; Academic Service</h2>
  </div>
  <div class="outreach-content-box">
    <ul class="outreach-text-list outreach-service-list">
      <li>
        <p><span class="outreach-entry-key">Reviewer</span><span class="outreach-line-text">Journal and publication review, Nature Photonics, Nature Machine Intelligence, Light: Science &amp; Applications, Physical Review Letters, PRX Intelligence, Physical Review Applied, Physical Review A, Quantum, New Journal of Physics, Advanced Photonics Nexus, PNAS Nexus, Machine Learning: Science and Technology, and others</span></p>
      </li>
      <li>
        <p><span class="outreach-entry-key">Editor</span><span class="outreach-line-text">Guest editor, topic on Nonlinear and Quantum Optics in Micro-Nano Structures for Frontiers in Physics</span></p>
      </li>
      <li>
        <p><span class="outreach-entry-key">Project review</span><span class="outreach-line-text">Funding review, Austrian Science Fund (FWF)</span></p>
      </li>
    </ul>
  </div>
</section>

</div>
