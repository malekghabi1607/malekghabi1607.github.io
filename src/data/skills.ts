/**
 * Technical Skills Data
 *
 * This file contains all technical skills organized by category.
 * Each skill includes name, logo path, and proficiency level.
 */
// src/data/skills.ts
export interface Skill {
  name: string;
  logo: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  titleFr: string;
  titleEn: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    titleFr: 'Développement Frontend',
    titleEn: 'Frontend Development',
    skills: [
      { name: 'HTML5',        logo: '/images/skills/HTML5.svg',       level: 'advanced' },
      { name: 'CSS3',         logo: '/images/skills/CSS3.svg',        level: 'advanced' },
      { name: 'JavaScript',   logo: '/images/skills/JavaScript.svg',  level: 'advanced' },
      { name: 'TypeScript',   logo: '/images/skills/typescript.svg',  level: 'intermediate' },
      { name: 'React',        logo: '/images/skills/react.svg',       level: 'intermediate' },
      { name: 'Vue.js',       logo: '/images/skills/vuejs.svg',       level: 'intermediate' },
      // Deux variantes existent chez toi : TailwindCSS.svg et tailwind.svg.
      // Garde celui-ci qui existe : tailwind.svg
      { name: 'Tailwind CSS', logo: '/images/skills/tailwind.svg',    level: 'intermediate' },
      { name: 'PHP',          logo: '/images/skills/php.svg',         level: 'intermediate' }
    ]
  },
  {
    titleFr: 'Backend & Bases de Données',
    titleEn: 'Backend & Databases',
    skills: [
      { name: 'Node.js',       logo: '/images/skills/Nodejs.svg',                   level: 'intermediate' },
      { name: 'Python',        logo: '/images/skills/Python.svg',                   level: 'advanced' },
      { name: 'Java',          logo: '/images/skills/Java.svg',                     level: 'advanced' },
      { name: 'Spring',        logo: '/images/skills/Spring.svg',                   level: 'intermediate' },
      { name: 'C',             logo: '/images/skills/C.svg',                        level: 'advanced' },
      { name: 'C++',           logo: '/images/skills/C++.svg',                      level: 'advanced' },
      { name: 'R',             logo: '/images/skills/R.svg',                        level: 'intermediate' },
      { name: 'Julia',         logo: '/images/skills/Julia.svg',                    level: 'intermediate' },
      { name: 'Yii Framework', logo: '/images/skills/yii-svgrepo-com.svg',          level: 'intermediate' },
      { name: 'PostgreSQL',    logo: '/images/skills/postgresql.svg',               level: 'advanced' },
      { name: 'MySQL',         logo: '/images/skills/MySQL.svg',                    level: 'advanced' },
      { name: 'Firebase',      logo: '/images/skills/firebase.svg',                 level: 'intermediate' }
    ]
  },
  {
    titleFr: 'DevOps & Outils',
    titleEn: 'DevOps & Tools',
    skills: [
      { name: 'Git',      logo: '/images/skills/Git.svg',                      level: 'advanced' },
      { name: 'GitHub',   logo: '/images/skills/GitHub.svg',                   level: 'advanced' },
      { name: 'GitLab',   logo: '/images/skills/GitLab.svg',                   level: 'intermediate' },
      { name: 'Docker',   logo: '/images/skills/Docker.svg',                   level: 'intermediate' },
      { name: 'Postman',  logo: '/images/skills/postman-icon-svgrepo-com.svg', level: 'intermediate' },
      { name: 'Swagger',  logo: '/images/skills/swagger-svgrepo-com.svg',      level: 'intermediate' },
      { name: 'Figma',    logo: '/images/skills/Figma.svg',                    level: 'intermediate' }
    ]
  },
  {
    titleFr: 'Systèmes & IDE',
    titleEn: 'Systems & IDEs',
    skills: [
      { name: 'Linux',        logo: '/images/skills/Linux.svg',   level: 'advanced' },
      { name: 'Windows',      logo: '/images/skills/Windows.svg', level: 'expert' },
      // Tu as deux variantes : VSCode.svg et vscode.svg → on garde vscode.svg qui existe
      { name: 'VS Code',      logo: '/images/skills/vscode.svg',  level: 'expert' },
      { name: 'IntelliJ IDEA',logo: '/images/skills/IntelliJ.svg',level: 'advanced' },
      { name: 'Eclipse',      logo: '/images/skills/eclipse.svg', level: 'intermediate' },
      { name: 'WebStorm',     logo: '/images/skills/WebStorm.svg',level: 'intermediate' }
    ]
  }
];
