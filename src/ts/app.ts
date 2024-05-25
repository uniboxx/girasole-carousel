const backdrop = document.getElementById('backdrop')!;
const menuBtn = document.getElementById('menu-btn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const nav = document.querySelector('.nav') as HTMLButtonElement;

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

function showSideMenu() {
  nav.style.right = '0';
  backdrop.style.backdropFilter = 'blur(5px)';
  backdrop.style.pointerEvents = 'all';
}
function hideSideMenu() {
  nav.style.right = '-100%';
  backdrop.style.backdropFilter = 'blur(0)';
  backdrop.style.pointerEvents = 'none';
}

function toggleMenu() {
  if (nav.style.right === '' || nav.style.right === '-100%') {
    showSideMenu();
  } else {
    hideSideMenu();
  }
}

menuBtn?.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', e => {
  if (!nav.contains(e.target)) {
    hideSideMenu();
  }
});

prevBtn?.addEventListener('click', prevBanner);
nextBtn?.addEventListener('click', nextBanner);
