import { BasePage } from '../../core/BasePage'
import { loginElements, LoginElements } from './loginElements'

export class LoginPage extends BasePage {
  constructor(private readonly elements: LoginElements) {
    super()
  }

  open(): Cypress.Chainable<Window> {
    return this.visit('/')
  }

  typeEmail(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.typeText(this.elements.emailField, email)
  }

  typePassword(password: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.typeText(this.elements.passwordField, password)
  }

  submit(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.submitButton)
  }

  fillCredentials({ email, password }: { email?: string; password?: string }): void {
    if (email) {
      this.typeEmail(email)
    }

    if (password) {
      this.typePassword(password)
    }
  }

  expectSuccessfulLogin(): Cypress.Chainable<RegExpMatchArray | null> {
    return this.expectUrlToInclude('/admin')
  }

  expectFeedbackMessage(message: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.shouldContainText(this.elements.feedbackMessage, message)
  }
}

export const loginPage = new LoginPage(loginElements)
