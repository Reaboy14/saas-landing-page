// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => { navMenu.classList.toggle('active'); });

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < triggerBottom){ el.classList.add('active'); }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);