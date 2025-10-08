import { useEffect, useState } from 'react';
import { Code2, User, Github } from 'lucide-react';

interface WelcomeSplashProps {
  onComplete: () => void;
}

export default function WelcomeSplash({ onComplete }: WelcomeSplashProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-stone-100 via-amber-50/30 to-white transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-stone-300/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-900/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex gap-8 mb-12 animate-bounce">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-slate-900 to-blue-900 flex items-center justify-center shadow-2xl">
            <Code2 className="w-10 h-10 text-white" />
          </div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-900 to-slate-800 flex items-center justify-center shadow-2xl">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-slate-800 to-blue-900 flex items-center justify-center shadow-2xl">
            <Github className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent">
            Bienvenue sur mon Portfolio
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-center text-gray-600 font-medium max-w-3xl px-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
          Transformons vos idées en solutions innovantes
        </p>
      </div>
    </div>
  );
}
