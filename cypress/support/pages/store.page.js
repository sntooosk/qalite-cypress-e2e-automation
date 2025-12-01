import BasePage from './base.page'
import { storeSelectors as s } from '../selectors/store'
import seeds from '../../fixtures/entities.json'
import seedsScenario from '../../fixtures/scenario.json'

class StorePage extends BasePage {
  constructor() {
    super()
    this.currentStoreName = ''
    this.currentStoreUrl = ''
  }

  fillStoreName(name) {
    this.currentStoreName = name
    this.typeText(s.storeNameInput, name)
  }
  fillCategoryTitle() {
    this.typeText(
      s.FORMSCENARIO.CATEGORY.inputCategory,
      seedsScenario.forms.title,
    )
  }
  fillStoreUrl(url) {
    this.currentStoreUrl = url
    this.typeText(s.storeUrlInput, url)
  }

  fillStoreSettingsName(name) {
    this.currentStoreName = name
    this.typeText(s.storeNewNameInput, name)
  }

  saveStore() {
    this.click(s.saveStoreButton)
  }
  saveCategory() {
    this.click(s.FORMSCENARIO.CATEGORY.buttonAddCategory)
  }
  toggleStateFormCategory() {
    this.click(s.FORMSCENARIO.CATEGORY.toggleCategory)
  }
  updateCategory() {
    this.click(s.FORMSCENARIO.CATEGORY.buttonEditCategory).eq(0)
  }

  updateStore() {
    this.click(s.updateStoreButton)
  }

  deleteStore() {
    this.click(s.deleteStoreButton)
  }

  openStoreMenu() {
    this.click(s.manageStoreButton)
  }

  rememberCreatedStoreId() {
    this.rememberEntityId({
      selector: s.storeCardPrefix,
      name: this.currentStoreName,
      envKey: 'storeId',
      prefix: 'store-card-',
    })
  }

  selectSavedStore() {
    this.openSavedCard({
      selectorBuilder: s.storeCard,
      envKey: 'storeId',
      fallbackId: seeds.storeId,
    })
  }
}

export default new StorePage()
