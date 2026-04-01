"use client";

export default function VideoEmbed({ url, title, duration }) {
  if (!url) return null;

  const safeUrl = typeof url === "string" ? url.trim() : "";
  const iframeUrl = safeUrl.startsWith("https://www.youtube.com/embed/")
    ? safeUrl.replace("https://www.youtube.com/embed/", "https://www.youtube-nocookie.com/embed/")
    : safeUrl;

  const watchUrl = (() => {
    const m = safeUrl.match(/\/embed\/([^?]+)/);
    if (m?.[1]) return `https://www.youtube.com/watch?v=${m[1]}`;
    return safeUrl;
  })();

  return (
    <div className="mb-6">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={iframeUrl}
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
      <p className="text-[11px] text-gray-400 mt-1">
        If the embed is blocked,{" "}
        <a
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          className="text-cibc-red hover:text-cibc-red-dark underline underline-offset-2"
        >
          open on YouTube
        </a>
        .
      </p>
    </div>
  );
}
