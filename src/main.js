document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

let menuButton = document.getElementById('menu-open-button');
let menuWindow = document.getElementById('header-menu');
let menuCloseButton = document.getElementById('menu-close-button');

menuButton.addEventListener('click', function () {
  menuWindow.classList.toggle('is-open');
});

menuCloseButton.addEventListener('click', function () {
  menuWindow.classList.toggle('is-open');
});

document.addEventListener('click', function (event) {
  let isClickInsideMenu =
    menuWindow.contains(event.target) || menuButton.contains(event.target);
  if (!isClickInsideMenu && !menuWindow.classList.contains('is-open')) {
    return;
  }
  if (!isClickInsideMenu && menuWindow.classList.contains('is-open')) {
    menuWindow.classList.remove('is-open');
  }
});
