// Ss

const img = document.querySelector('img');
const link = document.querySelector('ul.nav-links');

img.addEventListener('click', (e) => {
  // link.classList.replace('nav-links', 'show-menu');

  if (link.className === 'nav-links') {
    link.classList.remove('nav-links');
    link.classList.add('show-menu');
  } else if (link.className === 'show-menu') {
    link.classList.remove('show-menu');
    link.classList.add('nav-links');
  }
});
