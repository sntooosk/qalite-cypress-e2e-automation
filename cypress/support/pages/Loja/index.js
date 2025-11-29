import BasePage from '../BasePage'
import { ELEMENTS } from './elements'

class StorePage extends BasePage {
  constructor() {
    super()
    this.createdStoreName = ''
    this.createdStoreUrl = ''
  }

  enterStoreName(name) {
    this.createdStoreNameName = name
    this.typeText(ELEMENTS.storeNameInput, name)
  }
  enterStoreUrl(url) {
    this.createdStoreUrl = url
    this.typeText(ELEMENTS.storeUrlInput, url)
  }

  saveStore() {
    this.click(ELEMENTS.saveStoreButton)
  }
}

export default new StorePage()
