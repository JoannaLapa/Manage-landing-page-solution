const toggleButton = document.querySelector('.nav__mobile-toggle-button')
const primaryNavigation = document.querySelector('.primary-nav')
const headerContainer = document.querySelector('.header__container')
const openingIcon = document.querySelector('.nav__mobile-icon--open')
const closingIcon = document.querySelector('.nav__mobile-icon--close')

const switchMobileNavigation = () => {
    headerContainer.hasAttribute('data-visible')
    ? toggleButton.setAttribute('aria-expanded', 'false')
    : toggleButton.setAttribute('aria-expanded', 'true')
headerContainer.toggleAttribute('data-overlay')
primaryNavigation.toggleAttribute('data-visible')
openingIcon.toggleAttribute('data-visible')
closingIcon.toggleAttribute('data-visible')
}

toggleButton.addEventListener('click', switchMobileNavigation)
