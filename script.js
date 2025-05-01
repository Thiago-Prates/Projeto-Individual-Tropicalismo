
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

window.onload = function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function moveCarousel(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = items.length - 1;
        if (currentIndex >= items.length) currentIndex = 0;
        showItem(currentIndex);
    }

    showItem(currentIndex);

    // Torna a função disponível globalmente para os botões onclick
    window.moveCarousel = moveCarousel;
};









