function toast(text) {
  const container = document.getElementById('alerts');
  const alert = document.createElement('div');
  alert.innerText = text;
  alert.className = 'toast-alert';
  container.appendChild(alert);
  requestAnimationFrame(() => {
    alert.classList.add('active');
  });
  setTimeout(() => {
    alert.classList.remove('active');
    setTimeout(() => container.removeChild(alert), 500);
  }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
  const message = localStorage.getItem('toastMessage');
  if (message) {
    toast(message);
    localStorage.removeItem('toastMessage');
  }
});
