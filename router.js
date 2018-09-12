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

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  main.innerHTML = routes[pathName];
}

if (!routes[window.location.pathname]) {
  main.innerHTML = page404
} else {
  main.innerHTML = routes[window.location.pathname];
  if (window.location.pathname === '/') {
    document.body.classList.add('bg-home');
  }
}

