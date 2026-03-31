"use client";
import { useState, useEffect } from "react";
import { tools } from "@/lib/mockData";
import { addPoints, POINTS, getUserProfile, savePrompt, getSavedPrompts } from "@/lib/pointsSystem";
import { useToast } from "@/components/PointsToast";
import SafeUseBanner from "@/components/SafeUseBanner";

export default function PromptGenerator() {
  const { showToast } = useToast();
  const [selectedTool, setSelectedTool] = useState(tools[0].id);
  const [role, setRole] = useState("");
  const [task, setTask] = useState("");
  const [format, setFormat] = useState("Formal report");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [savedPrompts, setSavedPrompts] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const profile = getUserProfile();
    if (profile?.department) setRole(profile.department);
    setSavedPrompts(getSavedPrompts());
  }, []);

  const handleGenerate = async () => {
    if (!task.trim()) return;
    setGenerating(true);
    setGeneratedPrompt("");
    const toolName = tools.find((t) => t.id === selectedTool)?.name || "";

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `You are an expert prompt engineer for CIBC bank employees. Your job is to transform a simple task description into a detailed, effective prompt that will get the best results from an AI tool. The prompt must: be specific and actionable, include relevant banking/financial context, specify the desired output format, include a reminder not to include any PII or confidential client data, and be ready to copy-paste directly into the AI tool. Return ONLY the prompt text, no explanation.`,
          userMessage: `Tool: ${toolName}. Role: ${role}. Task: ${task}. Format: ${format}`,
        }),
      });
      const data = await res.json();
      setGeneratedPrompt(data.prompt || "Unable to generate prompt. Please try again.");
      addPoints(POINTS.GENERATE_PROMPT);
      showToast(`+${POINTS.GENERATE_PROMPT} points! 🎉`, "points");
    } catch {
      setGeneratedPrompt("Unable to connect to the AI service. Please check your API key configuration and try again.");
    }
    setGenerating(false);
  };

  const handleSave = () => {
    const toolName = tools.find((t) => t.id === selectedTool)?.name || "";
    const promptObj = { tool: toolName, prompt: generatedPrompt, date: new Date().toISOString() };
    savePrompt(promptObj);
    setSavedPrompts(getSavedPrompts());
    addPoints(POINTS.SAVE_PROMPT);
    showToast(`+${POINTS.SAVE_PROMPT} points! Prompt saved`, "points");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      <SafeUseBanner />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cibc-dark">✨ AI Prompt Generator</h1>
          <p className="text-gray-500 mt-2">Get the perfect prompt for any CIBC AI tool — tailored to your role and task</p>
        </div>

        {/* Generator Form */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm mb-6">
          <div className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Select your AI tool</label>
              <select
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-cibc-red transition-colors"
              >
                {tools.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Your role at CIBC</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Compliance Analyst"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-cibc-red transition-colors"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">What do you need help with?</label>
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="e.g. Write a risk assessment memo for a new mortgage product"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-cibc-red transition-colors resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Output format</label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-cibc-red transition-colors"
              >
                {["Formal report", "Bullet points", "Email", "Summary", "Step-by-step guide", "Executive brief"].map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating || !task.trim()}
              className="bg-cibc-red text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors disabled:opacity-50 w-full sm:w-auto shadow-lg shadow-cibc-red/20"
            >
              {generating ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </span>
              ) : "Generate Prompt ✨"}
            </button>
          </div>
        </div>

        {/* Result */}
        {generatedPrompt && (
          <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm mb-6 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-cibc-dark">Your Generated Prompt</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedPrompt);
                    showToast("Copied to clipboard!", "success");
                  }}
                  className="text-sm text-gray-500 hover:text-cibc-dark font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  📋 Copy
                </button>
                <button
                  onClick={handleGenerate}
                  className="text-sm text-gray-500 hover:text-cibc-dark font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  🔄 Regenerate
                </button>
                <button
                  onClick={handleSave}
                  className="text-sm text-cibc-red hover:text-cibc-red-dark font-medium px-3 py-1.5 rounded-lg hover:bg-cibc-red/5 transition-colors"
                >
                  ⭐ Save
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{generatedPrompt}</p>
            </div>
          </div>
        )}

        {/* Saved Prompts */}
        {savedPrompts.length > 0 && (
          <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-cibc-dark mb-4">Saved Prompts</h3>
            <div className="space-y-3">
              {savedPrompts.map((sp, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <span className="text-xs font-medium text-cibc-red">{sp.tool}</span>
                    <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">{sp.prompt}</p>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(sp.prompt);
                      showToast("Copied!", "success");
                    }}
                    className="text-xs text-gray-500 hover:text-cibc-dark font-medium px-3 py-1.5 rounded-lg hover:bg-white transition-colors whitespace-nowrap"
                  >
                    📋 Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
