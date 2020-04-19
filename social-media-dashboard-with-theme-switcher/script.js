function changeTheme (checkedState) {
  if (checkedState) {
    document.documentElement.style.setProperty('--global-bg-color', 'hsl(230, 17%, 14%)')
    document.documentElement.style.setProperty('--primary-text-color', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--secondary-text-color', 'hsl(228, 34%, 66%)')
    document.documentElement.style.setProperty('--card-bg-color', 'hsl(228, 28%, 20%)')
    document.documentElement.style.setProperty('--card-bg-color-hover', '#333a56')
  } else {
    document.documentElement.style.setProperty('--global-bg-color', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--primary-text-color', 'hsl(230, 17%, 14%)')
    document.documentElement.style.setProperty('--secondary-text-color', 'hsl(228, 12%, 44%)')
    document.documentElement.style.setProperty('--card-bg-color', 'hsl(227, 47%, 96%)')
    document.documentElement.style.setProperty('--card-bg-color-hover', '#e1e3f0')
  }
}

const themeToggler = document.getElementsByClassName('toggle-button')[0]
themeToggler.addEventListener('input', e => changeTheme(e.target.checked))
