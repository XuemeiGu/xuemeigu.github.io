# Xuemei Gu website

Personal academic website for sharing research, publications, talks, service, news, and contact information.

## Common updates

Most routine edits are made in the data files:

- Publications: `content/data/publications.yml`
- Talks and posters: `content/data/talks.yml`
- Home page news: `content/data/news.yml`
- Navigation: `content/data/navigation.yml`

For publications, add new entries near the top under the correct year. Journal papers, preprints, and conference papers can all live in `publications.yml`. Workshop posters for an already listed paper should usually be added as a `presentations` note under the related paper instead of as a separate publication.

Example:

```yaml
- title: Example paper title
  authors: First Author, Xuemei Gu, Last Author
  venue: Journal or arXiv information (2026)
  year: 2026
  type: Journal
  featured: false
  paper_url: https://doi.org/...
  pdf_url: ''
  code_url: ''
  data_url: ''
```

Workshop presentation attached to an existing paper:

```yaml
  presentations:
    - label: IAI Workshop @ NeurIPS 2024
      url: https://openreview.net/forum?id=...
```

## Preview

This site is built with Jekyll/GitHub Pages. If the Ruby dependencies are installed locally, preview with:

```bash
bundle exec jekyll serve
```

GitHub Pages will build the site automatically after changes are pushed.
