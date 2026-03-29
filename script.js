const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        }
    });
    },
    { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

function updateActiveNav() {
    let current = '';
    sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
    }
    });

    navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
    }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.carousel').forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('.carousel-slide')];
    const dots = [...carousel.querySelectorAll('.dot')];
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;
    let autoRotate;

    function renderCarousel(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('is-active', 'is-prev', 'is-next');
        if (i === index) slide.classList.add('is-active');
        else if (i === (index - 1 + slides.length) % slides.length) slide.classList.add('is-prev');
        else if (i === (index + 1) % slides.length) slide.classList.add('is-next');
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
    });
    }

    function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    renderCarousel(currentIndex);
    }

    function startAutoRotate() {
    autoRotate = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 2500);
    }

    function resetAutoRotate() {
    clearInterval(autoRotate);
    startAutoRotate();
    }

    prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    resetAutoRotate();
    });

    nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    resetAutoRotate();
    });

    dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoRotate();
    });
    });

    renderCarousel(currentIndex);
    startAutoRotate();
});