import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/login.page'
import OrganizationPage from '../pages/organization.page'
import ProfilePage from '../pages/profile.page'
import StorePage from '../pages/store.page'
import ConfirmModal from '../pages/components/confirm-modal.component'
import Toast from '../pages/components/toast.component'
import { getScenarioContext, resetScenarioContext } from './scenarioContext'

Before(() => {
  resetScenarioContext()
})

Given('the user is on the login page', () => {
  LoginPage.open()
})

Given('the user is on the organization page', () => {
  OrganizationPage.open()
})

When('the user provides the email fake', () => {
  const { person } = getScenarioContext()
  LoginPage.typeEmail(person.invalidEmail)
})

When('the user provides the password fake', () => {
  const { person } = getScenarioContext()
  LoginPage.typePassword(person.password)
})

When('the user submits the login form', () => {
  LoginPage.submit()
})

When('the user admin logs in with the default credentials', () => {
  cy.loginAsAdmin()
})

When('the user logs in with the default credentials', () => {
  cy.loginAsUser()
})

Then('the user should be logged in', () => {
  LoginPage.expectSuccessfulLogin()
})

Then('the toast message {string} is displayed', (message) => {
  Toast.expectMessage(message)
})

When('the user starts creating a new organization', () => {
  OrganizationPage.startNewOrganization()
})

When('the user enters the organization name fake', () => {
  const { organization } = getScenarioContext()
  OrganizationPage.fillOrganizationName(organization.name)
})

When('the user enters the organization new name fake', () => {
  const { organization } = getScenarioContext()
  OrganizationPage.fillOrganizationSettingsName(organization.name)
})

Then('the user saves the organization', () => {
  OrganizationPage.saveOrganization()
  OrganizationPage.rememberCreatedOrganizationId()
})

Then('the user updates the organization', () => {
  OrganizationPage.updateOrganization()
})

When('the user selects the saved organization card', () => {
  OrganizationPage.selectSavedOrganization()
})

When('the user opens the organization management menu', () => {
  OrganizationPage.openManagementMenu()
})

Then('the user deletes the organization', () => {
  OrganizationPage.deleteOrganization()
})

When('the user starts creating a new store', () => {
  OrganizationPage.startNewStore()
})

When('the user enters the store dados faker', () => {
  const { store } = getScenarioContext()
  StorePage.fillStoreName(store.name)
  StorePage.fillStoreUrl(store.url)
})

Then('the user saves the store', () => {
  StorePage.saveStore()
  StorePage.rememberCreatedStoreId()
})

When('the user selects the saved store card', () => {
  StorePage.selectSavedStore()
})

When('the user opens the store management menu', () => {
  StorePage.openStoreMenu()
})

When('the user enters the store new name fake', () => {
  const { store } = getScenarioContext()
  StorePage.fillStoreSettingsName(store.name)
})

When('the user fills the category store form', () => {
  StorePage.fillCategoryTitle()
})
Then('the user updates the store', () => {
  StorePage.updateStore()
})

Then('the user deletes the store', () => {
  StorePage.deleteStore()
})

Then('the user saves the category', () => {
  StorePage.saveCategory()
})

When('the user click toggle category', () => {
  StorePage.toggleStateFormCategory()
})
When('the user visits the profile page', () => {
  ProfilePage.open()
})

When('the user types a new last name fake', () => {
  const { person } = getScenarioContext()
  ProfilePage.updateLastName(person.lastName)
})

Then('the user updates the profile', () => {
  ProfilePage.saveProfile()
})

When('the user name Header last name fake', () => {
  const { person } = getScenarioContext()
  ProfilePage.expectUpdatedNameInHeader(person.lastName)
})

When('the modal confirm delete is displayed', () => {
  ConfirmModal.confirmDeletion()
})
