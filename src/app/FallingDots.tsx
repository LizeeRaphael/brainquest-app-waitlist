"use client";

import { useMemo } from "react";

interface FallingDotsProps {
  count?: number; // optional, default to 30
  color?: string; // optional, default to 'bg-green-300'
}

export default function FallingDots({
  count = 30,
  color = "bg-green-300",
}: FallingDotsProps) {
  const dots = useMemo(() => {
    return Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 10}s`,
    }));
  }, [count]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {dots.map((dot, idx) => (
        <div
          key={idx}
          className={`absolute w-2 h-2 rounded-full ${color} animate-fall`}
          style={{
            left: dot.left,
            animationDuration: dot.animationDuration,
            animationDelay: dot.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
