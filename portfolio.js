// 📱 Menu Icon Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// 🧭 Scroll Section Activation + Sticky Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      let activeLink = document.querySelector(`header nav a[href*='${id}']`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  // Sticky navbar effect
  let header = document.querySelector('header');
  header.classList.toggle('sticky', top > 100);
};

// 🔗 Smooth Scrolling for Navigation Links
document.getElementById('home-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('skills-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('projects-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contacts-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('container1').scrollIntoView({ behavior: 'smooth' });
});