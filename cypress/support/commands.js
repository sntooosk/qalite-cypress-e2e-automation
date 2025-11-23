import Login from './pages/Login'
import users from '../fixtures/users.json'

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    Login.accessLoginPage()
    Login.fillCredentials({ email, password })
    Login.submitForm()
    Login.validateSuccess()
  },
)
