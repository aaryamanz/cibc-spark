"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addPoints, POINTS } from "@/lib/pointsSystem";
import { useToast } from "@/components/PointsToast";

const STEPS = [
  { id: "welcome", title: "Welcome" },
  { id: "role", title: "Your Role" },
  { id: "workstyle", title: "Work Style" },
  { id: "experience", title: "AI Experience" },
  { id: "learning", title: "Learning Style" },
  { id: "goals", title: "Goals" },
];

export default function Onboarding() {
  const router = useRouter();
  const { showToast } = useToast();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({
    level: "", department: "", tasks: [], repetitiveHours: "",
    aiFrequency: "", aiToolCount: "", aiChallenge: "",
    learningStyle: "", motivation: "", goal: "", freeText: "",
  });

  const set = (key, val) => setAnswers((p) => ({ ...p, [key]: val }));
  const toggleTask = (t) => {
    setAnswers((p) => {
      const tasks = p.tasks.includes(t) ? p.tasks.filter((x) => x !== t) : p.tasks.length < 3 ? [...p.tasks, t] : p.tasks;
      return { ...p, tasks };
    });
  };

  const canNext = () => {
    if (step === 0) return true;
    if (step === 1) return answers.level && answers.department;
    if (step === 2) return answers.tasks.length > 0 && answers.repetitiveHours;
    if (step === 3) return answers.aiFrequency && answers.aiToolCount && answers.aiChallenge;
    if (step === 4) return answers.learningStyle && answers.motivation;
    if (step === 5) return answers.goal;
    return false;
  };

  const handleSubmit = () => {
    setLoading(true);
    localStorage.setItem("sparkUserProfile", JSON.stringify(answers));
    addPoints(POINTS.COMPLETE_ONBOARDING);
    setTimeout(() => {
      showToast(`+${POINTS.COMPLETE_ONBOARDING} points! 🎉`, "points");
      router.push("/dashboard");
    }, 2000);
  };

  const Option = ({ selected, onClick, children }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
        selected
          ? "border-cibc-red bg-cibc-red/5 text-cibc-red"
          : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );

  const MultiOption = ({ selected, onClick, children }) => (
    <button
      onClick={onClick}
      className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
        selected
          ? "border-cibc-red bg-cibc-red/5 text-cibc-red"
          : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-cibc-red/10 flex items-center justify-center animate-pulse-ring">
          <span className="text-3xl">🤖</span>
        </div>
        <p className="text-xl font-semibold text-cibc-dark">Analyzing your profile...</p>
        <p className="text-sm text-gray-400">Building your personalized AI journey</p>
        <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-cibc-red rounded-full animate-progress" style={{ width: "80%", animationDuration: "2s" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span>Step {step + 1} of {STEPS.length}</span>
            <span>{STEPS[step].title}</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-cibc-red rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* STEP 0: Welcome */}
        {step === 0 && (
          <div className="text-center animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <div className="text-6xl mb-6">👋</div>
            <h1 className="text-3xl md:text-4xl font-bold text-cibc-dark mb-4">Welcome to CIBC AI Hub</h1>
            <p className="text-gray-500 text-lg mb-8">This takes 3 minutes. We&apos;ll build your personalized AI journey.</p>
          </div>
        )}

        {/* STEP 1: Role */}
        {step === 1 && (
          <div className="space-y-8 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-bold text-cibc-dark">Tell us about your role</h2>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">What is your position level?</label>
              <div className="space-y-2">
                {["Entry-level / New Graduate", "Mid-level", "Senior", "Manager", "Executive"].map((o) => (
                  <Option key={o} selected={answers.level === o} onClick={() => set("level", o)}>{o}</Option>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">What department are you in?</label>
              <div className="space-y-2">
                {["Technology & Engineering", "Retail Banking", "Compliance & Risk", "Capital Markets", "Wealth Management", "HR & Operations", "Other"].map((o) => (
                  <Option key={o} selected={answers.department === o} onClick={() => set("department", o)}>{o}</Option>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Work Style */}
        {step === 2 && (
          <div className="space-y-8 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-bold text-cibc-dark">How do you spend your time?</h2>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">What tasks do you do most? <span className="text-gray-400 font-normal">(pick up to 3)</span></label>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {["Writing emails & reports", "Coding & development", "Data analysis", "Client meetings & calls", "Document review", "Project management", "Presentations & slides"].map((t) => (
                  <MultiOption key={t} selected={answers.tasks.includes(t)} onClick={() => toggleTask(t)}>{t}</MultiOption>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">How many hours per week do you spend on repetitive tasks?</label>
              <div className="space-y-2">
                {["Less than 2 hrs", "2–5 hrs", "5–10 hrs", "10+ hrs"].map((o) => (
                  <Option key={o} selected={answers.repetitiveHours === o} onClick={() => set("repetitiveHours", o)}>{o}</Option>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: AI Experience */}
        {step === 3 && (
          <div className="space-y-8 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-bold text-cibc-dark">Your AI experience</h2>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">How often do you currently use AI for work?</label>
              <div className="space-y-2">
                {["Never", "Monthly", "Weekly", "Daily"].map((o) => (
                  <Option key={o} selected={answers.aiFrequency === o} onClick={() => set("aiFrequency", o)}>{o}</Option>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">How many AI tools are you currently using?</label>
              <div className="space-y-2">
                {["None", "1", "2–3", "4+"].map((o) => (
                  <Option key={o} selected={answers.aiToolCount === o} onClick={() => set("aiToolCount", o)}>{o}</Option>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">What is your biggest challenge with AI right now?</label>
              <div className="space-y-2">
                {["Don't know where to start", "Don't trust the outputs", "Takes too much time to learn", "Worried about data security", "Not sure which tools are approved"].map((o) => (
                  <Option key={o} selected={answers.aiChallenge === o} onClick={() => set("aiChallenge", o)}>{o}</Option>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Learning Style */}
        {step === 4 && (
          <div className="space-y-8 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-bold text-cibc-dark">How do you learn best?</h2>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">How do you prefer to learn new tools?</label>
              <div className="space-y-2">
                {["Watch short videos", "Read step-by-step guides", "Learn by doing (hands-on)", "Learn from a colleague"].map((o) => (
                  <Option key={o} selected={answers.learningStyle === o} onClick={() => set("learningStyle", o)}>{o}</Option>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">What would motivate you most to use AI?</label>
              <div className="space-y-2">
                {["Save time on boring tasks", "Advance my career", "Get recognized by leadership", "Improve quality of my work"].map((o) => (
                  <Option key={o} selected={answers.motivation === o} onClick={() => set("motivation", o)}>{o}</Option>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Goals */}
        {step === 5 && (
          <div className="space-y-8 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-bold text-cibc-dark">Almost done!</h2>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">What&apos;s your #1 goal with AI this year?</label>
              <div className="space-y-2">
                {["Become AI-certified", "Save 5+ hours per week", "Build something with AI", "Lead my team's AI adoption"].map((o) => (
                  <Option key={o} selected={answers.goal === o} onClick={() => set("goal", o)}>{o}</Option>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Anything else we should know? <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea
                value={answers.freeText}
                onChange={(e) => set("freeText", e.target.value)}
                placeholder="E.g. I work with Python daily..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cibc-red focus:ring-0 outline-none text-sm resize-none h-24 transition-colors"
              />
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-10">
          {step > 0 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="text-sm font-medium text-gray-500 hover:text-cibc-dark transition-colors px-4 py-2"
            >
              ← Back
            </button>
          ) : <div />}

          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className="bg-cibc-red text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-cibc-red/20 hover:bg-cibc-red-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              {step === 0 ? "Let's Go →" : "Next →"}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canNext()}
              className="bg-cibc-red text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-cibc-red/20 hover:bg-cibc-red-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Build My Journey →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
