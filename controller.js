window.onload = () => {
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.nav-toggle');
    
    const toggle = e => e.classList.toggle('is-active');
    const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;
  
    hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
    Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));

    var text = document.getElementById('text');
    var newDom = '';
    var animationDelay = 6;

    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    AOS.init({
        duration: 1200,
      })
  }
