// toggling menu
var menuButton = document.querySelector('.menu-link');
var menu = document.querySelector('nav.menu');

menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('opened');
});

// smoothies slider
var leftBtn = document.querySelector('.featured-products .arrow.left');
var rightBtn = document.querySelector('.featured-products .arrow.right');
var counter = document.querySelector('.featured-products .slider-controls span');
var current = 1;

counter.textContent = current + 1;

function pickSmoothie(index) {
  document.querySelector('.featured-products .product-wrapper.active').classList.remove('active');
  var smoothie = document.querySelectorAll('.featured-products .product-wrapper')[index];
  smoothie.classList.add('active');

  var positions = [340, 0, -340]

  var wrapper = document.querySelector('.featured-products .products');
  wrapper.style.transform = 'translateX(' + positions[index] + 'px)';

  current = index;
  counter.textContent = current + 1;
}

leftBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (current - 1 === -1) return;
  pickSmoothie(current - 1);
});

rightBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (current + 1 === 3) return;
  pickSmoothie(current + 1);
});

// stores slider
var storeLeftBtn = document.querySelector('.map-wrapper .arrow.left');
var storeRightBtn = document.querySelector('.map-wrapper .arrow.right');
var storeCounter = document.querySelector('.map-wrapper .slider-controls span');

var storeCurrent = 0;
storeCounter.textContent = storeCurrent + 1;

function pickStore(index) {
  document.querySelector('.map-wrapper .store.active').classList.remove('active');
  var store = document.querySelectorAll('.map-wrapper .store')[index];
  store.classList.add('active');

  var positions = [0, -340, -680];

  var wrapper = document.querySelector('.stores-wrapper');
  wrapper.style.transform = 'translateX(' + positions[index] + 'px)';

  storeCurrent = index;
  storeCounter.textContent = storeCurrent + 1;
}

storeLeftBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (storeCurrent - 1 === -1) return;
  pickStore(storeCurrent - 1);
});

storeRightBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (storeCurrent + 1 === 3) return;
  pickStore(storeCurrent + 1);
});

// display recipes after animation playes
var recipes = document.querySelectorAll('.recipe');
setTimeout(function() {
  recipes.forEach(function(node) {
    node.classList.add('loaded');
  });
}, 400);

// scroll to top on footer logo click
var logo = document.querySelector('footer .logo');
logo.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
});
