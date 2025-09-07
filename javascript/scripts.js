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


// const container = document.querySelector('.spiral-container');
// const centerX = 900;
// const centerY = 200;
// const totalNodes = 5;

// for (let i = 0; i < totalNodes; i++) {
//     const angle = i * 50; // Spread nodes evenly around circle
//     const radius = 100 + i * 8; // Gradually increase radius for spiral effect

//     const x = centerX + radius * Math.cos(angle * Math.PI / 180);
//     const y = centerY + radius * Math.sin(angle * Math.PI / 180);

//     const node = document.createElement('div');
//     node.classList.add('plan-node');
//     node.style.left = `${x}px`;
//     node.style.top = `${y}px`;
//     node.innerHTML = `<span>Plan ${i + 1}<br>2.${i}%</span>`;

//     container.appendChild(node);
// }