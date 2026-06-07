/* AQUAMARINE mekus mekus*/

// switch profile pic when hover
const profilePic = document.querySelector('.profile-pic');
const originalSrc = 'images/initial-img.jpg';
const hoverSrc   = 'images/hovered-img.png';

if (profilePic) {
  profilePic.addEventListener('mouseenter', () => {
    profilePic.src = hoverSrc;
  });

  profilePic.addEventListener('mouseleave', () => {
    profilePic.src = originalSrc;
  });
}

// smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
const logo = document.querySelector('.logo');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// smooth scroll for logo too
if (logo) {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 200 && rect.bottom > 0) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === current) {
      link.classList.add('active');
    }
  });
});
