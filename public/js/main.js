document.addEventListener("DOMContentLoaded", event => {
  const arr = [document.querySelector('.large-header'), document.querySelector('.small-header'), document.querySelector('.home-icons')];
  setTimeout(() => arr.forEach(header => header.classList.add('show'), 1000));
});

const hamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('nav');
const portrait = document.querySelector('.portrait-container');
const linksContainer = document.querySelector('.links-container');
const menuLinks = document.querySelectorAll('.menu-item');

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add('close');
    hamburger.classList.remove('show');
    nav.classList.add('show');
    portrait.classList.add('show');
    linksContainer.classList.add('show');
    for (let link of menuLinks) {
      link.classList.add('show');
    }

    showMenu = true;
  } else {
    hamburger.classList.remove('close');
    hamburger.classList.add('show');
    nav.classList.remove('show');
    portrait.classList.remove('show');
    linksContainer.classList.remove('show');
    for (let link of menuLinks) {
      link.classList.remove('show');
    }

    showMenu = false;
  }
}

hamburger.addEventListener('click', toggleMenu);
