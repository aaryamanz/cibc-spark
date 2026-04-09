"use client";

export default function CIBCLogo({
  className = "h-8 w-auto max-w-[200px]",
  "aria-label": ariaLabel = "CIBC",
  priority = false,
  ...rest
}) {
  const hidden = rest["aria-hidden"];
  const label = hidden || ariaLabel === "" ? undefined : ariaLabel;

  return (
    <svg
      viewBox="0 0 520 120"
      className={`object-contain object-left ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={hidden}
      {...rest}
    >
      <title>{label}</title>
      {/* Simple SVG wordmark substitute to avoid missing public asset */}
      <text
        x="0"
        y="82"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="88"
        fontWeight="800"
        fill="#C41F3E"
        letterSpacing="2"
      >
        CIBC
      </text>
      <g transform="translate(350,18)" fill="#C41F3E">
        <path d="M42 0 L84 42 L42 84 L0 42 Z" opacity="0.9" />
        <path d="M42 16 L68 42 L42 68 L16 42 Z" fill="#FAFAFA" opacity="0.9" />
      </g>
    </svg>
  );
}
