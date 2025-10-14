/**
 * SkillsSection Component
 *
 * Professional skills section with organized categories.
 * Displays technical skills in a clean, grid-based layout with proficiency levels.
 */
// src/components/SkillsSection.tsx
import SkillCard from './SkillCard';
import Section from './Section';
import { skillCategories } from '../data/skills';

type Lang = 'fr' | 'en';

interface SkillsTranslations {
  title: string;
  languages: string;
  personalSkills: string;
  interests: string;
  teamwork: string;
  autonomy: string;
  creativity: string;
  sport: string;
  music: string;
  design: string;
  travel: string;
  podcast: string;
}

interface SkillsSectionProps {
  isDark: boolean;
  language: Lang;
  translations: SkillsTranslations;
}


export default function SkillsSection({ isDark, language, translations }: SkillsSectionProps) {
  return (
    <Section id="competences" title={translations.title} isDark={isDark}>
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <div
            key={category.titleEn}
            className={`scroll-animate backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700' : 'bg-white/60 border-stone-200'}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              {language === 'fr' ? category.titleFr : category.titleEn}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  logo={skill.logo}
                  level={skill.level}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Languages */}
        <div className={`scroll-animate backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 shadow-md hover:shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`}>
          <h3 className={`text-2xl font-bold bg-clip-text text-transparent mb-6 ${isDark ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`}>
            {translations.languages}
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Français', level: 'Natif', progress: 100 },
              { name: 'Arabe', level: 'Natif', progress: 100 },
              { name: 'Anglais', level: 'B2', progress: 75 },
              { name: 'Italien', level: 'B2', progress: 75 }
            ].map((lang) => (
              <div key={lang.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{lang.name}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{lang.level}</span>
                </div>
                <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`}
                    style={{ width: `${lang.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal skills */}
        <div className={`scroll-animate backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 shadow-md hover:shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`}>
          <h3 className={`text-2xl font-bold bg-clip-text text-transparent mb-6 ${isDark ? 'bg-gradient-to-r from-orange-400 to-red-500' : 'bg-gradient-to-r from-blue-900 to-slate-900'}`}>
            {translations.personalSkills}
          </h3>
          <div className="space-y-4">
            {[
              { label: translations.teamwork, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { label: translations.autonomy, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { label: translations.creativity, icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }
            ].map((skill) => (
              <div key={skill.label} className="flex items-center gap-3 group">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                  </svg>
                </div>
                <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className={`scroll-animate backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 shadow-md hover:shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`}>
          <h3 className={`text-2xl font-bold bg-clip-text text-transparent mb-6 ${isDark ? 'bg-gradient-to-r from-red-400 to-orange-500' : 'bg-gradient-to-r from-blue-900 to-slate-800'}`}>
            {translations.interests}
          </h3>
          <div className="space-y-3">
            {[
              { label: translations.sport,   icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: translations.music,   icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' },
              { label: translations.design,  icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
              { label: translations.travel,  icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: translations.podcast, icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' }
            ].map((interest) => (
              <div
                key={interest.label}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white/50 hover:bg-white'}`}
              >
                <svg className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={interest.icon} />
                </svg>
                <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{interest.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}