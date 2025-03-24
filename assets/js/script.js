const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');


prevButton.addEventListener('click', () => {
    carouselContainer.scrollBy({
        left: -300, 
        behavior: 'smooth' 
    });
});


nextButton.addEventListener('click', () => {
    carouselContainer.scrollBy({
        left: 300, 
        behavior: 'smooth'
    });
});