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

// navbar - scroll - to - bottom effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.scroll-nav-animate');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled-bottom');
    } else {
        navbar.classList.remove('scrolled-bottom');
    }
});



// overall screen floating elements animation 
const maxElements = 5;

function createMarble() {
    if (document.querySelectorAll('.marble').length >= maxElements) {
        return;
    }
    const marble = document.createElement('img');
    marble.src = './assets/marble.png';
    marble.classList.add('marble');

    const size = Math.random() * 60;

    marble.style.width = `${size}px`;
    marble.style.height = `${size}px`;

    marble.style.left = `${Math.random() * 100}vw`;

    const duration = Math.random() * 20 + 10;
    marble.style.animationDuration = `${duration}s`;

    document.body.appendChild(marble);

    marble.addEventListener('animationend', () => {
        marble.remove();
    });
}

setInterval(createMarble, 1500);

function createGeometry() {
    if (document.querySelectorAll('.geometry').length >= maxElements) {
        return;
    }
    const geometry = document.createElement('img');
    geometry.src = './assets/geometric-shape.png';
    geometry.classList.add('geometry');

    const size = Math.random() * 60;

    geometry.style.width = `${size}px`;
    geometry.style.height = `${size}px`;

    geometry.style.left = `${Math.random() * 100}vw`;

    const duration = Math.random() * 20 + 10;
    geometry.style.animationDuration = `${duration}s`;

    document.body.appendChild(geometry);

    geometry.addEventListener('animationend', () => {
        geometry.remove();
    });
}

setInterval(createGeometry, 1500);