
let video = document.querySelector('#video')
let videoHolder = document.querySelector('#video-holder')
let playBtn = document.querySelector('#play')
let videoTitle = document.querySelector('#video-title')
let phoneInput = document.querySelector('#phone-input')
let phoneTitle = document.querySelector('#phone-title')
let phoneHolder = document.querySelector('#phone-holder')
let phoneSection = document.querySelector('#contact-section')
let contactForm = document.querySelector('#contact-form')
let submitBtn = document.querySelector('#submit-btn')
let loginBtn = document.querySelectorAll('.header__login')
let userOwnBtn = document.querySelectorAll('.header__user-item')
let contactMainSection = document.querySelector('.contact-section-inner')
let contactSuccessSection = document.querySelector('.contact-success-wrapper')
let burger = document.querySelector('#burger')
let overlay = document.querySelector('.overlay')
let body = document.querySelector('body')
let ownPhone = document.getElementById('own-phone')
let username = document.querySelector('#username')
let overlayBottom = document.querySelector('.overlay__name-wrapper')

let token = window.localStorage.getItem('_auth__token');
let userName = window.localStorage.getItem('user__name');
let userPhoneNumber = window.localStorage.getItem('phoneNumber')

if (token) {
    loginBtn.forEach(item => {
        item.style.display = 'none'
    })
    userOwnBtn.forEach(item => {
        item.innerHTML = userName.split('')[0].toUpperCase()
    })
    ownPhone.innerHTML = userPhoneNumber
    username.innerHTML = userName
} else {
    userOwnBtn.forEach(item => {
        item.style.display = 'none'
    })
    overlayBottom.style.display = 'none'
    loginBtn.forEach(item => {
        item.style.display = 'flex'
    })
}

let count = 0
videoHolder.addEventListener('click', function () {
    playBtn.classList.toggle('hide--btn')
    count++
    if (count % 2 === 0) {
        video.pause();
        // video.removeAttribute('controls','')
        // console.log('fuck')
    } else {
        video.play()
    }
    video.play()
    videoTitle.style.fontSize = '0'

    setTimeout(() => {
        video.setAttribute('controls', 'controls')
    }, 10)
    console.log(count)
})


phoneHolder.addEventListener('click', function () {
    phoneTitle.style.fontSize = '0'
    phoneInput.classList.add('input--show')
})

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let numbers = /^[+]?[0-9]+$/;

    const obj = JSON.stringify({
        tel_number: phoneInput.value
    })

    if (phoneInput.value.match(numbers) && phoneInput.value.length == 13) {
        phoneHolder.classList.remove('error')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: obj,
            redirect: 'follow'
        };

        fetch("http://localhost:4500/api/contact", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 201) {
                    contactSuccessSection.classList.add('visible-success')
                    contactForm.reset();
                    phoneInput.classList.remove('input--show')
                    phoneTitle.style.fontSize = '20px'
                    contactSuccessSection.style.transition = 'all ease 0'

                    setTimeout(() => {
                        contactSuccessSection.classList.remove('visible-success')
                    }, 3000)
                }
            })
            .catch(error => console.log('error', error));
    } else {
        phoneHolder.classList.add('error')
    }

})

burger.addEventListener('click', function () {
    this.classList.toggle('cross')
    overlay.classList.toggle('show-overlay')
    body.classList.toggle('no-scroll')
})

overlay.addEventListener('click', function () {
    this.classList.remove('show-overlay')
    burger.classList.remove('cross')
    body.classList.remove('no-scroll')
})