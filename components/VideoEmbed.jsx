"use client";

/**
 * Responsive 16:9 YouTube embed with optional caption.
 * Returns null if url is missing or empty.
 */
export default function VideoEmbed({ url, title, duration }) {
  if (!url || typeof url !== "string" || !url.trim()) return null;

  let src = url.trim();
  if (src.includes("youtube.com/watch")) {
    src = src.replace("watch?v=", "embed/");
  } else if (src.includes("youtu.be/")) {
    const id = src.split("youtu.be/")[1]?.split(/[?&]/)[0];
    if (id) src = `https://www.youtube.com/embed/${id}`;
  }

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm aspect-video">
        <iframe
          src={src}
          title={title || "Training video"}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {(title || duration) && (
        <p className="mt-2 text-xs sm:text-sm text-gray-500">
          {title && <span>{title}</span>}
          {title && duration && <span className="text-gray-400"> • </span>}
          {duration && <span>{duration}</span>}
        </p>
      )}
    </div>
  );
}
