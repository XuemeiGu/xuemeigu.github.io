---
title: Contact
permalink: /contact/
eyebrow: Contact
subtitle: "PLACEHOLDER: How collaborators, students, and seminar organizers can reach you."
---

## Contact information

**Email:** [{{ site.data.profile.email }}](mailto:{{ site.data.profile.email }})  
**Institution:** {{ site.data.profile.institution }}  
**Location:** {{ site.data.profile.location }}

## Research inquiries

PLACEHOLDER: Write 3–5 sentences about the best way to contact you. You might mention:

- student projects or thesis inquiries
- seminar invitations
- collaborations with AI-for-science or quantum-science groups
- what to include in a first email

## Useful links

{% for link in site.data.profile.links %}
- [{{ link.label }}]({{ link.url }})
{% endfor %}

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
