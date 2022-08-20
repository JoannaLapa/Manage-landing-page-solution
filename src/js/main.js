////////////////////////////////////////////
// SLIDER
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
	arrows: false,
	autoplay: true,
	responsive: {
		768: {
			dots: false
		},
	}
  });

// /////////////////////////////////////////
// EMAIL VALIDATION (CTA SECTION)

const toggleButton = document.querySelector('.nav__mobile-toggle-button')
const primaryNavigation = document.querySelector('.primary-nav')
const headerContainer = document.querySelector('.header__container')
const openingIcon = document.querySelector('.nav__mobile-icon--open')
const closingIcon = document.querySelector('.nav__mobile-icon--close')
const footerInput = document.querySelector('.footer__input')
const msgText = document.querySelector('.footer__input-msgtext ')
const inputErrorStyles = document.querySelector('.footer__input--error')
const submitButton = document.querySelector('.button--small')

const switchMobileNavigation = () => {
	headerContainer.hasAttribute('data-visible')
		? toggleButton.setAttribute('aria-expanded', 'false')
		: toggleButton.setAttribute('aria-expanded', 'true')
	headerContainer.toggleAttribute('data-overlay')
	primaryNavigation.toggleAttribute('data-visible')
	openingIcon.toggleAttribute('data-visible')
	closingIcon.toggleAttribute('data-visible')
}

const makeIfCorrect = () => {
	footerInput.classList.remove('footer__input--error')
	msgText.textContent = 'Your email was added successfully!'
	footerInput.setAttribute('aria-invalid', 'false')
	footerInput.value = ''
}

const makeIfNotCorrect = () => {
	msgText.textContent = 'Please insert a valid e-mail'
	footerInput.classList.add('footer__input--error')
	footerInput.setAttribute('aria-invalid', 'true')
	footerInput.value = ''
}

const checkIfCorrect = input => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	re.test(input.value) ? makeIfCorrect() : makeIfNotCorrect()
}

submitButton.addEventListener('click', e => {
	e.preventDefault()
	checkIfCorrect(footerInput)
})
toggleButton.addEventListener('click', switchMobileNavigation)
