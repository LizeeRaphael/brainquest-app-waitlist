"use client"; // ✅ ensures this component only renders on the client

import { useMemo } from "react";

const NUM_DOTS = 30;

export default function FallingDots() {
  // Generate dot positions and animation timings once per client render
  const dots = useMemo(() => {
    return Array.from({ length: NUM_DOTS }, () => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`, // 5s - 15s
      animationDelay: `${Math.random() * 10}s`, // 0s - 10s
    }));
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {dots.map((dot, idx) => (
        <div
          key={idx}
          className="absolute w-2 h-2 rounded-full bg-green-300 animate-fall"
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
