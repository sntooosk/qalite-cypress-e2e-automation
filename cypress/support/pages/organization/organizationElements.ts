export interface OrganizationElements {
  newOrganizationButton: string
  organizationNameInput: string
  saveOrganizationButton: string
  manageOrganizationButton: string
  deleteOrganizationButton: string
  confirmDeleteButton: string
  organizationCardPrefix: string
  organizationCard: (id: string) => string
}

export const organizationElements: OrganizationElements = {
  newOrganizationButton: '[data-testid="new-organization-button"]',
  organizationNameInput: '[data-testid="organization-name-input"]',
  saveOrganizationButton: '[data-testid="save-organization-button"]',
  manageOrganizationButton: '[data-testid="manage-organization-button"]',
  deleteOrganizationButton: '[data-testid="delete-organization-button"]',
  confirmDeleteButton: '[data-testid="confirm-delete-button"]',
  organizationCardPrefix: '[data-testid^="organization-card-"]',
  organizationCard: (id: string) => `[data-testid="organization-card-${id}"]`,
}
