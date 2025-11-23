import { loginPage } from './pages/login/LoginPage'
import users from '../fixtures/users.json'

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('login', (email = users.email, password = users.password) => {
  loginPage.open()
  loginPage.fillCredentials({ email, password })
  loginPage.submit()
  loginPage.expectSuccessfulLogin()
})

export {}
