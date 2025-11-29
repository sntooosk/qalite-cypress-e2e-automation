import BasePage from '../BasePage'
import { ELEMENTS } from './elements'

class OrganizationPage extends BasePage {
  constructor() {
    super()
    this.createdOrganizationName = ''
  }

  open() {
    this.visit('/admin')
  }

  startNewOrganization() {
    this.click(ELEMENTS.newOrganizationButton)
  }
  startNewStore() {
    this.click(ELEMENTS.newStoreOrganization)
  }

  enterOrganizationName(name) {
    this.createdOrganizationName = name
    this.typeText(ELEMENTS.organizationNameInput, name)
  }
  enterOrganizationNameSettings(name) {
    this.createdOrganizationName = name
    this.typeText(ELEMENTS.organizationNameSettingsInput, name)
  }

  saveOrganization() {
    this.click(ELEMENTS.saveOrganizationButton)
  }
  updateOrganization() {
    this.click(ELEMENTS.updateOrganizationButton)
  }

  openManagementMenu() {
    this.click(ELEMENTS.manageOrganizationButton)
  }

  deleteOrganization() {
    this.click(ELEMENTS.deleteOrganizationButton)
  }
  confirmOrganization() {
    this.click(ELEMENTS.confirmDeleteButton)
  }

  rememberCreatedOrganizationId() {
    if (!this.createdOrganizationName) {
      throw new Error('Organization name must be provided before saving it.')
    }

    cy.contains(ELEMENTS.organizationCardPrefix, this.createdOrganizationName)
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
      this.click(ELEMENTS.organizationCard('fPfUlZajrgFsipvEi9kd'))
    } else {
      this.click(ELEMENTS.organizationCard(organizationId))
    }
  }
}

export default new OrganizationPage()
