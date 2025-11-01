const btn = document.getElementById('theme-toggle');
const body = document.body;

// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Check saved theme
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or system preference
if (savedTheme) {
  body.classList.toggle('dark', savedTheme === 'dark');
} else if (prefersDark) {
  body.classList.add('dark');
}

// Toggle theme manually
btn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
