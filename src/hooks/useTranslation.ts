/**
 * useTranslation Hook
 *
 * Custom hook to handle internationalization (i18n).
 * Loads translations from JSON files based on selected language.
 */

import { useState, useEffect } from 'react';
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';

export type Language = 'fr' | 'en';

export function useTranslation(initialLanguage: Language = 'fr') {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState(frTranslations);

  useEffect(() => {
    setTranslations(language === 'fr' ? frTranslations : enTranslations);
  }, [language]);

  return {
    language,
    setLanguage,
    t: translations
  };
}
