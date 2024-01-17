const textInput = document.querySelector('#name-input')
const greeting = document.querySelector('#name-output')


textInput.addEventListener('input', onInputChange)

function onInputChange(e) {
const userName = e.currentTarget.value.trim()
    greeting.textContent = userName === "" ? 'Anonymous' : userName
}