const sliderContainer = document.querySelector('.container__slider');
const slides = document.querySelectorAll('.container__slider-product');

let slideIndex = 0;
const slideInterval = 5000;

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlide();
}

function updateSlide() {
    sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function preloadImages() {
    slides.forEach((slide, index) => {
        const img = slide.querySelector('.container__slider-img');
        if (!img.complete) {
            img.onload = () => {
                if (index === slideIndex) {
                    updateSlide();
                }
            };
        }
    });
}

// Preload images and start the slider
preloadImages();
setInterval(nextSlide, slideInterval);
updateSlide();

window.addEventListener('load', () => {
    const letters = document.querySelectorAll('.container__student-life-other-informations-specifically-letter');

    letters.forEach(letter => {
        const img = letter.previousElementSibling;
        const imgHeight = img.clientHeight;

        letter.style.height = `${imgHeight}px`;
    });
});
