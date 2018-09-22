const main = document.querySelector('main');

const routes = {
  '/': homePage,
  '/bio': bioPage,
  '/work': workPage,
  '/contact': contactPage,
  '/*' : page404,
};

window.onpopstate = () => {
  if (!routes[window.location.pathname]) {
    main.innerHTML = page404
  } else {
    main.innerHTML = routes[window.location.pathname];
  }
}

const onNavItemClick = event => {
  if (!event.target.classList.contains('menu-link')) return;
  window.history.pushState({}, event.target.pathname, event.target.pathname);
  main.innerHTML = routes[pathName];
}

if (!routes[window.location.pathname]) {
  main.innerHTML = page404
} else {
  main.innerHTML = routes[window.location.pathname];
  if (window.location.pathname === '/') {
    document.body.classList.add('bg-home');
    document.body.style.overflow = 'hidden';
  }
}

document.body.addEventListener('click', onNavItemClick);
