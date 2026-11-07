# jfs-website

Personal portfolio of Javier Fidalgo Saeta (architect / BIM specialist), published at https://javierfidalgosaeta.com.

## Language

- Work in English: code, comments, identifiers, class names, `data-key` names, commit messages and docs (README, AGENTS.md).
- The only Spanish allowed is user-facing text on the Spanish page: the copy and the image `alt` texts in `index.html`.
- Name new asset files in English. Some existing files in `public/` have Spanish names (e.g. `pdf-campos-aliseos-03.pdf`); leave them as they are, since renaming breaks public links.

## Stack

- Hand-written HTML + CSS: no build step, no frameworks, no npm dependencies.
- `index.html` (Spanish, served at `/`) and `en/index.html` (English, served at `/en/`) hold the content. `styles.css` holds the styles and `script.js` the nav highlight, both shared by the two pages.
- Assets (images and PDFs) live in `public/`.
- Icons: the few Font Awesome Free icons in use are embedded in `styles.css` as CSS masks (`fa-*` classes, no CDN). To add one, copy its SVG from Font Awesome Free into a new `.fa-<name>` rule.
- Font: Inter from Google Fonts.

## Deployment

- GitHub Pages serves the `main` branch directly. Pushing to `main` publishes the site within about a minute.
- Never push without the user's explicit confirmation.
- `CNAME` sets the custom domain: do not modify it.

## Conventions

- **File names in `public/`: always lowercase kebab-case** (`img-pyrevit-jfs-tools.png`). GitHub Pages is case-sensitive and Windows is not, so a casing mistake works locally and 404s online.
- Prefixes: `img-` for project images, `pdf-` for project documents, `cert-` for certificates.
- In visible text, use each brand's official spelling (`pyRevit`, `Revit`, `Rhino`, `Grasshopper`).

## Privacy and search engines

- Before publishing a document, check it for personal data beyond the name and the public email: date or place of birth, ID numbers, handwritten signatures, home address, phone. Redact it and flatten the page to an image so the hidden data cannot be recovered.
- Before publishing a photo, strip its EXIF metadata: phone photos record the GPS location where they were taken.
- The GitHub repo is public: deleting a file from the site does not remove it from the git history. Sensitive files must also be purged from the history.
- Every PDF needs a descriptive `Title` in its metadata. Google uses it as the search result title; without it, image-only PDFs get whatever text Google OCRs from the page.
- Files that must stay out of search results go in `robots.txt`. Never list a file that was already indexed and has since been deleted: Google has to crawl its 404 to drop it.
- `sitemap.xml` lists both pages and every PDF. When you add, remove or change one of them, update the sitemap and its `<lastmod>` date, so Google knows to recrawl it.

## Translations (ES / EN)

- Each language is a complete static page, so search engines index both: Spanish in `index.html` (`/`, the default) and English in `en/index.html` (`/en/`).
- Both pages share the same structure. **Every change to content or markup goes into both files**, with the text translated, `alt` texts included.
- In `en/index.html`, paths to shared files go up one level: `../styles.css`, `../script.js`, `../public/...`.
- The `.language-toggle` link of each page points to the other one. Both heads carry the same `hreflang` alternate links; each has its own `canonical`, `og:url`, `og:locale`, title and description.

## Check before committing

Verify that every `public/` path in both pages matches an existing file exactly, and that both pages still have the same structure:

```bash
for f in $(grep -oh 'public/[A-Za-z0-9._-]*' index.html en/index.html | sort -u); do git ls-files --error-unmatch "$f" >/dev/null 2>&1 || echo "MISSING: $f"; done
diff <(grep -o '<[a-z0-9]*' index.html) <(grep -o '<[a-z0-9]*' en/index.html) && echo "Same structure"
```
