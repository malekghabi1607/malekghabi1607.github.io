import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Phone, GraduationCap, Briefcase, ExternalLink, Globe, Sparkles, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendContactEmail } from '../utils/emailService';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { projects as portfolioProjects } from '../data/projects';




interface HomePageProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function HomePage({ isDark, setIsDark }: HomePageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);


  const navigate = useNavigate();

  useScrollAnimation();

  const translations = {
    fr: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      education: 'Formation',
      experience: 'Expériences',
      projects: 'Projets',
      contact: 'Contact',
      lookingFor: 'Recherche de stage',
      jobTitle: 'Développement / Systèmes / Data',
      discoverProjects: 'Contacter moi',
      hello: 'Bonjour, je suis',
      aboutText: 'Passionnée par l\'univers de l\'informatique depuis toujours, je poursuis actuellement une double formation en Licence Informatique à Avignon et en Bachelor en Sciences Informatiques à Genève. Cette expérience enrichissante me permet d\'explorer différentes approches pédagogiques et de développer une vision globale du domaine.',
      aboutText2: 'Mon parcours est marqué par une curiosité constante et une volonté d\'apprendre au-delà des cours magistraux. Chaque projet représente pour moi une opportunité de repousser mes limites et de transformer des idées en solutions concrètes. Je recherche un stage de 2 mois qui me permettra de mettre en pratique mes compétences tout en découvrant les réalités du monde professionnel au sein d\'une équipe dynamique.',
      totalProjects: 'PROJETS RÉALISÉS',
      totalProjectsDesc: 'Solutions Web innovantes',
      certificates: 'DIPLÔMES',
      certificatesDesc: 'Compétences certifiées',
      yearsExp: 'ANNÉES D\'EXPÉRIENCE',
      yearsExpDesc: 'Apprentissage continu',
      languages: 'Langues',
      personalSkills: 'Compétences personnelles',
      interests: 'Centres d\'intérêt',
      technicalSkills: 'Compétences techniques',
      viewDetails: 'Voir les détails',
      contactMe: 'Contactez-moi',
      contactText: 'Vous avez un stage ou un projet en tête ? N\'hésitez pas à me contacter.',
      sendMessage: 'Envoyer le message',
      sending: 'Envoi en cours...',
      successMessage: 'Message envoyé avec succès !',
      errorMessage: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      teamwork: 'Travail d\'équipe',
      autonomy: 'Autonomie',
      creativity: 'Créativité',
      sport: 'Sport',
      music: 'Musique - Guitare',
      design: 'Design - peinture',
      travel: 'Voyage - culture étrangère',
      podcast: 'Podcast - montage vidéo'
    },
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      lookingFor: 'Looking for internship',
      jobTitle: 'Development / Systems / Data',
      discoverProjects: 'Contact me',
      hello: 'Hello, I am',
      aboutText: 'Passionate about the world of computer science since always, I am currently pursuing a dual degree in Computer Science Bachelor at Avignon and Bachelor of Computer Science at Geneva. This enriching experience allows me to explore different pedagogical approaches and develop a global vision of the field.',
      aboutText2: 'My journey is marked by constant curiosity and a willingness to learn beyond lectures. Each project represents an opportunity for me to push my limits and transform ideas into concrete solutions. I am looking for a 2-month internship that will allow me to put my skills into practice while discovering the realities of the professional world within a dynamic team.',
      totalProjects: 'COMPLETED PROJECTS',
      totalProjectsDesc: 'Innovative Web solutions',
      certificates: 'CERTIFICATES',
      certificatesDesc: 'Certified skills',
      yearsExp: 'YEARS OF EXPERIENCE',
      yearsExpDesc: 'Continuous learning',
      languages: 'Languages',
      personalSkills: 'Personal Skills',
      interests: 'Interests',
      technicalSkills: 'Technical Skills',
      viewDetails: 'View details',
      contactMe: 'Contact me',
      contactText: 'Do you have an internship or a project in mind? Feel free to contact me.',
      sendMessage: 'Send message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully!',
      errorMessage: 'Error sending message. Please try again.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      teamwork: 'Teamwork',
      autonomy: 'Autonomy',
      creativity: 'Creativity',
      sport: 'Sport',
      music: 'Music - Guitar',
      design: 'Design - painting',
      travel: 'Travel - foreign culture',
      podcast: 'Podcast - video editing'
    }
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const displayedProjects = portfolioProjects.map((p) => ({
  id: p.id,
  title: language === 'fr' ? p.title : (p.titleEn ?? p.title),
  description: language === 'fr' ? p.descriptionFr : p.descriptionEn,
  tech: p.tech,
  image: p.image,
}));

  const skillCategories = [
    {
      title: language === 'fr' ? 'Développement Frontend' : 'Frontend Development',
      skills: [
        { name: 'HTML', logo: '/images/skills/html5.svg' },
        { name: 'CSS', logo: '/images/skills/css3.svg' },
        { name: 'JavaScript', logo: '/images/skills/javascript.svg' },
        { name: 'TypeScript', logo: '/images/skills/typescript.svg' },
        { name: 'React', logo: '/images/skills/react.svg' },
        { name: 'Vue.js', logo: '/images/skills/vuejs.svg' },
        { name: 'PHP', logo: '/images/skills/php.svg' },
      ]
    },
    {
      title: language === 'fr' ? 'Développement Backend' : 'Backend Development',
      skills: [
        { name: 'Node.js', logo: '/images/skills/nodejs.svg' },
        { name: 'Python', logo: '/images/skills/python.svg' },
        { name: 'Java', logo: '/images/skills/java.svg' },
        { name: 'Spring', logo: '/images/skills/spring.svg' },
        { name: 'C', logo: '/images/skills/c.svg' },
        { name: 'C++', logo: '/images/skills/cplusplus.svg' },
        { name: 'R', logo: '/images/skills/r.svg' },
      ]
    },
    {
      title: language === 'fr' ? 'Base de Données' : 'Databases',
      skills: [
        { name: 'PostgreSQL', logo: '/images/skills/postgresql.svg' },
        { name: 'MySQL', logo: '/images/skills/mysql.svg' },
        { name: 'Firebase', logo: '/images/skills/firebase.svg' },
      ]
    },
    {
      title: 'DevSecOps & Cloud',
      skills: [
        { name: 'Docker', logo: '/images/skills/docker.svg' },
        { name: 'GitLab', logo: '/images/skills/gitlab.svg' },
        { name: 'AWS', logo: '/images/skills/aws.svg' },
      ]
    },
    {
      title: language === 'fr' ? 'Outils' : 'Tools',
      skills: [
        { name: 'GitHub', logo: '/images/skills/github.svg' },
        { name: 'Git', logo: '/images/skills/git.svg' },
        { name: 'Figma', logo: '/images/skills/figma.svg' },
        { name: 'VSCode', logo: '/images/skills/vscode.svg' },
      ]
    },
    {
      title: language === 'fr' ? 'Plateformes & IDE' : 'Platforms & IDE',
      skills: [
        { name: 'Linux', logo: '/images/skills/linux.svg' },
        { name: 'Windows', logo: '/images/skills/windows.svg' },
        { name: 'IntelliJ', logo: '/images/skills/intellij.svg' },
      ]
    }
  ];

  const education = [
    {
      year: '2025-2027',
      degree: language === 'fr' ? 'Bachelor en Sciences Informatiques' : 'Bachelor in Computer Science',
      school: language === 'fr' ? 'Université de Genève, Suisse' : 'University of Geneva, Switzerland',
      status: language === 'fr' ? '(en cours)' : '(in progress)'
    },
    {
      year: '2023-2026',
      degree: language === 'fr' ? 'Licence Informatique (L3)' : 'Computer Science Bachelor (L3)',
      school: language === 'fr' ? 'Université d\'Avignon, Avignon' : 'University of Avignon, Avignon',
      status: language === 'fr' ? '(en cours)' : '(in progress)'
    },
    {
      year: '2023',
      degree: language === 'fr' ? 'Baccalauréat Général scientifique' : 'Scientific General Baccalaureate',
      school: language === 'fr' ? 'Lycée Jean Henri Fabre, Carpentras' : 'Jean Henri Fabre High School, Carpentras',
      status: ''
    }
  ];

  const experiences = [
    {
      year: '2025-2026',
      title: language === 'fr' ? 'Caissière' : 'Cashier',
      company: 'B&M - Sorgues',
      tasks: language === 'fr' ? ['Accueil clients et gestion des encaissements.', 'Mise en rayon et suivi des stocks.'] : ['Customer reception and cash management.', 'Shelving and inventory tracking.'],
      status: language === 'fr' ? '(en cours)' : '(ongoing)'
    },
    {
      year: '2025',
      title: language === 'fr' ? 'Animatrice' : 'Activity Leader',
      company: 'MJC - Annemasse',
      tasks: language === 'fr' ? ['Encadrement et animation d\'activités pour enfants.', 'Développement du sens de l\'organisation et du travail en équipe.'] : ['Supervision and animation of children\'s activities.', 'Development of organizational and teamwork skills.'],
      status: language === 'fr' ? '(job d\'été)' : '(summer job)'
    },
    {
      year: '2023-2024',
      title: language === 'fr' ? 'Gestionnaire d\'exploitation' : 'Operations Manager',
      company: language === 'fr' ? 'CERP - Laboratoire pharmaceutique' : 'CERP - Pharmaceutical Laboratory',
      tasks: language === 'fr' ? ['Vérification des lots et péremptions.', 'Réception, gestion du stock et préparation des médicaments.'] : ['Batch and expiration verification.', 'Reception, inventory management and drug preparation.']
    },
    {
      year: '2022',
      title: language === 'fr' ? 'Stagiaire Architecte' : 'Architecture Intern',
      company: 'Cabinet Gilles - Carpentras',
      tasks: language === 'fr' ? ['Participation aux relevés de terrain et à la conception des plans.', 'Assistance à la préparation de dossiers de permis de construire.'] : ['Participation in field surveys and plan design.', 'Assistance in preparing building permit applications.']
    },
    {
      year: '2021',
      title: language === 'fr' ? 'Stagiaire Géomètre Expert' : 'Land Surveyor Intern',
      company: 'Cabinet Grimont - Carpentras',
      tasks: language === 'fr' ? ['Aide au levé topographique et au bornage de terrains.', 'Traitement de données sur logiciel de géomatique.'] : ['Assistance with topographic surveys and land demarcation.', 'Data processing on geomatics software.']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${isDark ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-100' : 'bg-gradient-to-br from-stone-50 via-amber-50/30 to-white text-gray-900'}`}>
      <BackgroundAnimation isDark={isDark} />
      <nav className={`fixed top-0 w-full backdrop-blur-lg z-50 border-b shadow-md transition-colors duration-500 ${isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-stone-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className={`text-4xl font-bold ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent'}`} style={{fontFamily: 'Georgia, serif'}}>
                gm
              </div>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {[t.home, t.about, t.skills, t.education, t.experience, t.projects, t.contact].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['home', 'about', 'competences', 'formation', 'experiences', 'projets', 'contact'][index])}
                  className={`transition-all duration-300 font-medium ${isDark ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-blue-900'}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-orange-500 hover:bg-orange-400' : 'bg-slate-900 hover:bg-slate-800'}`}
              >
                {isDark ? <Sun className="w-5 h-5 text-slate-900" /> : <Moon className="w-5 h-5 text-white" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800'}`}
              >
                <Globe className="w-4 h-4" />
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-orange-500 hover:bg-orange-400' : 'bg-slate-900 hover:bg-slate-800'}`}
              >
                {isDark ? <Sun className="w-4 h-4 text-slate-900" /> : <Moon className="w-4 h-4 text-white" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-900 to-blue-900 text-white hover:from-slate-800 hover:to-blue-800 transition-all duration-300 font-medium text-sm"
              >
                <Globe className="w-4 h-4" />
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
              <button
                className={isDark ? 'text-gray-300' : 'text-gray-700'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden backdrop-blur-lg border-t transition-colors duration-500 ${isDark ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-stone-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {[t.home, t.about, t.skills, t.education, t.experience, t.projects, t.contact].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['home', 'about', 'competences', 'formation', 'experiences', 'projets', 'contact'][index])}
                  className={`block w-full text-left transition-all duration-300 py-2 font-medium ${isDark ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-blue-900'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-stone-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-900/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-900/20 to-slate-800/20 rounded-full blur-xl animate-float-shape-1"></div>
          <div className="absolute top-40 right-40 w-40 h-40 bg-gradient-to-br from-slate-800/15 to-blue-900/15 rounded-lg blur-2xl animate-float-shape-2"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-gradient-to-br from-blue-900/25 to-slate-900/25 rotate-45 blur-xl animate-float-shape-3"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-slate-900/20 to-blue-800/20 rounded-full blur-2xl animate-float-shape-1" style={{animationDelay: '5s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-800/15 to-slate-900/15 rotate-12 blur-xl animate-float-shape-2" style={{animationDelay: '8s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block animate-fade-in-down">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 p-1 shadow-2xl animate-float">
              <div className={`w-full h-full rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                <img
                  src="images/photo.jpg"
                  alt="Malek Ghabi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-center gap-2 animate-fade-in">
            <Sparkles className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} />
            <span className={`text-sm font-medium uppercase tracking-wider ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t.lookingFor}</span>
            <Sparkles className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-slate-900'}`} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
            <span className={`bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
              Malek Ghabi
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.jobTitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 animate-fade-in">
            <div className={`flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm ${isDark ? 'bg-gray-800/60' : 'bg-white/60'}`}>
              <MapPin className={`w-4 h-4 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} />
              <span>Avignon</span>
            </div>
            <div className={`flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm ${isDark ? 'bg-gray-800/60' : 'bg-white/60'}`}>
              <Phone className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-slate-900'}`} />
              <span>+33 6 04 10 21 56</span>
            </div>
            <div className={`flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm ${isDark ? 'bg-gray-800/60' : 'bg-white/60'}`}>
              <Mail className={`w-4 h-4 ${isDark ? 'text-red-400' : 'text-blue-900'}`} />
              <span>malekghabi.education@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-8 animate-fade-in">
            <a
              href="mailto:malekghabi.education@gmail.com"
              className={`p-3 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800'}`}
              title="Email: malekghabi.education@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+33604102156"
              className={`p-3 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${isDark ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500' : 'bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-700 hover:to-blue-800'}`}
              title="Téléphone: +33 6 04 10 21 56"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/malekghabi607"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${isDark ? 'bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-500 hover:to-orange-600' : 'bg-gradient-to-r from-blue-900 to-slate-900 hover:from-blue-800 hover:to-slate-800'}`}
              title="GitHub: malekghabi607"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/malek-ghabi-3b3267a9"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800'}`}
              title="LinkedIn: malek-ghabi-3b3267a9"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="/CV_Malek_Ghabi.pdf"
            download
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl animate-fade-in min-w-[280px] ${isDark ? 'bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 hover:from-orange-500 hover:via-red-500 hover:to-orange-600' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 hover:from-slate-800 hover:via-blue-800 hover:to-slate-700'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V3m0 8l-3 3m3-3l3 3m-9 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {language === 'fr' ? 'Télécharger mon CV' : 'Download my CV'}
          </a>

            <button
              onClick={() => scrollToSection('contact')}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl animate-fade-in min-w-[280px] ${isDark ? 'bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 hover:from-orange-500 hover:via-red-500 hover:to-orange-600' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 hover:from-slate-800 hover:via-blue-800 hover:to-slate-700'}`}
            >
              <Mail className="w-5 h-5" />
              {t.discoverProjects}
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`scroll-animate text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
            {t.about}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="scroll-animate">
              <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                {t.hello} <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">Malek Ghabi</span>
              </h3>
              <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.aboutText}
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.aboutText2}
              </p>
            </div>

            <div className="flex justify-center scroll-animate">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-900 shadow-2xl animate-float">
                <img
                  src="images/photo2.jpg"
                  alt="Malek Ghabi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`scroll-animate backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 shadow-lg hover:shadow-xl ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`}>
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-4xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{displayedProjects.length}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.totalProjects}</p>
                </div>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.totalProjectsDesc}</p>
            </div>

            <div className={`scroll-animate backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 shadow-lg hover:shadow-xl ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`} style={{transitionDelay: '0.1s'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${isDark ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-blue-900 to-slate-900'}`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-4xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>3</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.certificates}</p>
                </div>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.certificatesDesc}</p>
            </div>

            <div className={`scroll-animate backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 shadow-lg hover:shadow-xl ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`} style={{transitionDelay: '0.2s'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${isDark ? 'bg-gradient-to-r from-red-600 to-orange-700' : 'bg-gradient-to-r from-blue-900 to-slate-800'}`}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-4xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>4</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.yearsExp}</p>
                </div>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.yearsExpDesc}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className={`scroll-animate backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 shadow-md hover:shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`}>
              <h3 className={`text-2xl font-bold bg-clip-text text-transparent mb-6 ${isDark ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`}>{t.languages}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Français</span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Natif</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`} style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Arabe</span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Natif</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`} style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Anglais</span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>B2</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`} style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Italien</span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>B2</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`} style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`scroll-animate backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 shadow-md hover:shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`} style={{transitionDelay: '0.1s'}}>
              <h3 className={`text-2xl font-bold bg-clip-text text-transparent mb-6 ${isDark ? 'bg-gradient-to-r from-orange-400 to-red-500' : 'bg-gradient-to-r from-blue-900 to-slate-900'}`}>{t.personalSkills}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.teamwork}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-blue-900 to-slate-900'}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.autonomy}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-gradient-to-r from-red-600 to-orange-700' : 'bg-gradient-to-r from-slate-800 to-blue-900'}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.creativity}</span>
                </div>
              </div>
            </div>

            <div className={`scroll-animate backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 shadow-md hover:shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`} style={{transitionDelay: '0.2s'}}>
              <h3 className={`text-2xl font-bold bg-clip-text text-transparent mb-6 ${isDark ? 'bg-gradient-to-r from-red-400 to-orange-500' : 'bg-gradient-to-r from-blue-900 to-slate-800'}`}>{t.interests}</h3>
              <div className="space-y-3">
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white/50 hover:bg-white'}`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.sport}</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white/50 hover:bg-white'}`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.music}</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white/50 hover:bg-white'}`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.design}</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white/50 hover:bg-white'}`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.travel}</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white/50 hover:bg-white'}`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.podcast}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className={`scroll-animate text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
            {t.technicalSkills}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                  key={category.title}
                  className={`scroll-animate backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/card ${isDark ? 'bg-gray-800/70 border-gray-700 hover:border-orange-500/50' : 'bg-white/70 border-stone-200 hover:border-blue-900/50'}`}
                  style={{
                    transitionDelay: `${catIndex * 0.1}s`,
                  }}

                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none ${isDark ? 'bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10' : 'bg-gradient-to-r from-blue-500/10 via-slate-500/10 to-blue-600/10'}`}
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 2.5s ease-in-out infinite',
                  }}
                ></div>

                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-8 text-center transition-all duration-300 ${isDark ? 'text-gray-100 group-hover/card:text-orange-400' : 'text-gray-800 group-hover/card:text-blue-900'}`}>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-3 group/skill cursor-pointer"
                      >
                        <div
                          className={`w-20 h-20 flex items-center justify-center rounded-2xl p-3 transition-transform duration-300 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-orange-600 hover:to-red-600' : 'bg-gradient-to-br from-stone-100 to-blue-50 hover:from-blue-500 hover:to-slate-600'} shadow-lg hover:shadow-xl hover:scale-105`}
                        >
                          <div className={`absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur-xl ${isDark ? 'bg-gradient-to-br from-orange-500 to-red-500' : 'bg-gradient-to-br from-blue-500 to-slate-600'}`}></div>

                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover/skill:brightness-125 group-hover/skill:drop-shadow-2xl group-hover/skill:scale-110"
                            style={{
                              filter: isDark ? 'drop-shadow(0 0 8px rgba(251, 146, 60, 0))' : 'drop-shadow(0 0 8px rgba(59, 130, 246, 0))',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.filter = isDark ? 'drop-shadow(0 0 12px rgba(251, 146, 60, 0.8))' : 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.filter = isDark ? 'drop-shadow(0 0 8px rgba(251, 146, 60, 0))' : 'drop-shadow(0 0 8px rgba(59, 130, 246, 0))';
                            }}
                          />
                        </div>
                        <span className={`text-sm font-semibold text-center transition-all duration-300 ${isDark ? 'text-gray-300 group-hover/skill:text-orange-400 group-hover/skill:scale-110' : 'text-gray-700 group-hover/skill:text-blue-900 group-hover/skill:scale-110'}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formation" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`scroll-animate text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
            {t.education}
          </h2>

          <div className="relative">
            <div className={`absolute left-8 top-0 bottom-0 w-1 ${isDark ? 'bg-gradient-to-b from-orange-500 via-red-500 to-amber-500' : 'bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800'}`}></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="scroll-animate relative pl-20"
                  style={{transitionDelay: `${index * 0.1}s`}}
                >
                  <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center shadow-xl ${isDark ? 'bg-gradient-to-br from-orange-600 to-red-600' : 'bg-gradient-to-br from-slate-900 to-blue-900'}`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 hover:border-orange-500' : 'bg-gradient-to-br from-white/80 to-blue-50/80 border-stone-200 hover:border-blue-900'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${isDark ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-gradient-to-r from-slate-900 to-blue-900 text-white'}`}>
                        {edu.year}
                      </span>
                      {edu.status && (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark ? 'bg-orange-900/50 text-orange-300 border border-orange-700' : 'bg-blue-100 text-blue-800 border border-blue-300'}`}>
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                      {edu.degree}
                    </h3>

                    <div className="flex items-center gap-2">
                      <svg className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{edu.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`scroll-animate text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
            {t.experience}
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`scroll-animate backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:-translate-x-2 shadow-md hover:shadow-lg ${isDark ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/30' : 'bg-white/60 border-stone-200 hover:border-blue-900/30'}`}
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 md:w-32">
                    <Briefcase className={`w-6 h-6 flex-shrink-0 ${isDark ? 'text-amber-400' : 'text-slate-900'}`} />
                    <span className={`font-semibold ${isDark ? 'text-amber-400' : 'text-slate-900'}`}>{exp.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                      {exp.title} {exp.status && <span className={`text-base font-normal ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.status}</span>}
                    </h3>
                    <p className={`mb-3 font-medium ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <span className={`mt-1.5 ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`scroll-animate text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
            {t.projects}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className={`scroll-animate backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl cursor-pointer group ${isDark ? 'bg-gray-800/80 border-gray-700 hover:border-orange-500' : 'bg-white/80 border-stone-200 hover:border-blue-900'}`}
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{project.title}</h3>
                  <p className={`mb-4 leading-relaxed line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-white rounded-full text-sm font-medium shadow-sm ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-slate-900 to-blue-900'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center bg-clip-text text-transparent transition-colors font-medium ${isDark ? 'bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-300 hover:to-red-300' : 'bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800'}`}>
                    {t.viewDetails} <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className={`scroll-animate text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
            {t.contactMe}
          </h2>
          <p className={`scroll-animate text-center mb-12 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.contactText}
          </p>

          <div className="scroll-animate mb-8">
            <div className="flex justify-center items-center gap-6">
              <a
                href="mailto:malekghabi.education@gmail.com"
                className="group"
                title="malekghabi.education@gmail.com"
              >
                <div className={`p-4 text-white rounded-full transition-all duration-300 group-hover:scale-125 shadow-lg ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800'}`}>
                  <Mail className="w-6 h-6" />
                </div>
              </a>
              <a
                href="tel:+33604102156"
                className="group"
                title="+33 6 04 10 21 56"
              >
                <div className={`p-4 text-white rounded-full transition-all duration-300 group-hover:scale-125 shadow-lg ${isDark ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500' : 'bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-700 hover:to-blue-800'}`}>
                  <Phone className="w-6 h-6" />
                </div>
              </a>
              <a
                href="https://github.com/malekghabi607"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="GitHub: malekghabi607"
              >
                <div className={`p-4 text-white rounded-full transition-all duration-300 group-hover:scale-125 shadow-lg ${isDark ? 'bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-500 hover:to-orange-600' : 'bg-gradient-to-r from-blue-900 to-slate-900 hover:from-blue-800 hover:to-slate-800'}`}>
                  <Github className="w-6 h-6" />
                </div>
              </a>
              <a
                href="https://linkedin.com/in/malek-ghabi-3b3267a9"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="LinkedIn: malek-ghabi-3b3267a9"
              >
                <div className={`p-4 text-white rounded-full transition-all duration-300 group-hover:scale-125 shadow-lg ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' : 'bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800'}`}>
                  <Linkedin className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>

          <form
            className={`scroll-animate space-y-6 backdrop-blur-sm rounded-xl p-8 border shadow-lg ${isDark ? 'bg-gray-800/70 border-gray-700' : 'bg-white/70 border-stone-200'}`}
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setSubmitStatus(null);

              const result = await sendContactEmail(formData);

              if (result.success) {
                setSubmitStatus({ type: 'success', message: t.successMessage });
                setFormData({ name: '', email: '', message: '' });
              } else {
                setSubmitStatus({ type: 'error', message: result.error || t.errorMessage });
              }

              setIsSubmitting(false);
            }}
          >
            {submitStatus && (
              <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? (isDark ? 'bg-green-900/50 text-green-200 border border-green-700' : 'bg-green-100 text-green-800 border border-green-300') : (isDark ? 'bg-red-900/50 text-red-200 border border-red-700' : 'bg-red-100 text-red-800 border border-red-300')}`}>
                {submitStatus.message}
              </div>
            )}

            <div>
              <label htmlFor="name" className={`block font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none transition-colors shadow-sm ${isDark ? 'bg-slate-800/70 border-gray-600 focus:border-blue-400 text-gray-100' : 'bg-white/70 border-stone-300 focus:border-blue-900 text-gray-800'}`}
                placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none transition-colors shadow-sm ${isDark ? 'bg-slate-800/70 border-gray-600 focus:border-blue-400 text-gray-100' : 'bg-white/70 border-stone-300 focus:border-blue-900 text-gray-800'}`}
                placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                {t.message}
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none transition-colors resize-none shadow-sm ${isDark ? 'bg-slate-800/70 border-gray-600 focus:border-blue-400 text-gray-100' : 'bg-white/70 border-stone-300 focus:border-blue-900 text-gray-800'}`}
                placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${isDark ? 'bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 hover:from-orange-500 hover:via-red-500 hover:to-orange-600' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 hover:from-slate-800 hover:via-blue-800 hover:to-slate-700'}`}
            >
              {isSubmitting ? t.sending : t.sendMessage}
            </button>
          </form>
        </div>
      </section>

      <footer className={`py-8 ${isDark ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white">
            © 2025 Malek Ghabi. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
