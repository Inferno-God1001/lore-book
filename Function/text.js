window.addEventListener('DOMContentLoaded', () => {
  fetch('../doc.json/updateAndNews.json')
    .then(response => response.json())
    .then(data => {
      const content = data.general[0];
      document.getElementById('content').innerText = content;
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
      document.getElementById('content').innerText = 'Error loading text. Please try again later.';
    });
});
