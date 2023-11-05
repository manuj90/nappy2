document.getElementById('theme-toggle').addEventListener('click', function () {
  let themeStyle = document.getElementById('theme-style');
  let themeImage = document.querySelector('#theme-toggle img');
  let themeImageWebP = document.querySelector(
    '#theme-toggle source[type="image/webp"]'
  );
  let themeImagePNG = document.querySelector(
    '#theme-toggle source[type="image/png"]'
  );

  if (themeStyle.getAttribute('href') == '/style/dark-style.css') {
    themeStyle.href = '/style/light-style.css';
    themeImageWebP.srcset = '/assets/moon.webp';
    themeImagePNG.srcset = '/assets/moon.png';
    themeImage.src = '/assets/moon.png';
    themeImage.alt = 'Switch to dark theme';
    localStorage.setItem('theme', 'light');
  } else {
    themeStyle.href = '/style/dark-style.css';
    themeImageWebP.srcset = '/assets/sun.webp';
    themeImagePNG.srcset = '/assets/sun.png';
    themeImage.src = '/assets/sun.png';
    themeImage.alt = 'Switch to light theme';
    localStorage.setItem('theme', 'dark');
  }
});

// Al cargar la página, verifica el tema guardado en localStorage
document.addEventListener('DOMContentLoaded', (event) => {
  let themeStyle = document.getElementById('theme-style');
  let themeImage = document.querySelector('#theme-toggle img');
  let themeImageWebP = document.querySelector(
    '#theme-toggle source[type="image/webp"]'
  );
  let themeImagePNG = document.querySelector(
    '#theme-toggle source[type="image/png"]'
  );

  let savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    themeStyle.href = '/style/dark-style.css';
    themeImageWebP.srcset = '/assets/sun.webp';
    themeImagePNG.srcset = '/assets/sun.png';
    themeImage.src = '/assets/sun.png';
    themeImage.alt = 'Switch to light theme';
  } else if (savedTheme === 'light') {
    themeStyle.href = '/style/light-style.css';
    themeImageWebP.srcset = '/assets/moon.webp';
    themeImagePNG.srcset = '/assets/moon.png';
    themeImage.src = '/assets/moon.png';
    themeImage.alt = 'Switch to dark theme';
  }
});
