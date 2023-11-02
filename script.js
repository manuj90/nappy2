document.addEventListener('DOMContentLoaded', (event) => {
  var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var bodyElement = document.body;
  if (isDarkMode) {
    bodyElement.classList.add('dark');
  } else {
    bodyElement.classList.add('light');
  }
});

function toggleMode() {
  var bodyElement = document.body;
  if (bodyElement.classList.contains('dark')) {
    bodyElement.classList.remove('dark');
    console.log('quiero remover esto');
    bodyElement.classList.add('light');
  } else {
    bodyElement.classList.remove('light');
    console.log('quiero que se oscuro');
    bodyElement.classList.add('dark');
  }
}
