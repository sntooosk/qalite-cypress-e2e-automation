import { ELEMENTS as el } from './elements'

class OrganizationPage {
  constructor() {
    this.lastOrganizationName = ''
  }

  accessOrganizationPage() {
    cy.login()
  }

  clickNewOrganizationButton() {
    cy.get(el.buttonNewOrg).click()
  }

  clickButtonGerenciar() {
    cy.get(el.buttonGerenciarOrg).click()
  }

  clickButtonApagarOrg() {
    cy.get(el.buttonApagarOrg).click()
  }

  typeNewOrganization(name) {
    this.lastOrganizationName = name
    cy.get(el.inputNewOrg).clear()
    cy.get(el.inputNewOrg).type(name)
  }

  saveOrganization() {
    cy.get(el.buttonSaveOrg).click()
  }

  storeCreatedOrganizationId() {
    const organizationName = this.lastOrganizationName

    if (!organizationName) {
      throw new Error('No organization name was provided before saving')
    }

    cy.contains(el.cardOrgPrefix, organizationName).then(($card) => {
      const value = $card.attr('data-testid')
      const id = value?.replace('organization-card-', '')

      if (!id) {
        throw new Error('Failed to capture the ID of the created organization')
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
}

export default new OrganizationPage()
