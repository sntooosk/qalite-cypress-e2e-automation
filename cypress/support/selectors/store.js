export const storeSelectors = {
  storeNameInput: '[data-testid="store-name-input"]',
  storeUrlInput: '[data-testid="store-site-input"]',
  saveStoreButton: '[data-testid="save-store-button"]',
  manageStoreButton: '.store-summary__actions .button',
  storeNewNameInput: '[data-testid="store-settings-name"]',
  updateStoreButton: '[data-testid="save-store-settings"]',
  deleteStoreButton: '[data-testid="delete-store-button"]',
  storeCardPrefix: '[data-testid^="store-card-"]',
  storeCard: (id) => `[data-testid="store-card-${id}"]`,

  FORMSCENARIO: {
    inputScenarioTitle: '[data-testid="scenario-title"]',
    selectBoxCategory: '[data-testid="scenario-category"]',
    selectBoxAutomation: '[data-testid="scenario-automation"]',
    CATEGORY: {
      inputCategory: '[data-testid="new-category-input"]',
      buttonAddCategory: '[data-testid="add-category-button"]',
      toggleCategory: '.category-manager-toggle',
      buttonEditCategory:
        'div[class*="category-manager-item-actions"] button[class*="button-ghost"]',
    },
  },
}
