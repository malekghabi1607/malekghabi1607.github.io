interface BackgroundAnimationProps {
  isDark: boolean;
}

export default function BackgroundAnimation({ isDark }: BackgroundAnimationProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className={`absolute top-[10%] left-[15%] w-96 h-96 rounded-full blur-3xl animate-float-particle ${isDark ? 'bg-gradient-to-br from-orange-500/30 to-red-500/30' : 'bg-gradient-to-br from-blue-400/40 to-slate-400/40'}`}></div>

      <div className={`absolute top-[60%] right-[20%] w-[500px] h-[500px] rounded-full blur-3xl animate-float-particle-2 ${isDark ? 'bg-gradient-to-br from-amber-500/25 to-orange-500/25' : 'bg-gradient-to-br from-slate-400/35 to-blue-500/35'}`}></div>

      <div className={`absolute bottom-[20%] left-[25%] w-[450px] h-[450px] rounded-full blur-3xl animate-float-particle-3 ${isDark ? 'bg-gradient-to-br from-red-500/30 to-orange-600/30' : 'bg-gradient-to-br from-blue-500/40 to-slate-500/40'}`}></div>

      <div className={`absolute top-[40%] right-[10%] w-64 h-64 rounded-full blur-2xl animate-float-particle ${isDark ? 'bg-gradient-to-br from-orange-400/35 to-red-400/35' : 'bg-gradient-to-br from-slate-300/45 to-blue-400/45'}`} style={{ animationDelay: '5s' }}></div>

      <div className={`absolute bottom-[45%] right-[35%] w-80 h-80 rounded-full blur-3xl animate-float-particle-2 ${isDark ? 'bg-gradient-to-br from-amber-600/30 to-orange-500/30' : 'bg-gradient-to-br from-blue-300/40 to-slate-400/40'}`} style={{ animationDelay: '8s' }}></div>

      <div className={`absolute top-[25%] left-[45%] w-96 h-96 rounded-full blur-3xl animate-float-particle-3 ${isDark ? 'bg-gradient-to-br from-red-400/25 to-orange-500/25' : 'bg-gradient-to-br from-slate-500/35 to-blue-400/35'}`} style={{ animationDelay: '12s' }}></div>

      <div className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow ${isDark ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20' : 'bg-gradient-to-br from-blue-400/35 to-slate-500/35'}`}></div>

      <div className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-2xl animate-spin-slow ${isDark ? 'bg-gradient-to-br from-amber-500/15 to-orange-600/15' : 'bg-gradient-to-br from-slate-400/30 to-blue-500/30'}`}></div>

      <div className={`absolute top-[50%] left-[30%] w-48 h-48 rounded-full blur-2xl animate-float-particle-3 ${isDark ? 'bg-gradient-to-br from-red-400/25 to-orange-500/25' : 'bg-gradient-to-br from-blue-300/40 to-slate-400/40'}`} style={{ animationDelay: '3s' }}></div>

      <div className={`absolute top-[50%] right-[30%] w-56 h-56 rounded-full blur-2xl animate-float-particle ${isDark ? 'bg-gradient-to-br from-orange-500/25 to-red-400/25' : 'bg-gradient-to-br from-slate-400/40 to-blue-400/40'}`} style={{ animationDelay: '6s' }}></div>

      <div className={`absolute top-[45%] left-[50%] -translate-x-1/2 w-72 h-2 blur-xl animate-wave-horizontal ${isDark ? 'bg-gradient-to-r from-transparent via-orange-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent'}`}></div>

      <div className={`absolute top-[55%] left-[50%] -translate-x-1/2 w-72 h-2 blur-xl animate-wave-horizontal ${isDark ? 'bg-gradient-to-r from-transparent via-red-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-slate-500/50 to-transparent'}`} style={{ animationDelay: '2s' }}></div>

      <div className={`absolute top-[35%] left-[55%] w-32 h-32 blur-xl animate-float-geometric ${isDark ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20' : 'bg-gradient-to-br from-blue-400/35 to-slate-400/35'} rotate-45`}></div>

      <div className={`absolute top-[65%] left-[45%] w-24 h-24 rounded-full blur-xl animate-float-geometric ${isDark ? 'bg-gradient-to-br from-red-500/20 to-orange-600/20' : 'bg-gradient-to-br from-slate-400/35 to-blue-500/35'}`} style={{ animationDelay: '4s' }}></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent opacity-30"></div>

      <div className={`absolute inset-0 opacity-20 ${isDark ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]'}`}></div>
    </div>
  );
}
