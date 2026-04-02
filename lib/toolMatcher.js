export function matchToolsToUser(profile) {
  if (!profile) {
    return ["cibc-ai", "m365-copilot", "copilot-comms", "copilot-pptx", "copilot-word", "sharepoint-copilot"];
  }

  const dept = profile.department || "";
  const level = profile.level || "";
  let matched = [];

  if (dept === "Technology & Engineering") {
    matched = ["cibc-ai", "github-copilot", "azure-openai", "copilot-studio", "m365-copilot", "copilot-comms"];
  } else if (dept === "Retail Banking") {
    matched = ["cibc-ai", "m365-copilot", "copilot-comms", "copilot-word", "power-automate", "sharepoint-copilot"];
  } else if (dept === "Compliance & Risk") {
    matched = ["cibc-ai", "copilot-word", "copilot-data", "sharepoint-copilot", "m365-copilot", "power-automate"];
  } else if (dept === "Capital Markets") {
    matched = ["cibc-ai", "copilot-data", "azure-openai", "copilot-word", "m365-copilot", "copilot-pptx"];
  } else if (dept === "Wealth Management") {
    matched = ["cibc-ai", "copilot-comms", "copilot-pptx", "copilot-data", "m365-copilot", "copilot-word"];
  } else if (dept === "HR & Operations") {
    matched = ["cibc-ai", "sharepoint-copilot", "copilot-studio", "power-automate", "m365-copilot", "copilot-comms"];
  } else {
    matched = ["cibc-ai", "m365-copilot", "copilot-comms", "copilot-pptx", "copilot-word", "sharepoint-copilot"];
  }

  // Override for entry-level / new graduates
  if (level === "Entry-level / New Graduate") {
    if (!matched.includes("sharepoint-copilot")) matched[matched.length - 1] = "sharepoint-copilot";
    if (!matched.includes("m365-copilot")) matched[matched.length - 2] = "m365-copilot";
  }

  // Executives get only 3 tools
  if (level === "Executive") {
    matched = ["cibc-ai", "copilot-pptx", "copilot-comms"];
  }

  return matched;
}
