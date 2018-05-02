var menuButton = document.querySelector('.menu-link');
var menu = document.querySelector('nav.menu');

menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('opened');
});
