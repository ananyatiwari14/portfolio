
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

/* left nav */

const leftNavArrow = document.querySelector('.left-nav-arrow');
const leftNav = document.querySelector('.left-nav');

leftNavArrow.addEventListener('click', function() {
  leftNav.classList.toggle('open');
});

/* back to the top */

 window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }