# Asad Hussain — AI, Full Stack & Automation

A responsive personal portfolio built with HTML, CSS, and JavaScript. No framework, build step, external font service, or runtime API key is required.

## What changed

- A focused dark design with an original SVG network illustration and lightweight project visuals.
- Nineteen projects, retaining the original portfolio’s work and adding current repository-backed applications such as Career Atlas and Bid Monitor.
- Area filters, text search, shareable filter URLs, an empty state, and expandable project details. Eight selected projects appear initially.
- Mobile navigation, keyboard-accessible dialogs and background tabs, visible focus styles, and reduced-motion support.
- Original portrait plus separate Experience, Education, Training, and Certificates panels based on the supplied CVs.
- A working CV-request email link. The supplied PDFs are available only in the owner-private Sites preview until public distribution is approved.
- Direct email and copy-email actions replace the original form’s false “sent” message. Unverified social links are omitted.

## Run locally

```sh
python -m http.server 4174
```

Open http://localhost:4174. A static host can serve the repository root directly.

## Content and design

| File | Purpose |
| --- | --- |
| `index.html` | Introduction, navigation, background, and contact |
| `projects.js` | Project descriptions, categories, stacks, and source links |
| `app.js` | Filtering, search, modal details, mobile navigation, and tabs |
| `style.css` / `enhancements.css` | Responsive design and interaction styling |
| `assets/` | Existing portrait |
| `profile.js` | Optional résumé downloads; empty in the public review branch |
| `fonts/` | Self-hosted Nimbus Sans and its license |

Project illustrations are system sketches, not screenshots. Project details identify sample data, prototypes, and work without a public repository. No credentials or project integration secrets are included.

Content comes from the existing portfolio, the supplied résumé/CV, and the linked GitHub repositories. Education is reproduced from the supplied CV. The PDFs remain the authoritative full documents and are not committed to this public repository.

## Publication

This review branch does not change `main`. `vercel.json` disables Vercel automatic deployment for `codex/portfolio-enhancements-20260929`, in accordance with the owner’s instruction not to publicly deploy without approval. It does not disable deployments for other branches.

The page carries `noindex, nofollow` while under private review. Before an approved public launch, remove that directive and verify the permanent domain, contact details, and downloadable CVs. Access to the separate Sites preview is enforced by Sites, not by `noindex`.

## Validation

The delivery review covers project filtering and search, empty-state recovery, every project dialog, keyboard navigation, PDF responses, copy-email behavior, reduced motion, and widths from 320px to 1440px. See the pull request for actual results.
