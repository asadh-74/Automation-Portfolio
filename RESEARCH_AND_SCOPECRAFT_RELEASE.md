# Research Desk and ScopeCraft release verification

Verified 24 October 2026.

| Project | Live demo | Upwork description and recording outline | Source |
|---|---|---|---|
| Research Desk Studio | https://asad-research-desk-studio.onrender.com/ | [UPWORK.md](https://github.com/asadh-74/agentcrew-research-desk/blob/main/UPWORK.md) | [GitHub](https://github.com/asadh-74/agentcrew-research-desk) |
| ScopeCraft Proposal Studio | https://asad-research-desk-studio.onrender.com/scopecraft/ | [UPWORK.md](https://github.com/asadh-74/genai-Saas-Product/blob/main/UPWORK.md) | [GitHub](https://github.com/asadh-74/genai-Saas-Product) |

## Evidence

- 13 Research Desk/host backend tests and 13 standalone ScopeCraft backend tests passed locally. GitHub CI passed for both repositories.
- Render deploy of host commit 0f4800ea9229fbe1b176663c78422b2c6c6e46af reached live.
- Both apps generated documents from their fictional example inputs in the live browser.
- Both approved records survived page reload; each application retained its own workspace.
- Research Desk Markdown download was saved and inspected, including approved status and source identifiers.
- ScopeCraft calculated the example total as USD 500.00 from 20 hours at USD 25/hour.
- ScopeCraft JSON backup downloaded and restored without duplicating the existing record.
- Desktop layouts visually inspected. Responsive CSS is present; a separate mobile-device test and PDF output inspection were not performed.

## Accurate presentation

These are functional portfolio workflow demos. Records persist in browser localStorage, not a shared cloud database. Clearing browser data loses records unless a backup has been exported. Neither app sends messages or signs contracts. Research Desk organizes reviewer-supplied source excerpts; it does not autonomously browse or independently verify them. Optional Gemini summaries are implemented and tested with a fake provider, but no private provider credentials were configured and real-provider output has not been verified. Default output is explicitly labelled template mode.

The apps share a free Render service because the workspace reached its 25-service limit. The original suspended Research Desk service remains untouched. The new SaaS repository is now implemented as ScopeCraft; do not describe it as a production multi-tenant SaaS.
