"use client";

export default function SafeUseBanner() {
  return (
    <div className="safe-banner border-b border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-amber-800 text-xs sm:text-sm">
        <span>⚠️</span>
        <span>
          <span className="font-semibold">Reminder:</span> Never enter client names, account numbers, or personal data into AI tools. All tools shown are CIBC-approved for internal use.
        </span>
      </div>
    </div>
  );
}
