/**
 * Education Data
 *
 * This file contains all educational background information.
 * Includes degrees, schools, years, and current status.
 */

export interface Education {
  year: string;
  degreeFr: string;
  degreeEn: string;
  schoolFr: string;
  schoolEn: string;
  statusFr: string;
  statusEn: string;
}

export const education: Education[] = [
  {
    year: '2025-2027',
    degreeFr: 'Bachelor en Sciences Informatiques',
    degreeEn: 'Bachelor in Computer Science',
    schoolFr: 'Université de Genève, Suisse',
    schoolEn: 'University of Geneva, Switzerland',
    statusFr: '(en cours)',
    statusEn: '(in progress)'
  },
  {
    year: '2023-2026',
    degreeFr: 'Licence Informatique (L3)',
    degreeEn: 'Computer Science Bachelor (L3)',
    schoolFr: 'Université d\'Avignon, Avignon',
    schoolEn: 'University of Avignon, Avignon',
    statusFr: '(en cours)',
    statusEn: '(in progress)'
  },
  {
    year: '2023',
    degreeFr: 'Baccalauréat Général scientifique',
    degreeEn: 'Scientific General Baccalaureate',
    schoolFr: 'Lycée Jean Henri Fabre, Carpentras',
    schoolEn: 'Jean Henri Fabre High School, Carpentras',
    statusFr: '',
    statusEn: ''
  }
];
