/* ==========================================================================
   KARUZELE
   ========================================================================== */

document.querySelectorAll('.karuzela').forEach(karuzela => {   
    const karty = karuzela.children;                       
    const kreski = karuzela.parentElement.querySelectorAll('.kreska'); 
    const odstep = parseFloat(getComputedStyle(karuzela).columnGap); 

    karuzela.addEventListener('scroll', () => {
        const krok = karty[0].offsetWidth + odstep;
        const index = Math.round(karuzela.scrollLeft / krok);

        kreski.forEach((kreska, i) => {
            kreska.classList.toggle('kreska-aktywna', i === index);
        });
    });
});

/* ==========================================================================
   MENU
   ========================================================================== */

const menu = document.querySelector('.menu');
const otworz = document.querySelector('.menu-otworz');
const zamknij = document.querySelector('.menu-zamknij');
const linkiMenu = document.querySelectorAll('.menu-link');

function przelaczMenu(otwarte) {
    menu.classList.toggle('menu-otwarte', otwarte);            
    document.body.classList.toggle('menu-aktywne', otwarte);    
}

otworz.addEventListener('click', () => przelaczMenu(true));
zamknij.addEventListener('click', () => przelaczMenu(false));
linkiMenu.forEach(link => link.addEventListener('click', () => przelaczMenu(false))); 

/* ==========================================================================
   ANIMACJE
   ========================================================================== */

const doAnimacji = document.querySelectorAll('header, main > *, section > *, footer > *');

const obserwator = new IntersectionObserver((wpisy) => {
    wpisy.forEach(wpis => {
        if (wpis.isIntersecting) {
            wpis.target.classList.add('widoczny'); 
            obserwator.unobserve(wpis.target);      
        }
    });
}, { threshold: 0.1 });                             

doAnimacji.forEach(el => {
    el.classList.add('pojawia');                  
    obserwator.observe(el);
});

/* ==========================================================================
   FORMULARZ
   ========================================================================== */

const formularz = document.querySelector('.formularz');
const sukces = document.querySelector('.formularz-sukces');

formularz.addEventListener('submit', (e) => {
    e.preventDefault();        
    sukces.hidden = false;     
    formularz.reset();           
});