// hero section floating cards fadeout on load
const floatingContainer = document.querySelector('.floating-cards-container');
window.addEventListener('load', () => {
    floatingContainer.classList.add('fadeOut');
});

// slidein effect for title
const titleSlideIn = document.querySelector('.title-slide-in');
window.addEventListener('scroll', () => {
    function handleScroll() {
        const rect = titleSlideIn.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
            titleSlideIn.classList.add('slide-in');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});