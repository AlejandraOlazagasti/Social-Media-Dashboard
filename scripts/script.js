const toggle = document.getElementById(`toggle`)
const toggleCircle = document.getElementById(`toggle-circle`)
const toggleLabel = document.getElementById(`toggle-label`)

const changeDarkLight = () => {
  document.body.classList.toggle(`light-mode`)
  // toggleCircle.classList.toggle( (toggleLabel.textContent === `Light Mode`) ? `toggle__circle--right`: `toggle__circle--left`) 
  
  if (toggleLabel.textContent === `Dark Mode`) {
    toggleCircle.classList.toggle(`toggle__circle--right`)
    toggleLabel.textContent = `Light Mode`
  } else {
    toggleCircle.classList.toggle(`toggle__circle--left`)
    toggleLabel.textContent = `Dark Mode`
  } 
}

toggle.addEventListener(`click`, changeDarkLight)
