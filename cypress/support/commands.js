import LoginPage from './pages/Login'
import users from '../fixtures/users.json'

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    LoginPage.open()
    LoginPage.fillCredentials({ email, password })
    LoginPage.submit()
    LoginPage.expectSuccessfulLogin()
  },
)
