const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');
const navCloser = document.querySelector('.nav__closer');
const navigation = document.querySelector('.features__navigation');
const navigationElements = [...document.querySelectorAll('.features__navigation-element')];
const features = [...document.querySelectorAll('.features__feature')];


// this event listener handles state of nav-bar
document.addEventListener ('click', e => {
    const isThisBurger = e.target === burger;
    const isThisNavCloser = e.target === navCloser;

    isThisBurger && nav.classList.add('active');
    isThisNavCloser && nav.classList.remove('active');
})
    

// this handles state of features i.e. which feature is showing
navigationElements.forEach(element => {
    element.addEventListener('click', () => {
        navigationElements.forEach(element => {
            element.classList.remove('active');
        })

        element.classList.add('active');

        const i = navigationElements.indexOf(element);
        features.forEach(feature => {
            feature.classList.remove('active');
        })
        features[i].classList.add('active');
    })
})


// this handles opening of answers
const questionBoxes = [...document.querySelectorAll('.fqa__question')];

questionBoxes.forEach(questionBox => {
    questionBox.addEventListener('click', (e) => {

        const answer = questionBox.querySelector('.answer');

        if (!questionBox.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
        
        e.target.closest('.fqa__question').classList.toggle('active');
    })
})


// form validation

const email = document.getElementById('email');
const emailField = document.querySelector('.email-field');
const errorMessage = document.querySelector('.error-message');
const form = document.forms[0];


const isEmailFormatValid = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email.value);
}

const validateEmail = () => {

    let isEmailValid
   
    const isEmailInputEmpty = email.value === '';

    if (isEmailInputEmpty) {
        emailField.classList.add('error');
        errorMessage.textContent = 'This field is required';
        isEmailValid = false;
    } else if (!isEmailFormatValid()) {
        emailField.classList.add('error');
        errorMessage.textContent = "Whoops, make sure it's an email";
        isEmailValid = false;
    } else {
        emailField.classList.remove('error');
        isEmailValid = true;
    }

    return isEmailValid;
}

// form submit 

form.addEventListener('submit', e => {
    e.preventDefault();
    validateEmail();
})





