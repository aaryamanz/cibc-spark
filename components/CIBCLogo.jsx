"use client";

import Image from "next/image";

/**
 * CIBC wordmark + diamond mark (`/public/cibc-brand.png` — RGBA, red artwork on transparent background).
 */
export default function CIBCLogo({
  className = "h-8 w-auto max-w-[200px]",
  "aria-label": ariaLabel = "CIBC",
  priority = false,
  ...rest
}) {
  const hidden = rest["aria-hidden"];
  const alt = hidden || ariaLabel === "" ? "" : ariaLabel;

  return (
    <Image
      src="/cibc-brand.png"
      alt={alt}
      width={1024}
      height={260}
      sizes="(max-width: 768px) 200px, 280px"
      className={`object-contain object-left ${className}`}
      priority={priority}
      {...rest}
    />
  );
}
