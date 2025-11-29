import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/Login'
import OrganizationPage from '../pages/Organization'
import ProfilePage from '../pages/Profile'
import StorePage from '../pages/Loja'
import {
  randomCompanyName,
  randomEmail,
  randomLastName,
  randomPassword,
  randomStoreName,
} from '../utils/generators'
import Toast from '../pages/components/Toast'

const lastNameFaker = randomLastName()
const OrganizationFaker = randomCompanyName()
const StoreFaker = randomStoreName()
const invalidEmailFaker = randomEmail('qualitydigital.global')
const invalidPasswordFaker = randomPassword(16)

/*--------------- Navigation ----------------*/

Given('the user is on the login page', () => {
  LoginPage.open()
})

Given('the user is on the organization page', () => {
  OrganizationPage.open()
})

/*------------------- Login -------------------*/

When('the user provides the email fake', () => {
  LoginPage.typeEmail(invalidEmailFaker)
})

When('the user provides the password fake', () => {
  LoginPage.typePassword(invalidPasswordFaker)
})

When('the user submits the login form', () => {
  LoginPage.submit()
})

When('the user logs in with the default credentials', () => {
  cy.login()
})

Then('the user should be logged in', () => {
  LoginPage.expectSuccessfulLogin()
})

/*-------------- Organization ----------------*/

When('the user starts creating a new organization', () => {
  OrganizationPage.startNewOrganization()
})

When('the user enters the organization name fake', () => {
  OrganizationPage.enterOrganizationName(OrganizationFaker)
})

When('the user enters the organization new name fake', () => {
  OrganizationPage.enterOrganizationNameSettings(OrganizationFaker)
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
  OrganizationPage.confirmOrganization()
})

/*------------------- Toast -------------------*/

When('the toast message {string} is displayed', (message) => {
  Toast.confirmMessage(message)
})

/*------------------- Profile -------------------*/

When('the user visits the profile page', () => {
  ProfilePage.open()
})

When('the user types a new last name fake', () => {
  ProfilePage.typeLastName(lastNameFaker)
})

Then('the user updates the profile', () => {
  ProfilePage.saveProfile()
})

When('the user name Header last name fake', () => {
  ProfilePage.expectNameHeader(lastNameFaker)
})

/*------------------- Loja -------------------*/

When('the user starts creating a new store', () => {
  OrganizationPage.startNewStore()
})

When('the user enters the store dados faker', () => {
  StorePage.enterStoreName(StoreFaker)
  StorePage.enterStoreUrl('http//loja.com')
})

Then('the user saves the store', () => {
  StorePage.saveStore()
})
