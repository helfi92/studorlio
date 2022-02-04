window.onload = () => {
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.nav-toggle');
  
    const toggle = e => e.classList.toggle('is-active');
    const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;
  
    hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
    Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
  
    fixNav();
  
    onFinishLoad();
  }
  
  // Finish loading
  function onFinishLoad() {
    const hiddenSections = document.querySelectorAll('.hidden');
    const invisibleSection = document.querySelectorAll('.invisible');
    hiddenSections.forEach((item) => {
      item.classList.remove('hidden');
    });
  
    invisibleSection.forEach((item) => {
      item.classList.remove('invisible');
    });
    checkSection();
  }
  
  // fix navbar
  function fixNav() {
    const nav = document.querySelector('#nav');
    const navbar = nav.querySelector('.nav');
    const arrow = document.querySelector('.arrow')
  
    if(window.scrollY > 0) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  }
  
  function checkSection(){
    const sections = document.querySelectorAll('section');
    var index = 0;
    for (var i = sections.length - 1; i > 0; i--) {
      if (window.scrollY >= sections[i].offsetTop - nav.offsetHeight - 5) {
        lastPos = window.scrollY;
        index = i;
        break;
      }
    }
  
    const navMenu = document.querySelector('.nav-menu');
    const navItems = navMenu.querySelectorAll('.nav-item');
    const activeItem = navMenu.querySelector('.is-active');
    if(activeItem) activeItem.classList.remove('is-active');
    navItems[index].classList.add('is-active');
  }
  
  window.addEventListener('scroll', fixNav);
  window.addEventListener('scroll', checkSection);
  nav.addEventListener('click', checkSection);
  