/**
 * Section Component
 *
 * A reusable section wrapper with consistent styling.
 * Includes scroll animations and optional dark mode support.
 */

import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  isDark: boolean;
  className?: string;
}

export default function Section({ id, title, children, isDark, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-4 py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <h2 className={`scroll-animate text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
          {title}
        </h2>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}
