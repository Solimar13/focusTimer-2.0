import { lightThemeButton, darkThemeButton } from "./elements.js";

export default function Theme() {
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
  }

  function toggle(hideButton, showButton) {
    if(localStorage.getItem('theme') === 'dark-theme') {
      showButton.classList.remove('hide')
      hideButton.classList.add('hide')
      setTheme('light-theme')
    } else {
      showButton.classList.remove('hide')
      hideButton.classList.add('hide')
      setTheme('dark-theme')
    }
  }

  return {
    toggle
  }
}