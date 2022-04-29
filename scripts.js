const checked = document.getElementById('checked');

checked.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
