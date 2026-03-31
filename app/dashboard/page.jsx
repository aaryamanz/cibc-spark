"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { tools, badges } from "@/lib/mockData";
import { matchToolsToUser } from "@/lib/toolMatcher";
import {
  getPoints, getLevel, getLevelProgress, getNextLevel,
  getJourneyProgress, getAllJourneyProgress, getCompletedToolsCount,
  getStartedToolsCount, getStreak, getHoursSaved, getUnlockedBadges,
  addPoints, POINTS, setJourneyProgress, unlockBadge, getUserProfile,
} from "@/lib/pointsSystem";
import { useToast } from "@/components/PointsToast";
import ToolCard from "@/components/ToolCard";
import SafeUseBanner from "@/components/SafeUseBanner";
import { StatsCard, ProgressBar, BadgeGrid } from "@/components/SharedComponents";

export default function Dashboard() {
  const { showToast } = useToast();
  const [profile, setProfile] = useState(null);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState({ name: "Explorer", icon: "🔍" });
  const [levelProgress, setLevelProgress] = useState(0);
  const [nextLevel, setNextLevel] = useState(null);
  const [matchedTools, setMatchedTools] = useState([]);
  const [journeyProgress, setJourneyProgressState] = useState({});
  const [unlockedBadges, setUnlockedBadges] = useState(["first-step"]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const p = getUserProfile();
    setProfile(p);
    const pts = getPoints();
    setPoints(pts);
    setLevel(getLevel(pts));
    setLevelProgress(getLevelProgress(pts));
    setNextLevel(getNextLevel(pts));
    setJourneyProgressState(getAllJourneyProgress());
    setUnlockedBadges(getUnlockedBadges());

    const matched = matchToolsToUser(p);
    const matchedToolObjects = matched
      .map((id) => tools.find((t) => t.id === id))
      .filter(Boolean);
    setMatchedTools(matchedToolObjects);
  }, []);

  const handleMarkKnown = (toolId) => {
    setJourneyProgress(toolId, 4, true);
    const newPts = addPoints(POINTS.MARK_KNOWN);
    setPoints(newPts);
    setLevel(getLevel(newPts));
    setLevelProgress(getLevelProgress(newPts));
    setNextLevel(getNextLevel(newPts));
    setJourneyProgressState(getAllJourneyProgress());
    showToast(`+${POINTS.MARK_KNOWN} points! Tool marked as known`, "points");
  };

  const getToolProgress = (toolId) => {
    const jp = journeyProgress[toolId];
    if (!jp) return 0;
    if (jp.completed) return 100;
    return (jp.step / 4) * 100;
  };

  if (!mounted) return null;

  const completedCount = getCompletedToolsCount();
  const totalTools = matchedTools.length || 5;
  const hoursSaved = getHoursSaved();
  const streak = getStreak();

  const startedJourneys = Object.entries(journeyProgress)
    .filter(([_, v]) => v.step > 0 && !v.completed)
    .map(([id, v]) => ({ tool: tools.find((t) => t.id === id), ...v }))
    .filter((j) => j.tool);

  return (
    <div className="min-h-screen">
      <SafeUseBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Personal Header */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-cibc-dark">
                Welcome back{profile?.freeText ? "" : ", there"}! 👋
              </h1>
              <p className="text-gray-500 mt-1">Here&apos;s your AI learning progress</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-cibc-red/5 rounded-2xl px-5 py-2.5 border border-cibc-red/10">
                <span className="text-lg">{level.icon}</span>
                <span className="font-semibold text-cibc-red">{level.name}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-2xl px-5 py-2.5 border border-gray-200">
                <span>⭐</span>
                <span className="font-bold text-cibc-dark">{points} points</span>
              </div>
            </div>
          </div>
          {nextLevel && (
            <div className="mt-5">
              <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                <span>{level.name}</span>
                <span>{nextLevel.name} — {nextLevel.min - points} pts to go</span>
              </div>
              <ProgressBar value={levelProgress} color="bg-cibc-red" height="h-2" />
            </div>
          )}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatsCard icon="🛠️" label="Tools Unlocked" value={`${completedCount}/${totalTools}`} />
          <StatsCard icon="⏱️" label="Hours Saved This Month" value={`${hoursSaved.toFixed(1)} hrs`} />
          <StatsCard icon="🔥" label="Day Streak" value={`${streak} days`} />
          <StatsCard icon="🏅" label="Rank on Leaderboard" value="#16 of 8,420" />
        </div>

        {/* Tool Recommendations */}
        <div className="mb-8">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-cibc-dark">Your Matched AI Tools</h2>
            <p className="text-sm text-gray-500 mt-1">Recommended based on your role and goals</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchedTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                progress={getToolProgress(tool.id)}
                onMarkKnown={handleMarkKnown}
              />
            ))}
          </div>
        </div>

        {/* In-Progress Journeys */}
        {startedJourneys.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-cibc-dark mb-4">Continue Learning</h2>
            <div className="space-y-3">
              {startedJourneys.map((j) => (
                <div key={j.tool.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between shadow-sm">
                  <div className="flex-1 mr-4">
                    <h3 className="font-semibold text-cibc-dark">{j.tool.name}</h3>
                    <div className="mt-2 max-w-md">
                      <ProgressBar value={(j.step / 4) * 100} showLabel />
                    </div>
                  </div>
                  <Link
                    href={`/journey/${j.tool.id}`}
                    className="bg-cibc-red text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-cibc-red-dark transition-colors whitespace-nowrap"
                  >
                    Continue →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prompt Generator CTA */}
        <div className="bg-gradient-to-r from-cibc-dark to-gray-800 rounded-3xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">✨ Need the perfect AI prompt for your job?</h3>
              <p className="text-gray-300 mt-1 text-sm">Generate tailored prompts for any CIBC AI tool in seconds</p>
            </div>
            <Link
              href="/prompt-generator"
              className="bg-cibc-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors whitespace-nowrap shadow-lg shadow-cibc-red/25"
            >
              Open Prompt Generator →
            </Link>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-xl font-bold text-cibc-dark mb-4">Achievements</h2>
          <BadgeGrid badges={badges} unlocked={unlockedBadges} />
        </div>
      </div>
    </div>
  );
}
