const main = document.querySelector('main');

const routes = {
  '/': homePage,
  '/bio': bioPage,
  '/work': workPage,
  '/contact': contactPage,
  '/*' : page404,
};

const pathArray = window.location.pathname.split('/');
const pathName = `/${pathArray[pathArray.length - 1]}`;

window.onpopstate = () => {
  if (!routes[window.location.pathName]) {
    main.innerHTML = page404
  } else {
    main.innerHTML = routes[window.location.pathName];
  }
}

const onNavItemClick = event => {
  if (!event.target.classList.contains('menu-link')) return;
  window.history.pushState({}, pathName, window.location.origin + pathName);
  main.innerHTML = routes[pathName];
}

if (!routes[pathName]) {
  main.innerHTML = page404
} else {
  main.innerHTML = routes[pathName];
  if (pathName === '/') {
    document.body.classList.add('bg-home');
    document.body.style.overflow = 'hidden';
  }
}

document.body.addEventListener('click', onNavItemClick);
