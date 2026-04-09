"use client";
import { useState } from "react";
import { divisions, tools } from "@/lib/mockData";
import { useToast } from "@/components/PointsToast";
import CIBCLogo from "@/components/CIBCLogo";

export default function ExecDashboard() {
  const { showToast } = useToast();
  const toolCount = tools.length;
  const [approvals, setApprovals] = useState([
    { name: "Sarah Chen", dept: "Compliance & Risk", achievement: "Saved 47 hours this month — 6 full work days", manager: "Robert Kim", status: "pending" },
    { name: "James Mitchell", dept: "Technology", achievement: `Completed all ${toolCount} AI tool certifications`, manager: "Linda Park", status: "pending" },
    { name: "Raj Patel", dept: "Personal Banking", achievement: "Led team adoption from 25% to 67% in one month", manager: "David Chen", status: "pending" },
  ]);

  const handleApproval = (idx, approved) => {
    const updated = [...approvals];
    updated[idx].status = approved ? "approved" : "declined";
    setApprovals(updated);
    showToast(approved ? `${updated[idx].name} approved for spotlight!` : `Nomination declined`, approved ? "success" : "nudge");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <CIBCLogo className="h-7 w-auto max-w-[140px]" aria-label="CIBC" />
              <span className="text-sm font-bold text-cibc-red border-l border-gray-200 pl-3">AI Hub</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-cibc-dark">Executive AI Impact Dashboard</h1>
            <p className="text-gray-500 mt-1">Q1 2026 — Organization Wide</p>
          </div>
          <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">Auto-generated from AI Hub platform data</span>
        </div>

        {/* Hero Metrics */}
        <div className="bg-gradient-to-r from-cibc-red via-cibc-red to-cibc-red-dark rounded-3xl p-8 md:p-10 mb-8 text-white shadow-xl shadow-cibc-red/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">62%</div>
              <div className="text-white/80 text-sm font-medium">Workforce Adoption</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">124,000</div>
              <div className="text-white/80 text-sm font-medium">Hours Saved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$6.2M</div>
              <div className="text-white/80 text-sm font-medium">Productivity Value</div>
            </div>
          </div>
        </div>

        {/* Org Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Adoption */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-cibc-dark mb-4">Employee Adoption</h3>
            <div className="flex items-center gap-6">
              <div className="relative w-28 h-28 flex-shrink-0">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#F3F4F6" strokeWidth="12" />
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#C41F3E" strokeWidth="12" strokeDasharray={`${62 * 3.27} ${100 * 3.27}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-cibc-dark">62%</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">27,900 of 45,000 employees active</p>
                <p className="text-sm font-semibold text-green-600 mt-1">+34% vs last month ↑</p>
              </div>
            </div>
          </div>

          {/* Top Division */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-cibc-dark mb-4">Top Division</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🏆</span>
              <span className="text-xl font-bold text-cibc-dark">Capital Markets</span>
              <span className="text-sm text-gray-400">89% adoption</span>
            </div>
            <div className="space-y-2.5">
              {divisions.slice(0, 4).map((d) => (
                <div key={d.name} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-32 truncate">{d.name}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cibc-red rounded-full animate-progress" style={{ width: `${d.adoption}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-gray-600 w-8">{d.adoption}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Most Used Tool */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-cibc-dark mb-4">Most Used Tool</h3>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">📋</div>
              <div>
                <p className="font-bold text-cibc-dark text-lg">Meeting Summarizer</p>
                <p className="text-sm text-gray-500">Used 124,500 times this month</p>
              </div>
            </div>
          </div>

          {/* Risk Health */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-cibc-dark mb-4">Risk & Compliance Health</h3>
            <div className="space-y-3">
              {[
                { label: "Data compliance", status: "✅" },
                { label: "Zero bias incidents", status: "✅" },
                { label: "Audit trail complete", status: "✅" },
                { label: "PII detection active", status: "✅" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">{item.status}</span>
                  <span className="text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Division Leaderboard */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-cibc-dark">Division Leaderboard</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="px-5 py-3 font-medium">Division</th>
                  <th className="px-5 py-3 font-medium">Employees</th>
                  <th className="px-5 py-3 font-medium">Adoption %</th>
                  <th className="px-5 py-3 font-medium hidden sm:table-cell">Hours Saved</th>
                  <th className="px-5 py-3 font-medium">Trend</th>
                </tr>
              </thead>
              <tbody>
                {divisions.map((d, i) => (
                  <tr key={d.name} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="font-semibold text-sm text-cibc-dark">
                        {i === 0 && "🏆 "}{d.name}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600">{d.employees.toLocaleString()}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-cibc-red rounded-full" style={{ width: `${d.adoption}%` }} />
                        </div>
                        <span className="text-sm font-semibold text-cibc-dark">{d.adoption}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 hidden sm:table-cell">{d.hoursSaved.toLocaleString()}h</td>
                    <td className="px-5 py-3.5">
                      <span className="text-sm font-semibold text-green-600">{d.trend}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Barrier Insights */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-cibc-dark mb-4">AI Insights for Leadership</h2>
          <div className="space-y-4">
            {[
              "Retail Banking adoption is 12% below target. Top barrier: Employees report feeling 'unsure which tools are approved.' Recommended action: Targeted awareness campaign with compliance-approved tool list.",
              "New graduates onboard 3x faster than mid-career employees. Peer mentoring program recommended to accelerate adoption among tenured staff.",
              "Meeting Summarizer has highest ROI — expanding to remaining 38% of workforce could unlock additional $2.4M in productivity value.",
            ].map((insight, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-cibc-red mt-0.5 text-lg">•</span>
                <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board Report */}
        <div className="bg-gradient-to-r from-cibc-dark to-gray-800 rounded-3xl p-6 md:p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">📄 Q1 2026 Board Report — Ready to Download</h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {["62% Adoption", "$6.2M ROI", "All Green Risk", "+34% Momentum"].map((m) => (
                  <span key={m} className="text-xs bg-white/10 px-3 py-1.5 rounded-full">{m}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => showToast("PDF report downloaded successfully!", "success")}
                className="bg-cibc-red text-white px-5 py-3 rounded-xl font-semibold hover:bg-cibc-red-dark transition-colors text-sm shadow-lg shadow-cibc-red/25"
              >
                Download PDF Report
              </button>
              <button
                onClick={() => showToast("Added to April Town Hall agenda!", "success")}
                className="bg-white/10 text-white px-5 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm"
              >
                📅 Present at Town Hall
              </button>
            </div>
          </div>
        </div>

        {/* Town Hall Approvals */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-cibc-dark mb-4">Town Hall Spotlight Approvals</h2>
          <p className="text-sm text-gray-500 mb-5">{approvals.filter((a) => a.status === "pending").length} employees nominated for April spotlight</p>
          <div className="space-y-4">
            {approvals.map((a, i) => (
              <div key={i} className={`rounded-2xl p-5 border transition-all ${
                a.status === "approved" ? "bg-green-50 border-green-200" :
                a.status === "declined" ? "bg-gray-50 border-gray-200 opacity-50" :
                "bg-gray-50 border-gray-100"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-cibc-dark">{a.name}</span>
                      <span className="text-xs text-gray-400">• {a.dept}</span>
                    </div>
                    <p className="text-sm text-gray-600">{a.achievement}</p>
                    <p className="text-xs text-gray-400 mt-1">Nominated by: {a.manager}</p>
                  </div>
                  {a.status === "pending" ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApproval(i, true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-green-700 transition-colors"
                      >
                        ✅ Approve
                      </button>
                      <button
                        onClick={() => handleApproval(i, false)}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-300 transition-colors"
                      >
                        ❌ Decline
                      </button>
                    </div>
                  ) : (
                    <span className={`text-sm font-semibold ${a.status === "approved" ? "text-green-600" : "text-gray-400"}`}>
                      {a.status === "approved" ? "✅ Approved" : "Declined"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
