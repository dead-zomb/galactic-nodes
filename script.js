const shootingStarsContainer = document.querySelector('.shooting-stars');

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'star shooting-star';
    
    
    const startPosition = window.innerWidth; 
    const randomTop = Math.random() * 100; 

    star.style.left = `${startPosition}px`;
    star.style.top = `${randomTop}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 0.5}s`; 

    shootingStarsContainer.appendChild(star);
    
   
    star.addEventListener('animationend', () => {
        star.remove();
    });
}


setInterval(createShootingStar, 300);

function createStaticStar() {
    const star = document.createElement('div');
    star.className = 'static-star';
    
    
    const randomLeft = Math.random() * 100; 
    const randomTop = Math.random() * 100;  

    
    const size = Math.random() * 3 + 1; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${randomLeft}vw`;
    star.style.top = `${randomTop}vh`;

    shootingStarsContainer.appendChild(star);
}


for (let i = 0; i < 50; i++) {
    createStaticStar();
}
