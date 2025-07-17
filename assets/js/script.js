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


// ANIMACIONES HISTORIA Y OBJ 3D
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".scroll-section",
  start: "top top",
  end: "+=1200", 
  pin: true,
  pinSpacing: true
});

// Animación del texto moviéndose hacia la derecha durante el scroll
gsap.to(".textos", {
  y: -400, // Ajusta el valor según qué tan lejos quieras moverlo
  scrollTrigger: {
    trigger: ".textos",
    start: "top top",
    end: "+=1000",
    scrub: true
  }
});

// ANIMACIONES PARA SERVICIOS
gsap.utils.toArray(".box-services").forEach((box, i) => {
    gsap.fromTo(box,
        {
            opacity: 0,
            y: 100,
            x: i < 2 ? -100 : 100, // los dos primeros desde la izquierda, resto desde la derecha
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: box,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        }
    );
});

// ANIMACIONES PARA PRODUCTOS
gsap.utils.toArray(".targets-films").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 60,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
});


document.querySelectorAll('.targets-films').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -20,
            duration: 1,
            ease: "power3.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.5,
            ease: "power3.inOut"
        });
    });
});

// ANIMACIONES PARA ITEMS RELEVANTES
document.querySelectorAll('.counter').forEach(counter => {
    let endValue = parseInt(counter.getAttribute('data-count'));
    let counterDiv = counter.querySelector('div');

    // Definir función que crea la animación
    function animateCounter() {
        let obj = { val: 0 };
        gsap.to(obj, {
            val: endValue,
            duration: 3,
            ease: "power1.out",
            onUpdate: () => {
                counterDiv.innerText = `+${Math.floor(obj.val)}`;
            }
        });
    }

    // Crear ScrollTrigger sin 'once'
    ScrollTrigger.create({
        trigger: counter,
        start: "top 80%",
        toggleActions: "play reset play reset", // vuelve a animar al entrar/salir
        onEnter: animateCounter,
        onEnterBack: animateCounter // cuando vuelve a aparecer al hacer scroll hacia arriba
    });
});


//ANIMACIONES PARA MAPAS 
gsap.utils.toArray('.box-mapas').forEach((box, index) => {
    gsap.from(box, {
        opacity: 0,
        y: 70,
        duration: 1,
        delay: index * 0.5, // animación escalonada
        ease: "power2.out",
        scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play reset play reset", // animar una vez
        }
    });
});



// Posicionar logos aleatoriamente
const logos = document.querySelectorAll('.company-logos .logo-empresas');
logos.forEach(logo => {
  const x = Math.random() * 85;
  const y = Math.random() * 90;
  logo.style.left = `${x}%`;
  logo.style.top = `${y}%`;
});

// Animación scroll reversible y visible
logos.forEach((logo, index) => {
  gsap.fromTo(logo,
    { y: 150, opacity: 0 },
    {
      y: 5,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scale: 2,
      scrollTrigger: {
        trigger: logo,
        start: "top 95%",
        toggleActions: "play reverse play reverse",
        scrub: false
      }
    }
  );
});


// AR
// para activar el boton y se visualice desde los dispositivos moviles con ayuda de la camara.
document.getElementById('btnAR').addEventListener('click', () => {
    const modelViewer = document.getElementById('modelo3D');
    modelViewer.activateAR();
});