import BasePage from '../BasePage'
import { ELEMENTS } from './elements'

class LoginPage extends BasePage {
  open() {
    this.visit('/login')
  }

  typeEmail(email) {
    this.typeText(ELEMENTS.emailField, email)
  }

  typePassword(password) {
    this.typeText(ELEMENTS.passwordField, password)
  }

  submit() {
    this.click(ELEMENTS.submitButton)
  }

  fillCredentials({ email, password }) {
    if (email) {
      this.typeEmail(email)
    }

    if (password) {
      this.typePassword(password)
    }
  }

  expectSuccessfulLogin() {
    cy.url().should('include', '/admin')
  }

  expectFeedbackMessage(message) {
    this.shouldContainText(ELEMENTS.feedbackMessage, message)
  }
}

export default new LoginPage()
