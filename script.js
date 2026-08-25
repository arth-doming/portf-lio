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