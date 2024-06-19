
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', function() {
  this.classList.toggle('open');
  nav.classList.toggle('open');
});

nav.addEventListener('click', function() {
  this.classList.remove('open');
  burger.classList.remove('open');
});

window.addEventListener('resize', function() {
  if (window.innerWidth >= 768 && nav.classList.contains('open')) {
    nav.classList.remove('open');
    burger.classList.remove('open');
  }
});

$(document).ready(function() {
  $('.burger').click(function() {
    $('nav').toggleClass('active');
  });
});

