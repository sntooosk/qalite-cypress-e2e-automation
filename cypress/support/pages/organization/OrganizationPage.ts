import { BasePage } from '../../core/BasePage'
import { organizationElements, OrganizationElements } from './organizationElements'

type OrganizationId = string

export class OrganizationPage extends BasePage {
  private createdOrganizationName: string | null = null
  private readonly organizationIdKey = 'organizationId'

  constructor(private readonly elements: OrganizationElements) {
    super()
  }

  open(): Cypress.Chainable<Window> {
    return this.visit('/admin')
  }

  startNewOrganization(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.newOrganizationButton)
  }

  enterOrganizationName(name: string): Cypress.Chainable<JQuery<HTMLElement>> {
    this.createdOrganizationName = name
    return this.typeText(this.elements.organizationNameInput, name)
  }

  saveOrganization(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.saveOrganizationButton)
  }

  openManagementMenu(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.manageOrganizationButton)
  }

  deleteOrganization(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.deleteOrganizationButton)
  }

  confirmOrganizationDeletion(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.confirmDeleteButton)
  }

  rememberCreatedOrganizationId(): Cypress.Chainable<void> {
    const organizationName = this.ensureOrganizationName()

    return cy
      .contains(this.elements.organizationCardPrefix, organizationName)
      .invoke('attr', 'data-testid')
      .then((idValue) => {
        const organizationId = idValue?.replace('organization-card-', '')

        if (!organizationId) {
          throw new Error('Unable to capture the created organization ID.')
        }

        this.setOrganizationId(organizationId)
      })
  }

  selectSavedOrganization(): Cypress.Chainable<JQuery<HTMLElement>> {
    const organizationId = this.getOrganizationId()
    return this.click(this.elements.organizationCard(organizationId))
  }

  private ensureOrganizationName(): string {
    if (!this.createdOrganizationName) {
      throw new Error('Organization name must be provided before saving it.')
    }

    return this.createdOrganizationName
  }

  private getOrganizationId(): OrganizationId {
    const organizationId = Cypress.env(this.organizationIdKey) as OrganizationId | undefined

    if (!organizationId) {
      throw new Error(
        'No organization ID was cached. Create an organization before selecting it.',
      )
    }

    return organizationId
  }

  private setOrganizationId(organizationId: OrganizationId): void {
    Cypress.env(this.organizationIdKey, organizationId)
  }
}

export const organizationPage = new OrganizationPage(organizationElements)
