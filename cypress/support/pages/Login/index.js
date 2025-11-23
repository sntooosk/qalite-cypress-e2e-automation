const el = require('./elements').ELEMENTS

class LoginPage {
  accessLoginPage() {
    cy.visit('/')
  }

  waitForLoginForm() {
    cy.get(el.inputEmail).should('be.visible')
    cy.get(el.inputPassword).should('be.visible')
    cy.get(el.buttonSubmit).should('be.enabled')
  }

  typeEmail(email) {
    this.typeIntoField(el.inputEmail, email)
  }

  typePassword(password) {
    this.typeIntoField(el.inputPassword, password)
  }

  submitForm() {
    cy.get(el.buttonSubmit).click()
  }

  loginWithCredentials({ email, password }) {
    this.accessLoginPage()
    this.waitForLoginForm()
    this.fillCredentials({ email, password })
    this.submitForm()
    this.validateSuccess()
  }

  fillCredentials({ email, password }) {
    if (email) this.typeEmail(email)
    if (password) this.typePassword(password)
  }

  validateSuccess() {
    cy.url().should('contain', '/admin')
  }

  validateAuthenticatedState() {
    cy.window().then(({ localStorage }) => {
      const hasFirebaseSession = Object.keys(localStorage).some((key) =>
        key.includes('firebase'),
      )

      expect(hasFirebaseSession, 'firebase session stored').to.be.true
    })

    this.validateSuccess()
  }

  validateMessage(message) {
    cy.get(el.alertMessage).should('contain', message)
  }

  typeIntoField(selector, value) {
    cy.get(selector).clear()
    cy.get(selector).type(value)
  }
}

export default new LoginPage()
