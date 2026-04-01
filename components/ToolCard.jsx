"use client";
import Link from "next/link";
import { categoryColors, difficultyColors } from "@/lib/mockData";
import { ProgressBar } from "./SharedComponents";

export default function ToolCard({ tool, progress = 0, onMarkKnown }) {
  const catColor = categoryColors[tool.category] || categoryColors.Productivity;
  const diffColor = difficultyColors[tool.difficulty] || difficultyColors.Beginner;
  const sp = tool.socialProof;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm card-hover flex flex-col relative overflow-hidden">
      {sp && (
        <div
          className="absolute top-4 right-4 z-10 animate-fade-in opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-2.5 py-1.5 shadow-sm border border-gray-100">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ backgroundColor: sp.color }}
              aria-hidden
            >
              {sp.initials}
            </div>
            <span className="text-[11px] text-gray-600 whitespace-nowrap">
              <span className="font-medium text-gray-700">{sp.name}</span> saved {sp.savings}
            </span>
          </div>
        </div>
      )}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${catColor.bg} ${catColor.text}`}>
            {tool.category}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${diffColor.bg} ${diffColor.text}`}>
            {tool.difficulty}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-cibc-dark mb-1.5">{tool.name}</h3>
      <p className="text-sm text-gray-500 mb-3 flex-1">{tool.description}</p>

      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
        <span>⏱️</span>
        <span>Saves ~{tool.timeSaved} mins per use</span>
      </div>

      <ProgressBar value={progress} showLabel />

      <div className="flex gap-2 mt-4">
        <Link
          href={`/journey/${tool.id}`}
          className="flex-1 bg-cibc-red text-white text-sm font-semibold py-2.5 px-4 rounded-xl text-center hover:bg-cibc-red-dark transition-colors"
        >
          {progress > 0 ? "Continue" : "Start Learning"}
        </Link>
        {progress === 0 && (
          <button
            onClick={() => onMarkKnown?.(tool.id)}
            className="text-sm font-medium text-gray-500 hover:text-cibc-red py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Already know this
          </button>
        )}
      </div>
    </div>
  );
}
