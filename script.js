
// efeitos da navbar 

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.menu');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.fade-in-scroll');

    const observer = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observer.unobserve(entrada.target);
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px', // Ajuste conforme necessário
    });

    elementos.forEach(el => observer.observe(el));

    
});

