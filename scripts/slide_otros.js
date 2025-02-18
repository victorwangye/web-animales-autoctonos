let index = 0;
const slides = document.querySelectorAll('.contenedor2 > .slide_otros');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Función para actualizar el slide
function updateSlide() {
    const offset = -index * 100; // Cada slide ocupa 100% del contenedor
    document.querySelector('.contenedor2').style.transform = `translateX(${offset}%)`;
}

// Avanzar al siguiente slide
nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length; // Si llega al final, vuelve al primero
    updateSlide();
});

// Retroceder al slide anterior
prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length; // Si es el primero, vuelve al último
    updateSlide();
});
