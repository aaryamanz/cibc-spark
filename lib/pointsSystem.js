const POINTS_KEY = "sparkPoints";
const JOURNEY_KEY = "sparkJourneyProgress";
const BADGES_KEY = "sparkBadges";
const STREAK_KEY = "sparkStreak";
const SAVED_PROMPTS_KEY = "sparkSavedPrompts";

export const POINTS = {
  COMPLETE_ONBOARDING: 100,
  START_JOURNEY: 25,
  COMPLETE_STEP1: 25,
  COMPLETE_STEP2: 25,
  COMPLETE_STEP3: 50,
  COMPLETE_STEP4: 100,
  MARK_KNOWN: 50,
  GENERATE_PROMPT: 25,
  SAVE_PROMPT: 10,
  STREAK_BONUS: 100,
};

export const LEVELS = [
  { name: "Explorer", min: 0, max: 499, icon: "🔍" },
  { name: "Practitioner", min: 500, max: 1499, icon: "🛠️" },
  { name: "Builder", min: 1500, max: 2999, icon: "🏗️" },
  { name: "Champion", min: 3000, max: Infinity, icon: "👑" },
];

export function getPoints() {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(POINTS_KEY) || "0", 10);
}

export function addPoints(amount) {
  if (typeof window === "undefined") return 0;
  const current = getPoints();
  const newTotal = current + amount;
  localStorage.setItem(POINTS_KEY, newTotal.toString());
  return newTotal;
}

export function getLevel(points) {
  const p = points || getPoints();
  return LEVELS.find(l => p >= l.min && p <= l.max) || LEVELS[0];
}

export function getLevelProgress(points) {
  const p = points || getPoints();
  const level = getLevel(p);
  if (level.max === Infinity) return 100;
  const range = level.max - level.min;
  const progress = p - level.min;
  return Math.min(Math.round((progress / range) * 100), 100);
}

export function getNextLevel(points) {
  const p = points || getPoints();
  const currentIdx = LEVELS.findIndex(l => p >= l.min && p <= l.max);
  if (currentIdx < LEVELS.length - 1) return LEVELS[currentIdx + 1];
  return null;
}

// Journey progress
export function getJourneyProgress(toolId) {
  if (typeof window === "undefined") return { step: 0, completed: false };
  const all = JSON.parse(localStorage.getItem(JOURNEY_KEY) || "{}");
  return all[toolId] || { step: 0, completed: false };
}

export function setJourneyProgress(toolId, step, completed = false) {
  if (typeof window === "undefined") return;
  const all = JSON.parse(localStorage.getItem(JOURNEY_KEY) || "{}");
  all[toolId] = { step, completed };
  localStorage.setItem(JOURNEY_KEY, JSON.stringify(all));
}

export function getAllJourneyProgress() {
  if (typeof window === "undefined") return {};
  return JSON.parse(localStorage.getItem(JOURNEY_KEY) || "{}");
}

export function getCompletedToolsCount() {
  const all = getAllJourneyProgress();
  return Object.values(all).filter(j => j.completed).length;
}

export function getStartedToolsCount() {
  const all = getAllJourneyProgress();
  return Object.values(all).filter(j => j.step > 0).length;
}

// Badges
export function getUnlockedBadges() {
  if (typeof window === "undefined") return ["first-step"];
  return JSON.parse(localStorage.getItem(BADGES_KEY) || '["first-step"]');
}

export function unlockBadge(badgeId) {
  if (typeof window === "undefined") return;
  const badges = getUnlockedBadges();
  if (!badges.includes(badgeId)) {
    badges.push(badgeId);
    localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
  }
}

// Streak
export function getStreak() {
  if (typeof window === "undefined") return 7;
  const data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":7,"lastDate":""}');
  return data.count;
}

export function updateStreak() {
  if (typeof window === "undefined") return;
  const today = new Date().toDateString();
  const data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":7,"lastDate":""}');
  if (data.lastDate !== today) {
    data.count++;
    data.lastDate = today;
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
  }
}

// Saved prompts
export function getSavedPrompts() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(SAVED_PROMPTS_KEY) || "[]");
}

export function savePrompt(prompt) {
  if (typeof window === "undefined") return;
  const prompts = getSavedPrompts();
  prompts.unshift(prompt);
  if (prompts.length > 5) prompts.pop();
  localStorage.setItem(SAVED_PROMPTS_KEY, JSON.stringify(prompts));
}

// Get user profile
export function getUserProfile() {
  if (typeof window === "undefined") return null;
  const p = localStorage.getItem("sparkUserProfile");
  return p ? JSON.parse(p) : null;
}

// Calc hours saved
export function getHoursSaved() {
  if (typeof window === "undefined") return 12.5;
  const all = getAllJourneyProgress();
  // Mock: each completed tool = ~4 hrs, each started = ~2 hrs
  let hours = 0;
  Object.values(all).forEach(j => {
    if (j.completed) hours += 4.2;
    else if (j.step > 0) hours += j.step * 0.8;
  });
  return Math.max(hours, 12.5); // minimum for demo
}
