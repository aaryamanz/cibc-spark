export const tools = [
  {
    id: "cibc-copilot",
    name: "CIBC Copilot",
    description: "Your internal AI assistant for drafting, summarizing, and answering questions",
    bestFor: ["All"],
    timeSaved: 25,
    difficulty: "Beginner",
    category: "Productivity",
    color: "#3B82F6",
    whatIsIt: [
      "CIBC Copilot is your go-to internal AI assistant, built specifically for CIBC employees. Think of it as a smart colleague who's always available to help you draft emails, summarize long documents, and answer questions about your work.",
      "Unlike generic AI tools, CIBC Copilot is trained to understand banking terminology, CIBC's internal processes, and the specific needs of our workforce. It operates within our security framework, ensuring all interactions comply with data governance policies.",
      "Whether you need to quickly draft a client response, summarize meeting notes, or get a plain-English explanation of a complex policy document, CIBC Copilot can help you get it done in a fraction of the time."
    ],
    bestUsedFor: [
      "Drafting and refining professional emails and messages",
      "Summarizing long documents, reports, or policy updates",
      "Getting quick answers about CIBC procedures and guidelines"
    ],
    examples: [
      {
        scenario: "A retail banker needs to respond to a client inquiry about mortgage renewal options",
        prompt: "Draft a professional email to a client explaining their mortgage renewal options, including fixed and variable rates. Keep it friendly but professional.",
        output: "The tool generated a clear, well-structured email covering both rate options, key considerations for each, and a call to action to schedule a meeting — all in about 15 seconds."
      },
      {
        scenario: "A compliance officer needs to summarize a 30-page regulatory update",
        prompt: "Summarize this regulatory update document, highlighting the key changes that affect our retail banking operations and any action items for our team.",
        output: "CIBC Copilot produced a concise 1-page summary with the 5 most impactful changes, each with a brief explanation and recommended next steps for the compliance team."
      },
      {
        scenario: "A new graduate wants to understand CIBC's expense reimbursement process",
        prompt: "Explain the step-by-step process for submitting an expense reimbursement at CIBC, including any approval requirements.",
        output: "The tool provided a clear 6-step walkthrough of the expense process, including which forms to use, approval thresholds, and typical processing timelines."
      }
    ],
    quiz: [
      {
        question: "What is CIBC Copilot primarily designed to help with?",
        options: ["Trading stocks", "Drafting, summarizing, and answering questions", "Managing your calendar", "Approving loans"],
        correct: 1
      },
      {
        question: "What should you NEVER input into CIBC Copilot?",
        options: ["General questions about CIBC policies", "Client names and account numbers", "Requests to summarize documents", "Questions about internal processes"],
        correct: 1
      },
      {
        question: "CIBC Copilot operates within which framework?",
        options: ["No security framework", "CIBC's security and data governance framework", "A third-party open framework", "Only during business hours"],
        correct: 1
      }
    ],
    tasks: ["Draft a professional email", "Summarize a document", "Answer a policy question", "Create meeting notes", "Write a brief report"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code as you type",
    bestFor: ["Technology & Engineering"],
    timeSaved: 35,
    difficulty: "Intermediate",
    category: "Development",
    color: "#8B5CF6",
    whatIsIt: [
      "GitHub Copilot is an AI-powered pair programmer that integrates directly into your code editor. As you write code, it suggests completions — from single lines to entire functions — based on the context of your project.",
      "For CIBC developers, this means faster development cycles, fewer boilerplate errors, and more time to focus on complex business logic. It supports all major programming languages used at CIBC, including Java, Python, TypeScript, and SQL.",
      "Copilot learns from the patterns in your codebase, making its suggestions increasingly relevant. It's like having a senior developer looking over your shoulder, ready to help with syntax, algorithms, and common patterns."
    ],
    bestUsedFor: [
      "Auto-completing repetitive code patterns and boilerplate",
      "Generating unit tests and documentation for existing code",
      "Quickly prototyping new features and exploring API integrations"
    ],
    examples: [
      {
        scenario: "A developer needs to write a REST API endpoint for account balance retrieval",
        prompt: "// Create a GET endpoint that retrieves account balance by account ID with proper error handling and authentication middleware",
        output: "GitHub Copilot generated a complete Express.js endpoint with JWT authentication middleware, input validation, error handling, and properly structured JSON responses — saving roughly 20 minutes of manual coding."
      },
      {
        scenario: "A QA engineer needs to write unit tests for a payment processing function",
        prompt: "// Write comprehensive unit tests for the processPayment function covering success, insufficient funds, and invalid account scenarios",
        output: "The tool generated 8 well-structured test cases using Jest, covering all edge cases including boundary conditions, async error handling, and mock database interactions."
      },
      {
        scenario: "A data engineer needs to write a SQL query for transaction analysis",
        prompt: "-- Query to find the top 10 customers by transaction volume in the last 90 days, grouped by branch",
        output: "Copilot suggested an optimized SQL query with proper JOINs, date filtering, aggregation, and a window function for ranking — complete with helpful inline comments."
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
        options: ["It replaces the need for code review", "It reduces boilerplate code and speeds up development", "It automatically deploys code to production", "It manages your Git branches"],
        correct: 1
      }
    ],
    tasks: ["Generate a REST API endpoint", "Write unit tests", "Create a database query", "Refactor legacy code", "Add error handling"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "meeting-summarizer",
    name: "Meeting Summarizer",
    description: "Automatically transcribes and summarizes meetings with action items",
    bestFor: ["All"],
    timeSaved: 45,
    difficulty: "Beginner",
    category: "Productivity",
    color: "#3B82F6",
    whatIsIt: [
      "The Meeting Summarizer automatically records, transcribes, and creates structured summaries of your meetings. No more frantic note-taking or wondering what was decided — the tool captures everything and organizes it for you.",
      "After each meeting, you'll receive a clean summary with key discussion points, decisions made, and action items assigned to specific team members with deadlines. It integrates with Microsoft Teams and Outlook, making it seamless to use in your daily workflow.",
      "For CIBC teams, this means better meeting accountability, clearer follow-through on action items, and a searchable archive of meeting decisions that helps with audit trails and compliance documentation."
    ],
    bestUsedFor: [
      "Capturing key decisions and action items from team meetings",
      "Creating searchable meeting archives for compliance and audit purposes",
      "Sharing concise meeting updates with stakeholders who couldn't attend"
    ],
    examples: [
      {
        scenario: "A project manager runs a 45-minute sprint planning meeting with 8 team members",
        prompt: "Summarize this sprint planning meeting, highlighting each user story discussed, story point estimates, and who is assigned to each task.",
        output: "The tool produced a structured summary with 12 user stories, their estimates, assignees, and 3 flagged blockers — plus a follow-up meeting scheduled for the unresolved items."
      },
      {
        scenario: "A compliance analyst attends a regulatory briefing with external auditors",
        prompt: "Create a detailed summary of this regulatory briefing, focusing on new requirements, compliance deadlines, and required documentation changes.",
        output: "Meeting Summarizer generated a timeline of 5 new regulatory requirements with their deadlines, 8 action items for the compliance team, and flagged 2 items needing legal review."
      },
      {
        scenario: "A wealth manager has a team huddle about client portfolio strategy",
        prompt: "Summarize the key portfolio strategy decisions from this team huddle and list action items for each advisor.",
        output: "The summary included 4 strategic decisions about sector allocation, 6 personalized action items for team members, and a note about the next quarterly review date."
      }
    ],
    quiz: [
      {
        question: "What should you NOT do when using the Meeting Summarizer?",
        options: ["Share the summary with your team", "Include confidential client information in meeting discussions being recorded", "Use it for long meetings", "Review the summary after the meeting"],
        correct: 1
      },
      {
        question: "What does the Meeting Summarizer automatically generate?",
        options: ["Only a transcript", "A summary with key points, decisions, and action items", "Only a list of attendees", "A video recording"],
        correct: 1
      },
      {
        question: "Why is the Meeting Summarizer valuable for compliance teams?",
        options: ["It replaces compliance officers", "It creates searchable meeting archives for audit trails", "It automatically files regulatory reports", "It predicts future regulations"],
        correct: 1
      }
    ],
    tasks: ["Summarize a team meeting", "Extract action items", "Create a meeting brief for stakeholders", "Generate a weekly meeting digest", "Draft follow-up emails"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "doc-drafter",
    name: "Document Drafting Assistant",
    description: "Generate first drafts of reports, memos, and proposals instantly",
    bestFor: ["Compliance & Risk", "Capital Markets", "Retail Banking"],
    timeSaved: 50,
    difficulty: "Beginner",
    category: "Writing",
    color: "#10B981",
    whatIsIt: [
      "The Document Drafting Assistant helps you create professional first drafts of reports, memos, proposals, and other business documents in minutes instead of hours. Simply describe what you need, and it generates a well-structured draft tailored to CIBC's standards.",
      "The tool understands common CIBC document formats — from risk assessment memos to client proposals to quarterly reports. It applies appropriate tone, structure, and compliance language automatically, giving you a solid foundation to review and refine.",
      "This doesn't replace your expertise — it eliminates the blank-page problem. You'll spend your time refining and adding your insights rather than wrestling with formatting and boilerplate language."
    ],
    bestUsedFor: [
      "Creating first drafts of regulatory and compliance reports",
      "Generating structured memos and proposals with proper formatting",
      "Drafting executive summaries and board-ready documents"
    ],
    examples: [
      {
        scenario: "A compliance analyst needs to draft a risk assessment memo for a new digital banking feature",
        prompt: "Draft a risk assessment memo for the launch of a new mobile deposit feature, covering operational risk, fraud risk, and regulatory compliance considerations.",
        output: "The tool generated a 3-page memo with proper CIBC formatting, covering all three risk areas with specific considerations, a risk rating matrix, and recommended mitigation strategies."
      },
      {
        scenario: "A retail banking manager needs a quarterly performance report",
        prompt: "Create a quarterly performance report template for a retail banking branch, including sections for revenue, customer satisfaction, and team development.",
        output: "Document Drafting Assistant produced a professional report with executive summary, data tables, trend analysis sections, and recommendations — ready for the manager to fill in specific numbers."
      },
      {
        scenario: "A capital markets analyst needs to draft a market research brief",
        prompt: "Draft a market research brief on the Canadian real estate market outlook for the next 12 months, structured for our investment committee.",
        output: "The tool created a structured brief with market overview, key indicators, risk factors, and investment implications — formatted for investment committee review with proper disclaimers."
      }
    ],
    quiz: [
      {
        question: "What is the primary purpose of the Document Drafting Assistant?",
        options: ["To replace human document review", "To generate first drafts quickly so you can focus on refinement", "To automatically approve documents", "To store documents securely"],
        correct: 1
      },
      {
        question: "What types of documents can the tool help create?",
        options: ["Only emails", "Reports, memos, proposals, and other business documents", "Only compliance reports", "Only presentations"],
        correct: 1
      },
      {
        question: "After receiving a draft from the tool, what should you always do?",
        options: ["Submit it immediately", "Review and refine it with your own expertise", "Delete it and start over", "Forward it to your manager without changes"],
        correct: 1
      }
    ],
    tasks: ["Draft a risk assessment memo", "Create a quarterly report", "Write a project proposal", "Generate a compliance document", "Draft an executive summary"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "risk-report",
    name: "Risk Report Generator",
    description: "Analyze documents and auto-generate structured risk summaries",
    bestFor: ["Compliance & Risk", "Capital Markets"],
    timeSaved: 60,
    difficulty: "Intermediate",
    category: "Analysis",
    color: "#F59E0B",
    whatIsIt: [
      "The Risk Report Generator is a specialized tool that analyzes complex documents — regulatory filings, audit reports, contract terms — and automatically generates structured risk summaries. It identifies potential risk factors, categorizes them by severity, and suggests mitigation approaches.",
      "For CIBC's risk and compliance teams, this tool dramatically accelerates the document review process. Instead of spending hours reading through dense regulatory documents, you can get a comprehensive risk analysis in minutes, then focus your expertise on the high-priority items.",
      "The tool follows CIBC's risk taxonomy and reporting standards, ensuring output is consistent with internal frameworks. It flags items that need human judgment and clearly marks its confidence level for each identified risk."
    ],
    bestUsedFor: [
      "Analyzing regulatory documents for compliance risk factors",
      "Generating structured risk summaries from audit reports",
      "Creating risk matrices and severity assessments from complex documents"
    ],
    examples: [
      {
        scenario: "A risk analyst needs to review a 100-page regulatory update from OSFI",
        prompt: "Analyze this OSFI regulatory update and generate a risk summary identifying all changes that affect CIBC's capital requirements and compliance obligations.",
        output: "The tool identified 14 relevant regulatory changes, categorized them by impact level (3 high, 7 medium, 4 low), and generated a structured summary with required actions and deadlines for each."
      },
      {
        scenario: "A capital markets analyst needs to assess risk in a potential deal",
        prompt: "Generate a risk assessment for this proposed corporate bond issuance, covering credit risk, market risk, and regulatory risk factors.",
        output: "Risk Report Generator produced a comprehensive risk matrix covering 8 risk categories, with quantitative and qualitative assessments, comparable deal analysis, and recommended risk mitigation strategies."
      },
      {
        scenario: "An audit team needs to summarize findings from multiple branch audits",
        prompt: "Consolidate findings from these 5 branch audit reports and generate a unified risk summary with common themes and outliers.",
        output: "The tool identified 3 common themes across branches, flagged 2 outlier findings requiring immediate attention, and produced a consolidated report suitable for senior management review."
      }
    ],
    quiz: [
      {
        question: "What does the Risk Report Generator do with complex documents?",
        options: ["Deletes them after reading", "Analyzes them and generates structured risk summaries", "Sends them to external auditors", "Only counts the number of pages"],
        correct: 1
      },
      {
        question: "What framework does the tool follow for risk categorization?",
        options: ["A random framework", "CIBC's internal risk taxonomy and reporting standards", "No framework — it makes it up", "Only external frameworks"],
        correct: 1
      },
      {
        question: "What should you do with items the tool marks as needing human judgment?",
        options: ["Ignore them", "Review them personally with your risk expertise", "Ask the tool to decide for you", "Delete them from the report"],
        correct: 1
      }
    ],
    tasks: ["Analyze a regulatory document", "Generate a risk summary", "Create a risk matrix", "Assess deal risk factors", "Consolidate audit findings"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "client-email",
    name: "Client Email Writer",
    description: "Generate professional, personalized client emails in seconds",
    bestFor: ["Retail Banking", "Wealth Management"],
    timeSaved: 20,
    difficulty: "Beginner",
    category: "Writing",
    color: "#10B981",
    whatIsIt: [
      "The Client Email Writer helps you craft professional, personalized client communications in seconds. Whether you're following up after a meeting, introducing a new product, or responding to an inquiry, this tool generates polished emails that match CIBC's communication standards.",
      "The tool adapts its tone and content based on the client relationship type — from formal institutional communications to friendly retail banking outreach. It includes proper salutations, clear call-to-actions, and compliance-appropriate disclaimers where needed.",
      "Remember: always review generated emails before sending and never include actual client names or account details when generating prompts. Use placeholder information and personalize the final draft yourself."
    ],
    bestUsedFor: [
      "Drafting follow-up emails after client meetings",
      "Creating personalized product introduction messages",
      "Responding professionally to client inquiries and requests"
    ],
    examples: [
      {
        scenario: "A wealth advisor needs to follow up after a portfolio review meeting",
        prompt: "Write a follow-up email after a quarterly portfolio review meeting. The tone should be warm but professional. Include a summary of key discussion points and next steps.",
        output: "The tool generated a polished email with a warm opening, 4 bullet points summarizing the discussion, clear next steps, and a professional closing — ready for the advisor to personalize with specific details."
      },
      {
        scenario: "A retail banker wants to introduce a new savings product to clients",
        prompt: "Draft an email introducing our new high-interest savings account to existing clients, highlighting the competitive rate and easy sign-up process.",
        output: "Client Email Writer produced an engaging email with a compelling subject line, clear product benefits, a comparison to standard savings rates, and a simple call-to-action to book an appointment."
      },
      {
        scenario: "A relationship manager needs to respond to a client's mortgage inquiry",
        prompt: "Write a professional response to a client asking about mortgage renewal options. Include both fixed and variable rate considerations.",
        output: "The tool generated a helpful response explaining both options in plain language, with a brief pros/cons comparison and an invitation to schedule a detailed discussion."
      }
    ],
    quiz: [
      {
        question: "What should you NEVER include when generating an email prompt?",
        options: ["The type of email you need", "Actual client names or account numbers", "The desired tone of the email", "The topic of the email"],
        correct: 1
      },
      {
        question: "What should you always do before sending a generated email?",
        options: ["Send it immediately without reading", "Review it and personalize with specific details", "Forward it to your manager first", "Print it out"],
        correct: 1
      },
      {
        question: "How does the Client Email Writer adapt its output?",
        options: ["It always uses the same tone", "It adapts tone based on client relationship type", "It only writes in French", "It requires manual formatting"],
        correct: 1
      }
    ],
    tasks: ["Write a follow-up email", "Draft a product introduction", "Respond to a client inquiry", "Create a meeting request", "Write a thank you note"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "data-analysis",
    name: "Data Analysis Assistant",
    description: "Upload spreadsheets and get instant insights and visualizations",
    bestFor: ["Capital Markets", "Compliance & Risk"],
    timeSaved: 55,
    difficulty: "Intermediate",
    category: "Analysis",
    color: "#F59E0B",
    whatIsIt: [
      "The Data Analysis Assistant lets you upload spreadsheets and datasets to get instant insights, trends, and visualizations without writing a single line of code. Simply describe what you want to know about your data, and the tool does the heavy lifting.",
      "It can identify patterns, calculate statistics, create charts, and generate written summaries of your data findings. For CIBC analysts, this means spending less time on data manipulation and more time on strategic insights and decision-making.",
      "The tool supports Excel files, CSVs, and common data formats. It's particularly powerful for quick exploratory analysis, data quality checks, and generating presentation-ready visualizations for stakeholder meetings."
    ],
    bestUsedFor: [
      "Quick exploratory analysis of large datasets",
      "Generating visualizations and charts for presentations",
      "Identifying trends, outliers, and patterns in financial data"
    ],
    examples: [
      {
        scenario: "A capital markets analyst has a spreadsheet of quarterly trading volumes",
        prompt: "Analyze this trading volume data. Show me the top performing sectors, month-over-month trends, and flag any unusual spikes or drops.",
        output: "The tool generated a summary showing Technology and Healthcare as top sectors, identified a 23% volume spike in March, and created a trend chart highlighting seasonal patterns over the past 4 quarters."
      },
      {
        scenario: "A compliance analyst needs to check transaction data for anomalies",
        prompt: "Review this transaction dataset for potential anomalies. Flag any transactions that deviate significantly from the average and group them by type.",
        output: "Data Analysis Assistant identified 47 anomalous transactions (2.3% of total), grouped them into 3 categories, and generated a summary table with recommended follow-up actions for each group."
      },
      {
        scenario: "A branch manager wants to understand customer satisfaction trends",
        prompt: "Analyze these customer satisfaction survey results. Show me trends over the past 6 months, top complaints, and areas of improvement.",
        output: "The tool created a dashboard-style summary with satisfaction scores trending upward (+8%), identified wait times as the #1 complaint, and highlighted digital banking as the highest-rated service."
      }
    ],
    quiz: [
      {
        question: "What types of files can you upload to the Data Analysis Assistant?",
        options: ["Only PDFs", "Excel files, CSVs, and common data formats", "Only images", "Only Word documents"],
        correct: 1
      },
      {
        question: "What is a key benefit for CIBC analysts using this tool?",
        options: ["It replaces the need for data governance", "It lets you spend less time on data manipulation and more on strategic insights", "It automatically trades stocks", "It eliminates the need for data accuracy"],
        correct: 1
      },
      {
        question: "Before uploading data, what should you verify?",
        options: ["The file is in color", "The data doesn't contain sensitive client PII", "The file is larger than 1GB", "The spreadsheet has exactly 100 rows"],
        correct: 1
      }
    ],
    tasks: ["Analyze a dataset for trends", "Generate a visualization", "Identify anomalies in data", "Create a statistical summary", "Compare datasets"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "presentation",
    name: "Presentation Builder",
    description: "Turn bullet points into polished slide decks automatically",
    bestFor: ["All"],
    timeSaved: 40,
    difficulty: "Beginner",
    category: "Productivity",
    color: "#3B82F6",
    whatIsIt: [
      "The Presentation Builder transforms your rough bullet points, notes, or ideas into polished, professional slide decks. Instead of spending hours formatting slides, you can focus on your message and let the tool handle the design and structure.",
      "It understands CIBC's presentation standards and automatically applies appropriate layouts, color schemes, and formatting. Whether you're preparing for a team meeting, a client pitch, or a board presentation, the tool creates slides that look like they were designed by a professional.",
      "Simply provide your key points, specify the audience and purpose, and the Presentation Builder generates a complete deck with title slides, content slides, charts, and a summary — all ready for your review and customization."
    ],
    bestUsedFor: [
      "Creating professional slide decks from rough notes or bullet points",
      "Building client presentation templates with CIBC branding",
      "Structuring executive presentations and board reports"
    ],
    examples: [
      {
        scenario: "A manager needs to present quarterly results to their team",
        prompt: "Create a 10-slide presentation covering Q1 performance results. Include: revenue highlights, team achievements, areas for improvement, and Q2 goals.",
        output: "The tool generated a professional deck with a title slide, executive summary, 4 data-focused slides, a team recognition slide, improvement areas, Q2 roadmap, and a closing slide — all with CIBC formatting."
      },
      {
        scenario: "A wealth advisor needs slides for a client portfolio review",
        prompt: "Build a client portfolio review presentation covering: market overview, portfolio performance, asset allocation, and recommendations for the next quarter.",
        output: "Presentation Builder created a 8-slide deck with a professional market overview, performance charts (placeholder), asset allocation pie chart, and a clear recommendations summary."
      },
      {
        scenario: "A project lead needs to pitch a new initiative to senior leadership",
        prompt: "Create a pitch deck for a new digital banking initiative. Cover the problem, proposed solution, timeline, budget, and expected ROI.",
        output: "The tool produced a compelling 12-slide pitch deck with problem statement, solution overview, implementation timeline, budget breakdown, ROI projections, and a strong call-to-action closing slide."
      }
    ],
    quiz: [
      {
        question: "What is the main benefit of the Presentation Builder?",
        options: ["It presents for you", "It turns bullet points into polished decks quickly", "It only works for sales presentations", "It replaces PowerPoint entirely"],
        correct: 1
      },
      {
        question: "What should you do after the tool generates a deck?",
        options: ["Present it immediately without reviewing", "Review, customize, and add your specific data", "Delete it and start over", "Print it immediately"],
        correct: 1
      },
      {
        question: "What presentation standards does the tool apply?",
        options: ["Random design choices", "CIBC's presentation standards and branding", "Only plain text, no design", "External company branding"],
        correct: 1
      }
    ],
    tasks: ["Create a quarterly results deck", "Build a client presentation", "Design a project pitch deck", "Make a training presentation", "Structure a board report deck"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "code-review",
    name: "Code Review AI",
    description: "Automated code review with suggestions for quality, security, and performance",
    bestFor: ["Technology & Engineering"],
    timeSaved: 30,
    difficulty: "Advanced",
    category: "Development",
    color: "#8B5CF6",
    whatIsIt: [
      "Code Review AI automatically analyzes your code for quality issues, security vulnerabilities, and performance bottlenecks before you submit a pull request. It catches the things that are easy to miss during manual review and helps maintain consistently high code standards.",
      "The tool scans for common security vulnerabilities (SQL injection, XSS, authentication flaws), identifies performance anti-patterns, checks for CIBC coding standards compliance, and suggests improvements with clear explanations of why each change matters.",
      "For CIBC's engineering teams, this means faster PR reviews, fewer security issues making it to production, and a built-in learning tool that helps junior developers understand best practices through contextual feedback."
    ],
    bestUsedFor: [
      "Pre-PR code scanning for security vulnerabilities",
      "Identifying performance bottlenecks and optimization opportunities",
      "Ensuring compliance with CIBC's coding standards and best practices"
    ],
    examples: [
      {
        scenario: "A developer submits a PR with a new API authentication module",
        prompt: "Review this authentication module for security vulnerabilities, focusing on token handling, session management, and input validation.",
        output: "Code Review AI identified 3 security issues: an unvalidated redirect URL, a missing rate limiter on login attempts, and a JWT token stored in localStorage instead of httpOnly cookies — each with a fix suggestion."
      },
      {
        scenario: "A team lead wants to assess the quality of a junior developer's code",
        prompt: "Review this code for quality, readability, and adherence to our coding standards. Provide constructive feedback suitable for a junior developer.",
        output: "The tool provided 8 improvement suggestions organized by priority: 2 critical (null pointer risks), 3 moderate (naming conventions), and 3 minor (code organization) — each with example code showing the improved version."
      },
      {
        scenario: "A performance engineer needs to optimize a database query layer",
        prompt: "Analyze this database query layer for performance issues. Focus on N+1 queries, missing indexes, and connection pool management.",
        output: "Code Review AI found 2 N+1 query patterns, suggested adding indexes on 3 columns, identified an unclosed connection leak, and recommended batching for a bulk insert operation — with estimated performance improvement for each fix."
      }
    ],
    quiz: [
      {
        question: "What types of issues does Code Review AI detect?",
        options: ["Only formatting issues", "Security vulnerabilities, performance issues, and quality problems", "Only spelling errors in comments", "Only syntax errors"],
        correct: 1
      },
      {
        question: "When should you run Code Review AI?",
        options: ["After deploying to production", "Before submitting a pull request", "Only once a month", "Only for new projects"],
        correct: 1
      },
      {
        question: "Does Code Review AI replace human code review?",
        options: ["Yes, completely", "No, it complements human review by catching common issues early", "Only for junior developers", "Only for security reviews"],
        correct: 1
      }
    ],
    tasks: ["Review code for security issues", "Check code quality standards", "Identify performance bottlenecks", "Scan for common vulnerabilities", "Evaluate test coverage"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
  },
  {
    id: "knowledge-bot",
    name: "Knowledge Q&A Bot",
    description: "Ask any question about CIBC policies, procedures, and internal documents",
    bestFor: ["All", "HR & Operations"],
    timeSaved: 20,
    difficulty: "Beginner",
    category: "Knowledge",
    color: "#EC4899",
    whatIsIt: [
      "The Knowledge Q&A Bot is your instant access point to CIBC's vast library of policies, procedures, and internal documentation. Instead of searching through multiple portals and SharePoint sites, simply ask a question in plain English and get a clear, sourced answer.",
      "The bot is connected to CIBC's internal knowledge base, including HR policies, IT procedures, compliance guidelines, product information, and operational manuals. Every answer includes a reference to the source document, so you can verify and dive deeper if needed.",
      "This is especially valuable for new employees navigating CIBC's processes for the first time, and for experienced staff who need quick answers without disrupting their workflow to search through documentation."
    ],
    bestUsedFor: [
      "Finding answers to HR, IT, and operational policy questions",
      "Quickly looking up internal procedures and guidelines",
      "Onboarding new employees with instant access to institutional knowledge"
    ],
    examples: [
      {
        scenario: "A new graduate wants to know how to request time off",
        prompt: "How do I request vacation time at CIBC? What system do I use and how far in advance do I need to submit?",
        output: "The bot explained the Workday vacation request process, noted the 2-week advance notice guideline, mentioned the blackout periods for year-end, and linked to the full HR policy document."
      },
      {
        scenario: "An employee needs to understand the data classification policy",
        prompt: "What are CIBC's data classification levels and how do I determine which level applies to the data I'm working with?",
        output: "Knowledge Q&A Bot provided a clear summary of the 4 classification levels (Public, Internal, Confidential, Restricted) with examples of each, plus a link to the complete data governance policy and a decision flowchart."
      },
      {
        scenario: "A manager wants to know the process for approving overtime",
        prompt: "What is the process for approving overtime for my team members? Are there budget thresholds I need to be aware of?",
        output: "The bot outlined the 3-step overtime approval process, noted the department budget threshold of $5K per quarter requiring VP approval, and referenced the relevant sections of the HR operations manual."
      }
    ],
    quiz: [
      {
        question: "What is the Knowledge Q&A Bot connected to?",
        options: ["External websites only", "CIBC's internal knowledge base and documentation", "Social media platforms", "Only the HR department"],
        correct: 1
      },
      {
        question: "What does every answer from the bot include?",
        options: ["A fun fact", "A reference to the source document", "A joke", "A video tutorial"],
        correct: 1
      },
      {
        question: "Who benefits most from the Knowledge Q&A Bot?",
        options: ["Only executives", "Only IT staff", "All employees, especially new hires navigating processes", "Only compliance officers"],
        correct: 1
      }
    ],
    tasks: ["Find an HR policy", "Look up an IT procedure", "Understand a compliance guideline", "Find onboarding resources", "Search for internal documentation"],
    videoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
    walkthroughVideoUrl: "https://www.youtube.com/embed/jHv63Uvk5VA",
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
  Writing: { bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-500" },
  Analysis: { bg: "bg-amber-100", text: "text-amber-700", dot: "bg-amber-500" },
  Knowledge: { bg: "bg-pink-100", text: "text-pink-700", dot: "bg-pink-500" },
};

export const difficultyColors = {
  Beginner: { bg: "bg-green-100", text: "text-green-700" },
  Intermediate: { bg: "bg-yellow-100", text: "text-yellow-700" },
  Advanced: { bg: "bg-red-100", text: "text-red-700" },
};
