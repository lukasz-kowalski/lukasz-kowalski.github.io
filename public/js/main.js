const showHeaders = () => {
  if (window.location.pathname === '/') {
    const arr = [document.querySelector('.large-header'), document.querySelector('.small-header'), document.querySelector('.home-icons')];
    setTimeout(() => arr.forEach(header => header.classList.add('show'), 500));
  }
};

document.addEventListener("DOMContentLoaded", showHeaders);

const hamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('nav');
const portrait = document.querySelector('.portrait-container');
const linksContainer = document.querySelector('.links-container');
const menuLinks = document.querySelectorAll('.menu-item');

const getScrollbarWidth = () => `${window.innerWidth - document.documentElement.clientWidth}px`;

const toggleMenu = () => {
    const scrollWidth = getScrollbarWidth();
    document.body.style.paddingRight = scrollWidth;
    hamburger.classList.toggle('close');
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
    portrait.classList.toggle('show');
    linksContainer.classList.toggle('show');
    for (let link of menuLinks) {
      link.classList.toggle('show');
    }
}

hamburger.addEventListener('click', toggleMenu);
