const shootingStarsContainer = document.querySelector('.shooting-stars');

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'star shooting-star';
    
    // Randomly position the star on the horizontal axis
    const startPosition = Math.random() < 0.5 ? window.innerWidth : -10; // Start from left or right
    const randomTop = Math.random() * 100; // Random Y position

    star.style.left = `${startPosition}px`;
    star.style.top = `${randomTop}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 0.5}s`; // Random duration for variety

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
    
    // Random position
    const randomLeft = Math.random() * 100; // Random X position from 0% to 100%
    const randomTop = Math.random() * 100;  // Random Y position from 0% to 100%
    
    // Random size
    const size = Math.random() * 3 + 1; // Size between 1px and 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${randomLeft}vw`;
    star.style.top = `${randomTop}vh`;
    
    star.style.animation = `staticStar ${Math.random() * 2 + 1}s infinite`; // Animation for twinkling effect

    shootingStarsContainer.appendChild(star);
}

// Create static stars
for (let i = 0; i < 50; i++) { // Adjust number for more or less static stars
    createStaticStar();
}
