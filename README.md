# Asad Hussain — AI, Software & Automation

A responsive portfolio with 22 projects, built with HTML, CSS, and JavaScript. No framework, build step, runtime API key, or external font service is needed.

Production domain: https://automation-portfolio-steel.vercel.app/

## Experience for visitors

- AI agents, automation and software appear first; embedded and RF work remains discoverable.
- Project cards include technology stacks, descriptions, source links where available, and detailed case studies.
- Search, area filters, shareable filter URLs, empty-state recovery, and a show-all control.
- Mobile navigation, keyboard-accessible dialogs and background tabs, visible focus, and reduced motion.
- Experience, education, training, certificates and leadership, updated using the supplied portfolio document.
- Working email and LinkedIn links, copy-email action, and CV request by email.
- Open Graph and Twitter metadata, a 1200 × 630 sharing image, canonical URL, robots.txt and sitemap.

## Run locally

```sh
python -m http.server 4174
```

Open http://localhost:4174. Serve the repository root directly.

## Vercel

Import this repository, choose **Other** as the framework preset, leave the build command empty, and use the repository root as the output directory. If it is already connected, a commit to `main` triggers the configured production deployment.

The existing review branch is excluded from automatic deployment in `vercel.json`. Production deployment from `main` is enabled by default. The separate Sites preview retains its own access permissions.

If the production domain changes, update the canonical, Open Graph and Twitter image URLs in `index.html`, plus `robots.txt` and `sitemap.xml`.

## Maintain content

| File | Purpose |
| --- | --- |
| `index.html` | Introduction, background, contact, and share metadata |
| `projects.js` | Project descriptions, categories, stacks, and repository links |
| `app.js` | Filtering, search, details, mobile navigation, and tabs |
| `style.css` / `enhancements.css` | Responsive design and styling |
| `profile.js` | Optional downloadable documents; public site uses a CV-request link |
| `assets/` | Two supplied portraits and sharing image |
| `fonts/` | Self-hosted Nimbus Sans and license |

The latest supplied portfolio identifies NUST Electrical Engineering, expected 2027; it supersedes the earlier CV education entry. Project illustrations are system sketches. Research and prototypes are labeled without invented performance results. Uploaded CV PDFs and private hosting credentials are not included in this public repository.

## Validation

Browser checks cover widths from 320 to 1440 pixels, all project dialogs and area filters, search and recovery, keyboard tabs, mobile navigation, copy-email behavior, and reduced motion. Share metadata and the preview image are checked before delivery.
