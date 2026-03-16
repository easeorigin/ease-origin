"use client";

interface GridPatternProps {
  cellSize?: number;
  lineColor?: string;
  glowColor?: string;
  className?: string;
}

export function GridPattern({
  cellSize = 40,
  lineColor = "rgba(30, 58, 95, 0.12)",
  glowColor = "rgba(212, 175, 55, 0.06)",
  className = "",
}: GridPatternProps) {
  const glowHighlight = glowColor.replace(/[\d.]+\)$/, "0.12)");
  const glowHighlightH = glowColor.replace(/[\d.]+\)$/, "0.10)");

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Base grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${lineColor} 1px, transparent 1px),
            linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />

      {/* Pulsing glow overlay: vertical scan */}
      <div
        className="absolute inset-0 animate-grid-scan-v"
        style={{
          background: `linear-gradient(
            180deg,
            transparent 0%,
            ${glowColor} 45%,
            ${glowHighlight} 50%,
            ${glowColor} 55%,
            transparent 100%
          )`,
          backgroundSize: "100% 200%",
        }}
      />

      {/* Horizontal scan */}
      <div
        className="absolute inset-0 animate-grid-scan-h"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            ${glowColor} 45%,
            ${glowHighlightH} 50%,
            ${glowColor} 55%,
            transparent 100%
          )`,
          backgroundSize: "200% 100%",
        }}
      />

      {/* Corner accent nodes */}
      <div
        className="absolute w-2 h-2 rounded-full bg-eo-gold/20 animate-pulse"
        style={{ top: cellSize - 1, left: cellSize - 1 }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-eo-blue/20 animate-pulse"
        style={{
          top: cellSize * 3 - 1,
          left: cellSize * 5 - 1,
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-eo-gold/15 animate-pulse"
        style={{
          top: cellSize * 6 - 1,
          left: cellSize * 2 - 1,
          animationDelay: "2s",
        }}
      />
    </div>
  );
}
