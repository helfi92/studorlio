window.onload = () => {
  const navMenu = document.querySelector('.nav-menu'); // Get the navigation menu element
  const navItems = document.querySelectorAll('.nav-item'); // Get all navigation items
  const hamburger = document.querySelector('.nav-toggle'); // Get the hamburger menu icon
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu));//Did Changes here(removed the in-active)
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}
