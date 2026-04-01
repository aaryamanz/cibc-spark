export const tools = [
  {
    id: "m365-copilot",
    name: "Microsoft 365 Copilot",
    description: "AI assistant embedded in Word, Excel, PowerPoint, Outlook, and Teams — drafts documents, summarizes emails, builds slides, and analyzes data from your Microsoft apps",
    bestFor: ["All"],
    timeSaved: 30,
    difficulty: "Beginner",
    category: "Productivity",
    color: "#3B82F6",
    socialProof: { name: "Aaryaman", initials: "AK", savings: "2 hrs/day", color: "#8B5CF6" },
    whatIsIt: [
      "Microsoft 365 Copilot brings generative AI directly into the tools CIBC employees already use every day — Word, Excel, PowerPoint, Outlook, and Teams. Instead of switching to a separate chat tool, you can draft, summarize, analyze, and create content right inside your documents and messages.",
      "In a CIBC context, Copilot is most effective when you provide clear, non-sensitive context (no client PII) and a specific output format. It helps standardize the first draft so you can spend more time validating accuracy, adding CIBC-specific nuance, and applying policy or compliance requirements.",
      "Use it as a productivity accelerator: turn meeting notes into a structured recap, convert a rough outline into a polished memo, or ask Excel to explain a dataset and propose charts — then review and refine before sharing."
    ],
    bestUsedFor: [
      "Drafting and polishing internal memos, summaries, and stakeholder updates",
      "Summarizing long email threads, documents, and meeting notes into action items",
      "Creating first-pass slides, tables, and analysis directly in M365 apps"
    ],
    examples: [
      {
        scenario: "An employee needs to summarize a long Teams meeting transcript into a recap for stakeholders",
        prompt: "Summarize this meeting into: 5 key decisions, 6 action items with owners, and any open risks. Keep it concise and internal-facing.",
        output: "Copilot produced a structured recap with decisions, action items, and risks in under a minute, ready to paste into Teams or email after a quick accuracy check."
      },
      {
        scenario: "A manager needs a one-page weekly status update from scattered notes",
        prompt: "Turn these notes into a weekly status update with sections: Progress, Blockers, Decisions Needed, and Next Week. Use a professional tone.",
        output: "Copilot generated a clean weekly update with consistent headings and crisp phrasing, saving time on formatting and rewriting."
      },
      {
        scenario: "An analyst needs to explain a spreadsheet trend to a non-technical audience",
        prompt: "Explain the key trend in this table in plain language and suggest 2 charts that best communicate it. Provide a short narrative I can paste into a slide.",
        output: "Copilot surfaced the primary trend, recommended a line chart and a stacked bar, and drafted a brief narrative suitable for an internal deck."
      }
    ],
    quiz: [
      {
        question: "What is Microsoft 365 Copilot designed to do in your daily M365 apps?",
        options: ["Replace your manager approvals", "Draft, summarize, and create content inside M365 apps", "Access client accounts directly", "Automatically send emails to customers"],
        correct: 1
      },
      {
        question: "What should you NEVER include in prompts or content you provide to Copilot?",
        options: ["A desired output format", "Client names, account numbers, or personal information", "Internal project context", "A tone like 'executive brief'"],
        correct: 1
      },
      {
        question: "What is the best practice after Copilot generates content?",
        options: ["Send it immediately without reading", "Review, validate accuracy, and refine before sharing", "Assume it is always correct", "Use it only for external client communications"],
        correct: 1
      }
    ],
    tasks: ["Draft a weekly status update", "Summarize a meeting into action items", "Rewrite a memo for executive tone", "Turn notes into a structured report", "Create a slide outline from a document"],
    videoUrl: "https://www.youtube.com/embed/S7xTBa93TX8",
    walkthroughVideoUrl: "https://www.youtube.com/embed/ebls5x-3MAo",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code completions, generates functions, writes tests, and explains code directly in VS Code and JetBrains IDEs",
    bestFor: ["Technology & Engineering"],
    timeSaved: 35,
    difficulty: "Intermediate",
    category: "Development",
    color: "#8B5CF6",
    socialProof: { name: "Priya", initials: "PS", savings: "3 hrs/day", color: "#3B82F6" },
    whatIsIt: [
      "GitHub Copilot is an AI coding assistant that works inside your IDE to suggest code completions, generate functions, write tests, and explain unfamiliar code. It accelerates day-to-day development by reducing time spent on boilerplate and repetitive patterns.",
      "For CIBC engineering teams, Copilot is most valuable when used as a pair programmer: you provide clear intent and constraints (security, logging, data handling), then you review suggestions for correctness, performance, and policy alignment before merging.",
      "Use Copilot to speed up scaffolding and exploration, but always apply standard engineering controls: code review, unit tests, and security checks."
    ],
    bestUsedFor: [
      "Writing boilerplate (DTOs, validation, handlers) faster and more consistently",
      "Generating unit tests and edge-case coverage for existing code",
      "Explaining legacy code and proposing refactors safely"
    ],
    examples: [
      {
        scenario: "A developer needs to implement a REST endpoint with standardized error handling",
        prompt: "// Implement GET /accounts/:id/balance with auth, validation, and consistent error responses",
        output: "Copilot generated a first-pass handler with validation and structured errors, which the developer refined to match internal middleware and logging standards."
      },
      {
        scenario: "A QA engineer wants fast test coverage for a critical function",
        prompt: "// Write Jest tests for calculateFees: happy path, zero values, rounding, and invalid inputs",
        output: "Copilot drafted a suite of tests covering key branches; the engineer updated expected values and added additional boundary cases."
      },
      {
        scenario: "An engineer needs a clear explanation of an unfamiliar service module",
        prompt: "Explain what this file does and list the top 3 risks you see (security/perf). Suggest improvements.",
        output: "Copilot produced a readable summary and highlighted potential issues; the engineer validated findings and applied fixes with review."
      }
    ],
    quiz: [
      {
        question: "Where does GitHub Copilot work?",
        options: ["In your web browser only", "Directly in your code editor", "Only in GitHub's website", "In a separate desktop app"],
        correct: 1
      },
      {
        question: "What should you always review before committing Copilot-generated code?",
        options: ["The font size", "The code for security vulnerabilities and correctness", "The color theme", "The file size"],
        correct: 1
      },
      {
        question: "What is a key benefit of GitHub Copilot for CIBC developers?",
        options: ["It eliminates the need for testing", "It reduces boilerplate and speeds up development with suggestions", "It approves pull requests automatically", "It grants production access"],
        correct: 1
      }
    ],
    tasks: ["Generate a controller/handler skeleton", "Write unit tests for a module", "Explain and refactor legacy code", "Add validation and error handling", "Draft a SQL query with joins and filters"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/ZfT2CXY5-Dc",
  },
  {
    id: "copilot-studio",
    name: "Copilot Studio (Power Virtual Agents)",
    description: "Build custom AI chatbots and agents for your team without writing code — automate FAQs, HR queries, IT helpdesk, and internal workflows",
    bestFor: ["HR & Operations", "Technology & Engineering"],
    timeSaved: 45,
    difficulty: "Intermediate",
    category: "Automation",
    color: "#14B8A6",
    socialProof: { name: "Marcus", initials: "MJ", savings: "5 hrs/week", color: "#10B981" },
    whatIsIt: [
      "Copilot Studio lets CIBC teams build custom chatbots and lightweight agents that answer common questions and automate internal workflows — without needing a full engineering build. It’s ideal for FAQs, intake forms, helpdesk triage, and structured knowledge experiences.",
      "In practice, you define the bot’s topics, connect it to approved data sources, and design the conversation flows. The result is a consistent front door for internal support (HR, IT, Operations), reducing repetitive tickets and improving response time.",
      "Use Copilot Studio when you need a repeatable, governed experience for internal users — and pair it with clear escalation rules to humans when confidence is low or the request is sensitive."
    ],
    bestUsedFor: [
      "Building an internal FAQ bot for HR, IT, or policy questions with escalation paths",
      "Automating structured intake workflows (requests, approvals, triage) via chat",
      "Creating a team assistant that guides users to the right tools and resources"
    ],
    examples: [
      {
        scenario: "HR wants a bot to answer common benefits questions and route complex cases",
        prompt: "Create a bot topic: 'Benefits & coverage'. Provide sourced answers for common questions and route anything employee-specific to a case form.",
        output: "The bot answered FAQs consistently and handed off to a secure intake form when details were required."
      },
      {
        scenario: "IT helpdesk wants to reduce repetitive password/VPN tickets",
        prompt: "Build a bot flow that diagnoses VPN issues, links to the right setup guide, and creates a ticket if steps fail.",
        output: "The bot resolved common issues with a guided checklist and created tickets only when self-serve steps didn’t work."
      },
      {
        scenario: "Operations needs an internal assistant for procedure lookup",
        prompt: "Create a bot topic: 'How do I…' that points users to approved SOP links and captures feedback when an SOP is outdated.",
        output: "Employees got faster answers and the team received structured feedback to keep SOPs current."
      }
    ],
    quiz: [
      {
        question: "What is Copilot Studio primarily used for?",
        options: ["Editing spreadsheets", "Building internal chatbots/agents and automation without code", "Trading securities", "Approving customer transactions"],
        correct: 1
      },
      {
        question: "What’s a best practice when deploying an internal bot?",
        options: ["Let it answer anything without guardrails", "Use approved sources and define escalation to humans for sensitive cases", "Hide sources from users", "Use it only once per month"],
        correct: 1
      },
      {
        question: "What should a bot do when it’s not confident?",
        options: ["Make up an answer", "Escalate, route to a human, or request clarification", "End the conversation silently", "Always blame the user"],
        correct: 1
      }
    ],
    tasks: ["Build an FAQ bot topic", "Design a ticket triage flow", "Create an intake form handoff", "Draft escalation rules and routing", "Connect a bot to approved knowledge sources"],
    videoUrl: "https://www.youtube.com/embed/yKSoAOOoGaE",
    walkthroughVideoUrl: "https://www.youtube.com/embed/aryKPkCPMfs",
  },
  {
    id: "power-automate",
    name: "Power Automate with AI Builder",
    description: "Automate repetitive workflows like approvals, data entry, email routing, and document processing using drag-and-drop flows enhanced with AI",
    bestFor: ["All", "HR & Operations", "Retail Banking"],
    timeSaved: 50,
    difficulty: "Beginner",
    category: "Automation",
    color: "#14B8A6",
    socialProof: { name: "Emily", initials: "ET", savings: "4 hrs/week", color: "#F59E0B" },
    whatIsIt: [
      "Power Automate helps CIBC employees automate repetitive work across Microsoft 365 and other approved systems — approvals, notifications, data movement, and structured tasks — using low-code, drag-and-drop flows.",
      "AI Builder adds intelligent capabilities like document processing and classification, letting flows extract key fields, route requests, and reduce manual data entry while keeping processes consistent and auditable.",
      "Use Power Automate when you want reliable automation with governance: standardize approvals, reduce inbox chaos, and make routine operational steps run the same way every time."
    ],
    bestUsedFor: [
      "Automating approvals and routing (requests, exceptions, access, onboarding tasks)",
      "Reducing manual data entry via form-to-tracker or email-to-ticket flows",
      "Processing documents (extract fields, categorize, notify owners) with AI Builder"
    ],
    examples: [
      {
        scenario: "A team needs an approval workflow for internal requests",
        prompt: "Create a flow: when a request form is submitted, route to manager for approval, then notify requester and update a tracker.",
        output: "The flow automated routing and status updates so approvals were consistent and trackable."
      },
      {
        scenario: "Operations receives invoices by email and needs key fields captured",
        prompt: "Use AI Builder to extract vendor name, invoice number, amount, and due date from attachments and save to a SharePoint list.",
        output: "AI Builder extracted fields and the flow routed exceptions for human review, saving time on data entry."
      },
      {
        scenario: "Retail banking wants to triage emails to the right queue",
        prompt: "If an email subject contains 'branch issue' route to Branch Ops; if it contains 'compliance' route to Risk; else label and notify owner.",
        output: "Email routing reduced manual sorting and improved response time with clear audit trails."
      }
    ],
    quiz: [
      {
        question: "What is Power Automate primarily used for?",
        options: ["Designing posters", "Automating repetitive workflows across apps and services", "Replacing core banking systems", "Signing contracts automatically"],
        correct: 1
      },
      {
        question: "What does AI Builder add to Power Automate?",
        options: ["More fonts", "AI capabilities like document processing and classification", "A faster internet connection", "Automatic policy approvals"],
        correct: 1
      },
      {
        question: "What should you do with exceptions or low-confidence extractions?",
        options: ["Ignore them", "Route to a human review step with clear auditability", "Auto-approve anyway", "Delete the record"],
        correct: 1
      }
    ],
    tasks: ["Create an approval flow", "Automate email routing", "Extract fields from documents", "Update a tracker from a form", "Notify teams when thresholds are met"],
    videoUrl: "https://www.youtube.com/embed/UFpGbnJ4nMo",
    walkthroughVideoUrl: "https://www.youtube.com/embed/X5mPcQrTBEQ",
  },
  {
    id: "azure-openai",
    name: "Azure OpenAI Service",
    description: "Enterprise-grade access to GPT-4 and other large language models through Azure — build secure, compliant AI applications with CIBC's data governance",
    bestFor: ["Technology & Engineering", "Capital Markets"],
    timeSaved: 60,
    difficulty: "Advanced",
    category: "Development",
    color: "#8B5CF6",
    socialProof: { name: "David", initials: "DK", savings: "1.5 hrs/day", color: "#EC4899" },
    whatIsIt: [
      "Azure OpenAI Service provides enterprise access to leading language models through Azure. It’s the foundation for building secure, compliant AI experiences where your team controls authentication, logging, guardrails, and integration with internal systems.",
      "In a CIBC context, Azure OpenAI is used by engineering and advanced analytics teams to build internal assistants, summarization services, and workflow accelerators that comply with data governance and operational controls.",
      "Think of it as the platform layer: you can prototype in the playground, then productionize through APIs with monitoring, rate limits, and policy-aligned prompt and output handling."
    ],
    bestUsedFor: [
      "Building internal AI apps with controlled access, logging, and compliance guardrails",
      "Prototyping prompts and then deploying via API into internal tools and workflows",
      "Creating secure summarization, classification, and drafting services at scale"
    ],
    examples: [
      {
        scenario: "An engineering team builds an internal summarization API for tickets",
        prompt: "Design a prompt + output schema to summarize support tickets into: summary, priority, owner, and next action. Include a PII warning.",
        output: "The team used Azure OpenAI to standardize summaries and shipped an API with validation and audit logging."
      },
      {
        scenario: "A developer prototypes a compliant assistant for internal policies",
        prompt: "Create a system prompt that answers policy questions with citations and refuses to process client-identifying information.",
        output: "The assistant reliably refused unsafe inputs and responded with structured, source-linked answers when documents were provided."
      },
      {
        scenario: "Capital Markets builds a research helper for internal analysis",
        prompt: "Given this sanitized market note, extract key risks, assumptions, and unanswered questions. Output as JSON.",
        output: "Azure OpenAI produced structured outputs that could be validated and integrated into dashboards."
      }
    ],
    quiz: [
      {
        question: "What is Azure OpenAI Service used for?",
        options: ["Personal social media content", "Building secure, enterprise AI applications via Azure APIs", "Directly accessing customer bank accounts", "Replacing identity systems"],
        correct: 1
      },
      {
        question: "What’s a key requirement when using Azure OpenAI in an enterprise setting?",
        options: ["No monitoring needed", "Governance controls like auth, logging, and guardrails", "Always store prompts in public repos", "Disable validation to move faster"],
        correct: 1
      },
      {
        question: "What should you do before productionizing a prompt?",
        options: ["Assume it will generalize", "Test with representative, sanitized cases and validate outputs", "Skip security review", "Remove safety instructions"],
        correct: 1
      }
    ],
    tasks: ["Draft a system prompt with guardrails", "Create a JSON output schema", "Prototype in the Azure playground", "Design an API integration approach", "Write test cases for prompt validation"],
    videoUrl: "https://www.youtube.com/embed/FMfA5CVlBbM",
    walkthroughVideoUrl: "https://www.youtube.com/embed/RACspHmTjXI",
  },
  {
    id: "copilot-data",
    name: "Copilot for Excel & Power BI",
    description: "Analyze spreadsheets with natural language, generate charts, create PivotTables, build Power BI dashboards, and surface insights just by asking questions",
    bestFor: ["Capital Markets", "Compliance & Risk", "Wealth Management"],
    timeSaved: 40,
    difficulty: "Beginner",
    category: "Analysis",
    color: "#F59E0B",
    socialProof: { name: "Lisa", initials: "LW", savings: "45 min/use", color: "#6366F1" },
    whatIsIt: [
      "Copilot in Excel and Power BI lets you explore data using natural language: ask questions about trends, request charts, create PivotTables, and generate summary insights without writing complex formulas from scratch.",
      "For CIBC analysts and business partners, it speeds up exploratory analysis and helps turn raw tables into stakeholder-ready visuals and narratives — while you remain responsible for validating numbers and ensuring data handling is policy-compliant.",
      "Use it to accelerate the first pass: identify what’s changing, why it might be changing, and how to present it. Then apply your domain judgment and confirm calculations."
    ],
    bestUsedFor: [
      "Finding trends and outliers quickly in spreadsheets and dashboards",
      "Generating charts and PivotTables to explain performance or risk drivers",
      "Drafting a short narrative of insights for internal presentations"
    ],
    examples: [
      {
        scenario: "An analyst wants quick insight into a KPI table",
        prompt: "What are the top 3 drivers of the month-over-month increase? Show a chart and summarize in 4 bullets.",
        output: "Copilot suggested a chart, highlighted key contributors, and drafted a concise summary for stakeholders."
      },
      {
        scenario: "A compliance partner needs a quick outlier scan",
        prompt: "Flag unusual spikes or drops vs the 8-week average and list possible reasons to investigate.",
        output: "Copilot flagged candidate outliers and suggested investigation paths, which the user validated against source data."
      },
      {
        scenario: "A Wealth team needs a Power BI dashboard outline",
        prompt: "Propose a dashboard layout for client onboarding metrics: funnel, cycle time, top blockers, and regional breakdown.",
        output: "Copilot suggested visuals and a layout that the analyst refined into a usable internal dashboard."
      }
    ],
    quiz: [
      {
        question: "What can Copilot do in Excel/Power BI?",
        options: ["Approve spending requests", "Analyze data with natural language and help generate visuals", "Access customer records directly", "Replace financial controls"],
        correct: 1
      },
      {
        question: "What should you do before sharing Copilot-generated insights?",
        options: ["Assume numbers are perfect", "Validate calculations and confirm against trusted sources", "Hide methodology", "Skip peer review"],
        correct: 1
      },
      {
        question: "What data should you avoid including in prompts?",
        options: ["A timeframe", "Sensitive client PII or restricted data", "A desired chart type", "A summary format"],
        correct: 1
      }
    ],
    tasks: ["Summarize trends in a KPI table", "Generate a chart recommendation", "Create a PivotTable plan", "Draft an insights narrative", "Propose a Power BI dashboard layout"],
    videoUrl: "https://www.youtube.com/embed/vMXl4VxmjCE",
    walkthroughVideoUrl: "https://www.youtube.com/embed/rnKaOGOOIEM",
  },
  {
    id: "copilot-comms",
    name: "Copilot for Outlook & Teams",
    description: "Summarize long email threads, draft replies, recap Teams meetings you missed, prepare for meetings with auto-generated briefs, and catch up on chats",
    bestFor: ["All"],
    timeSaved: 25,
    difficulty: "Beginner",
    category: "Productivity",
    color: "#3B82F6",
    socialProof: { name: "Sarah", initials: "SC", savings: "1 hr/day", color: "#14B8A6" },
    whatIsIt: [
      "Copilot for Outlook and Teams helps you manage information overload: it summarizes long email chains, drafts replies, and helps you catch up on chats and meetings with clear recaps and action items.",
      "In a CIBC environment, it’s best used to accelerate internal communication — preparing for meetings, turning threads into a decision summary, and drafting internal updates — while ensuring sensitive client data is not included.",
      "Use it as a daily accelerator: reduce time spent reading, increase clarity, and keep stakeholders aligned with consistent summaries and next steps."
    ],
    bestUsedFor: [
      "Summarizing long threads into decisions and next steps",
      "Drafting internal responses and stakeholder updates quickly",
      "Creating meeting recaps and prep briefs from chats and agendas"
    ],
    examples: [
      {
        scenario: "A leader needs a one-screen summary of a long email thread",
        prompt: "Summarize this thread into: current status, decisions made, open questions, and who owns next steps.",
        output: "Copilot produced a structured summary that was easy to forward internally with minimal edits."
      },
      {
        scenario: "An employee missed a Teams meeting and needs to catch up",
        prompt: "Recap the meeting in 8 bullets and list action items with due dates (if mentioned).",
        output: "Copilot generated a recap and action list so the employee could rejoin work quickly."
      },
      {
        scenario: "A manager needs a polished reply draft for an internal ask",
        prompt: "Draft a concise reply: acknowledge, summarize what we’ll do, ask 2 clarifying questions, and propose next steps. Keep it professional.",
        output: "Copilot produced a professional draft that the manager quickly edited and sent."
      }
    ],
    quiz: [
      {
        question: "What can Copilot for Outlook/Teams help you do?",
        options: ["Approve client transactions", "Summarize threads/meetings and draft internal replies", "Access customer credit reports", "Bypass email retention policies"],
        correct: 1
      },
      {
        question: "What is the primary benefit of using Copilot for communications?",
        options: ["Sending emails without approval", "Saving time and improving clarity with summaries and drafts", "Replacing meeting attendance", "Skipping review of sensitive content"],
        correct: 1
      },
      {
        question: "What should you avoid including in prompts or pasted text?",
        options: ["A desired tone", "Client PII or restricted information", "A meeting agenda", "A set of internal action items"],
        correct: 1
      }
    ],
    tasks: ["Summarize an email thread", "Draft a reply with next steps", "Create a meeting recap", "Write a prep brief for a meeting", "Turn chat highlights into action items"],
    videoUrl: "https://www.youtube.com/embed/hGZtmVP1Mo8",
    walkthroughVideoUrl: "https://www.youtube.com/embed/iGA2e0x_LNk",
  },
  {
    id: "sharepoint-copilot",
    name: "SharePoint Premium & Copilot for Knowledge",
    description: "Search across all CIBC internal documents, policies, and wikis using natural language — get sourced answers instead of sifting through hundreds of files",
    bestFor: ["All", "HR & Operations", "Compliance & Risk"],
    timeSaved: 20,
    difficulty: "Beginner",
    category: "Knowledge",
    color: "#EC4899",
    socialProof: { name: "Kevin", initials: "KZ", savings: "30 min/use", color: "#F97316" },
    whatIsIt: [
      "SharePoint Premium and Copilot for Knowledge help CIBC employees find the right information fast across internal documents, policies, and wikis. Instead of searching folder-by-folder, you can ask questions in natural language and get concise, sourced answers.",
      "In a governance-driven environment, the key value is trust and traceability: Copilot can surface the relevant section, summarize it, and point you back to the authoritative document so you can verify before acting.",
      "Use it to reduce time spent hunting for policy language, onboarding guides, process steps, and internal standards — especially for cross-functional work."
    ],
    bestUsedFor: [
      "Finding the right policy/procedure quickly with a sourced summary",
      "Onboarding: locating the correct how-to guides and standards fast",
      "Answering internal FAQs with links to the authoritative document"
    ],
    examples: [
      {
        scenario: "A new employee needs the correct policy for a process",
        prompt: "Where is the official guidance for [internal process]? Summarize the steps and link the source section.",
        output: "Copilot returned a concise checklist and pointed to the exact policy section for verification."
      },
      {
        scenario: "Compliance needs sourced language for an internal memo",
        prompt: "Find the relevant section about data handling for internal AI tools and summarize it with citations.",
        output: "Copilot surfaced the authoritative wording and produced a summary that could be referenced in internal communications."
      },
      {
        scenario: "Operations needs a quick answer with sources",
        prompt: "What is the standard for retaining meeting notes? Provide a short answer and link to the policy.",
        output: "Copilot answered in one paragraph and included a link back to the source document."
      }
    ],
    quiz: [
      {
        question: "What is Copilot for Knowledge best used for?",
        options: ["Finding answers from public websites", "Searching internal docs and returning sourced answers", "Approving HR requests automatically", "Replacing official policy owners"],
        correct: 1
      },
      {
        question: "Why are citations/links important in an internal knowledge tool?",
        options: ["They are optional decoration", "They let you verify the authoritative source quickly", "They replace the need to read policy", "They make the answer longer"],
        correct: 1
      },
      {
        question: "What should you do before acting on an answer?",
        options: ["Assume it is always correct", "Open the source document and confirm the guidance", "Forward it externally", "Ignore the source link"],
        correct: 1
      }
    ],
    tasks: ["Find a policy section with citations", "Summarize an SOP into steps", "Locate onboarding resources", "Answer an internal FAQ with sources", "Compare two internal documents"],
    videoUrl: "https://www.youtube.com/embed/3XYMhBRp0Nk",
    walkthroughVideoUrl: "https://www.youtube.com/embed/pR-33KGMALY",
  },
  {
    id: "copilot-word",
    name: "Copilot for Word & Document Drafting",
    description: "Generate first drafts of reports, memos, RFPs, and proposals in Word — rewrite for tone, summarize long documents, and turn rough notes into polished content",
    bestFor: ["Compliance & Risk", "Capital Markets", "Retail Banking", "Wealth Management"],
    timeSaved: 45,
    difficulty: "Beginner",
    category: "Writing",
    color: "#10B981",
    socialProof: { name: "Rachel", initials: "RP", savings: "50 min/use", color: "#A855F7" },
    whatIsIt: [
      "Copilot for Word helps CIBC employees draft and refine professional documents quickly: reports, memos, RFP responses, proposals, and internal briefs. It can also summarize long documents and rewrite sections for tone and clarity.",
      "In a regulated environment, the first draft is only the start — you remain responsible for accuracy, compliance language, and ensuring no client-identifying details are included in prompts or drafts.",
      "Use Word Copilot to eliminate the blank page: start from an outline, turn notes into a structured draft, and iterate with targeted rewrite requests."
    ],
    bestUsedFor: [
      "Creating first drafts of internal memos, reports, and proposals quickly",
      "Summarizing long documents into key points and action items",
      "Rewriting for executive tone, clarity, and consistent structure"
    ],
    examples: [
      {
        scenario: "A compliance partner needs a memo draft from bullet points",
        prompt: "Turn these bullets into a 1-page memo with sections: Background, Assessment, Risks, and Recommendations. Use a formal tone.",
        output: "Copilot produced a structured memo draft that the author edited for accuracy and policy alignment."
      },
      {
        scenario: "A banker needs to rewrite a client-facing draft into internal language",
        prompt: "Rewrite this document for internal stakeholders: concise, neutral, and action-oriented. Keep a professional tone.",
        output: "Copilot rewrote the content in a more internal style with clearer headings and shorter sentences."
      },
      {
        scenario: "A PM needs to summarize a long document for leadership",
        prompt: "Summarize this document into 7 bullets and an executive summary paragraph. Highlight decisions needed.",
        output: "Copilot generated a leadership-ready summary and clearly called out decisions and next steps."
      }
    ],
    quiz: [
      {
        question: "What is Copilot for Word best used for?",
        options: ["Editing videos", "Drafting and refining documents in Word quickly", "Approving policies automatically", "Processing client PII"],
        correct: 1
      },
      {
        question: "What should you do before you share a Copilot-generated draft?",
        options: ["Assume it is correct", "Review for accuracy, tone, and compliance requirements", "Share externally to validate", "Remove citations and sources"],
        correct: 1
      },
      {
        question: "What should you avoid putting into the prompt?",
        options: ["A document outline", "Client-identifying information or sensitive data", "A target tone", "A desired length"],
        correct: 1
      }
    ],
    tasks: ["Draft a memo from bullet points", "Rewrite for executive tone", "Summarize a long document", "Create an RFP response outline", "Turn notes into a structured report"],
    videoUrl: "https://www.youtube.com/embed/wrBrsWVgiMc",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jyNiHkvOEfA",
  },
  {
    id: "copilot-pptx",
    name: "Copilot for PowerPoint",
    description: "Create polished slide decks from prompts or Word documents, add speaker notes, redesign layouts, and generate visuals — presentation-ready in minutes",
    bestFor: ["All", "Wealth Management", "Capital Markets"],
    timeSaved: 35,
    difficulty: "Beginner",
    category: "Productivity",
    color: "#3B82F6",
    socialProof: { name: "Thomas", initials: "TN", savings: "1.5 hrs/deck", color: "#EF4444" },
    whatIsIt: [
      "Copilot for PowerPoint helps CIBC employees create and refine slide decks quickly. Start from a prompt, a Word document, or rough notes, and Copilot can generate an initial structure, draft slide content, and suggest layouts.",
      "For internal presentations, it’s a speed tool: you still provide the facts, validate numbers, and ensure the message aligns with leadership expectations and internal standards.",
      "Use it to get to a clean first draft fast — then spend your time improving the narrative, confirming data, and tailoring to your audience."
    ],
    bestUsedFor: [
      "Creating a first draft deck from a prompt or Word document",
      "Adding speaker notes and refining slide wording for clarity",
      "Redesigning layouts and generating slide-by-slide structure quickly"
    ],
    examples: [
      {
        scenario: "A manager needs a deck for a quarterly update",
        prompt: "Create a 10-slide internal update deck: highlights, KPIs, risks, wins, and next quarter priorities. Use an executive tone.",
        output: "Copilot produced a coherent outline and draft slide text that the manager refined with real metrics and visuals."
      },
      {
        scenario: "Wealth Management needs a client-ready narrative (internal draft first)",
        prompt: "Draft a presentation structure for a portfolio review: market context, performance drivers, risks, and next steps.",
        output: "Copilot generated a logical structure and talking points that the presenter adjusted for the exact client context."
      },
      {
        scenario: "An employee wants to convert a Word brief into slides quickly",
        prompt: "Turn this 2-page brief into a 6-slide deck with clear titles, bullets, and a final slide of decisions needed.",
        output: "Copilot mapped sections into slides and proposed wording, saving time on formatting and structuring."
      }
    ],
    quiz: [
      {
        question: "What can Copilot for PowerPoint help you do?",
        options: ["Automatically approve budgets", "Generate and refine slide decks faster", "Access client accounts", "Bypass data validation"],
        correct: 1
      },
      {
        question: "What should you do before presenting a Copilot-generated deck?",
        options: ["Present it without reviewing", "Verify facts, update metrics, and tailor to the audience", "Remove all charts", "Publish externally"],
        correct: 1
      },
      {
        question: "What content should you avoid putting into prompts?",
        options: ["A slide outline", "Sensitive client PII or restricted data", "A tone request", "A target slide count"],
        correct: 1
      }
    ],
    tasks: ["Draft a deck outline", "Convert a Word brief to slides", "Rewrite slide text for exec tone", "Generate speaker notes", "Propose slide visuals and layouts"],
    videoUrl: "https://www.youtube.com/embed/UhJOhf2Xoag",
    walkthroughVideoUrl: "https://www.youtube.com/embed/sSCJFGhK2XU",
  }
];

export const leaderboardData = [
  { rank: 1, name: "Priya Sharma", dept: "Capital Markets", toolsDone: 8, hoursSaved: 67.5, points: 4250, badge: "CIBC AI Champion" },
  { rank: 2, name: "James Mitchell", dept: "Technology", toolsDone: 7, hoursSaved: 58.2, points: 3890, badge: "CIBC AI Champion" },
  { rank: 3, name: "Sarah Chen", dept: "Compliance & Risk", toolsDone: 7, hoursSaved: 54.0, points: 3720, badge: "CIBC AI Champion" },
  { rank: 4, name: "Michael Okafor", dept: "Capital Markets", toolsDone: 6, hoursSaved: 48.3, points: 3450, badge: "Builder" },
  { rank: 5, name: "Emily Tremblay", dept: "Wealth Management", toolsDone: 6, hoursSaved: 45.1, points: 3200, badge: "Builder" },
  { rank: 6, name: "David Kim", dept: "Technology", toolsDone: 6, hoursSaved: 42.0, points: 2980, badge: "Builder" },
  { rank: 7, name: "Rachel Patel", dept: "Retail Banking", toolsDone: 5, hoursSaved: 38.7, points: 2750, badge: "Builder" },
  { rank: 8, name: "Thomas Nguyen", dept: "Compliance & Risk", toolsDone: 5, hoursSaved: 35.2, points: 2500, badge: "Builder" },
  { rank: 9, name: "Lisa Wang", dept: "Capital Markets", toolsDone: 5, hoursSaved: 32.8, points: 2340, badge: "Builder" },
  { rank: 10, name: "Robert Fournier", dept: "HR & Operations", toolsDone: 4, hoursSaved: 28.5, points: 2100, badge: "Builder" },
  { rank: 11, name: "Anita Desai", dept: "Wealth Management", toolsDone: 4, hoursSaved: 25.0, points: 1890, badge: "Builder" },
  { rank: 12, name: "Chris MacLeod", dept: "Technology", toolsDone: 4, hoursSaved: 22.3, points: 1720, badge: "Builder" },
  { rank: 13, name: "Jennifer Liu", dept: "Retail Banking", toolsDone: 3, hoursSaved: 18.5, points: 1450, badge: "Practitioner" },
  { rank: 14, name: "Mark Thompson", dept: "Capital Markets", toolsDone: 3, hoursSaved: 15.2, points: 1200, badge: "Practitioner" },
  { rank: 15, name: "Fatima Al-Hassan", dept: "Compliance & Risk", toolsDone: 3, hoursSaved: 14.8, points: 1150, badge: "Practitioner" },
  { rank: 16, name: "You", dept: "—", toolsDone: 2, hoursSaved: 12.5, points: 340, badge: "Explorer", isUser: true },
  { rank: 17, name: "Daniel Brown", dept: "Retail Banking", toolsDone: 2, hoursSaved: 10.3, points: 890, badge: "Practitioner" },
  { rank: 18, name: "Sophie Martin", dept: "HR & Operations", toolsDone: 2, hoursSaved: 8.7, points: 720, badge: "Practitioner" },
  { rank: 19, name: "Kevin Zhang", dept: "Wealth Management", toolsDone: 1, hoursSaved: 5.2, points: 450, badge: "Explorer" },
  { rank: 20, name: "Amanda Roy", dept: "Technology", toolsDone: 1, hoursSaved: 3.8, points: 280, badge: "Explorer" },
];

export const teamMembers = [
  { name: "Sarah Chen", level: "Practitioner", toolsDone: 4, hoursSaved: 22.3, points: 1720, lastActive: "Today", status: "active" },
  { name: "Raj Patel", level: "Builder", toolsDone: 5, hoursSaved: 28.5, points: 2100, lastActive: "Today", status: "active" },
  { name: "Emily Watson", level: "Explorer", toolsDone: 2, hoursSaved: 8.5, points: 540, lastActive: "Today", status: "active" },
  { name: "Marcus Johnson", level: "Practitioner", toolsDone: 3, hoursSaved: 15.2, points: 1200, lastActive: "Yesterday", status: "active" },
  { name: "Lisa Tremblay", level: "Builder", toolsDone: 6, hoursSaved: 35.0, points: 2450, lastActive: "Today", status: "active" },
  { name: "Kevin O'Brien", level: "Explorer", toolsDone: 1, hoursSaved: 4.2, points: 320, lastActive: "3 days ago", status: "active" },
  { name: "Amira Hassan", level: "Practitioner", toolsDone: 3, hoursSaved: 12.8, points: 980, lastActive: "Today", status: "active" },
  { name: "Tyler Kim", level: "Explorer", toolsDone: 2, hoursSaved: 6.5, points: 480, lastActive: "Today", status: "active" },
  { name: "Diana Novak", level: "Explorer", toolsDone: 0, hoursSaved: 0, points: 100, lastActive: "5 days ago", status: "inactive" },
  { name: "John Fraser", level: "Explorer", toolsDone: 0, hoursSaved: 0, points: 100, lastActive: "6 days ago", status: "inactive" },
  { name: "Priya Gupta", level: "Explorer", toolsDone: 1, hoursSaved: 2.0, points: 200, lastActive: "4 days ago", status: "inactive" },
  { name: "Alex Rousseau", level: "Practitioner", toolsDone: 4, hoursSaved: 18.5, points: 1540, lastActive: "Today", status: "active" },
];

export const divisions = [
  { name: "Capital Markets", employees: 6200, adoption: 89, hoursSaved: 28400, trend: "+12%" },
  { name: "Technology & Engineering", employees: 8500, adoption: 82, hoursSaved: 35200, trend: "+8%" },
  { name: "Retail Banking", employees: 14200, adoption: 58, hoursSaved: 32100, trend: "+15%" },
  { name: "Wealth Management", employees: 5800, adoption: 64, hoursSaved: 14800, trend: "+10%" },
  { name: "Compliance & Risk", employees: 4100, adoption: 71, hoursSaved: 9800, trend: "+18%" },
  { name: "HR & Operations", employees: 6200, adoption: 45, hoursSaved: 3900, trend: "+22%" },
];

export const badges = [
  { id: "first-step", name: "First Step", icon: "🚀", description: "Complete onboarding", unlockCondition: "onboarding" },
  { id: "tool-explorer", name: "Tool Explorer", icon: "🛠️", description: "Start your first learning journey", unlockCondition: "firstJourney" },
  { id: "time-saver", name: "Time Saver", icon: "⚡", description: "Save your first hour", unlockCondition: "hourSaved" },
  { id: "on-a-roll", name: "On a Roll", icon: "🔥", description: "7 day streak", unlockCondition: "streak7" },
  { id: "ai-practitioner", name: "AI Practitioner", icon: "🏆", description: "Complete 3 tool journeys", unlockCondition: "threeTools" },
  { id: "spark-champion", name: "CIBC AI Champion", icon: "👑", description: "Top 10 on leaderboard", unlockCondition: "top10" },
];

export const categoryColors = {
  Productivity: { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  Development: { bg: "bg-purple-100", text: "text-purple-700", dot: "bg-purple-500" },
  Automation: { bg: "bg-teal-100", text: "text-teal-700", dot: "bg-teal-500" },
  Writing: { bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-500" },
  Analysis: { bg: "bg-amber-100", text: "text-amber-700", dot: "bg-amber-500" },
  Knowledge: { bg: "bg-pink-100", text: "text-pink-700", dot: "bg-pink-500" },
};

export const difficultyColors = {
  Beginner: { bg: "bg-green-100", text: "text-green-700" },
  Intermediate: { bg: "bg-yellow-100", text: "text-yellow-700" },
  Advanced: { bg: "bg-red-100", text: "text-red-700" },
};
