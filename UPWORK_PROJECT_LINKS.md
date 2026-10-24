# Portfolio demo and source links

Updated 24 October 2026. PCB and AutoFlow received updates; other entries are existing deployments. HTTP availability does not certify every workflow or external integration. Free hosting may require a cold start.

| Project | Live demo | GitHub | Verified scope |
|---|---|---|---|
| PCB Inspection Studio | [Open demo](https://pcb-defect-detection-5tdcebmcwevy5szlg8uuqt.streamlit.app/) | [Source](https://github.com/asadh-74/PCB-Defect-Detection) | Updated frontend, merged and visually verified live. UI tests and Linux/Windows CI passed. Existing model unchanged. |
| AutoFlow | [Open demo](https://autoflow-frontend-syr5.onrender.com) | [Source](https://github.com/asadh-74/AutoFlow) | Lead-review upgrade merged; frontend and Python deployments live. Recommendations and draft replies only; rules demo without a private Gemini key. |
| DocFlow | [Open demo](https://autoflow-python-service.onrender.com/docflow) | [Source](https://github.com/asadh-74/AutoFlow) | Existing invoice-processing demo; page reachable. |
| AI Data Analyst | [Open demo](https://asad-ai-data-analyst.onrender.com) | [Source](https://github.com/asadh-74/Ai-data-Analyst) | Existing demo; page reachable. No-key statistical reports differ from AI-generated answers. |
| HealthOps | [Open demo](https://healthops-demo.onrender.com) | [Source](https://github.com/asadh-74/healthops) | Existing fictional healthcare operations demo; no production authentication. |
| NetGuard | [Open demo](https://network-intrusion-detection-daah.onrender.com) | [Source](https://github.com/asadh-74/Network-Intrusion-Detection) | Existing NSL-KDD benchmark classifier, not live network protection. |
| PlotLens | [Open demo](https://asad-plot-price-predictor.onrender.com) | [Source](https://github.com/asadh-74/Plot-Price-Predictor) | Existing model-comparison demo trained on synthetic property data. |
| PayPilot | [Open demo](https://paypilot-6ca4.onrender.com) | [Source](https://github.com/asadh-74/PayPilot) | Existing demo; page reachable. |
| Support Triage | [Open demo](https://ai-support-triage-agent-1.onrender.com/review) | [Source](https://github.com/asadh-74/ai-support-triage-agent) | Existing review workspace; local outbox, no external email delivery. |
| Aeterna | [Open demo](https://aeterna-watches12.vercel.app) | [Source](https://github.com/asadh-74/aeterna-watches) | Existing storefront demo; page reachable. |

## Newly completed portfolio demos

| Project | Live demo | GitHub | Verified scope |
|---|---|---|---|
| ScopeCraft | [Open demo](https://asad-research-desk-studio.onrender.com/scopecraft/) | [Source](https://github.com/asadh-74/genai-Saas-Product) | Dark/orange redesign; sample proposal generated with correct USD 500 estimate. Browser-local drafts, review and exports; template mode, real AI not configured. |
| GridWatch Lab | [Open demo](https://asad-research-desk-studio.onrender.com/gridwatch/) | [Source and Upwork copy](https://github.com/asadh-74/gridwatch/blob/main/UPWORK.md) | CSV telemetry analysis, actual timestamp integration, supplied power factor, gap exclusion, voltage readings and JSON export. Sample: 91 readings, 4.203 kWh covered energy, 93.7% coverage, 4 low-voltage readings. Five automated tests and live workflow verified. Simulated demo, no hardware control. |
| Research Desk | [Open demo](https://asad-research-desk-studio.onrender.com/) | [Source](https://github.com/asadh-74/agentcrew-research-desk) | Supplied-excerpt evidence briefs, browser-local persistence and Markdown export verified in prior release. |

## Remaining work found in repository review

- `genai-Saas-Product`: now implemented as ScopeCraft; optional real AI remains unconfigured.
- `agentcrew-research-desk`: new shared demo is live; old suspended deployment is not the portfolio URL.
- `ai-support-triage-agent`: README still contains placeholder badge and demo links; use the verified review link above.
- Remaining repositories have not received full workflow audits; do not claim all repositories are complete.

## Suggested PCB Upwork entry

**Title:** AI PCB Defect Detection — YOLO & Inspection Dashboard

**Role:** Computer Vision / Python Developer

**Description:** Built a Streamlit inspection workspace for detecting six bare-board PCB defect categories. The interface supports image uploads, annotated findings, class filtering, original-versus-result comparison, detection crops, and PNG/CSV exports. A model-performance section presents recorded evaluation results. The detector was evaluated on a dataset with synthetically produced defects and remains a portfolio inspection aid requiring human review.

**Skills:** Python, Computer Vision, YOLO, Streamlit, Deep Learning.

Use screenshots and recordings of the actual live app. Describe benchmark results as recorded test results, not guaranteed production accuracy.
