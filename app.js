const img = document.querySelector('img');
const link = document.querySelector('ul.nav-links');

img.addEventListener('click', (e) => {
  if (link.style.display === 'none') {
    link.style.display = 'block';
  } else {
    link.style.display = 'none';
  }
});
