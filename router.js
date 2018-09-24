const main = document.querySelector('main');

const routes = {
  '/': homePage,
  '/home': homePage,
  '/bio': bioPage,
  '/work': workPage,
  '/contact': contactPage,
  '/*' : page404,
};

window.onpopstate = () => {
  if (hamburger.classList.contains('close')) {
    toggleMenu();
  }
  if (!routes[window.location.pathname]) {
    main.innerHTML = page404
  } else {
    main.innerHTML = routes[window.location.pathname];
  }
  navigate();
  setActiveLink();
};

const navigate = () => {
  if (!routes[window.location.pathname]) {
    main.innerHTML = page404
  } else {
    main.innerHTML = routes[window.location.pathname];
    if (window.location.pathname === '/') {
      document.body.classList.add('bg-home');
      document.body.style.overflow = 'hidden';
      showHeaders();
    } else {
      document.body.classList.remove('bg-home');
      document.body.style.overflow = '';
    }
  }
}

const clearAriaCurrent = () => {
  const activeElements = document.querySelectorAll('span[aria-current=true]');
  activeElements.forEach(element => element.setAttribute('aria-current', ''));
}

const setActiveLink = () => {
  clearAriaCurrent();
  document.querySelector(`span[href=${JSON.stringify(window.location.pathname)}]`).setAttribute('aria-current', true);
};

const handleLinkClick = event => {
  clearAriaCurrent();
  if (event) {
    return event.target.setAttribute('aria-current', true);
  }
  setActiveLink();
};

const onNavItemClick = event => {
  if (!event.target.classList.contains('menu-link')) return;
  const href = event.target.getAttribute('href');
  window.history.pushState({}, href, href);
  main.innerHTML = routes[href];
  handleLinkClick(event);
  toggleMenu();
  navigate();
}

navigate();

document.body.addEventListener('click', onNavItemClick);
document.body.addEventListener('keydown', event => {
  if (event.keyCode === keycodes.space || event.keyCode === keycodes.enter) {
    if (event.target === hamburger) {
      return toggleMenu();
    }
    onNavItemClick(event);
  } else if (hamburger.classList.contains('close') && event.keyCode === keycodes.escape) {
    return toggleMenu();
  }
});

document.addEventListener('DOMContentLoaded', setActiveLink);
