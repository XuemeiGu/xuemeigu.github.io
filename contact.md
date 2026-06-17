---
title: Contact
permalink: /contact/
eyebrow: Contact
subtitle: "How collaborators, students, and seminar organizers can reach me."
---

## Contact information

- **Email:** [{{ site.data.profile.email }}](mailto:{{ site.data.profile.email }})
- **Institution:** {{ site.data.profile.institution }}
- **Visitor address:** {{ site.data.profile.institution }}, {{ site.data.profile.location }}

## Research inquiries

Please include a short topic line and a few sentences about the research question, project, seminar, or collaboration you have in mind.

## Useful links

<div class="profile-links icon-links contact-social-links">
{% for link in site.data.profile.links %}
  {% include social-link.html link=link %}
{% endfor %}
</div>

## Message template

```text
Subject: Research inquiry: PLACEHOLDER topic

Dear Mei,

I am writing because ...
My background is ...
I am especially interested in ...

Best regards,
PLACEHOLDER name
```
