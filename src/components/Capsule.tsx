import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  containerRef?: React.RefObject<HTMLElement>;
  onOpen?: () => void;
  mode?: "follow" | "intro"; // follow: cursor-following, intro: big static capsule
  size?: number; // optional pixel width for intro capsule
};

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const Capsule: React.FC<Props> = ({ containerRef, onOpen, mode = "follow", size = 240 }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(mode === "intro");
  const [opened, setOpened] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // cursor-following behaviour (kept for backwards compatibility but disabled in intro mode)
  useEffect(() => {
    if (mode !== "follow") return;
    const el = containerRef?.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPos({ x, y });
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef, mode]);

  const openCapsule = () => {
    if (opened) return;
    setOpened(true);

    // create particles
    const count = mode === "intro" ? 36 : 18;
    const newParticles: Array<{ id: number; x: number; y: number }> = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + random(-0.3, 0.3);
      const dist = random(mode === "intro" ? 120 : 80, mode === "intro" ? 420 : 220);
      newParticles.push({ id: i, x: Math.cos(angle) * dist, y: Math.sin(angle) * dist });
    }
    setParticles(newParticles);

    // after particles animation, call onOpen
    setTimeout(() => {
      onOpen?.();
      // reset after a bit and hide intro capsule
      setTimeout(() => {
        setOpened(false);
        setParticles([]);
        if (mode === "intro") setVisible(false);
      }, 800);
    }, 800);
  };

  // Intro mode: centered big capsule overlay
  if (mode === "intro") {
    return (
      <AnimatePresence>
        {visible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex items-center justify-center"
            >
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  openCapsule();
                }}
                aria-label="Open capsule"
                className="rounded-full shadow-2xl border-2 border-[hsl(var(--chemistry-teal))] bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] flex items-center justify-center"
                style={{ width: size, height: Math.round(size / 2) }}
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.04, 1], rotate: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[hsl(var(--chemistry-dark))] font-semibold text-xl select-none">Open Capsules</span>
              </motion.button>

              {/* particles */}
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute w-3 h-3 rounded-full bg-[hsl(var(--chemistry-teal))]"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x: p.x, y: p.y, opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  // Default: follow mode (cursor-following small capsule)
  return (
    <AnimatePresence>
      {visible && (
        <div className="absolute inset-0 pointer-events-none">
          {/* capsule follows the cursor */}
          <motion.div
            className="pointer-events-auto absolute"
            style={{ left: pos.x, top: pos.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  openCapsule();
                }}
                aria-label="Open capsule"
                className="w-12 h-6 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] rounded-full shadow-md border-2 border-[hsl(var(--chemistry-teal))]"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />

              {/* lid when opened - a simple animated notch */}
              {opened && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -top-6 w-8 h-8 rounded-full bg-[hsl(var(--chemistry-glow))]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.1, rotate: 30 }}
                  exit={{ scale: 0 }}
                />
              )}

              {/* particles */}
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute w-2 h-2 rounded-full bg-[hsl(var(--chemistry-teal))]"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.8 }}
                  animate={{ x: p.x, y: p.y, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Capsule;
