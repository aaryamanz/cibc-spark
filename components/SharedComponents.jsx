"use client";

export function StatsCard({ icon, label, value, sub }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm card-hover">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-cibc-dark">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
      {sub && <div className="text-xs text-green-600 mt-1 font-medium">{sub}</div>}
    </div>
  );
}

export function ProgressBar({ value, max = 100, color = "bg-cibc-red", height = "h-2.5", showLabel = false }) {
  const pct = Math.min(Math.round((value / max) * 100), 100);
  return (
    <div className="w-full">
      <div className={`w-full ${height} bg-gray-100 rounded-full overflow-hidden`}>
        <div
          className={`${height} ${color} rounded-full animate-progress transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-xs text-gray-500 mt-1">{pct}% complete</div>
      )}
    </div>
  );
}

export function BadgeGrid({ badges, unlocked }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {badges.map((badge) => {
        const isUnlocked = unlocked.includes(badge.id);
        return (
          <div
            key={badge.id}
            className={`rounded-2xl p-4 text-center border transition-all duration-300 ${
              isUnlocked
                ? "bg-white border-cibc-red/20 shadow-sm"
                : "bg-gray-50 border-gray-100 opacity-50 grayscale"
            }`}
          >
            <div className="text-3xl mb-2">{badge.icon}</div>
            <div className="text-xs font-semibold text-cibc-dark">{badge.name}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{badge.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export function LeaderboardTable({ data, compact = false }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
            <th className="px-4 py-3 font-medium">Rank</th>
            <th className="px-4 py-3 font-medium">Name</th>
            {!compact && <th className="px-4 py-3 font-medium hidden sm:table-cell">Department</th>}
            <th className="px-4 py-3 font-medium">Tools</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">Hours Saved</th>
            <th className="px-4 py-3 font-medium">Points</th>
            {!compact && <th className="px-4 py-3 font-medium hidden md:table-cell">Badge</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.rank}
              className={`border-b border-gray-50 transition-colors ${
                row.isUser
                  ? "bg-cibc-red/5 border-l-4 border-l-cibc-red"
                  : "hover:bg-gray-50"
              }`}
            >
              <td className="px-4 py-3.5">
                <span className={`font-bold ${row.rank <= 3 ? "text-cibc-red" : "text-gray-600"}`}>
                  {row.rank <= 3 ? ["🥇", "🥈", "🥉"][row.rank - 1] : `#${row.rank}`}
                </span>
              </td>
              <td className="px-4 py-3.5">
                <span className={`font-semibold ${row.isUser ? "text-cibc-red" : "text-cibc-dark"}`}>
                  {row.name} {row.isUser && "(You)"}
                </span>
              </td>
              {!compact && <td className="px-4 py-3.5 text-sm text-gray-500 hidden sm:table-cell">{row.dept}</td>}
              <td className="px-4 py-3.5 text-sm font-medium">{row.toolsDone}</td>
              <td className="px-4 py-3.5 text-sm text-gray-500 hidden sm:table-cell">{row.hoursSaved}h</td>
              <td className="px-4 py-3.5">
                <span className="font-bold text-cibc-dark">{row.points.toLocaleString()}</span>
              </td>
              {!compact && (
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    row.badge === "Champion" ? "bg-yellow-100 text-yellow-700" :
                    row.badge === "Builder" ? "bg-purple-100 text-purple-700" :
                    row.badge === "Practitioner" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {row.badge}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
