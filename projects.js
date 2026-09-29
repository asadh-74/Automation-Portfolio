// Portfolio content, maintained separately from UI behavior.
window.PORTFOLIO_PROJECTS = [
  {
    "id": "career",
    "title": "Career Atlas",
    "type": "FULL-STACK / APPLIED AI",
    "areas": [
      "software",
      "agentic",
      "automation"
    ],
    "visual": "career",
    "tags": [
      "Flutter",
      "FastAPI",
      "PostgreSQL",
      "Gemini"
    ],
    "repo": "AI-Career",
    "description": "An AI-assisted job discovery app with company feeds, CV-based matching, application drafts, and a review queue.",
    "challenge": "Finding relevant roles involves scattered job listings, repeated CV review, and keeping track of what has actually been submitted.",
    "built": [
      "Built Flutter web and Android interfaces backed by a FastAPI API with PostgreSQL persistence.",
      "Connected Greenhouse and Lever company feeds, deduplication, PDF CV extraction, and Gemini match explanations.",
      "Added a review queue and manual submission tracking, with clearly labeled fallback estimates when AI is unavailable."
    ],
    "note": "Application submissions are completed on employer websites and confirmed by the user. Live scanning is on demand; the app does not claim universal auto-apply.",
    "featured": true
  },
  {
    "id": "bids",
    "title": "Construction Bid Monitor",
    "type": "AUTOMATION / DATA PIPELINES",
    "areas": [
      "automation",
      "software"
    ],
    "visual": "bids",
    "tags": [
      "Python",
      "Playwright",
      "FastAPI",
      "n8n"
    ],
    "repo": "bid-monitor",
    "description": "A multi-source procurement monitor that collects opportunities into a durable ledger and a searchable dashboard.",
    "challenge": "Bid information spread across dynamic pages and linked factsheets takes repeated manual checking to keep up to date.",
    "built": [
      "Built collectors for SCA factsheets and bids, DASNY, NYSCR, and official NYC Open Data procurement datasets.",
      "Normalized opportunities into a persistent Google Sheets ledger with source, stage, deadline, and contact-evidence fields.",
      "Connected a searchable FastAPI dashboard and separate n8n workflows for scheduling, reviewed outreach, and delivery logging."
    ],
    "note": "Repository-backed implementation. Source availability and parsing vary; outreach requires verified contact evidence, explicit approval, and configured credentials.",
    "featured": true
  },
  {
    "id": "support",
    "title": "AI Support Triage",
    "type": "AGENTIC AI / AUTOMATION",
    "areas": [
      "agentic",
      "automation",
      "software"
    ],
    "featured": false,
    "visual": "support",
    "tags": [
      "n8n",
      "FastAPI",
      "Hugging Face",
      "Docker"
    ],
    "repo": "ai-support-triage-agent",
    "description": "A support agent that retrieves policy, checks orders, and knows when to hand a conversation to a human.",
    "challenge": "Customer support needs consistent answers, clear reasoning, and a reliable path to human help when the system cannot answer confidently.",
    "built": [
      "Orchestrated a tool-using FastAPI agent with n8n workflows for ticket intake and routing.",
      "Connected retrieval over policy documents with an order lookup tool and explicit escalation rules.",
      "Added source references, decision traces, Docker packaging, and deterministic tests for failure handling."
    ],
    "note": "Portfolio prototype. Order lookup uses sample data; a production rollout would require real integrations, persistent audit storage, and an evaluation set."
  },
  {
    "id": "rag",
    "title": "Agentic Knowledge Assistant",
    "type": "AI APPLICATION / DOCUMENT INTELLIGENCE",
    "areas": [
      "agentic",
      "ml",
      "software"
    ],
    "featured": false,
    "visual": "rag",
    "tags": [
      "Gemini",
      "JavaScript",
      "RAG",
      "Vercel"
    ],
    "repo": "agentic-rag-assistant",
    "description": "Upload documents, ask questions, and get grounded answers with citations that connect back to the source.",
    "challenge": "Useful information often lives across documents. A conversational interface should help people find answers while keeping the original evidence visible.",
    "built": [
      "Created a document upload and chat interface backed by serverless API endpoints.",
      "Integrated Gemini to answer questions using the uploaded document context.",
      "Returned source citations so users can follow the evidence behind an answer."
    ],
    "note": "Portfolio prototype. The document store is held in memory per session and resets on cold starts; durable storage is a next step."
  },
  {
    "id": "vision",
    "title": "Real-Time Object Detection",
    "type": "AI / ML · COMPUTER VISION",
    "areas": [
      "ml",
      "software"
    ],
    "visual": "vision",
    "tags": [
      "YOLOv8",
      "OpenCV",
      "Streamlit",
      "WebRTC"
    ],
    "repo": "real-time-object-detection",
    "description": "Computer vision from input to interface: image, video, and browser webcam detection with downloadable results.",
    "challenge": "A detection model is more useful when people can try different inputs, adjust its behavior, and inspect the output in one interface.",
    "built": [
      "Built a YOLOv8 detection pipeline with a command-line interface and a Streamlit dashboard.",
      "Added image and video uploads, browser webcam streaming over WebRTC, and configurable confidence thresholds.",
      "Exposed detection analytics and exportable annotated results, with Docker packaging."
    ],
    "note": "Portfolio application. Detection quality and performance depend on model choice, input conditions, and deployment hardware.",
    "featured": false
  },
  {
    "id": "watch",
    "title": "Aeterna Watches",
    "type": "SOFTWARE / E-COMMERCE EXPERIENCE",
    "areas": [
      "software"
    ],
    "visual": "watch",
    "tags": [
      "JavaScript",
      "HTML / CSS",
      "REST APIs",
      "LLM integration"
    ],
    "repo": "aeterna-watches",
    "description": "A watch storefront combining a responsive catalog and checkout experience with AI-assisted product discovery.",
    "challenge": "A shopping experience needs strong visual presentation, easy browsing, and a clear path from product discovery to checkout.",
    "built": [
      "Created the product catalog, interactive browsing, and checkout flows.",
      "Worked on frontend/backend integration with an AI shopping concierge using Gemini/OpenAI APIs.",
      "Developed a responsive visual identity and deployed the frontend on Vercel."
    ],
    "note": "The public storefront is a portfolio showcase; a complete commerce deployment requires verified payment, fulfillment, and backend integrations.",
    "featured": false
  },
  {
    "id": "crew",
    "title": "Threat Intelligence Crew",
    "type": "AGENTIC AI / MULTI-AGENT SYSTEMS",
    "areas": [
      "agentic",
      "automation"
    ],
    "visual": "crew",
    "tags": [
      "CrewAI",
      "Groq",
      "Python"
    ],
    "repo": "Autonomous-Threat-Intelligence-Crew",
    "description": "Specialized research, analysis, and reporting agents turn threat information into structured security summaries.",
    "challenge": "Researching a topic, interpreting sources, and producing a coherent report are different tasks that benefit from a coordinated process.",
    "built": [
      "Organized research, analysis, and reporting as distinct agent responsibilities in CrewAI.",
      "Integrated Groq for LLM inference within the collaborative workflow.",
      "Structured the output as a synthesized threat intelligence summary."
    ],
    "note": "Multi-agent portfolio project. Generated reports require source checking and human review before operational use.",
    "featured": false
  },
  {
    "id": "flowboard",
    "title": "FlowBoard",
    "type": "SOFTWARE / FULL-STACK DEVELOPMENT",
    "areas": [
      "software"
    ],
    "visual": "board",
    "tags": [
      "FastAPI",
      "WebSockets",
      "SQLite",
      "JavaScript"
    ],
    "repo": "FlowBoard-real-time-collaborative-project-board",
    "description": "A collaborative project board with drag-and-drop tasks, live updates, authentication, and an activity feed.",
    "challenge": "Teams need changes to a shared task board to appear across connected sessions without repeatedly refreshing the page.",
    "built": [
      "Built a FastAPI backend with WebSocket broadcasts for live board updates.",
      "Added JWT authentication, hashed passwords, and relational storage in SQLite.",
      "Developed a responsive Kanban interface with drag-and-drop cards, live statistics, and activity history."
    ],
    "note": "Portfolio application. Multi-board sharing and finer-grained collaboration permissions are potential extensions.",
    "featured": false
  },
  {
    "id": "inventory",
    "title": "Smart Inventory Assistant",
    "type": "AUTOMATION / AGENTIC AI",
    "areas": [
      "automation",
      "agentic"
    ],
    "visual": "bids",
    "tags": [
      "n8n",
      "MCP",
      "AI agents",
      "Email"
    ],
    "description": "Stock monitoring and supplier lookup, with draft reorder emails that wait for human approval.",
    "challenge": "Low-stock signals need to reach the right person with enough supplier context to decide what to reorder.",
    "built": [
      "Designed n8n stock-monitoring and critical/low-stock routing workflows.",
      "Connected a chat agent to an MCP server for supplier lookups.",
      "Kept reorder email sending behind explicit human approval."
    ],
    "note": "Workflow described in the existing portfolio. No public source repository is linked.",
    "featured": false
  },
  {
    "id": "canopy",
    "title": "CanopyNet",
    "type": "AI / ML · CLASSIFICATION",
    "areas": [
      "ml"
    ],
    "visual": "canopy",
    "tags": [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost"
    ],
    "description": "A forest-cover classification pipeline comparing a tuned neural network with tree-based baselines.",
    "challenge": "Structured environmental data requires a reproducible comparison of model families and class-level performance.",
    "built": [
      "Built a pipeline for the UCI Forest Covertype dataset with 581,012 samples, 54 features, and seven classes.",
      "Compared a tuned MLP with Random Forest and XGBoost baselines.",
      "Reported 95.93% test accuracy and 0.94 macro F1 in the supplied résumé."
    ],
    "note": "Results are reported in the supplied résumé and existing portfolio; no experiment artifact or public repository is linked here.",
    "featured": false
  },
  {
    "id": "spam",
    "title": "SMS Spam Classification",
    "type": "AI / ML · NATURAL LANGUAGE",
    "areas": [
      "ml"
    ],
    "visual": "rag",
    "tags": [
      "NLTK",
      "TF-IDF",
      "GloVe",
      "Transformers"
    ],
    "description": "An NLP benchmark comparing classical models, word embeddings, and zero-shot classification.",
    "challenge": "A useful text-classification study should compare approaches on the same labeled data and preprocessing pipeline.",
    "built": [
      "Prepared a dataset of 5,572 labeled SMS messages.",
      "Compared TF-IDF classifiers, averaged GloVe embeddings, and a zero-shot Hugging Face transformer.",
      "Built preprocessing and model-comparison workflows."
    ],
    "note": "Learning project described in the existing portfolio. No public source repository is linked.",
    "featured": false
  },
  {
    "id": "email",
    "title": "Support Email Automation",
    "type": "AUTOMATION / N8N WORKFLOWS",
    "areas": [
      "automation"
    ],
    "visual": "support",
    "tags": [
      "n8n",
      "Gmail API",
      "Slack API",
      "LLM"
    ],
    "description": "Classifies incoming support emails, flags urgency, routes Slack alerts, and prepares replies for review.",
    "challenge": "Support teams need urgent messages surfaced quickly while keeping a person in control of outgoing responses.",
    "built": [
      "Connected a Gmail trigger to AI topic and urgency classification.",
      "Routed messages to topic-specific Slack channels.",
      "Created contextual Gmail draft replies for human review."
    ],
    "note": "Workflow described in the supplied CV and existing portfolio. Drafting and sending are separate steps.",
    "featured": false
  },
  {
    "id": "credit",
    "title": "Credit Scoring Classifier",
    "type": "AI / ML · MODEL EVALUATION",
    "areas": [
      "ml"
    ],
    "visual": "canopy",
    "tags": [
      "Scikit-learn",
      "Pandas",
      "ROC-AUC"
    ],
    "repo": "credit-scoring-ml",
    "description": "A supervised-learning study comparing classifiers and evaluating trade-offs beyond a single accuracy score.",
    "challenge": "Classification evaluation needs to show precision, recall, and ranking quality across different model choices.",
    "built": [
      "Engineered features for a credit-scoring classification dataset.",
      "Compared Logistic Regression, Decision Trees, and Random Forest.",
      "Evaluated precision, recall, F1, and ROC-AUC."
    ],
    "note": "Educational model comparison; not a validated lending decision system.",
    "featured": false
  },
  {
    "id": "handwriting",
    "title": "Handwritten Character Recognition",
    "type": "AI / ML · DEEP LEARNING",
    "areas": [
      "ml"
    ],
    "visual": "vision",
    "tags": [
      "CNN",
      "MNIST",
      "EMNIST"
    ],
    "repo": "handwritten-character-recognition",
    "description": "A convolutional neural network pipeline for recognizing handwritten digits and characters.",
    "challenge": "Handwritten characters vary in shape and style, creating a practical supervised computer-vision problem.",
    "built": [
      "Developed a CNN-based recognition model.",
      "Used MNIST and EMNIST datasets for digit and character recognition.",
      "Worked on data preparation, model training, and evaluation."
    ],
    "note": "Educational deep-learning project documented during the CodeAlpha internship.",
    "featured": false
  },
  {
    "id": "disease",
    "title": "Disease Prediction Study",
    "type": "AI / ML · MODEL COMPARISON",
    "areas": [
      "ml"
    ],
    "visual": "canopy",
    "tags": [
      "Scikit-learn",
      "SVM",
      "Random Forest"
    ],
    "repo": "disease-prediction-ml",
    "description": "A structured-data classification study using multiple models, validation, and feature analysis.",
    "challenge": "A model comparison needs consistent preprocessing and validation to make differences in performance interpretable.",
    "built": [
      "Prepared structured healthcare data for classification.",
      "Compared SVM, Logistic Regression, and Random Forest.",
      "Explored cross-validation and feature importance."
    ],
    "note": "Educational research prototype; not intended for clinical diagnosis or medical decision-making.",
    "featured": false
  },
  {
    "id": "speech",
    "title": "Speech Emotion Recognition",
    "type": "AI / ML · AUDIO PROCESSING",
    "areas": [
      "ml"
    ],
    "visual": "rf",
    "tags": [
      "MFCC",
      "RAVDESS",
      "MLP",
      "CNN"
    ],
    "description": "Audio feature extraction and neural models for an experimental speech-emotion classification workflow.",
    "challenge": "An audio model must connect preprocessing, acoustic features, and classification into a repeatable pipeline.",
    "built": [
      "Extracted MFCC features from the RAVDESS dataset.",
      "Developed MLP and CNN model experiments.",
      "Explored microphone-based inference for demonstrations."
    ],
    "note": "Experimental dataset classification; outputs should not be treated as reliable assessments of a person’s internal emotional state.",
    "featured": false
  },
  {
    "id": "library",
    "title": "Library Management System",
    "type": "SOFTWARE / FULL-STACK DEVELOPMENT",
    "areas": [
      "software"
    ],
    "visual": "board",
    "tags": [
      "Flask",
      "Python",
      "Jinja2",
      "CSV"
    ],
    "description": "A web-based catalog with librarian login, CRUD tools, bulk issuing, search, and a dashboard.",
    "challenge": "Moving a single-user console tool to the web requires clear workflows, persistent records, and usable administration.",
    "built": [
      "Rebuilt the catalog with Flask, session-based librarian login, and a custom interface.",
      "Added search, filtering, sorting, and full catalog CRUD.",
      "Supported bulk issuing through CSV import and fine calculation."
    ],
    "note": "Portfolio application using CSV persistence. Concurrent production use would benefit from transactional database storage.",
    "featured": false
  },
  {
    "id": "fleet",
    "title": "Connected Fleet Platform",
    "type": "EMBEDDED / SOFTWARE INTEGRATION",
    "areas": [
      "embedded",
      "software"
    ],
    "visual": "fleet",
    "tags": [
      "ESP32",
      "MQTT",
      "Flask",
      "GPS"
    ],
    "description": "An end-to-end telemetry system connecting embedded devices, location data, and a live fleet dashboard.",
    "challenge": "Device telemetry needs a complete path from hardware and communication protocols to a backend that makes the data useful.",
    "built": [
      "Integrated ESP32 devices with GPS, RFID, and communication components during an engineering internship at HIT.",
      "Connected device messages over MQTT to a Flask backend.",
      "Helped deliver the fleet management platform and live telemetry dashboard for deployment."
    ],
    "note": "Internship deployment described at a high level. No public source repository is linked for this work.",
    "featured": false
  },
  {
    "id": "rf",
    "title": "DroneGuard · RF Intelligence",
    "type": "APPLIED ML / EMBEDDED & RF",
    "areas": [
      "embedded",
      "ml"
    ],
    "visual": "rf",
    "tags": [
      "RTL-SDR",
      "GNU Radio",
      "Python",
      "STM32"
    ],
    "description": "Bringing signal processing and machine learning together to detect and classify drone communication signals.",
    "challenge": "Recognizing radio communication patterns requires connecting the RF front end, sampled signals, and a classification pipeline.",
    "built": [
      "Worked across RF detection hardware and an SDR signal-processing pipeline.",
      "Used RTL-SDR, GNU Radio, Python, and MATLAB to process IQ data and analyze communication patterns.",
      "Explored classification of FHSS, OFDM, and FSK signals with embedded integration."
    ],
    "note": "Engineering project overview focused on detection and classification. No public source repository is linked for this work.",
    "featured": false
  }
];
