// "use client";

// import { useMemo } from "react";

// interface FallingDotsProps {
//   count?: number; // optional, default to 30
//   color?: string; // optional, default to 'bg-green-300'
// }

// export default function FallingDots({
//   count = 30,
//   color = "bg-green-300",
// }: FallingDotsProps) {
//   const dots = useMemo(() => {
//     return Array.from({ length: count }, () => ({
//       left: `${Math.random() * 100}%`,
//       animationDuration: `${Math.random() * 10 + 5}s`,
//       animationDelay: `${Math.random() * 10}s`,
//     }));
//   }, [count]);

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {dots.map((dot, idx) => (
//         <div
//           key={idx}
//           className={`absolute w-2 h-2 rounded-full ${color} animate-fall`}
//           style={{
//             left: dot.left,
//             animationDuration: dot.animationDuration,
//             animationDelay: dot.animationDelay,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// "use client";
// import { useMemo } from "react";

// interface FallingDotsProps {
//   count?: number; // optional, default 30
//   color?: string; // optional, default 'bg-green-300'
// }

// export default function FallingDots({
//   count = 30,
//   color = "bg-green-300",
// }: FallingDotsProps) {
//   const dots = useMemo(() => {
//     return Array.from({ length: count }, () => ({
//       left: `${Math.random() * 100}%`,
//       animationDuration: `${Math.random() * 10 + 5}s`,
//       animationDelay: `${Math.random() * 10}s`,
//     }));
//   }, [count]);

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {dots.map((dot, idx) => (
//         <div
//           key={idx}
//           className={`absolute w-2 h-2 rounded-full ${color} animate-fall`}
//           style={{
//             left: dot.left,
//             animationDuration: dot.animationDuration,
//             animationDelay: dot.animationDelay,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

"use client";
import { useMemo } from "react";

interface FallingDotsProps {
  count?: number; // default 30
  color?: string; // default 'bg-green-300'
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
