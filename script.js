// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Simple "Play Now" Alert (Logic Placeholder)
const playButtons = document.querySelectorAll('.game-card button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const gameTitle = button.parentElement.querySelector('h3').innerText;
        alert(`Launching ${gameTitle}... Have fun!`);
        
        // This is where you'd eventually redirect to a game page:
        // window.location.href = 'game-url.html';
    });
});

// 3. CTA Button Interaction
const ctaBtn = document.getElementById('cta-button');
ctaBtn.addEventListener('click', () => {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
});

// 4. Dynamic Header Background (Changes on scroll)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0a0a16';
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.backgroundColor = '#1a1a2e';
        header.style.boxShadow = 'none';
    }
});
