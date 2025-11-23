import { ELEMENTS as el } from './elements'

class OrganizationPage {
  constructor() {
    this.lastOrganizationName = ''
  }

  accessOrganizationPage() {
    cy.visit('/')

    cy.getCookies().then((cookies) => {
      const hasAuthCookie = cookies.some(({ name }) => {
        const lowerCaseName = name.toLowerCase()

        return (
          lowerCaseName.includes('auth') || lowerCaseName.includes('session')
        )
      })

      if (hasAuthCookie) {
        cy.visit('/admin')

        cy.url().then((url) => {
          const isLoggedIn = url.includes('/admin')

          if (!isLoggedIn) {
            cy.login()

            return
          }

          cy.url().should('include', '/admin')
        })

        return
      }

      cy.login()
    })
  }

  clickNewOrganizationButton() {
    this.click(el.buttonNewOrg)
  }

  clickButtonGerenciar() {
    this.click(el.buttonGerenciarOrg)
  }

  clickButtonApagarOrg() {
    this.click(el.buttonApagarOrg)
  }

  typeNewOrganization(name) {
    this.lastOrganizationName = name
    this.fillField(el.inputNewOrg, name)
  }

  saveOrganization() {
    this.click(el.buttonSaveOrg)
  }

  storeCreatedOrganizationId() {
    const organizationName = this.lastOrganizationName

    if (!organizationName) {
      throw new Error('No organization name was provided before saving')
    }

    cy.contains(el.cardOrgPrefix, organizationName)
      .invoke('attr', 'data-testid')
      .then((value) => {
        const id = value?.replace('organization-card-', '')

        if (!id) {
          throw new Error(
            'Failed to capture the ID of the created organization',
          )
        }

        Cypress.env('orgId', id)
      })
  }

  clickSavedOrganizationCard() {
    const id = Cypress.env('orgId')

    if (!id) {
      throw new Error('Organization ID was not saved previously')
    }

    cy.get(el.cardOrg(id)).click()
  }

  click(selector) {
    cy.get(selector).click()
  }

  fillField(selector, value) {
    cy.get(selector).clear()
    cy.get(selector).type(value)
  }
}

export default new OrganizationPage()
