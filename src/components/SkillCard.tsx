/**
 * SkillCard Component
 *
 * A professional card component to display technical skills.
 * Features clean design with logo, name, and optional proficiency level.
 */
// src/components/SkillCard.tsx
interface SkillCardProps {
  name: string;
  logo: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  isDark: boolean;
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
type Level = NonNullable<SkillCardProps['level']>;

export default function SkillCard({ name, logo, level, isDark }: SkillCardProps) {
  const logoSrc = /^(https?:|data:)/.test(logo) ? logo : asset(logo);

  const LEVEL_COLORS: Record<Level, string> = {
    beginner:     isDark ? 'bg-orange-900/30 text-orange-300 border-orange-700'  : 'bg-orange-100 text-orange-800 border-orange-300',
    intermediate: isDark ? 'bg-blue-900/30 text-blue-300 border-blue-700'        : 'bg-blue-100 text-blue-800 border-blue-300',
    advanced:     isDark ? 'bg-green-900/30 text-green-300 border-green-700'     : 'bg-green-100 text-green-800 border-green-300',
    expert:       isDark ? 'bg-purple-900/30 text-purple-300 border-purple-700'  : 'bg-purple-100 text-purple-800 border-purple-300',
  };

  const LEVEL_LABELS: Record<Level, string> = {
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé',
    expert: 'Expert',
  };

  const levelColor = level ? LEVEL_COLORS[level] : '';
  const levelText  = level ? LEVEL_LABELS[level] : '';

  return (
    <div className={`group relative flex flex-col items-center p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/50' : 'bg-white/80 border-stone-200 hover:border-blue-900/50'}`}>
      <div className={`w-20 h-20 mb-4 flex items-center justify-center rounded-lg p-3 transition-all duration-300 ${isDark ? 'bg-gray-700/50 group-hover:bg-gradient-to-br group-hover:from-orange-600/20 group-hover:to-red-600/20' : 'bg-stone-100 group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-slate-600/10'}`}>
        <img
          src={logoSrc}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          onError={(e) => { e.currentTarget.style.opacity = '0.35'; }}
        />
      </div>

      <h4 className={`text-center font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200 group-hover:text-orange-400' : 'text-gray-800 group-hover:text-blue-900'}`}>
        {name}
      </h4>

      {level && (
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${levelColor}`}>
          {levelText}
        </span>
      )}
    </div>
  );
}