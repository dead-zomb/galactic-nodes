document.addEventListener('DOMContentLoaded', function() {
    const starCount = 50; // Number of shooting stars
    const shootingStarsContainer = document.querySelector('.shooting-stars');

    const createShootingStar = () => {
        const star = document.createElement('div');
        star.className = 'star';
        const randomX = Math.random() * window.innerWidth + 'px';
        const randomY = Math.random() * window.innerHeight + 'px';

        star.style.left = randomX;
        star.style.top = randomY;
        
        // Set animation duration
        const animationDuration = Math.random() * 2 + 2; // Between 2-4 seconds
        star.style.animationDuration = animationDuration + 's';
        
        shootingStarsContainer.appendChild(star);
        
        // Remove star after animation
        star.addEventListener('animationend', () => {
            star.remove();
        });
    };

    // Create shooting stars at intervals
    setInterval(createShootingStar, 500);
});