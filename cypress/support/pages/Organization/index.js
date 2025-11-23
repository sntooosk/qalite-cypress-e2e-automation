import BasePage from '../BasePage'
import { ELEMENTS as organizationElements } from './elements'

class OrganizationPage extends BasePage {
  constructor() {
    super()
    this.createdOrganizationName = ''
  }

  open() {
    this.visit('/admin')
  }

  startNewOrganization() {
    this.click(organizationElements.newOrganizationButton)
  }

  enterOrganizationName(name) {
    this.createdOrganizationName = name
    this.typeText(organizationElements.organizationNameInput, name)
  }

  saveOrganization() {
    this.click(organizationElements.saveOrganizationButton)
  }

  openManagementMenu() {
    this.click(organizationElements.manageOrganizationButton)
  }

  deleteOrganization() {
    this.click(organizationElements.deleteOrganizationButton)
  }
  confirmOrganization() {
    this.click(organizationElements.confirmDeleteButton)
  }

  rememberCreatedOrganizationId() {
    if (!this.createdOrganizationName) {
      throw new Error('Organization name must be provided before saving it.')
    }

    cy.contains(
      organizationElements.organizationCardPrefix,
      this.createdOrganizationName,
    )
      .invoke('attr', 'data-testid')
      .then((idValue) => {
        const organizationId = idValue?.replace('organization-card-', '')

        if (!organizationId) {
          throw new Error('Unable to capture the created organization ID.')
        }

        Cypress.env('organizationId', organizationId)
      })
  }

  selectSavedOrganization() {
    const organizationId = Cypress.env('organizationId')

    if (!organizationId) {
      throw new Error(
        'No organization ID was cached. Create an organization before selecting it.',
      )
    }

    this.click(organizationElements.organizationCard(organizationId))
  }
}

export default new OrganizationPage()
