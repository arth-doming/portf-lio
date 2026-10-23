// Traduções do site.
// O português fica direto no index.html; aqui ficam só os textos em inglês.
// Cada chave corresponde a um atributo data-i18n (texto), data-i18n-alt (alt de imagem)
// ou data-i18n-aria (aria-label) no HTML.

const translations = {
    en: {
        'meta.title': 'Arthur Domingues | Computer Science',

        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.education': 'Education',
        'nav.contact': 'Contact',

        'hero.badge': 'Open to Internships',
        'hero.title': 'Hi, I\'m <span>Arthur</span>',
        'hero.rolePrefix': '',
        'hero.text': 'Developer in training with international experience and a passion for building efficient software.',
        'hero.cta1': 'View Profile',
        'hero.cta2': 'Let\'s Talk',
        'hero.photoAlt': 'Profile photo of Arthur Domingues',

        'about.label': '01. Background',
        'about.title': 'About Me',
        'about.p1': 'Computer Science student passionate about turning complex problems into efficient software. I like to understand how things work in depth &mdash; from the logic behind an algorithm to the architecture of a complete system &mdash; and to apply that reasoning to building real solutions.',
        'about.p2': 'My path is shaped by a strong international background, with cultural and academic exchanges in <strong>Cape Town (South Africa)</strong> and at the <strong>University of Jena (Germany)</strong>. These experiences strengthened my independence, resilience, multicultural communication skills and advanced fluency in German &mdash; skills I bring to teamwork and to the way I approach new technical challenges.',
        'about.p3': 'Today, my focus is on deepening my knowledge of software development and engineering, combining the theoretical foundation of my degree with hands-on projects that help me grow technically every day.',
        'about.location': 'Location',
        'about.locationValue': 'Curitiba, PR &mdash; Brazil',
        'about.education': 'Education',
        'about.educationValue': 'Computer Science &mdash; PUC-PR',
        'about.languages': 'Languages',
        'about.languagesValue': 'Portuguese, German (B2) and English',
        'about.availability': 'Availability',
        'about.availabilityValue': 'Tech Internship',

        'skills.label': '02. Skills',
        'skills.title': 'Skills & Tools',
        'skills.languages': 'Programming Languages',
        'skills.tools': 'Tools',
        'skills.os': 'Linux / Windows Environments',
        'skills.soft': 'Languages & Soft Skills',
        'skills.german': 'Advanced German (Goethe B2)',
        'skills.english': 'Intermediate English',
        'skills.problemSolving': 'Complex Problem Solving',
        'skills.teamwork': 'Teamwork & Logical Thinking',

        'projects.label': '03. Portfolio',
        'projects.title': 'My Projects',
        'projects.downloadGame': 'Download Game',
        'projects.playScratch': 'Play on Scratch',
        'projects.tagArch': 'Computer Architecture',
        'projects.tagLogic': 'Programming Logic',
        'projects.tagClones': 'Clones & Events',
        'projects.p1.alt': 'Screenshot of Project 1',
        'projects.p1.title': '2D Unity Game',
        'projects.p1.desc': 'Shadow of the Raven is a 2D game built in Unity as the final project (TCC) of the Systems Development Technical Course.',
        'projects.p2.alt': 'Screenshot of Project 2',
        'projects.p2.title': 'Nexo — Scheduling App for Psychologists',
        'projects.p2.desc': 'Mobile app built with Flutter and a Firebase backend, designed for psychologists who need to organize their clinical routine securely and efficiently.',
        'projects.p3.alt': 'Screenshot of Project 3',
        'projects.p3.title': 'Building a CPU',
        'projects.p3.desc': 'Academic project of a virtual CPU that executes low-level instructions from binary files.',
        'projects.p4.alt': 'Screenshot of Galaga in Scratch',
        'projects.p4.title': 'Galaga in Scratch',
        'projects.p4.desc': 'My take on the arcade classic, built as the final assignment of the Programming Logic Fundamentals course in the Apple Developer Academy selection process.',

        'edu.label': '04. Journey',
        'edu.title': 'Education & Experience',
        'edu.e1.date': '2025 - Present',
        'edu.e1.title': 'Bachelor\'s Degree in Computer Science',
        'edu.e1.desc': 'Building solid foundations in algorithms, data structures and software engineering.',
        'edu.e2.title': 'Technical Degree in Systems Development',
        'edu.e2.desc': 'Hands-on focus on application development, database modeling and systems architecture.',
        'edu.e3.title': 'International University Experience',
        'edu.e3.place': 'Friedrich-Schiller-Universität (Jena, Germany)',
        'edu.e3.desc': 'Immersive study and exposure to German academic and tech culture through the Goethe-Institut.',
        'edu.e4.title': 'Language and Cultural Exchange',
        'edu.e4.place': 'LAL School (Cape Town, South Africa)',
        'edu.e4.desc': 'Intensive English conversation practice and cultural adaptability.',

        'footer.title': 'Shall we build something together?',
        'footer.text': 'I\'m actively looking for my first internship in tech to apply my knowledge and grow technically.',
        'footer.cv': 'Resume',
        'footer.rights': 'All rights reserved.',

        'backToTop': 'Back to top'
    }
};

// Frases do efeito de digitação no topo do site, por idioma
const typingPhrases = {
    pt: [
        'Ciência da Computação',
        'Desenvolvedor Mobile',
        'Entusiasta de Unity & Games',
        'Apaixonado por Software'
    ],
    en: [
        'Computer Science Student',
        'Mobile Developer',
        'Unity & Games Enthusiast',
        'Passionate about Software'
    ]
};
