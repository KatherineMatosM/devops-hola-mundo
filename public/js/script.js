const statusBtn = document.getElementById('statusBtn');
const statusMessage = document.getElementById('statusMessage');

statusBtn.addEventListener('click', () => {
  statusMessage.classList.toggle('hidden');

  if (!statusMessage.classList.contains('hidden')) {
    statusBtn.textContent = 'Ocultar estado del proyecto';
  } else {
    statusBtn.textContent = 'Ver estado del proyecto';
  }
});