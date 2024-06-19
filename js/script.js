const section = document.querySelector('.story1');
const imageContainer = section.querySelector('.image-container');
const textContainer = section.querySelector('.text-container');

window.addEventListener('scroll', () => {
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const imageContainerHeight = imageContainer.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= sectionTop + textContainer.offsetHeight && scrollPosition <= sectionBottom - imageContainerHeight) {
    imageContainer.classList.add('fixed');
  } else {
    imageContainer.classList.remove('fixed');
  }
});
 


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
