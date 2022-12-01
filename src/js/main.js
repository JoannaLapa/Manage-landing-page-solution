'use srtict';

const closingIcon = document.querySelector('.nav__mobile-icon--close');
const footerInput = document.querySelector('.footer__input');
const headerContainer = document.querySelector('.header__container');
const inputErrorStyles = document.querySelector('.footer__input--error');
const msgText = document.querySelector('.footer__input-msgtext ');
const openingIcon = document.querySelector('.nav__mobile-icon--open');
const primaryNavigation = document.querySelector('.primary-nav');
const submitButton = document.querySelector('.button--small');
const toggleButton = document.querySelector('.nav__mobile-toggle-button');

/////MOBILE NAVIGATION//////////////////////////////////
const switchMobileNavigation = () => {
	primaryNavigation.hasAttribute('data-visible')
		? toggleButton.setAttribute('aria-expanded', 'false')
		: toggleButton.setAttribute('aria-expanded', 'true');
	headerContainer.toggleAttribute('data-overlay');
	primaryNavigation.toggleAttribute('data-visible');
	openingIcon.toggleAttribute('data-visible');
	closingIcon.toggleAttribute('data-visible');
	document.querySelector('body').classList.toggle('block-scroll');
};

////////////////////////////////////////////
// SLIDER
const slider = new A11YSlider(document.querySelector('.slider'), {
	autoplaySpeed: 2500,
	adaptiveHeight: true,
	centerMode: true,
	dots: true,
	arrows: false,
	autoplay: true,
	responsive: {
		768: {
			dots: false,
			slidesToShow: 2,
		},
		1200: {
			slidesToShow: null,
		},
	},
});

// /////////////////////////////////////////
// EMAIL VALIDATION (CTA SECTION)
const makeIfCorrect = () => {
	footerInput.classList.remove('footer__input--error');
	msgText.textContent = 'Your email was added successfully!';
	footerInput.setAttribute('aria-invalid', 'false');
	footerInput.value = '';
};

const makeIfNotCorrect = () => {
	msgText.textContent = 'Please insert a valid e-mail';
	footerInput.classList.add('footer__input--error');
	footerInput.setAttribute('aria-invalid', 'true');
	footerInput.value = '';
};

const checkIfCorrect = input => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	re.test(input.value) ? makeIfCorrect() : makeIfNotCorrect();
};

////ADDEVENTLISTENERS
submitButton.addEventListener('click', e => {
	e.preventDefault();
	checkIfCorrect(footerInput);
});

toggleButton.addEventListener('click', switchMobileNavigation);
