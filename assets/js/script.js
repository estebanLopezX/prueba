// MENU TIPO HAMBURGUESA PARA MOVILES.
const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const icon = hamburgerBtn.querySelector('i');

hamburgerBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');

    if (sideMenu.classList.contains('active')) {
        icon.classList.remove('fi-br-menu-burger');
        icon.classList.add('fi-br-cross');
    } else {
        icon.classList.remove('fi-br-cross');
        icon.classList.add('fi-br-menu-burger');
    }
});

// ANIMACIONES
gsap.registerPlugin(ScrollTrigger);

const texts = gsap.utils.toArray('.scroll-text');

texts.forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: "top 80%",
    onEnter: () => animateIn(el, i),
    onEnterBack: () => animateIn(el, i),
    onLeave: () => animateOut(el, i),
    onLeaveBack: () => animateOut(el, i),
  });
});

function animateIn(el, i) {
  gsap.fromTo(el, 
    { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
  );
}

function animateOut(el, i) {
  gsap.to(el, { 
    x: i % 2 === 0 ? -100 : 100, 
    opacity: 0, 
    duration: 0.8, 
    ease: "power3.inOut" 
  });
}



