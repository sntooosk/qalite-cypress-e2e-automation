import './commands'
import 'cypress-xpath'

Cypress.on('uncaught:exception', () => false)

const preservedCookies = ['firebase:authUser']

Cypress.Cookies.defaults({
  preserve: preservedCookies,
})
