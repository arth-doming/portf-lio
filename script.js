// Barra de progresso de scroll + botão de voltar ao topo
const scrollProgress = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) scrollProgress.style.width = progress + '%';

    if (backToTopBtn) {
        backToTopBtn.classList.toggle('is-visible', scrollTop > 400);
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Animação de revelação ao rolar (fade + slide up)
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
}

// Efeito de digitação no subtítulo do Hero
const typingEl = document.getElementById('typing-text');

let resetTyping = () => {};

if (typingEl) {
    // As frases de cada idioma ficam em translations.js
    let phrases = typingPhrases.pt;

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = false;

    // Recomeça a digitação com as frases do idioma escolhido
    resetTyping = (lang) => {
        phrases = typingPhrases[lang] || typingPhrases.pt;
        phraseIndex = 0;
        charIndex = phrases[0].length;
        isDeleting = false;
        typingEl.textContent = phrases[0];
    };

    function typeLoop() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingEl.textContent = currentPhrase.substring(0, charIndex);

        let delay = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex >= currentPhrase.length) {
            delay = 1800; // pausa no final da frase
            isDeleting = true;
        } else if (isDeleting && charIndex <= 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(typeLoop, delay);
    }

    setTimeout(typeLoop, 2000); // pausa inicial antes de começar a apagar
}

// Gerencia efeitos ao rolar a página
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    // Se rolar mais de 50px, encolhe a navbar e altera o fundo de forma suave
    if (window.scrollY > 50) {
        navbar.style.padding = '12px 8%';
        navbar.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.padding = '20px 8%';
        navbar.style.backgroundColor = 'rgba(11, 15, 25, 0.75)';
        navbar.style.boxShadow = 'none';
    }
});

// Toca o vídeo do projeto ao passar o mouse por cima do card
document.querySelectorAll('.project-card').forEach(card => {
    const video = card.querySelector('.project-video');
    if (!video) return;

    const src = video.getAttribute('data-src');

    card.addEventListener('mouseenter', () => {
        // Carrega o vídeo só na primeira vez que o mouse passa (economiza dados)
        if (src && !video.getAttribute('src')) {
            video.setAttribute('src', src);
        }
        video.currentTime = 0;
        video.play().catch(() => {
            // Ignora erro caso o navegador bloqueie o autoplay
        });
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

// Rolagem suave inteligente para os links internos do menu
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Deslocamento de 80px para não cobrir o título devido ao menu fixo
            const offsetPosition = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Menu de download do currículo (Português / English / Deutsch)
const cvDropdown = document.querySelector('.cv-dropdown');

if (cvDropdown) {
    const cvToggle = cvDropdown.querySelector('.cv-toggle');

    const setCvMenu = (open) => {
        cvDropdown.classList.toggle('open', open);
        cvToggle.setAttribute('aria-expanded', open);
    };

    cvToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        setCvMenu(!cvDropdown.classList.contains('open'));
    });

    // Fecha ao escolher um idioma, clicar fora ou apertar Esc
    cvDropdown.querySelectorAll('.cv-menu a').forEach(link => {
        link.addEventListener('click', () => setCvMenu(false));
    });

    document.addEventListener('click', (e) => {
        if (!cvDropdown.contains(e.target)) setCvMenu(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cvDropdown.classList.contains('open')) {
            setCvMenu(false);
            cvToggle.focus();
        }
    });
}

// Troca de idioma (Português / English)
// O português fica no próprio HTML; o inglês vem de translations.js
const langButtons = document.querySelectorAll('.lang-switch button');
const i18nTexts = document.querySelectorAll('[data-i18n]');
const i18nAlts = document.querySelectorAll('[data-i18n-alt]');
const i18nArias = document.querySelectorAll('[data-i18n-aria]');

// Guarda os textos originais em português para poder voltar a eles
i18nTexts.forEach(el => { el.dataset.i18nPt = el.innerHTML; });
i18nAlts.forEach(el => { el.dataset.i18nPtAlt = el.getAttribute('alt'); });
i18nArias.forEach(el => { el.dataset.i18nPtAria = el.getAttribute('aria-label'); });

function setLanguage(lang) {
    const dict = translations[lang] || {};
    const pick = (key, ptValue) => (lang !== 'pt' && key in dict ? dict[key] : ptValue);

    i18nTexts.forEach(el => {
        el.innerHTML = pick(el.dataset.i18n, el.dataset.i18nPt);
    });
    i18nAlts.forEach(el => {
        el.setAttribute('alt', pick(el.dataset.i18nAlt, el.dataset.i18nPtAlt));
    });
    i18nArias.forEach(el => {
        el.setAttribute('aria-label', pick(el.dataset.i18nAria, el.dataset.i18nPtAria));
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    langButtons.forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });
    resetTyping(lang);

    try { localStorage.setItem('lang', lang); } catch (e) { /* navegador bloqueou o armazenamento */ }
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Idioma inicial: o último escolhido; se for a primeira visita, segue o idioma do navegador
let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) { /* ignora */ }
const initialLang = savedLang || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
if (initialLang !== 'pt') setLanguage(initialLang);
