document.addEventListener("DOMContentLoaded", event => {
  const arr = [document.querySelector('.large-header'), document.querySelector('.small-header'), document.querySelector('.home-icons')];
  setTimeout(() => arr.forEach(header => header.classList.add('show'), 1000));
});
