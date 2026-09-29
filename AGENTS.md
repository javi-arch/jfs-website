# jfs-website

Personal portfolio of Javier Fidalgo Saeta (architect / BIM specialist), published at https://javierfidalgosaeta.com.

## Language

- Work in English: code, comments, identifiers, class names, `data-key` names, commit messages and docs (README, AGENTS.md).
- The only Spanish allowed is user-facing text that visitors see when the site is in ES: the Spanish copy in the HTML, `translations.es`, and image `alt` texts.
- Name new asset files in English. Some existing files in `public/` have Spanish names (e.g. `pdf-campos-aliseos-03.pdf`); leave them as they are, since renaming breaks public links.

## Stack

- Hand-written HTML + CSS: no build step, no frameworks, no npm dependencies.
- `index.html` holds all the content plus inline JavaScript; `styles.css` holds the styles.
- Assets (images and PDFs) live in `public/`.
- Icons: Font Awesome via CDN. Font: Inter from Google Fonts.

## Deployment

- GitHub Pages serves the `main` branch directly. Pushing to `main` publishes the site within about a minute.
- Never push without the user's explicit confirmation.
- `CNAME` sets the custom domain: do not modify it.

## Conventions

- **File names in `public/`: always lowercase kebab-case** (`img-pyrevit-jfs-tools.png`). GitHub Pages is case-sensitive and Windows is not, so a casing mistake works locally and 404s online.
- Prefixes: `img-` for project images, `pdf-` for project documents, `cert-` for certificates.
- In visible text, use each brand's official spelling (`pyRevit`, `Revit`, `Rhino`, `Grasshopper`).

## Translations (ES / EN)

- Spanish is the default. The `#language-toggle` button switches to English and stores the choice in `localStorage`.
- Every translatable element has a `data-key` attribute, and that key must exist in both `translations.es` and `translations.en` (the object at the end of `index.html`).
- Spanish copy is duplicated: once in the HTML and once in `translations.es`. **When editing text, update both**, and update the English version too.

## Check before committing

Verify that every `public/` path in the HTML matches an existing file exactly:

```bash
for f in $(grep -o 'public/[A-Za-z0-9._-]*' index.html | sort -u); do git ls-files --error-unmatch "$f" >/dev/null 2>&1 || echo "MISSING: $f"; done
```
