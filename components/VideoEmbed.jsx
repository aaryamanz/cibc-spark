"use client";

/** Normalize watch / short / embed URLs to https://www.youtube.com/embed/VIDEO_ID */
function toEmbedUrl(url) {
  if (!url || typeof url !== "string") return "";
  const u = url.trim();
  const watchMatch = u.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = u.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  if (u.includes("youtube.com/embed/") || u.includes("youtube-nocookie.com/embed/")) return u.replace(
    "https://www.youtube-nocookie.com/embed/",
    "https://www.youtube.com/embed/"
  );
  return u;
}

function toNoCookieEmbed(embedUrl) {
  if (embedUrl.startsWith("https://www.youtube.com/embed/")) {
    return embedUrl.replace(
      "https://www.youtube.com/embed/",
      "https://www.youtube-nocookie.com/embed/"
    );
  }
  return embedUrl;
}

function toWatchUrl(url) {
  const embed = toEmbedUrl(url);
  const m = embed.match(/\/embed\/([^?&]+)/);
  if (m?.[1]) return `https://www.youtube.com/watch?v=${m[1]}`;
  return url;
}

export default function VideoEmbed({ url, title, duration }) {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed.startsWith("https://")) return null;

  const embedStandard = toEmbedUrl(trimmed);
  if (!embedStandard.includes("youtube.com/embed/")) return null;
  const iframeUrl = toNoCookieEmbed(embedStandard);
  const watchUrl = toWatchUrl(trimmed);

  return (
    <div className="mb-6">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={iframeUrl}
          title={title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {(title || duration) && (
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1.5">
          📹 {title && <span>{title}</span>}{duration && <span>• {duration}</span>}
        </p>
      )}
      <p className="text-[11px] text-gray-400 mt-1">
        If the embed does not load,{" "}
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
