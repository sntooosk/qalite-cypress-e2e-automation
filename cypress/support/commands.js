import Login from './pages/Login'
import users from '../fixtures/users.json'

const clearSavedSessions = () => {
  if (
    Cypress.session &&
    typeof Cypress.session.clearAllSavedSessions === 'function'
  ) {
    Cypress.session.clearAllSavedSessions()
  }
}

Cypress.Commands.add('resetSession', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.window().then((win) => {
    win.localStorage?.clear()
  })
  clearSavedSessions()
})

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    const performLogin = () => {
      cy.resetSession()
      Login.accessLoginPage()
      Login.fillCredentials({ email, password })
      Login.submitForm()
      Login.validateSuccess()
    }

    if (Cypress.session && typeof cy.session === 'function') {
      cy.session([email, password], performLogin, { cacheAcrossSpecs: true })
    } else {
      performLogin()
    }
  },
)
