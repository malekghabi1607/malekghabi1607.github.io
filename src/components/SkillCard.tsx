import { useState } from 'react';

export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface SkillCardProps {
  name: string;
  logo: string;
  level?: Level;   // si absent → anneau caché
  isDark?: boolean;
}

// pourcentages par niveau
const LEVEL_META: Record<Level, { percent: number }> = {
  beginner:     { percent: 35 },
  intermediate: { percent: 55 },
  advanced:     { percent: 75 },
  expert:       { percent: 92 },
};

export default function SkillCard({ name, logo, level, isDark }: SkillCardProps) {
  const [hover, setHover] = useState(false);

  // géométrie du cercle
  const size = 88;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;

  const pct = level ? LEVEL_META[level].percent : 0;
  const dashArray = C;
  const dashOffset = hover && level ? C * (1 - pct / 100) : C; // caché si pas hover

  const track = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';
  const progress = isDark ? '#fb923c' : '#1e3a8a';

  return (
    <div
      className="group flex flex-col items-center gap-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={level ? `${name} • ${pct}%` : name}
    >
      <div
        className={[
          'relative w-[88px] h-[88px] rounded-2xl flex items-center justify-center shadow-lg',
          isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800'
                 : 'bg-gradient-to-br from-stone-100 to-blue-50',
        ].join(' ')}
      >
        {/* Logo */}
        <img
          src={logo}
          alt={name}
          className="w-10 h-10 object-contain select-none pointer-events-none"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/skills/_fallback.svg';
          }}
        />

        {/* Anneau au survol */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={track}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={progress}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            style={{
              transition: 'stroke-dashoffset 650ms ease',
              filter: hover
                ? (isDark
                    ? 'drop-shadow(0 0 6px rgba(251,146,60,.7))'
                    : 'drop-shadow(0 0 6px rgba(30,58,138,.55))')
                : 'none',
            }}
          />
        </svg>
      </div>

      <div className={`text-sm font-semibold text-center ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
        {name}
      </div>
    </div>
  );
}