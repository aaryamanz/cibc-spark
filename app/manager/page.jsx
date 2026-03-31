"use client";
import { useState } from "react";
import Link from "next/link";
import { teamMembers } from "@/lib/mockData";
import { StatsCard } from "@/components/SharedComponents";
import { useToast } from "@/components/PointsToast";
import CIBCLogo from "@/components/CIBCLogo";

export default function ManagerDashboard() {
  const { showToast } = useToast();
  const [showNomModal, setShowNomModal] = useState(null);

  const activeCount = teamMembers.filter((m) => m.status === "active").length;
  const totalHours = teamMembers.reduce((s, m) => s + m.hoursSaved, 0);
  const atRisk = teamMembers.filter((m) => m.status === "inactive");

  const weeks = [
    { label: "Week 1", pct: 25 },
    { label: "Week 2", pct: 42 },
    { label: "Week 3", pct: 58 },
    { label: "Week 4", pct: 67 },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-cibc-dark">Manager Dashboard</h1>
            <p className="text-gray-500 mt-1">Personal Banking, Toronto — March 2026</p>
          </div>
          <Link href="/exec" className="text-sm text-cibc-red font-medium hover:text-cibc-red-dark transition-colors">
            Switch to Executive View →
          </Link>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatsCard icon="👥" label="Team Size" value="12" />
          <StatsCard icon="✅" label="Active Users" value={`${activeCount}/12`} sub="67% adoption" />
          <StatsCard icon="⏱️" label="Team Hours Saved" value={`${totalHours.toFixed(0)} hrs`} sub="this month" />
          <StatsCard icon="🏅" label="Top Tool" value="Meeting Summarizer" />
        </div>

        {/* Adoption Chart */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm mb-6">
          <h2 className="text-lg font-bold text-cibc-dark mb-5">Team Adoption — March 2026</h2>
          <div className="flex items-end gap-6 h-48">
            {weeks.map((w) => (
              <div key={w.label} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className="text-sm font-bold text-cibc-dark mb-2">{w.pct}%</span>
                <div className="w-full bg-gray-100 rounded-t-xl relative overflow-hidden" style={{ height: "100%" }}>
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-cibc-red to-cibc-red-light rounded-t-xl transition-all duration-1000 animate-progress"
                    style={{ height: `${w.pct}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 mt-2">{w.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leaderboard */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-cibc-dark">Team Members</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="px-5 py-3 font-medium">Employee</th>
                  <th className="px-5 py-3 font-medium">Level</th>
                  <th className="px-5 py-3 font-medium hidden sm:table-cell">Tools Done</th>
                  <th className="px-5 py-3 font-medium hidden sm:table-cell">Hours Saved</th>
                  <th className="px-5 py-3 font-medium">Points</th>
                  <th className="px-5 py-3 font-medium hidden md:table-cell">Last Active</th>
                  <th className="px-5 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((m, i) => (
                  <tr key={i} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${m.status === "inactive" ? "bg-amber-50/50" : ""}`}>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          m.status === "active" ? "bg-cibc-red/10 text-cibc-red" : "bg-gray-200 text-gray-500"
                        }`}>
                          {m.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="font-medium text-sm text-cibc-dark">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        m.level === "Builder" ? "bg-purple-100 text-purple-700" :
                        m.level === "Practitioner" ? "bg-blue-100 text-blue-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>{m.level}</span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 hidden sm:table-cell">{m.toolsDone}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 hidden sm:table-cell">{m.hoursSaved}h</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-cibc-dark">{m.points}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-400 hidden md:table-cell">{m.lastActive}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => showToast(`Reminder sent to ${m.name}!`, "nudge")}
                          className="text-xs bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg transition-colors font-medium"
                        >
                          📢 Nudge
                        </button>
                        <button
                          onClick={() => setShowNomModal(m.name)}
                          className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-700 px-2.5 py-1.5 rounded-lg transition-colors font-medium"
                        >
                          🌟 Nominate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* At Risk */}
        {atRisk.length > 0 && (
          <div className="bg-amber-50 rounded-3xl border border-amber-200 p-6 mb-6">
            <h3 className="font-bold text-amber-800 mb-3">⚠️ {atRisk.length} employees haven&apos;t logged in this week</h3>
            <div className="space-y-2 mb-4">
              {atRisk.map((m, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-amber-100">
                  <div>
                    <span className="font-medium text-sm text-cibc-dark">{m.name}</span>
                    <span className="text-xs text-gray-400 ml-2">Last active: {m.lastActive}</span>
                  </div>
                  <button
                    onClick={() => showToast(`Reminder sent to ${m.name}!`, "nudge")}
                    className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-700 px-3 py-1.5 rounded-lg font-medium transition-colors"
                  >
                    Send Nudge 📢
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <p className="text-sm text-amber-800 flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5">
                  <CIBCLogo className="h-4 w-auto max-w-[80px]" aria-hidden />
                </span>
                <span><span className="font-medium">Suggested action:</span> Schedule a 15-min 1:1 to walk them through the Meeting Summarizer — most popular tool for your team</span>
              </p>
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => alert("PDF report download coming soon!")}
            className="flex-1 bg-white border border-gray-200 text-cibc-dark px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center text-sm"
          >
            📊 Download Team Report PDF
          </button>
          <button
            onClick={() => alert("Feature coming soon!")}
            className="flex-1 bg-white border border-gray-200 text-cibc-dark px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center text-sm"
          >
            ➕ Add New Team Member
          </button>
        </div>
      </div>

      {/* Nomination Modal */}
      {showNomModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setShowNomModal(null)}>
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-cibc-dark mb-2">🌟 Nominate for Town Hall</h3>
            <p className="text-sm text-gray-500 mb-5">Nominate <span className="font-semibold text-cibc-dark">{showNomModal}</span> for the next town hall spotlight?</p>
            <div className="flex gap-2">
              <button
                onClick={() => { showToast(`${showNomModal} nominated for town hall!`, "success"); setShowNomModal(null); }}
                className="flex-1 bg-cibc-red text-white py-2.5 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors text-sm"
              >
                ✅ Confirm
              </button>
              <button
                onClick={() => setShowNomModal(null)}
                className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
