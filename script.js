const shootingStarsContainer = document.querySelector('.shooting-stars');

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Randomly position the star
    const startPosition = Math.random() < 0.5 ? window.innerWidth : -10; // Start from left or right
    const randomTop = Math.random() * 100; // Random Y position from 0% to 100% of the viewport

    star.style.left = `${startPosition}px`;
    star.style.top = `${randomTop}vh`;
    star.style.animationDuration = `${Math.random() * 1 + 1}s`; // Random duration between 1 to 2 seconds
    
    shootingStarsContainer.appendChild(star);
    
    // Remove the star after the animation to avoid memory leaks
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Create multiple shooting stars at intervals
setInterval(createShootingStar, 300);
