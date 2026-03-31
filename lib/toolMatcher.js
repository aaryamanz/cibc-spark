export function matchToolsToUser(profile) {
  if (!profile) return ["cibc-copilot", "meeting-summarizer", "presentation", "knowledge-bot", "doc-drafter"];

  const dept = profile.department || "";
  const level = profile.level || "";
  let matched = [];

  if (dept === "Technology & Engineering") {
    matched = ["github-copilot", "code-review", "meeting-summarizer", "cibc-copilot", "data-analysis"];
  } else if (dept === "Retail Banking") {
    matched = ["client-email", "meeting-summarizer", "cibc-copilot", "presentation", "knowledge-bot"];
  } else if (dept === "Compliance & Risk") {
    matched = ["doc-drafter", "risk-report", "meeting-summarizer", "cibc-copilot", "data-analysis"];
  } else if (dept === "Capital Markets") {
    matched = ["data-analysis", "risk-report", "doc-drafter", "cibc-copilot", "presentation"];
  } else if (dept === "Wealth Management") {
    matched = ["client-email", "presentation", "meeting-summarizer", "cibc-copilot", "doc-drafter"];
  } else if (dept === "HR & Operations") {
    matched = ["knowledge-bot", "cibc-copilot", "meeting-summarizer", "doc-drafter", "presentation"];
  } else {
    matched = ["cibc-copilot", "meeting-summarizer", "presentation", "doc-drafter", "knowledge-bot"];
  }

  // Override for entry-level / new graduates
  if (level === "Entry-level / New Graduate") {
    if (!matched.includes("knowledge-bot")) matched[matched.length - 1] = "knowledge-bot";
    if (!matched.includes("cibc-copilot")) matched[matched.length - 2] = "cibc-copilot";
  }

  // Executives get only 3 tools
  if (level === "Executive") {
    matched = ["presentation", "meeting-summarizer", "cibc-copilot"];
  }

  return matched;
}
