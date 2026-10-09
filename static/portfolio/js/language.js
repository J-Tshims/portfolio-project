// Traduit les textes fixes du portfolio sans modifier les noms techniques.
document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        fr: {
            language_label: 'Choisir la langue',
            nav_home: 'Accueil',
            nav_about: 'À propos',
            nav_skills: 'Compétences',
            nav_projects: 'Projets',
            nav_journey: 'Parcours',
            nav_services: 'Services',
            nav_contact: 'Contact',
            nav_cta: 'Me contacter',
            menu_open: 'Ouvrir le menu',
            menu_close: 'Fermer le menu',
            hero_available: 'Disponible pour de nouveaux projets & opportunités',
            hero_greeting: 'Bonjour, je suis',
            hero_intro: "Je construis des applications modernes, des systèmes backend robustes et j'explore les possibilités de l'intelligence artificielle pour résoudre des problèmes complexes.",
            hero_projects_cta: 'Voir mes projets',
            hero_journey_cta: 'Découvrir mon parcours',
            hero_fast: 'Rapide',
            hero_value_title: "Ce que j'apporte",
            hero_value_hierarchy: 'Une hiérarchie visuelle claire',
            hero_value_backend: 'Backend fiable et lisible',
            hero_value_ai: "AI pensée pour l'usage",
            hero_value_responsive: 'Interfaces adaptées aux écrans',
            hero_value_identity: 'Une identité visuelle cohérente',
            portrait_alt: 'Portrait de Jonathan Tshimbalanga',
            location: 'Kinshasa, DRC',
            about_eyebrow: '// À PROPOS DE MOI',
            about_title: "Architecte de systèmes & passionné d'AI",
            about_subtitle: 'Découvrez qui je suis, ma vision du développement et mes objectifs technologiques.',
            about_code_comment: '# Ma Vision & Philosophie',
            about_code_goal: '"Allier l’ingénierie backend rigoureuse à l’innovation de l’AI pour concevoir des produits à fort impact."',
            about_vision_quote: '"[Votre vision / objectif : Créer des écosystèmes logiciels autonomes et intelligents au service de l’humain.]"',
            about_bio_first: "Bonjour ! Je m'appelle",
            about_bio_second: ', développeur et ingénieur logiciel basé à',
            about_bio_third: ". Passionné par l'architecture backend et les technologies d'intelligence artificielle, je conçois des solutions scalables, performantes et intuitives.",
            about_bio_second_paragraph: "Mon parcours m'a permis d'acquérir une solide maîtrise des environnements distribués, des APIs RESTful hautement sécurisées, ainsi que des modèles de langage (LLMs) et du RAG (Retrieval-Augmented Generation).",
            about_projects_stat: 'Projets réalisés',
            about_technologies_stat: 'Technologies',
            about_certifications_stat: 'Certifications',
            about_experience_stat: 'Années exp.',
            skills_eyebrow: '// EXPERTISE TECHNIQUE',
            skills_title: 'Compétences & Stack Technologique',
            skills_subtitle: "Un aperçu interactif des outils, langages et frameworks que j'utilise ou apprends.",
            skills_programming_title: 'Programmation',
            skills_programming_desc: 'Fondations et langages',
            skills_backend_desc: 'APIs et robustesse',
            skills_tools_title: 'Outils',
            skills_tools_desc: 'DevOps & gestion des versions',
            skills_learning: 'En apprentissage',
            skills_ai_desc: 'Intelligence Artificielle',
            skills_mathematics: 'Mathématiques',
            projects_eyebrow: '// PORTFOLIO DE RÉALISATIONS',
            projects_title: 'Projets Récents',
            projects_subtitle: 'Explorez mes réalisations majeures en intelligence artificielle et développement backend.',
            projects_filter_all: 'Tous',
            projects_empty: "Aucun projet pour le moment. Ajoute-en un dans l'admin pour le voir ici.",
            journey_eyebrow: '// EXPÉRIENCE & APPRENTISSAGE',
            journey_title: 'Mon Parcours',
            journey_subtitle: "L'évolution de mon parcours professionnel et technique au fil des années.",
            journey_present: "2026 — Aujourd'hui",
            journey_ai_desc: "[Conception d'architectures orientées AI, développement de pipelines backend robustes et intégration de modèles de Deep Learning.]",
            journey_backend_desc: '[Développement et optimisation d’APIs à fort trafic, mise en place de tests automatisés et conteneurisation Docker.]',
            journey_early_title: 'Débuts en Ingénierie Logicielle & Python',
            journey_early_desc: '[Apprentissage approfondi des algorithmes, de la programmation orientée objet en Python et des bases de données relationnelles.]',
            services_eyebrow: '// CE QUE JE PROPOSE',
            services_title: 'Services Professionnels',
            services_subtitle: 'Solutions sur mesure pour vos projets web, backend et intelligence artificielle.',
            service_web_title: 'Développement Web',
            service_web_desc: 'Création d’interfaces web modernes, ultra-rapides et entièrement responsive avec Tailwind CSS et JavaScript.',
            service_backend_desc: 'Conception d’architectures backend robustes, sécurisées et scalables basées sur Python et Django.',
            service_api_title: 'Développement d’API',
            service_api_desc: 'Création d’APIs RESTful performantes et documentées pour alimenter vos applications mobiles et web.',
            service_ai_title: 'Intégration AI',
            service_ai_desc: 'Intégration de LLMs, de systèmes RAG et de modèles de Machine Learning au sein de vos applications existantes.',
            service_apps_title: 'Applications Web',
            service_apps_desc: 'Développement d’applications web interactives de bout en bout, de la base de données à l’interface utilisateur.',
            service_software_title: 'Solutions logicielles',
            service_software_desc: 'Conseil, architecture logicielle, conteneurisation Docker et optimisation des performances de vos systèmes.',
            contact_eyebrow: '// ENTRONS EN CONTACT',
            contact_title: 'Travaillons ensemble',
            contact_subtitle: 'Une opportunité, une question ou un projet ? Envoyez-moi un message !',
            contact_details: 'Coordonnées',
            contact_intro: "Je suis à l'écoute de toute proposition de collaboration ou d'échange autour de la tech et de l'AI.",
            contact_location_label: 'Localisation',
            contact_social: 'Réseaux Sociaux',
            form_name: 'Nom',
            form_name_placeholder: 'Votre nom',
            form_email_placeholder: 'votre@email.com',
            form_subject: 'Sujet',
            form_subject_placeholder: 'Sujet de votre message',
            form_message: 'Message',
            form_message_placeholder: 'Votre message…',
            form_submit: 'Envoyer le message',
            footer_copyright: 'Tous droits réservés. Construit avec passion & AI.',
            toast_title: 'Message envoyé !',
            toast_message: 'Merci, je vous répondrai très rapidement.'
        },
        en: {
            language_label: 'Choose language',
            nav_home: 'Home',
            nav_about: 'About',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_journey: 'Journey',
            nav_services: 'Services',
            nav_contact: 'Contact',
            nav_cta: 'Contact me',
            menu_open: 'Open menu',
            menu_close: 'Close menu',
            hero_available: 'Available for new projects & opportunities',
            hero_greeting: 'Hello, I am',
            hero_intro: 'I build modern applications and robust backend systems, exploring artificial intelligence to solve complex problems.',
            hero_projects_cta: 'View my projects',
            hero_journey_cta: 'Explore my journey',
            hero_fast: 'Fast',
            hero_value_title: 'What I bring',
            hero_value_hierarchy: 'A clear visual hierarchy',
            hero_value_backend: 'Reliable, readable backend systems',
            hero_value_ai: 'AI built for real-world use',
            hero_value_responsive: 'Interfaces for every screen',
            hero_value_identity: 'A consistent visual identity',
            portrait_alt: 'Portrait of Jonathan Tshimbalanga',
            location: 'Kinshasa, DRC',
            about_eyebrow: '// ABOUT ME',
            about_title: 'Systems Architect & AI Enthusiast',
            about_subtitle: 'Get to know me, my approach to development, and my technology goals.',
            about_code_comment: '# My Vision & Philosophy',
            about_code_goal: '"Combining rigorous backend engineering with AI innovation to build high-impact products."',
            about_vision_quote: '"[Your vision / goal: Build autonomous, intelligent software ecosystems that serve people.]"',
            about_bio_first: "Hello! I'm",
            about_bio_second: ', a software developer and engineer based in',
            about_bio_third: '. Passionate about backend architecture and artificial intelligence, I build scalable, high-performance, intuitive solutions.',
            about_bio_second_paragraph: 'My journey has given me a strong command of distributed environments, highly secure RESTful APIs, and language models (LLMs) and RAG (Retrieval-Augmented Generation).',
            about_projects_stat: 'Projects completed',
            about_technologies_stat: 'Technologies',
            about_certifications_stat: 'Certifications',
            about_experience_stat: 'Years of experience',
            skills_eyebrow: '// TECHNICAL EXPERTISE',
            skills_title: 'Skills & Tech Stack',
            skills_subtitle: 'An interactive overview of the tools, languages, and frameworks I use or am learning.',
            skills_programming_title: 'Programming',
            skills_programming_desc: 'Foundations and languages',
            skills_backend_desc: 'APIs and reliability',
            skills_tools_title: 'Tools',
            skills_tools_desc: 'DevOps & Versioning',
            skills_learning: 'Currently learning',
            skills_ai_desc: 'Artificial Intelligence',
            skills_mathematics: 'Mathematics',
            projects_eyebrow: '// SELECTED WORK',
            projects_title: 'Recent Projects',
            projects_subtitle: 'Explore my key projects in artificial intelligence and backend development.',
            projects_filter_all: 'All',
            projects_empty: 'No projects yet. Add one in the admin to display it here.',
            journey_eyebrow: '// EXPERIENCE & LEARNING',
            journey_title: 'My Journey',
            journey_subtitle: 'The evolution of my professional and technical journey over the years.',
            journey_present: '2026 — Present',
            journey_ai_desc: '[Designing AI-oriented architectures, building robust backend pipelines, and integrating Deep Learning models.]',
            journey_backend_desc: '[Developing and optimizing high-traffic APIs, setting up automated tests, and containerizing with Docker.]',
            journey_early_title: 'Early Career in Software Engineering & Python',
            journey_early_desc: '[In-depth study of algorithms, object-oriented programming in Python, and relational databases.]',
            services_eyebrow: '// WHAT I OFFER',
            services_title: 'Professional Services',
            services_subtitle: 'Tailored solutions for your web, backend, and artificial intelligence projects.',
            service_web_title: 'Web Development',
            service_web_desc: 'Building modern, fast, fully responsive web interfaces with Tailwind CSS and JavaScript.',
            service_backend_desc: 'Designing robust, secure, scalable backend architectures with Python and Django.',
            service_api_title: 'API Development',
            service_api_desc: 'Building high-performance, well-documented RESTful APIs for mobile and web applications.',
            service_ai_title: 'AI Integration',
            service_ai_desc: 'Integrating LLMs, RAG systems, and Machine Learning models into existing applications.',
            service_apps_title: 'Web Applications',
            service_apps_desc: 'Building interactive web applications end to end, from the database to the user interface.',
            service_software_title: 'Software Solutions',
            service_software_desc: 'Consulting, software architecture, Docker containerization, and system performance optimization.',
            contact_eyebrow: '// GET IN TOUCH',
            contact_title: "Let's work together",
            contact_subtitle: 'Have an opportunity, a question, or a project? Send me a message!',
            contact_details: 'Contact details',
            contact_intro: "I'm open to collaboration and conversations about technology and AI.",
            contact_location_label: 'Location',
            contact_social: 'Social media',
            form_name: 'Name',
            form_name_placeholder: 'Your name',
            form_email_placeholder: 'you@example.com',
            form_subject: 'Subject',
            form_subject_placeholder: 'Message subject',
            form_message: 'Message',
            form_message_placeholder: 'Your message…',
            form_submit: 'Send message',
            footer_copyright: 'All rights reserved. Built with passion & AI.',
            toast_title: 'Message sent!',
            toast_message: "Thank you. I'll get back to you soon."
        }
    };

    const projectDescriptions = {
        'CineMatch (Recommendation System)': {
            fr: 'Une plateforme de films fictive qui recommande des films personnalisés selon les genres préférés et les notes des utilisateurs.'
        },
        'VisionWeb (Image Classification)': {
            fr: 'Une application web interactive qui permet de téléverser une photo. Un modèle d’AI (Computer Vision) l’analyse pour reconnaître automatiquement son contenu.'
        },
        'MoodAI (Sentiment Analyzer)': {
            fr: 'Une application web où les utilisateurs peuvent écrire un message ou un avis. Un modèle d’AI analyse le texte pour déterminer s’il est positif, négatif ou neutre.'
        },
        Portfolio: {
            fr: 'Un portfolio personnel créé avec Django, présentant mes projets de programmation et mon parcours pour devenir AI Software Engineer.'
        }
    };

    function setLanguage(language) {
        const messages = translations[language] || translations.fr;
        document.documentElement.lang = language;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const message = messages[element.dataset.i18n];
            if (message) element.textContent = message;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const message = messages[element.dataset.i18nPlaceholder];
            if (message) element.setAttribute('placeholder', message);
        });

        document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
            const message = messages[element.dataset.i18nAlt];
            if (message) element.setAttribute('alt', message);
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
            const message = messages[element.dataset.i18nAriaLabel];
            if (message) element.setAttribute('aria-label', message);
        });

        document.querySelectorAll('[data-project-copy]').forEach((element) => {
            const projectTitle = element.dataset.projectCopy;
            const translatedDescription = projectDescriptions[projectTitle]?.[language];
            element.textContent = translatedDescription || element.dataset.projectDefault;
        });

        const menuButton = document.getElementById('mobileMenuBtn');
        if (menuButton) {
            const menuKey = menuButton.getAttribute('aria-expanded') === 'true' ? 'menu_close' : 'menu_open';
            menuButton.setAttribute('aria-label', messages[menuKey]);
        }

        document.querySelectorAll('[data-language]').forEach((button) => {
            const isSelected = button.dataset.language === language;
            button.setAttribute('aria-pressed', String(isSelected));
            button.classList.toggle('bg-white/10', isSelected);
            button.classList.toggle('text-white', isSelected);
            button.classList.toggle('text-slate-400', !isSelected);
        });
    }

    document.querySelectorAll('[data-language]').forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.language));
    });

    setLanguage('fr');
});