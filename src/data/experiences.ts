/**
 * Professional Experience Data
 *
 * This file contains all work experience and internship information.
 * Each experience includes position, company, years, tasks, and status.
 */

export interface Experience {
  year: string;
  titleFr: string;
  titleEn: string;
  company: string;
  tasksFr: string[];
  tasksEn: string[];
  statusFr?: string;
  statusEn?: string;
}

export const experiences: Experience[] = [
  {
    year: '2025-2026',
    titleFr: 'Caissière',
    titleEn: 'Cashier',
    company: 'B&M - Sorgues',
    tasksFr: [
      'Accueil clients et gestion des encaissements.',
      'Mise en rayon et suivi des stocks.'
    ],
    tasksEn: [
      'Customer reception and cash management.',
      'Shelving and inventory tracking.'
    ],
    statusFr: '(en cours)',
    statusEn: '(ongoing)'
  },
  {
    year: '2025',
    titleFr: 'Animatrice',
    titleEn: 'Activity Leader',
    company: 'MJC - Annemasse',
    tasksFr: [
      'Encadrement et animation d\'activités pour enfants.',
      'Développement du sens de l\'organisation et du travail en équipe.'
    ],
    tasksEn: [
      'Supervision and animation of children\'s activities.',
      'Development of organizational and teamwork skills.'
    ],
    statusFr: '(job d\'été)',
    statusEn: '(summer job)'
  },
  {
    year: '2023-2024',
    titleFr: 'Gestionnaire d\'exploitation',
    titleEn: 'Operations Manager',
    company: 'CERP - Laboratoire pharmaceutique',
    companyEn: 'CERP - Pharmaceutical Laboratory',
    tasksFr: [
      'Vérification des lots et péremptions.',
      'Réception, gestion du stock et préparation des médicaments.'
    ],
    tasksEn: [
      'Batch and expiration verification.',
      'Reception, inventory management and drug preparation.'
    ]
  },
  {
    year: '2022',
    titleFr: 'Stagiaire Architecte',
    titleEn: 'Architecture Intern',
    company: 'Cabinet Gilles - Carpentras',
    tasksFr: [
      'Participation aux relevés de terrain et à la conception des plans.',
      'Assistance à la préparation de dossiers de permis de construire.'
    ],
    tasksEn: [
      'Participation in field surveys and plan design.',
      'Assistance in preparing building permit applications.'
    ]
  },
  {
    year: '2021',
    titleFr: 'Stagiaire Géomètre Expert',
    titleEn: 'Land Surveyor Intern',
    company: 'Cabinet Grimont - Carpentras',
    tasksFr: [
      'Aide au levé topographique et au bornage de terrains.',
      'Traitement de données sur logiciel de géomatique.'
    ],
    tasksEn: [
      'Assistance with topographic surveys and land demarcation.',
      'Data processing on geomatics software.'
    ]
  }
];
