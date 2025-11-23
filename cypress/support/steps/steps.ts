import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../pages/login/LoginPage'
import { organizationPage } from '../pages/organization/OrganizationPage'
import { clearBrowserState } from '../utils/browserState'

Before({ tags: '@logout' }, () => {
  clearBrowserState()
})

// Navigation
Given('the user is on the login page', () => {
  loginPage.open()
})

Given('the user is on the organization page', () => {
  organizationPage.open()
})

// Login
When('the user provides the email {string}', (email: string) => {
  loginPage.typeEmail(email)
})

When('the user provides the password {string}', (password: string) => {
  loginPage.typePassword(password)
})

When('the user submits the login form', () => {
  loginPage.submit()
})

When('the user logs in with the default credentials', () => {
  cy.login()
})

Then('the user should be logged in', () => {
  loginPage.expectSuccessfulLogin()
})

Then('the login feedback message {string} is shown', (message: string) => {
  loginPage.expectFeedbackMessage(message)
})

// Organization
When('the user starts creating a new organization', () => {
  organizationPage.startNewOrganization()
})

When('the user enters the organization name {string}', (name: string) => {
  organizationPage.enterOrganizationName(name)
})

Then('the user saves the organization', () => {
  organizationPage.saveOrganization()
  organizationPage.rememberCreatedOrganizationId()
})

When('the user selects the saved organization card', () => {
  organizationPage.selectSavedOrganization()
})

When('the user opens the organization management menu', () => {
  organizationPage.openManagementMenu()
})

Then('the user deletes the organization', () => {
  organizationPage.deleteOrganization()
  organizationPage.confirmOrganizationDeletion()
})
