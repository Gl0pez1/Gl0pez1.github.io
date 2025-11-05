// Mobile nav toggle (keyboard + ARIA)
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); toggle.click();
    }
  });
}

// Theme toggle with localStorage; respects prefers-color-scheme
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('theme-light');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    root.classList.toggle('theme-light');
    const mode = root.classList.contains('theme-light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
  });
}

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
