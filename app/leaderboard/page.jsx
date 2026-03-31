"use client";
import { useState } from "react";
import { leaderboardData } from "@/lib/mockData";
import { LeaderboardTable } from "@/components/SharedComponents";

export default function Leaderboard() {
  const [tab, setTab] = useState("month");

  const tabs = [
    { id: "month", label: "This Month" },
    { id: "all", label: "All Time" },
    { id: "dept", label: "My Department" },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-cibc-dark">🏆 SPARK Leaderboard</h1>
            <p className="text-gray-500 mt-1">Your Rank: <span className="font-semibold text-cibc-red">#16 of 8,420</span></p>
          </div>
          <div className="flex bg-gray-100 rounded-xl p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tab === t.id ? "bg-white text-cibc-dark shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Podium */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
          <div className="flex items-end justify-center gap-4 mb-8">
            {/* #2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-700 mx-auto mb-2 border-4 border-gray-200">
                JM
              </div>
              <p className="font-semibold text-sm text-cibc-dark">{leaderboardData[1].name}</p>
              <p className="text-xs text-gray-400">{leaderboardData[1].dept}</p>
              <div className="bg-gray-100 rounded-xl px-3 py-1 mt-2 inline-block">
                <span className="text-sm font-bold text-gray-600">🥈 {leaderboardData[1].points.toLocaleString()}</span>
              </div>
              <div className="mt-2 w-20 h-20 bg-gray-100 rounded-t-xl mx-auto" />
            </div>

            {/* #1 */}
            <div className="text-center -mb-0">
              <div className="text-2xl mb-1">👑</div>
              <div className="w-20 h-20 rounded-full bg-cibc-red/10 flex items-center justify-center text-2xl font-bold text-cibc-red mx-auto mb-2 border-4 border-cibc-red/30">
                PS
              </div>
              <p className="font-bold text-cibc-dark">{leaderboardData[0].name}</p>
              <p className="text-xs text-gray-400">{leaderboardData[0].dept}</p>
              <div className="bg-cibc-red/10 rounded-xl px-3 py-1 mt-2 inline-block">
                <span className="text-sm font-bold text-cibc-red">🥇 {leaderboardData[0].points.toLocaleString()}</span>
              </div>
              <div className="mt-2 w-24 h-28 bg-cibc-red/10 rounded-t-xl mx-auto" />
            </div>

            {/* #3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-xl font-bold text-amber-700 mx-auto mb-2 border-4 border-amber-200">
                SC
              </div>
              <p className="font-semibold text-sm text-cibc-dark">{leaderboardData[2].name}</p>
              <p className="text-xs text-gray-400">{leaderboardData[2].dept}</p>
              <div className="bg-amber-50 rounded-xl px-3 py-1 mt-2 inline-block">
                <span className="text-sm font-bold text-amber-700">🥉 {leaderboardData[2].points.toLocaleString()}</span>
              </div>
              <div className="mt-2 w-20 h-14 bg-amber-50 rounded-t-xl mx-auto" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-6">
          <LeaderboardTable data={leaderboardData} />
        </div>

        {/* Recognition */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-cibc-dark mb-4">🌟 Town Hall Spotlight — March 2026</h2>
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">SC</div>
              <div>
                <p className="font-bold text-cibc-dark">Sarah Chen</p>
                <p className="text-sm text-gray-500">Compliance & Risk</p>
              </div>
            </div>
            <p className="text-gray-700">Sarah saved <span className="font-bold text-cibc-dark">47 hours</span> this month — equivalent to <span className="font-bold text-cibc-dark">6 full work days</span>!</p>
            <p className="text-sm text-gray-400 mt-3">Next spotlight announced at town hall April 15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
