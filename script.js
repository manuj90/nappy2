document.addEventListener('DOMContentLoaded', (event) => {
  var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var bodyElement = document.body;
  var themeMetaTag = document.querySelector('meta[name="theme-color"]');

  if (isDarkMode) {
    bodyElement.classList.add('dark');
    themeMetaTag.setAttribute('content', '#colorForDarkMode');
  } else {
    bodyElement.classList.add('light');
    themeMetaTag.setAttribute('content', '#colorForLightMode');
  }
});

function toggleMode() {
  var bodyElement = document.body;
  var themeMetaTag = document.querySelector('meta[name="theme-color"]');

  if (bodyElement.classList.contains('dark')) {
    bodyElement.classList.remove('dark');
    bodyElement.classList.add('light');
    themeMetaTag.setAttribute('content', '#colorForLightMode');
  } else {
    bodyElement.classList.remove('light');
    bodyElement.classList.add('dark');
    themeMetaTag.setAttribute('content', '#colorForDarkMode');
  }
}
