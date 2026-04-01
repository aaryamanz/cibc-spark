"use client";

export default function VideoEmbed({ url, title, duration }) {
  if (!url) return null;
  return (
    <div className="mb-6">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {(title || duration) && (
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1.5">
          📹 {title && <span>{title}</span>}{duration && <span>• {duration}</span>}
        </p>
      )}
    </div>
  );
}
