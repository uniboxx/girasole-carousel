const menuBtn = document.getElementById('menu-btn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const menu = document.querySelector('.nav') as HTMLButtonElement;

let currentBanner = 0;
const banners = document.querySelectorAll('.banner');
const bannerInterval = setInterval(nextBanner, 10000);

function showBanner(index: number) {
  banners[currentBanner].classList.remove('active');
  currentBanner = (index + banners.length) % banners.length;
  banners[currentBanner].classList.add('active');
}

function nextBanner() {
  showBanner(currentBanner + 1);
  clearInterval(bannerInterval);
}

function prevBanner() {
  showBanner(currentBanner - 1);
  clearInterval(bannerInterval);
}

function toggleMenu() {
  menu.style.display = menu?.style.display === 'block' ? 'none' : 'block';
}

menuBtn?.addEventListener('click', toggleMenu);

prevBtn?.addEventListener('click', prevBanner);
nextBtn?.addEventListener('click', nextBanner);
