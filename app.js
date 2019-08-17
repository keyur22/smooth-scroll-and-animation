const scroll = new SmoothScroll('nav ul a[href*="#"]', {
    speed: 1000
});

window.sr = ScrollReveal();

sr.reveal('h1', {
    delay: 700,
    origin: 'top',
    distance: '50px'
});

sr.reveal('p', {
    delay: 1000,
    origin: 'bottom'
});