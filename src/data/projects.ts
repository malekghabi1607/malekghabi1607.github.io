/**
 * Portfolio Projects Data
 *
 * This file contains all project information displayed in the portfolio.
 * Each project includes title, description (in both FR and EN), technologies used, and image path.
 */
// src/data/projects.ts

export interface Project {
  id: string;
  title: string;            // Titre FR par défaut
  titleEn?: string;         // Optionnel (si différent)
  descriptionFr: string;
  descriptionEn: string;
  longDescriptionFr?: string | string[];
  longDescriptionEn?: string | string[];
  featuresFr?: string[];
  featuresEn?: string[];
  challengesFr?: string[];
  challengesEn?: string[];
  tech: string[];
  image: string;
  galleryImages?: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'easymonitor',
    title: 'EasyMonitor',
    descriptionFr:
      "Outil complet de supervision système distribué permettant de surveiller plusieurs machines virtuelles via une interface web intuitive.",
    descriptionEn:
      'Comprehensive distributed system monitoring tool designed to track multiple virtual machines through an intuitive web interface.',

    longDescriptionFr:
      "EasyMonitor est un outil de monitoring système distribué développé dans le cadre du module Administration des Systèmes d’Exploitation. Il permet de superviser un ensemble de serveurs ou de machines virtuelles à distance, en collectant et centralisant les données système sur une interface web unique.\
      \n\nLe projet repose sur deux machines virtuelles :\
      \n\n * Machine 1 – Agent de collecte (Client) : exécute des scripts Bash et Python pour relever les indicateurs système (CPU, RAM, disque, activité réseau, utilisateurs connectés…).\
      \n\n * Machine 2 – Serveur de supervision (Backend + Interface Web) : héberge une application Flask qui reçoit les données de l’agent via des requêtes HTTP sécurisées, les stocke dans SQLite et RRDTool, puis les affiche sous forme de graphiques dynamiques avec Chart.js.\
      \n\nLe tableau de bord permet de visualiser en temps réel les métriques, de consulter l’historique des performances et de recevoir des alertes automatiques en cas d’anomalie (surcharge CPU, mémoire saturée, disque plein ou inactivité prolongée).",

    longDescriptionEn:
      "EasyMonitor is a distributed system monitoring tool developed during the Operating Systems Administration module. It enables remote supervision of multiple servers or virtual machines by collecting and centralizing system metrics on a unified web interface.\
      \n\nThe project is based on two interconnected virtual machines:\
      \n\n * Machine 1 – Data Agent (Client): runs Bash and Python scripts to collect key system metrics (CPU, RAM, disk usage, network activity, connected users…).\
      \n\n * Machine 2 – Supervision Server (Backend + Web UI): hosts a Flask application receiving data via secured HTTP requests, storing them in SQLite and RRDTool, and visualizing them through interactive Chart.js graphs.\
      \n\nThe dashboard provides real-time visualization of performance data, historical tracking, and automatic alerts for anomalies such as CPU overload, memory saturation, full disks, or inactivity.",



    featuresFr: [
      "Connexion sécurisée agent ↔ serveur via HTTP",
      "Collecte automatisée des indicateurs système (CPU, RAM, disque, réseau)",
      "Visualisation en temps réel et historique via Chart.js",
      "Alertes automatiques (CPU, mémoire, inactivité)",
      "Dashboard multi-machines (Vue synthétique et détaillée)"
    ],

    featuresEn: [
      "Secured agent ↔ server communication over HTTP",
      "Automated collection of system metrics (CPU, RAM, disk, network)",
      "Real-time and historical visualization using Chart.js",
      "Automatic alerts (CPU, memory, inactivity)",
      "Multi-host dashboard with detailed and global view"
    ],

    challengesFr: [
      "Configurer la communication réseau entre deux VM interconnectées",
      "Sécuriser les échanges et authentifier les agents",
      "Optimiser la fréquence de collecte pour éviter toute surcharge système",
      "Mettre à jour les graphiques et alertes en temps réel"
    ],

    challengesEn: [
      "Establishing secure inter-VM communication",
      "Authenticating agents and securing data transmission",
      "Optimizing collection frequency to prevent system overload",
      "Updating charts and alerts in real time"
    ],

    tech: ['Bash', 'Python', 'Flask', 'SQLite', 'RRDTool', 'Chart.js', 'VirtualBox', 'HTTP Requests'],
    image: '/images/projects/easymonitor.jpg',
    galleryImages: [
      '/images/projects/easymonitor1.jpg',
      '/images/projects/easymonitor2.jpg',
      '/images/projects/easymonitor3.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/EasyMonitor'
  },

  {
    id: 'luna-perla',
    title: 'Luna Perla',
    titleEn: 'Luna Perla',
    descriptionFr:
      "Site e-commerce de bijoux avec vitrine moderne et Back Office complet (produits, commandes, utilisateurs, FAQ).",
    descriptionEn:
      'Jewelry e-commerce with a modern storefront and a full Admin Back Office (products, orders, users, FAQ).',

    // Paragraphes -> s’affichent avec un bel espacement grâce à renderLong
    longDescriptionFr: [
      "Luna Perla est une boutique en ligne de bijoux personnalisés conçue pour offrir une expérience fluide : navigation par catégories, fiches détaillées, panier et passage de commande sécurisé.",
      "Côté utilisateur (Front Office), on retrouve une page d’accueil mettant en avant nouveautés et best-sellers, un catalogue filtrable (colliers, bagues, bracelets…), des fiches produits riches (photos, description), un panier avec gestion des quantités, un checkout et un espace client (profil + historique de commandes).",
      "Côté administrateur (Back Office), un tableau de bord centralise la gestion : CRUD produits (images, prix, stock, catégories), suivi des commandes et des clients, gestion des comptes/roles et des FAQ.",
      "Le projet est développé from scratch (sans framework PHP), avec PostgreSQL pour la persistance, une structure MVC légère (Model / Control / Templates) et des considérations de sécurité (sessions, contrôle d’accès, validation serveur)."
    ],
    longDescriptionEn: [
      "Luna Perla is a custom-jewelry online store built for a smooth UX: category browsing, rich product pages, cart, and secure checkout.",
      "On the user side (Front Office), it provides a home page highlighting new and best-selling items, a filterable catalog (necklaces, rings, bracelets, etc.), detailed product pages (photos, description), a cart with quantity management, checkout, and a customer area (profile + order history).",
      "On the admin side (Back Office), a dashboard handles everything: product CRUD (images, price, stock, categories), order/customer tracking, user/role management, and a simple FAQ module.",
      "The app is built from scratch (no PHP framework), uses PostgreSQL for persistence, follows a lightweight MVC structure (Model / Control / Templates), and enforces basic security (sessions, access control, server-side validation)."
    ],

    featuresFr: [
      "Catalogue avec filtres (catégories, tri, prix)",
      "Fiches produits détaillées (photos, description, stock)",
      "Panier avec gestion des quantités",
      "Passage de commande / checkout",
      "Espace client (profil, historique de commandes)",
      "Authentification (connexion/inscription)",
      "Back Office: CRUD produits, suivi commandes, gestion utilisateurs",
      "Gestion des FAQ côté Admin",
      "Structure MVC légère (Model / Control / Templates)"
    ],
    featuresEn: [
      "Catalog with filters (categories, sort, price)",
      "Rich product pages (photos, description, stock)",
      "Cart with quantity management",
      "Checkout / order placement",
      "Customer area (profile, order history)",
      "Authentication (login/register)",
      "Admin: product CRUD, order tracking, user management",
      "Admin FAQ management",
      "Lightweight MVC (Model / Control / Templates)"
    ],

    challengesFr: [
      "Concevoir une structure MVC claire sans framework",
      "Paginer/filtrer le catalogue sans impacter les performances",
      "Sécuriser sessions, formulaires et contrôles d’accès",
      "Gérer le cycle de vie des commandes (statuts, stocks)"
    ],
    challengesEn: [
      "Designing a clear MVC structure without a framework",
      "Catalog pagination/filtering with good performance",
      "Securing sessions, forms and access control",
      "Handling the full order lifecycle (statuses, stock)"
    ],

    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Apache'],
    image: '/images/projects/luna-perla.jpg',
    galleryImages: [
      '/images/projects/luna-perla1.jpg',
      '/images/projects/luna-perla2.jpg',
      '/images/projects/luna-perla3.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/Luna_Perla'
  },

  {
    id: 'mon-compilateur',
    title: 'MonCompilateur',
    titleEn: 'MyCompiler',
    descriptionFr:
      "Mini-compilateur en C++ traduisant un langage Pascal simplifié en assembleur x86_64, puis en exécutable ELF.",
    descriptionEn:
      "Mini compiler written in C++ translating a simplified Pascal subset into x86_64 assembly and ELF executable.",

    longDescriptionFr: [
      "MonCompilateur est un projet universitaire visant à concevoir un mini-compilateur capable de traduire un sous-ensemble du langage Pascal en assembleur x86_64, puis de générer un exécutable ELF exécutable sur Linux.",
      "Le compilateur suit une chaîne complète : analyse lexicale (Flex), analyse syntaxique (Bison), construction d’un arbre de syntaxe abstraite (AST), vérification sémantique et génération du code assembleur. Le code produit est ensuite lié via GCC pour obtenir un binaire exécutable.",
      "Chaque étape du projet a été développée dans le cadre d’un TP progressif, ajoutant de nouvelles fonctionnalités au compilateur : opérations arithmétiques, gestion des variables, conditions, boucles, vérification des types, et affichage (DISPLAY).",
      "Le projet met l’accent sur la rigueur du typage, la détection des erreurs lexicales/syntaxiques et le respect des conventions d’appel x86_64 (printf, gestion de pile, etc.)."
    ],
    longDescriptionEn: [
      "MyCompiler is an academic project designed to build a mini-compiler that translates a simplified subset of Pascal into x86_64 assembly and then into an ELF executable running on Linux.",
      "The compiler performs the full compilation pipeline: lexical analysis (Flex), syntax analysis (Bison), abstract syntax tree (AST) construction, semantic checking, and assembly code generation. The output is linked through GCC to produce an executable binary.",
      "Each step was developed incrementally through a series of labs (TPs), adding new language features such as arithmetic operations, variable management, control flow (IF, WHILE, FOR), type checking, and output via DISPLAY.",
      "The project emphasizes strong type verification, syntax/lexical error detection, and compliance with the x86_64 calling convention for system functions like printf."
    ],

    featuresFr: [
      "Analyse lexicale avec Flex et analyse syntaxique avec Bison",
      "Construction d’un AST et vérification sémantique",
      "Gestion des variables, comparateurs, boucles et conditions",
      "Génération de code assembleur x86_64 conforme à GCC",
      "Création automatique d’exécutables ELF via la chaîne de compilation",
      "Instruction DISPLAY et typage fort (entiers, booléens)",
      "Débogage possible via DDD"
    ],
    featuresEn: [
      "Lexical analysis using Flex and syntax analysis using Bison",
      "AST construction and semantic validation",
      "Variable, comparator, loop and condition handling",
      "x86_64 assembly generation compatible with GCC",
      "Automatic ELF executable generation",
      "DISPLAY instruction and strong typing (integers, booleans)",
      "Debugging support through DDD"
    ],

    challengesFr: [
      "Implémenter un analyseur syntaxique robuste avec Bison",
      "Gérer les priorités d’opérateurs et la construction de l’AST",
      "Maintenir la cohérence du typage dans toutes les expressions",
      "Produire un assembleur fonctionnel selon la convention x86_64"
    ],
    challengesEn: [
      "Implementing a robust parser with Bison",
      "Managing operator precedence and AST construction",
      "Maintaining consistent type checking across expressions",
      "Producing working assembly under the x86_64 calling convention"
    ],

    tech: ['C++', 'Lex/Flex', 'Yacc/Bison', 'x86_64 Assembly', 'Makefile', 'GCC'],
    image: '/images/projects/mon-compilateur.jpg',
    galleryImages: [
      '/images/projects/mon-compilateur1.jpg',
      '/images/projects/mon-compilateur2.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/MonCompilateur'
  },

    {
    id: 'netmarket',
    title: 'NetMarket',
    titleEn: 'NetMarket',
    descriptionFr:
      "Application de gestion de supérette avec interface JavaFX, base PostgreSQL et architecture MVC.",
    descriptionEn:
      "Convenience store management app with JavaFX interface, PostgreSQL database, and MVC architecture.",

    longDescriptionFr: [
      "NetMarket est une application complète de gestion de supérette développée en Java. Elle permet de gérer les fournisseurs, les produits, les ventes, les achats et les contrats de manière centralisée et efficace.",
      "Le projet combine une interface graphique intuitive construite avec JavaFX et une base de données PostgreSQL robuste pour la persistance des données. L’application repose sur une architecture MVC (Modèle-Vue-Contrôleur) garantissant une bonne séparation des responsabilités.",
      "Côté utilisateur, NetMarket offre des fonctionnalités de gestion des produits (ajout, modification, suppression), de suivi des stocks et des ventes, d’affichage des statistiques et d’exportation des données (CSV/PDF).",
      "Côté technique, l’accent est mis sur la validation des saisies, la modularité du code, la connexion sécurisée à PostgreSQL et une interface JavaFX ergonomique permettant de naviguer facilement entre les modules de gestion."
    ],
    longDescriptionEn: [
      "NetMarket is a full-featured convenience store management application developed in Java. It manages suppliers, products, sales, purchases, and contracts efficiently from a centralized interface.",
      "The project combines an intuitive JavaFX graphical interface with a robust PostgreSQL database for data persistence. It follows an MVC (Model-View-Controller) architecture ensuring clean separation of concerns.",
      "On the user side, NetMarket provides product management (add, edit, delete), inventory and sales tracking, statistics visualization, and data export to CSV/PDF formats.",
      "Technically, it emphasizes input validation, code modularity, secure PostgreSQL connectivity, and a user-friendly JavaFX interface allowing smooth navigation between management modules."
    ],

    featuresFr: [
      "Gestion complète des produits, fournisseurs, ventes et achats",
      "CRUD et affichage structuré des données PostgreSQL",
      "Interface graphique moderne avec JavaFX",
      "Architecture MVC claire (Model / View / Controller)",
      "Validation des entrées et messages d’erreur interactifs",
      "Exports de données (CSV / PDF)",
      "Visualisation des statistiques commerciales"
    ],
    featuresEn: [
      "Full management of products, suppliers, sales and purchases",
      "CRUD operations and structured PostgreSQL data display",
      "Modern JavaFX graphical interface",
      "Clear MVC architecture (Model / View / Controller)",
      "Input validation and interactive error handling",
      "Data export (CSV / PDF)",
      "Sales statistics visualization"
    ],

    challengesFr: [
      "Concevoir une interface JavaFX ergonomique et réactive",
      "Assurer la cohérence entre les vues et le modèle PostgreSQL",
      "Implémenter la persistance avec gestion des erreurs SQL",
      "Structurer le code selon le modèle MVC complet"
    ],
    challengesEn: [
      "Designing an ergonomic and responsive JavaFX interface",
      "Maintaining synchronization between UI and PostgreSQL model",
      "Implementing data persistence with SQL error handling",
      "Structuring code following full MVC design pattern"
    ],

    tech: ['Java', 'JavaFX', 'PostgreSQL', 'MVC', 'IntelliJ IDEA'],
    image: '/images/projects/netmarket.jpg',
    galleryImages: [
      '/images/projects/netmarket1.jpg',
      '/images/projects/netmarket2.jpg',
      '/images/projects/netmarket3.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/NetMarket'
  },
    {
    id: 'moteur-recherche',
    title: 'Moteur de Recherche',
    titleEn: 'Search Engine',

    descriptionFr:
      "Moteur de recherche simplifié : analyse de corpus, indexation et classement par pertinence (TF-IDF).",
    descriptionEn:
      "Lightweight search engine: corpus analysis, indexing and TF-IDF ranking.",

    longDescriptionFr:
      [
        "Chaîne complète de recherche d’information : tokenisation/normalisation du texte, construction d’un index inversé et pondération TF-IDF des termes.",
        "Calcul de similarité (cosinus) entre la requête et chaque document, avec classement des résultats et affichage des documents les plus pertinents.",
        "Deux modes de vocabulaire (complet / réduit avec stop-words) et jeux de données interchangeables (Wikipédia, ouvrages)."
      ],
    longDescriptionEn:
      [
        "End-to-end IR pipeline: text tokenization/normalization, inverted index construction and TF-IDF term weighting.",
        "Cosine similarity between the query and documents, ranked results with the most relevant items on top.",
        "Two vocabulary modes (full / reduced with stop-words) and pluggable datasets (Wikipedia, books)."
      ],

    featuresFr: [
      'Index inversé efficace (terme → liste de documents)',
      'TF-IDF + similarité cosinus',
      'Nettoyage/normalisation (casse, ponctuation, stop-words)',
      'Vocabulaire complet ou réduit',
      'Requêtes texte + top-K résultats',
      'Statistiques corpus (tailles, fréquences)'
    ],
    featuresEn: [
      'Efficient inverted index (term → posting list)',
      'TF-IDF + cosine similarity',
      'Text cleaning/normalization (case, punctuation, stop-words)',
      'Full or reduced vocabulary',
      'Text queries + top-K results',
      'Corpus stats (sizes, frequencies)'
    ],

    challengesFr: [
      "Choix d’un schéma de normalisation robuste (accentuation, ponctuation, casse).",
      "Équilibrer précision/performances dans le calcul TF-IDF et le parcours des listes d’index.",
      "Concevoir une API claire pour brancher facilement de nouvelles sources de corpus."
    ],
    challengesEn: [
      "Designing a robust normalization pipeline (diacritics, punctuation, casing).",
      "Balancing precision/performance in TF-IDF computation and posting-list traversal.",
      "Providing a clean API to plug new corpus sources easily."
    ],

    tech: ['Java'],
    image: '/images/projects/moteur-recherche.jpg',
    galleryImages: [
      '/images/projects/moteur-recherche1.jpg',
      '/images/projects/moteur-recherche2.jpg',
      '/images/projects/moteur-recherche3.jpg',
      '/images/projects/moteur-recherche4.jpg',
    ],
    githubUrl: 'https://github.com/malekghabi607/MoteurRecherche'
  },

  {
    id: 'task-manager',
    title: 'Task Manager',
    descriptionFr:
      'Application web de gestion de tâches avec authentification, CRUD et filtrage.',
    descriptionEn:
      'Task management web app with auth, CRUD and filtering.',
    longDescriptionFr:
      "API Spring Boot (JWT), persistance PostgreSQL/MySQL, front responsive, tri/filtre, recherche plein-texte, et rôles utilisateur.",
    longDescriptionEn:
      'Spring Boot API (JWT), PostgreSQL/MySQL persistence, responsive UI, sort/filter, full-text search, user roles.',
    featuresFr: [
      'Auth JWT (inscription/connexion)',
      'CRUD tâches + tags',
      'Filtres, tri, recherche',
      'UI responsive'
    ],
    featuresEn: [
      'JWT auth (signup/login)',
      'Task CRUD + tags',
      'Filters, sort, search',
      'Responsive UI'
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL'],
    image: '/images/projects/task-manager.jpg',
    galleryImages: ['/images/projects/task-manager1.jpg'],
    githubUrl: 'https://github.com/malekghabi607/TaskManager'
  },

  {
    id: 'hotel-reservation',
    title: 'Hôtel Reservation Site',
    titleEn: 'Hotel Reservation Site',

    descriptionFr:
      "Site web complet de réservation d’hôtel avec gestion des chambres, des réservations et un espace administrateur.",
    descriptionEn:
      "Full-featured hotel booking website with room management, booking system, and admin dashboard.",

    longDescriptionFr: [
      "Application web permettant aux utilisateurs de rechercher, consulter et réserver des chambres en ligne selon leurs dates de séjour et préférences.",
      "Chaque chambre possède une page détaillée avec photos, description, prix et disponibilité. Le back-office permet aux administrateurs de gérer les réservations, les chambres et les clients.",
      "Le site intègre des éléments multimédias (images, vidéos de présentation) et un design responsive optimisé pour tous les supports (ordinateur, tablette, mobile)."
    ],
    longDescriptionEn: [
      "Web application allowing users to search, view, and book rooms online according to stay dates and preferences.",
      "Each room includes a detailed page with photos, description, price, and availability. The back-office enables administrators to manage bookings, rooms, and customers.",
      "The site includes rich media (images, presentation videos) and a responsive design optimized for all devices (desktop, tablet, mobile)."
    ],

    featuresFr: [
      'Réservation en ligne intuitive',
      'Gestion des chambres et disponibilités',
      'Espace administrateur pour la gestion des réservations',
      'Pages détaillées avec images et vidéos',
      'Design responsive et moderne'
    ],
    featuresEn: [
      'Intuitive online booking',
      'Room and availability management',
      'Admin dashboard for reservation control',
      'Detailed pages with images and videos',
      'Modern responsive design'
    ],

    challengesFr: [
      "Mise en place d’un système de réservation fiable avec vérification des disponibilités en temps réel.",
      "Création d’un back-office ergonomique pour simplifier la gestion des chambres et des clients.",
      "Optimisation du front-end pour assurer une expérience fluide sur tous les appareils."
    ],
    challengesEn: [
      "Building a reliable booking system with real-time availability checks.",
      "Designing a user-friendly admin dashboard for room and client management.",
      "Optimizing front-end responsiveness for a smooth experience across devices."
    ],

    tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    image: '/images/projects/hotel-reservation.jpg',
    galleryImages: [
      '/images/projects/hotel-reservation1.jpg',
      '/images/projects/hotel-reservation2.jpg',
      '/images/projects/hotel-reservation3.jpg',
      '/images/projects/hotel-reservation4.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/Hotel-reservation-site'
  },

    {
    id: 'labyrinthe',
    title: 'Labyrinthe',
    titleEn: 'Maze',

    descriptionFr:
      "Application interactive de génération et résolution de labyrinthes avec exploration manuelle et recherche de chemin optimal.",
    descriptionEn:
      "Interactive maze generator and solver with manual exploration and optimal path search.",

    longDescriptionFr: [
      "Projet académique réalisé en L1 Informatique visant à créer un labyrinthe parfait généré de manière aléatoire à partir d’une grille rectangulaire p × q.",
      "Le programme permet une exploration manuelle via les flèches directionnelles, ainsi qu’une résolution automatique grâce à un algorithme de parcours en profondeur (DFS).",
      "L’affichage est réalisé en mode texte à l’aide de la bibliothèque ncurses, offrant une visualisation claire du labyrinthe, du chemin exploré et des solutions possibles."
    ],
    longDescriptionEn: [
      "Academic project developed during the first year of Computer Science to generate and solve perfect mazes randomly built from a rectangular grid (p × q).",
      "The program supports both manual navigation using arrow keys and automatic solving via a Depth-First Search (DFS) algorithm.",
      "Display is handled in text mode through the ncurses library, providing clear visualization of the maze, the explored path, and possible solutions."
    ],

    featuresFr: [
      'Génération de labyrinthes parfaits (DFS / Prim)',
      'Résolution automatique (A*, Dijkstra, DFS)',
      'Mode manuel interactif (flèches directionnelles)',
      'Affichage textuel via ncurses',
      'Exploration visuelle du chemin et des solutions'
    ],
    featuresEn: [
      'Perfect maze generation (DFS / Prim)',
      'Automatic solving (A*, Dijkstra, DFS)',
      'Interactive manual mode (arrow keys)',
      'Text-based display using ncurses',
      'Visual exploration of path and solutions'
    ],

    challengesFr: [
      "Concevoir une structure de données efficace pour représenter le labyrinthe et gérer les connexions entre cases.",
      "Intégrer la bibliothèque ncurses pour un affichage fluide et interactif.",
      "Optimiser la génération et la résolution afin d’éviter les boucles infinies et garantir un labyrinthe parfait."
    ],
    challengesEn: [
      "Designing an efficient data structure to represent maze cells and connections.",
      "Integrating ncurses library for smooth and interactive visualization.",
      "Optimizing generation and solving algorithms to avoid infinite loops and ensure perfect maze structure."
    ],

    tech: ['C++', 'C', 'ncurses'],
    image: '/images/projects/labyrinthe.jpg',
    galleryImages: [
      '/images/projects/labyrinthe1.jpg',
      '/images/projects/labyrinthe2.jpg',
      '/images/projects/labyrinthe3.jpg',
      '/images/projects/labyrinthe4.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/Labyrinthe'
  },

  {
    id: 'morpion-minmax',
    title: 'Morpion MinMax',
    titleEn: 'Tic-Tac-Toe MinMax',

    descriptionFr:
      "Jeu du morpion en console intégrant une intelligence artificielle basée sur l’algorithme Min-Max pour affronter un joueur humain.",
    descriptionEn:
      "Console-based Tic-Tac-Toe game with an AI powered by the Min-Max algorithm to challenge a human player.",

    longDescriptionFr: [
      "Projet en C++ consistant à développer le célèbre jeu du morpion (Tic-Tac-Toe) jouable en mode console, avec une IA stratégique reposant sur l’algorithme Min-Max.",
      "L’intelligence artificielle analyse récursivement toutes les configurations possibles du plateau afin de choisir le coup optimal, garantissant une partie imbattable en mode parfait.",
      "Le joueur peut affronter l’ordinateur ou un autre joueur humain. Le programme comprend une gestion automatique des tours, une détection des victoires et des égalités, ainsi qu’une difficulté ajustable en limitant la profondeur de recherche."
    ],
    longDescriptionEn: [
      "C++ project implementing the classic Tic-Tac-Toe game in console mode, featuring a strategic AI based on the Min-Max algorithm.",
      "The AI recursively evaluates all possible board configurations to choose the optimal move, ensuring unbeatable play in perfect mode.",
      "Players can compete against the computer or another human. The program handles turn management, win/draw detection, and adjustable difficulty via search depth limitation."
    ],

    featuresFr: [
      'IA stratégique basée sur Min-Max',
      'Mode 1v1 humain ou IA',
      'Difficulté ajustable (profondeur de recherche)',
      'Arbitrage automatique (victoire, match nul)',
      'Affichage clair du plateau en console'
    ],
    featuresEn: [
      'Strategic AI using Min-Max',
      '1v1 Human or AI mode',
      'Adjustable difficulty (search depth)',
      'Automatic win/draw detection',
      'Clean console board display'
    ],

    challengesFr: [
      "Optimiser la fonction d’évaluation pour équilibrer performance et intelligence de l’IA.",
      "Limiter la profondeur de recherche pour éviter une explosion combinatoire.",
      "Garantir un affichage lisible et fluide en console malgré les mises à jour du plateau."
    ],
    challengesEn: [
      "Optimize the evaluation function to balance performance and AI strength.",
      "Limit the search depth to avoid combinatorial explosion.",
      "Ensure clear and responsive console display during gameplay updates."
    ],

    tech: ['C++'],
    image: '/images/projects/morpion-minmax.jpg',
    galleryImages: [
      '/images/projects/morpion-minmax1.jpg',
      '/images/projects/morpion-minmax2.jpg',
      '/images/projects/morpion-minmax3.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/Morpion_MinMax'
    },
    {
    id: 'carte-routiere',
    title: 'Carte Routière',
    titleEn: 'Road Network',

    descriptionFr:
      "Application de modélisation et d’analyse de réseaux routiers sous forme de graphe : gestion des nœuds, arcs et recherche de chemins optimaux.",
    descriptionEn:
      "Road network modeling and analysis app using graph structures: node and edge management with optimal path search.",

    longDescriptionFr: [
      "Projet de Licence 2 en Algorithmique Avancée et Graphes visant à concevoir une application de gestion d’un réseau routier modélisé sous forme de graphe.",
      "Chaque nœud représente une localisation géographique (coordonnées x/y) et chaque arc une route reliant deux localisations, avec longueur, sens de circulation et nom de rue.",
      "Le programme permet de charger des fichiers CSV (nœuds et arcs), d’afficher et manipuler le graphe, de calculer les degrés des nœuds, et de rechercher des chemins entre deux points à l’aide des algorithmes DFS et BFS."
    ],
    longDescriptionEn: [
      "Second-year Computer Science project in Advanced Algorithms and Graph Theory aimed at building a road network management application modeled as a graph.",
      "Each node represents a geographic location (x/y coordinates) and each edge a road connecting two locations, with length, directionality, and street name.",
      "The program can load CSV files (nodes and edges), visualize and manipulate the graph, compute node degrees, and find paths between two locations using DFS and BFS algorithms."
    ],

    featuresFr: [
      'Chargement des nœuds et arcs depuis des fichiers CSV',
      'Ajout, suppression et recherche de nœuds ou d’arcs',
      'Calcul du degré des nœuds',
      'Recherche de chemin via DFS/BFS',
      'Détermination du plus court chemin (en nombre d’arcs)',
      'Itinéraire entre deux rues'
    ],
    featuresEn: [
      'Load nodes and edges from CSV files',
      'Add, delete and search nodes or edges',
      'Compute node degree',
      'Path search using DFS/BFS',
      'Shortest path determination (by edge count)',
      'Street-to-street itinerary search'
    ],

    challengesFr: [
      "Conception d’une structure de graphe efficace (listes d’adjacence).",
      "Gestion robuste du chargement de données CSV volumineuses.",
      "Implémentation des algorithmes DFS/BFS pour la recherche de chemins.",
      "Affichage et mise à jour dynamique des degrés et connexions des nœuds."
    ],
    challengesEn: [
      "Designing an efficient graph structure (adjacency lists).",
      "Handling large CSV data imports robustly.",
      "Implementing DFS/BFS algorithms for path search.",
      "Dynamic display and update of node degrees and connections."
    ],

    tech: ['C++', 'STL', 'Graph Theory'],
    image: '/images/projects/carte-routiere.jpg',
    galleryImages: [
      '/images/projects/carte-routiere1.jpg',
      '/images/projects/carte-routiere2.jpg',
      '/images/projects/carte-routiere3.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/CarteRoutiere'
  },
  {
    id: 'expression-arithmetique',
    title: 'Expression Arithmétique',
    titleEn: 'Arithmetic Expression',

    descriptionFr:
      "Projet POO en C++ permettant de manipuler, transformer et dériver des expressions arithmétiques à l’aide d’arbres binaires et de notations infixe/suffixée.",
    descriptionEn:
      "OOP project in C++ to manipulate, transform, and derive arithmetic expressions using binary trees and infix/postfix notations.",

    longDescriptionFr: [
      "Projet de Programmation Orientée Objet (POO) réalisé en C++ portant sur la manipulation et l’évaluation d’expressions arithmétiques.",
      "Le programme permet d’évaluer des expressions postfixées, de convertir des expressions infixes vers la notation suffixée, de construire et afficher des arbres binaires, ainsi que de calculer la dérivée symbolique d’une expression contenant une variable (X).",
      "Chaque module (exo_1 à exo_4) aborde une étape clé : calcul, conversion, représentation et dérivation — avec une interface claire en console et un affichage hiérarchique de l’arbre syntaxique."
    ],
    longDescriptionEn: [
      "Object-Oriented Programming (OOP) project in C++ focused on arithmetic expression manipulation and evaluation.",
      "The program supports evaluation of postfix expressions, conversion from infix to postfix notation, binary tree construction and visualization, and symbolic differentiation of expressions containing a variable (X).",
      "Each module (exo_1 to exo_4) covers a core concept: computation, conversion, representation, and differentiation — with a clean console interface and hierarchical syntax tree visualization."
    ],

    featuresFr: [
      "Évaluation d’expressions suffixées (postfixées)",
      "Conversion infixe → suffixée",
      "Construction et affichage d’arbres binaires",
      "Calcul de la dérivée symbolique",
      "Affichage hiérarchique de l’arbre syntaxique"
    ],
    featuresEn: [
      "Postfix (suffix) expression evaluation",
      "Infix → postfix conversion",
      "Binary tree construction and display",
      "Symbolic differentiation",
      "Hierarchical syntax tree visualization"
    ],

    challengesFr: [
      "Gérer la priorité des opérateurs lors de la conversion infixe/suffixée.",
      "Implémenter une structure récursive d’arbre binaire pour représenter les expressions.",
      "Assurer la cohérence entre dérivation, affichage et évaluation des résultats."
    ],
    challengesEn: [
      "Handle operator precedence during infix/postfix conversion.",
      "Implement a recursive binary tree structure to represent expressions.",
      "Ensure consistency between differentiation, display, and evaluation results."
    ],

    tech: ['C++', 'POO', 'Structures de données', 'Algorithmes'],
    image: '/images/projects/expression-arithmetique.jpg',
    galleryImages: [
      '/images/projects/expression-arithmetique1.jpg',
      '/images/projects/expression-arithmetique2.jpg',
      '/images/projects/expression-arithmetique3.jpg'
    ],
    githubUrl: 'https://github.com/malekghabi1607/Expression-arithmetique'
  },
  {
  id: 'snake-ia',
  title: 'Snake IA – 24h_pour_coder',
  titleEn: 'Snake AI – 24h_to_code',

  descriptionFr:
    "Version avancée du jeu Snake développée en 24h, intégrant une intelligence artificielle adaptative avec pathfinding et apprentissage automatique.",
  descriptionEn:
    "Advanced version of the Snake game developed in 24 hours, featuring adaptive AI with pathfinding and reinforcement learning.",

  longDescriptionFr: [
    "Projet réalisé dans le cadre du hackathon étudiant *24h pour coder*, dont le défi consistait à revisiter le jeu classique Snake en y intégrant des mécanismes d’intelligence artificielle avancés.",
    "Le joueur doit collecter des points intelligents qui fuient tout en évitant une Bête IA, un ennemi évolutif dont le comportement s’adapte dynamiquement à celui du joueur.",
    "Le jeu combine plusieurs algorithmes : A* pour la recherche de chemin optimal, Boïds pour les comportements de groupe naturels, et Q-Learning pour un apprentissage progressif de l’IA au fil des parties."
  ],
  longDescriptionEn: [
    "Project developed during the student hackathon *24h to code*, where the challenge was to reinvent the classic Snake game by integrating advanced AI mechanics.",
    "The player must collect escaping smart points while avoiding an evolving AI Beast whose behavior dynamically adapts to the player's strategy.",
    "The game combines multiple algorithms: A* for optimal pathfinding, Boids for natural group behavior, and Q-Learning for reinforcement-based AI evolution."
  ],

  featuresFr: [
    'Points intelligents qui fuient le Snake',
    'Bête IA évolutive et adaptative',
    'Pathfinding avec A*',
    'Comportement collaboratif via l’algorithme des Boïds',
    'Apprentissage par renforcement (Q-Learning)',
    'Score en temps réel et interface fluide en Canvas'
  ],
  featuresEn: [
    'Smart points that flee from the Snake',
    'Evolving and adaptive AI Beast',
    'Pathfinding with A*',
    'Collaborative behavior via Boids algorithm',
    'Reinforcement learning (Q-Learning)',
    'Real-time scoring and smooth Canvas interface'
  ],

  challengesFr: [
    "Implémenter un système d’IA capable d’adaptation en temps réel.",
    "Coordonner plusieurs algorithmes (A*, Boïds, Q-Learning) sans perte de performance.",
    "Concevoir une interface fluide et réactive en Canvas malgré la complexité algorithmique."
  ],
  challengesEn: [
    "Implementing a real-time adaptive AI system.",
    "Combining multiple algorithms (A*, Boids, Q-Learning) without performance loss.",
    "Designing a smooth and responsive Canvas interface despite algorithmic complexity."
  ],

  tech: ['JavaScript', 'HTML5 Canvas', 'A*', 'Boids', 'Q-Learning'],
  image: '/images/projects/snake-ia.jpg',
  galleryImages: [
    '/images/projects/snake-ia1.jpg',
    '/images/projects/snake-ia2.jpg'
  ],
  githubUrl: 'https://github.com/malekghabi1607/24h_pour_coder'
}















];