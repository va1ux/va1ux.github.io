const hamburger = document.getElementById('hamburger');
const slideMenu = document.getElementById('slideMenu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  slideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  slideMenu.classList.remove('active');
});
