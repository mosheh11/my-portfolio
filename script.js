const root = document.documentElement;
const hero = document.getElementById('hero');
const toggleBtn = document.getElementById('themeToggle');
const key = 'moshe-theme';

const saved = localStorage.getItem(key);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = saved || (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initial);
hero.classList.add(initial);

toggleBtn.setAttribute('aria-pressed', initial === 'dark');

const animateClick = () => {
  toggleBtn.animate(
    [
      { transform: 'rotate(0) scale(1)' },
      { transform: 'rotate(25deg) scale(1.06)' },
      { transform: 'rotate(0) scale(1)' }
    ],
    { duration: 230, easing: 'ease-out' }
  );
};

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  hero.classList.remove('light', 'dark');
  hero.classList.add(next);
  localStorage.setItem(key, next);
  toggleBtn.setAttribute('aria-pressed', next === 'dark');
  animateClick();
});

if (!saved) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const next = e.matches ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    hero.classList.remove('light', 'dark');
    hero.classList.add(next);
    toggleBtn.setAttribute('aria-pressed', e.matches);
  });
}
