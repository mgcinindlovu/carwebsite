
const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')
const menuBtnIcon = document.getElementById('i')

menuBtn.addEventListener('click',  (e) =>{
    navLinks.classList.toggle('open')

    const isOpen = navLinks.contains('open')
    menuBtnIcon.setAttribute('class' , isOpen ? 'ri-close-line': 'ri-menu-3-line'

     );
});



 const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    },
 });

const scrollRevealOptions = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000, 
};

// header container
ScrollReveal () .reveal('.header-content h1', {
    ...scrollRevealOptions,
});

ScrollReveal () .reveal('.header-content h1', {
    ...scrollRevealOptions,
    delay: 500,
});


// service container
ScrollReveal () .reveal('.service-card', {
    ...scrollRevealOptions,
    interval: 500,
});