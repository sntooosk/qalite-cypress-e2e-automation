import BasePage from '../BasePage'
import { ELEMENTS as loginElements } from './elements'

class LoginPage extends BasePage {
  open() {
    this.visit('/')
  }

  typeEmail(email) {
    this.typeText(loginElements.emailField, email)
  }

  typePassword(password) {
    this.typeText(loginElements.passwordField, password)
  }

  submit() {
    this.click(loginElements.submitButton)
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
    this.expectUrlToInclude('/admin')
  }

  expectFeedbackMessage(message) {
    this.shouldContainText(loginElements.feedbackMessage, message)
  }
}

export default new LoginPage()
