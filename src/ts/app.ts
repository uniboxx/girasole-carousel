const menuBtn = document.getElementById('menu-btn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

var currentBanner = 0;
var banners = document.querySelectorAll('.banner');
var bannerInterval = setInterval(nextBanner, 10000);

function showBanner(index: number) {
  banners[currentBanner].classList.remove('active');
  currentBanner = (index + banners.length) % banners.length;
  banners[currentBanner].classList.add('active');
}

function nextBanner() {
  showBanner(currentBanner + 1);
  resetInterval();
}

function prevBanner() {
  showBanner(currentBanner - 1);
  resetInterval();
}

function resetInterval() {
  clearInterval(bannerInterval);
  bannerInterval = setInterval(nextBanner, 10000);
}

function toggleMenu() {
  console.log('ciao');
  const menu = document.querySelector('.nav')! as HTMLElement;
  menu.style.display = menu?.style.display === 'block' ? 'none' : 'block';
}

menuBtn?.addEventListener('click', toggleMenu);

prevBtn?.addEventListener('click', prevBanner);
nextBtn?.addEventListener('click', nextBanner);
