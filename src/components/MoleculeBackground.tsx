import { useMemo } from "react";

export const MoleculeBackground = () => {
  const molecules = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 40,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
  {/* Large glow backgrounds removed — only molecule SVGs remain */}
      {/* Floating molecules */}
      {molecules.map((molecule) => (
        <div
          key={molecule.id}
          className="absolute"
          style={{
            left: `${molecule.left}%`,
            top: `${molecule.top}%`,
            animation: `molecule-float ${molecule.duration}s ease-in-out infinite`,
            animationDelay: `${molecule.delay}s`,
          }}
        >
          <svg width={molecule.size} height={molecule.size} viewBox="0 0 100 100">
            {/* Central atom */}
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="hsl(var(--chemistry-teal))"
              opacity="0.6"
              className="animate-float"
            />
            
            {/* Orbiting atoms */}
            <circle
              cx="20"
              cy="30"
              r="8"
              fill="hsl(var(--chemistry-cyan))"
              opacity="0.5"
            />
            <circle
              cx="80"
              cy="40"
              r="8"
              fill="hsl(var(--chemistry-blue))"
              opacity="0.5"
            />
            <circle
              cx="30"
              cy="75"
              r="8"
              fill="hsl(var(--accent))"
              opacity="0.5"
            />
            <circle
              cx="70"
              cy="70"
              r="8"
              fill="hsl(var(--chemistry-cyan))"
              opacity="0.5"
            />
            
            {/* Bonds */}
            <line
              x1="50"
              y1="50"
              x2="20"
              y2="30"
              stroke="hsl(var(--chemistry-teal))"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="50"
              y1="50"
              x2="80"
              y2="40"
              stroke="hsl(var(--chemistry-teal))"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="50"
              y1="50"
              x2="30"
              y2="75"
              stroke="hsl(var(--chemistry-teal))"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="50"
              y1="50"
              x2="70"
              y2="70"
              stroke="hsl(var(--chemistry-teal))"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
