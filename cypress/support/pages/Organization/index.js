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
      throw new Error(
        'Nenhum nome de organização foi informado antes do salvamento',
      )
    }

    cy.contains(el.cardOrgPrefix, organizationName).then(($card) => {
      const value = $card.attr('data-testid')
      const id = value?.replace('organization-card-', '')

      if (!id) {
        throw new Error('Falha ao identificar o ID da organização criada')
      }

      Cypress.env('orgId', id)
    })
  }

  clickSavedOrganizationCard() {
    const id = Cypress.env('orgId')

    if (!id) {
      throw new Error('ID da organização não foi salvo anteriormente')
    }

    cy.get(el.cardOrg(id)).click()
  }
}

export default new OrganizationPage()
