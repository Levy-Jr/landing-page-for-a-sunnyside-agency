const navToggle = document.querySelector('.mobile-nav-toggle')
const primaryNav = document.querySelector('#primary-navigation')

navToggle.addEventListener('click', () => {
  /* does primaryNav have the attribute? If not... If yes... */
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true)
  primaryNav.toggleAttribute('data-visible')
})