const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', onBtnSubmit)

function onBtnSubmit(event) {
    event.preventDefault();
    const form = event.target
    const mail = form.elements.email.value
    const password = form.elements.password.value
    if (mail === '' || password === '') {
        return alert('All form fields must be filled in')
    }
    const result = {
        email: mail.trim(),
        password: password.trim()
    }
    loginForm.reset()
    return console.log(result)    
}
