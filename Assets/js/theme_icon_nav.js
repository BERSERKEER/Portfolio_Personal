function changeFavicon() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const favicon = document.getElementById('favicon');
    
    if (darkModeMediaQuery.matches) {
      favicon.href = '../../assets/images/icon/icon_portfolio_light.svg'; // Icon dark theme
    } else {
      favicon.href = '../../assets/images/icon/icon_portfolio_dark.svg'; // Icon light theme
    }
  }

  window.onload = changeFavicon;
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeFavicon);