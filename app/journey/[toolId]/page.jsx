"use client";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { tools } from "@/lib/mockData";
import {
  getJourneyProgress, setJourneyProgress, addPoints, POINTS,
  getPoints, unlockBadge, getUserProfile, getCompletedToolsCount,
} from "@/lib/pointsSystem";
import { useToast } from "@/components/PointsToast";
import SafeUseBanner from "@/components/SafeUseBanner";
import { ProgressBar } from "@/components/SharedComponents";

export default function JourneyPage({ params }) {
  const { toolId } = use(params);
  const router = useRouter();
  const { showToast } = useToast();
  const [tool, setTool] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Prompt playground state
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedTone, setSelectedTone] = useState("Formal");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setMounted(true);
    const found = tools.find((t) => t.id === toolId);
    if (!found) { router.push("/dashboard"); return; }
    setTool(found);
    setSelectedTask(found.tasks?.[0] || "");
    const progress = getJourneyProgress(toolId);
    setMaxStep(progress.step || 0);
    setCurrentStep(Math.min(progress.step || 0, 3));
  }, [toolId, router]);

  const completeStep = (stepNum, pts) => {
    if (maxStep >= stepNum + 1) return; // already completed
    const newMax = stepNum + 1;
    setMaxStep(newMax);
    const completed = newMax >= 4;
    setJourneyProgress(toolId, newMax, completed);
    const newPts = addPoints(pts);
    setEarnedPoints((p) => p + pts);
    showToast(`+${pts} points! 🎉`, "points");

    if (stepNum === 0) unlockBadge("tool-explorer");
    if (completed) {
      const count = getCompletedToolsCount();
      if (count >= 3) unlockBadge("ai-practitioner");
    }
  };

  const handleGenerate = async () => {
    setGenerating(true);
    setGeneratedPrompt("");
    const profile = getUserProfile();
    const role = profile?.department || "CIBC employee";

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `You are a prompt engineering expert for CIBC employees. Generate a single, clear, ready-to-use prompt for the following tool, role, and task. The prompt should be specific, actionable, and safe (no PII). Return only the prompt, nothing else.`,
          userMessage: `Tool: ${tool.name}. Employee role: ${role}. Task: ${selectedTask}. Format: ${selectedTone}`,
        }),
      });
      const data = await res.json();
      setGeneratedPrompt(data.prompt || "Unable to generate prompt. Please try again.");
    } catch {
      setGeneratedPrompt("Unable to connect to the AI service. Please check your API key configuration and try again.");
    }
    setGenerating(false);
  };

  const handleQuizSubmit = () => {
    if (!tool) return;
    let correct = 0;
    tool.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++;
    });
    setQuizSubmitted(true);
    if (correct >= 2) {
      setQuizPassed(true);
      setShowConfetti(true);
      completeStep(3, POINTS.COMPLETE_STEP4);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  if (!mounted || !tool) return null;

  const stepTabs = ["What Is It?", "See It In Action", "Try It Yourself", "Quick Check ✅"];

  return (
    <div className="min-h-screen">
      <SafeUseBanner />

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-start justify-center">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${40 + Math.random() * 30}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random() * 1}s`,
                fontSize: `${14 + Math.random() * 14}px`,
              }}
            >
              {["🎉", "⭐", "🎊", "✨", "🏆"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-cibc-dark transition-colors">
            ← Back to Dashboard
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>⭐ +{earnedPoints} earned</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Tool Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-cibc-dark">{tool.name}</h1>
                <p className="text-sm text-gray-500 mt-1">{tool.category} • Step {currentStep + 1} of 4</p>
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar value={(maxStep / 4) * 100} />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100 overflow-x-auto">
            {stepTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => i <= maxStep && setCurrentStep(i)}
                disabled={i > maxStep}
                className={`flex-shrink-0 px-5 py-3.5 text-sm font-medium transition-colors whitespace-nowrap ${
                  currentStep === i
                    ? "border-b-2 border-cibc-red text-cibc-red"
                    : i <= maxStep
                    ? "text-gray-500 hover:text-cibc-dark"
                    : "text-gray-300 cursor-not-allowed"
                }`}
              >
                {i < maxStep && "✓ "}{tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* STEP 1 — What Is It? */}
            {currentStep === 0 && (
              <div className="animate-fade-in space-y-6" style={{ animationFillMode: "forwards" }}>
                <h2 className="text-xl font-bold text-cibc-dark">{tool.name}</h2>
                {tool.whatIsIt.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
                <div>
                  <h3 className="font-semibold text-cibc-dark mb-2">Best used for:</h3>
                  <ul className="space-y-2">
                    {tool.bestUsedFor.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-cibc-red mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-700 font-medium">
                    ⚠️ Never enter client names, account numbers, or personal information into AI tools
                  </p>
                </div>
                {maxStep < 1 && (
                  <button
                    onClick={() => { completeStep(0, POINTS.COMPLETE_STEP1); setCurrentStep(1); }}
                    className="bg-cibc-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors"
                  >
                    Mark as Read ✓
                  </button>
                )}
              </div>
            )}

            {/* STEP 2 — See It In Action */}
            {currentStep === 1 && (
              <div className="animate-fade-in space-y-6" style={{ animationFillMode: "forwards" }}>
                <h2 className="text-xl font-bold text-cibc-dark">See It In Action</h2>
                <p className="text-gray-500">Here are 3 real-world scenarios showing how {tool.name} can help you:</p>
                {tool.examples.map((ex, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-5 space-y-3 border border-gray-100">
                    <h3 className="font-semibold text-cibc-dark">Scenario {i + 1}</h3>
                    <p className="text-sm text-gray-600">{ex.scenario}</p>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-medium">What they typed:</p>
                      <p className="text-sm text-cibc-dark font-medium">&ldquo;{ex.prompt}&rdquo;</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-200">
                      <p className="text-xs text-green-600 uppercase tracking-wider mb-1.5 font-medium">What the tool produced:</p>
                      <p className="text-sm text-gray-600">{ex.output}</p>
                    </div>
                  </div>
                ))}
                {maxStep < 2 && (
                  <button
                    onClick={() => { completeStep(1, POINTS.COMPLETE_STEP2); setCurrentStep(2); }}
                    className="bg-cibc-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors"
                  >
                    I&apos;ve reviewed the examples ✓
                  </button>
                )}
              </div>
            )}

            {/* STEP 3 — Prompt Playground */}
            {currentStep === 2 && (
              <div className="animate-fade-in space-y-6" style={{ animationFillMode: "forwards" }}>
                <h2 className="text-xl font-bold text-cibc-dark">Try It Yourself — Prompt Playground</h2>
                <p className="text-gray-500">Generate a real, ready-to-use prompt tailored to your role:</p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Your role</label>
                    <div className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600">
                      {getUserProfile()?.department || "CIBC Employee"}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Your task</label>
                    <select
                      value={selectedTask}
                      onChange={(e) => setSelectedTask(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-cibc-red transition-colors"
                    >
                      {tool.tasks.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Tone / Format</label>
                    <select
                      value={selectedTone}
                      onChange={(e) => setSelectedTone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-cibc-red transition-colors"
                    >
                      {["Formal", "Casual", "Bullet points", "Summary"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="bg-cibc-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors disabled:opacity-50 w-full sm:w-auto"
                >
                  {generating ? "Generating..." : "Generate My Prompt ✨"}
                </button>

                {generatedPrompt && (
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700">Generated Prompt</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(generatedPrompt);
                          showToast("Copied to clipboard!", "success");
                        }}
                        className="text-sm text-cibc-red font-medium hover:text-cibc-red-dark transition-colors"
                      >
                        📋 Copy Prompt
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{generatedPrompt}</p>
                  </div>
                )}

                {maxStep < 3 && generatedPrompt && (
                  <button
                    onClick={() => { completeStep(2, POINTS.COMPLETE_STEP3); setCurrentStep(3); }}
                    className="bg-cibc-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors"
                  >
                    I&apos;ve tried this ✓
                  </button>
                )}
              </div>
            )}

            {/* STEP 4 — Quick Check */}
            {currentStep === 3 && (
              <div className="animate-fade-in space-y-6" style={{ animationFillMode: "forwards" }}>
                {!quizPassed ? (
                  <>
                    <h2 className="text-xl font-bold text-cibc-dark">Quick Check ✅</h2>
                    <p className="text-gray-500">Answer these questions to earn your certification for {tool.name}:</p>
                    {tool.quiz.map((q, qi) => (
                      <div key={qi} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <p className="font-semibold text-cibc-dark mb-3">Q{qi + 1}: {q.question}</p>
                        <div className="space-y-2">
                          {q.options.map((opt, oi) => {
                            const isSelected = quizAnswers[qi] === oi;
                            const isCorrect = quizSubmitted && oi === q.correct;
                            const isWrong = quizSubmitted && isSelected && oi !== q.correct;
                            return (
                              <button
                                key={oi}
                                onClick={() => !quizSubmitted && setQuizAnswers((p) => ({ ...p, [qi]: oi }))}
                                disabled={quizSubmitted}
                                className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                                  isCorrect
                                    ? "border-green-500 bg-green-50 text-green-700"
                                    : isWrong
                                    ? "border-red-400 bg-red-50 text-red-700"
                                    : isSelected
                                    ? "border-cibc-red bg-cibc-red/5 text-cibc-red"
                                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                                }`}
                              >
                                {opt}
                                {isCorrect && " ✓"}
                                {isWrong && " ✗"}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    {!quizSubmitted && Object.keys(quizAnswers).length === tool.quiz.length && (
                      <button
                        onClick={handleQuizSubmit}
                        className="bg-cibc-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors"
                      >
                        Submit Answers
                      </button>
                    )}
                    {quizSubmitted && !quizPassed && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="text-amber-700 font-medium">Almost there! You need 2/3 correct to pass. Try again!</p>
                        <button
                          onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); }}
                          className="mt-2 text-sm text-amber-700 font-medium underline"
                        >
                          Retry Quiz
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-2xl font-bold text-cibc-dark mb-2">
                      You&apos;ve completed {tool.name}!
                    </h2>
                    <p className="text-gray-500 mb-6">
                      You&apos;re now equipped to save ~{tool.timeSaved} mins every time you use this tool
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2.5 rounded-full font-semibold mb-8">
                      <span>🏅</span> +{POINTS.COMPLETE_STEP4} points awarded
                    </div>
                    <div>
                      <Link
                        href="/dashboard"
                        className="bg-cibc-red text-white px-8 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors"
                      >
                        Back to Dashboard →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
