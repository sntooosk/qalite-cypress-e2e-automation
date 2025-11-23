export abstract class BasePage {
  protected visit(path = '/'): Cypress.Chainable<Window> {
    return cy.visit(path)
  }

  protected getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector)
  }

  protected click(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElement(selector).click()
  }

  protected typeText(
    selector: string,
    value: string,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElement(selector).clear().type(value)
  }

  protected shouldContainText(
    selector: string,
    text: string,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElement(selector).should('contain', text)
  }

  protected expectUrlToInclude(fragment: string): Cypress.Chainable<string> {
    return cy.url().should('include', fragment)
  }
}
