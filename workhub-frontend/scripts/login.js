let token = window.localStorage.getItem('_auth__token');
if(token) {
    window.location = '/'
}

let phoneNumber = document.querySelector('#login-number')
let form = document.querySelector('#login-form')
let phoneError = document.querySelector('#phone-error')
let passwordError = document.querySelector('#password-error')
let password = document.querySelector('#login-password')

form.addEventListener('submit', e => {
    e.preventDefault();
    let userPhoneNumber
    let userPassword
    let numbers = /^[+]?[0-9]+$/;

    if(phoneNumber.value.match(numbers) && phoneNumber.value.length === 13) {
        phoneError.classList.remove('error')
        userPhoneNumber = phoneNumber.value
    } else {
        phoneError.classList.add('error')
    }

    if(password.value.length === 6) {
        passwordError.classList.remove("error");
        userPassword = password.value
    } else {
        passwordError.classList.add('error')
    }

    let obj = JSON.stringify({
        tel_number: userPhoneNumber,
        password: userPassword
    })

    if(password.value.length === 6 && phoneNumber.value.match(numbers) && phoneNumber.value.length === 13) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: obj,
            redirect: 'follow'
        };

        fetch("http://localhost:4500/login", requestOptions)
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