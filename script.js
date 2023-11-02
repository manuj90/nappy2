document.getElementById('theme-toggle').addEventListener('click', function () {
  let themeStyle = document.getElementById('theme-style');
  if (themeStyle.getAttribute('href') == '/style/dark-style.css') {
    themeStyle.href = '/style/light-style.css';
  } else {
    themeStyle.href = '/style/dark-style.css';
  }
});
