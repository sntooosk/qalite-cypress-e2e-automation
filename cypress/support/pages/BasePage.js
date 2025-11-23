class BasePage {
  visit(path = '/') {
    cy.visit(path)
  }

  getElement(selector) {
    return cy.get(selector)
  }

  click(selector) {
    this.getElement(selector).click()
  }

  typeText(selector, value) {
    this.getElement(selector).clear().type(value)
  }

  shouldContainText(selector, text) {
    this.getElement(selector).should('contain', text)
  }

  expectUrlToInclude(pathFragment) {
    cy.url().should('include', pathFragment)
  }
}

export default BasePage
