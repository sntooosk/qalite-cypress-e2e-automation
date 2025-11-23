export const ELEMENTS = {
  newOrganizationButton: '[data-testid="new-organization-button"]',
  organizationNameInput: '[data-testid="organization-name-input"]',
  saveOrganizationButton: '[data-testid="save-organization-button"]',
  manageOrganizationButton: '[data-testid="manage-organization-button"]',
  deleteOrganizationButton: '[data-testid="delete-organization-button"]',
  confirmDeleteButton: '[data-testid="confirm-delete-button"]',
  organizationCard: (id) => `[data-testid="organization-card-${id}"]`,
  organizationCardPrefix: '[data-testid^="organization-card-"]',
}
