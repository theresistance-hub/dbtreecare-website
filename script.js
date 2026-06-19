const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
const menuLabel = menuButton.querySelector('.sr-only');
const mobileCall = document.querySelector('.mobile-call');
const hero = document.querySelector('.hero');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuLabel.textContent = isOpen ? 'Open menu' : 'Close menu';
  navigation.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuLabel.textContent = 'Open menu';
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

if ('IntersectionObserver' in window) {
  const heroObserver = new IntersectionObserver(([entry]) => {
    mobileCall.classList.toggle('visible', !entry.isIntersecting);
  });
  heroObserver.observe(hero);
} else {
  mobileCall.classList.add('visible');
}

document.getElementById('year').textContent = new Date().getFullYear();
