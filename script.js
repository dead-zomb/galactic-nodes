const shootingStarsContainer = document.querySelector('.shooting-stars');

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'star shooting-star';
    
    // Start from the right and move left
    const startPosition = window.innerWidth; // Start from the right edge
    const randomTop = Math.random() * 100; // Random Y position

    star.style.left = `${startPosition}px`;
    star.style.top = `${randomTop}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 0.5}s`; // Duration between 0.5 to 2.5 seconds

    shootingStarsContainer.appendChild(star);
    
    // Remove the star after the animation to avoid memory leaks
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Create multiple shooting stars at intervals
setInterval(createShootingStar, 300);

// Function to create static stars
function createStaticStar() {
    const star = document.createElement('div');
    star.className = 'static-star';
    
    // Random positions
    const randomLeft = Math.random() * 100; // Random X position from 0% to 100%
    const randomTop = Math.random() * 100;  // Random Y position from 0% to 100%

    // Random size
    const size = Math.random() * 3 + 1; // Size between 1px and 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${randomLeft}vw`;
    star.style.top = `${randomTop}vh`;

    shootingStarsContainer.appendChild(star);
}

// Create static stars
for (let i = 0; i < 50; i++) { // Create 50 static stars for example
    createStaticStar();
}
