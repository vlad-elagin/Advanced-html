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

counter.textContent = current;

function pickSmoothie(index) {
  document.querySelector('.featured-products .product-wrapper.active').classList.remove('active');
  var smoothie = document.querySelectorAll('.featured-products .product-wrapper')[index];
  smoothie.classList.add('active');

  var positions = [340, 0, -340]

  var wrapper = document.querySelector('.featured-products .products');
  wrapper.style.transform = 'translateX(' + positions[index] + 'px)';

  current = index;
  counter.textContent = current;
}

leftBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (current - 1 === -1) return;
  console.log('picking ' + (current - 1) + ' smoothie');
  pickSmoothie(current - 1);
})

rightBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (current + 1 === 3) return;
  console.log('picking ' + (current + 1) + ' smoothie');
  pickSmoothie(current + 1);
})
