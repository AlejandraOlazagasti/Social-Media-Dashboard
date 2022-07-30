const toggle = document.getElementById(`toggle`)
const toggleCircle = document.getElementById(`toggle-circle`)
const toggleLabel = document.getElementById(`toggle-label`)

const changeDarkLight = () => {
  document.body.classList.toggle(`light-mode`)
  toggleCircle.classList.toggle(`toggle__circle--left`)
  toggleCircle.classList.toggle(`toggle__circle--right`)

  if(toggleCircle.classList.contains('toggle__circle--right'))
    toggleLabel.textContent = `Light Mode`
  else
    toggleLabel.textContent = `Dark Mode`
}

toggle.addEventListener(`click`, changeDarkLight)
