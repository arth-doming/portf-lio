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

if (typingEl) {
    const phrases = [
        'Ciência da Computação',
        'Desenvolvedor Mobile',
        'Entusiasta de Unity & Games',
        'Apaixonado por Software'
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = false;

    function typeLoop() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingEl.textContent = currentPhrase.substring(0, charIndex);

        let delay = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            delay = 1800; // pausa no final da frase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
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