import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BeakerAnimationProps {
  onComplete: () => void;
}

export const BeakerAnimation = ({ onComplete }: BeakerAnimationProps) => {
  const [mouseX, setMouseX] = useState(0);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const progress = e.clientX / window.innerWidth;
      setMouseX(progress);

      if (progress > 0.95 && !isFull) {
        setIsFull(true);
        onComplete();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isFull, onComplete]);

  // Cap liquid height at max 70 (pixels)
  const liquidHeight = Math.min(mouseX * 70, 70);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background pointer-events-auto">
      <div className="text-center">
        <svg
          width="180"
          height="280"
          viewBox="0 0 180 280"
          className="filter drop-shadow-[0_0_14px_rgba(0,255,255,0.6)]"
        >
          {/* Beaker outline */}
          <path
            d="M 50 50 L 50 220 Q 50 260 90 265 Q 130 260 130 220 L 130 50 L 120 50 L 120 30 L 60 30 L 60 50 Z"
            fill="none"
            stroke="hsl(196,70%,63%)"
            strokeWidth="3"
            opacity="0.85"
          />
          {/* Liquid inside beaker */}
          <motion.path
            d={`M52 ${220 - liquidHeight * 2} L52 218 Q52 255 90 259 Q128 255 128 218 L128 ${220 - liquidHeight * 2} Z`}
            fill="url(#liquidGradient)"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />
          <defs>
            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(196,80%,62%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(166,60%,56%)" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
        {!isFull && (
          <p className="mt-8 text-lg font-light tracking-wide text-foreground">
            Move your cursor right to fill →
          </p>
        )}
        {isFull && (
          <p className="mt-8 text-lg font-light tracking-wide text-foreground">
            Beaker filled!
          </p>
        )}
      </div>
    </div>
  );
};

export default BeakerAnimation;
