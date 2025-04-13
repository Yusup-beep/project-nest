document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches),
);
function toggleTheme() {
  if (localStorage.theme === 'dark') {
    localStorage.theme = 'light';
  } else {
    localStorage.theme = 'dark';
  }
  document.documentElement.classList.toggle('dark');
}
