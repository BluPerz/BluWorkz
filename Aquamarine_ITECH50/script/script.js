/* AQUAMARINE mekus mekus*/

// Capy baaahhh
const profilePic = document.querySelector('.profile-pic');
const originalSrc = 'images/capcap.jpg';
const hoverSrc   = 'images/capybahh.png';

if (profilePic) {
  profilePic.addEventListener('mouseenter', () => {
    profilePic.src = hoverSrc;
  });

  profilePic.addEventListener('mouseleave', () => {
    profilePic.src = originalSrc;
  });
}

// scroll smoothly me baby
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1); // remove '#'
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active links babyy!!
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    // Section is active when its top is within 200px of viewport top
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
