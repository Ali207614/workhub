let token = window.localStorage.getItem('_auth__token');
if(token) {
    window.location = '/'
}

let registerForm = document.querySelector('#register-form')
let userName = document.querySelector('#username')
let phoneNumber = document.querySelector('#register-number')
let password = document.querySelector('#register-password')
let phoneError = document.querySelector('#register-phone-error')
let passwordError = document.querySelector('#register-password-error')

registerForm.addEventListener('submit', e => {
    e.preventDefault()
    let userPhoneNumber
    let userPassword

    let numbers = /^[+]?[0-9]+$/;

    if (phoneNumber.value.match(numbers) && phoneNumber.value.length === 13) {
        phoneError.classList.remove('error')
        userPhoneNumber = phoneNumber.value
    } else {
        phoneError.classList.add('error')
    }

    if (password.value.length == 6) {
        passwordError.classList.remove('error')
        userPassword = password.value
    } else {
        passwordError.classList.add('error')
    }

    let obj = JSON.stringify({
        username: userName.value,
        tel_number: userPhoneNumber,
        password: userPassword
    })

    if (userName.value && userPhoneNumber && userPassword) {
        // request('/register', 'POST', obj)
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: obj,
            redirect: 'follow'
        };

        fetch("http://localhost:4500/register", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.token) {
                    window.localStorage.setItem('_auth__token', result.token)
                    window.localStorage.setItem('user__name', result.username)
                    window.localStorage.setItem('phoneNumber', result.phoneNumber)
                    window.location = '/'
                } else {
                    alert(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }
})