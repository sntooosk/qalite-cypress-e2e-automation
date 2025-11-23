import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/Login'
import OrganizationPage from '../pages/Organization'

const clearBrowserState = () => {
  cy.window().then((win) => {
    if (win.indexedDB?.databases) {
      win.indexedDB.databases().then((databases) => {
        databases.forEach((database) => {
          if (database?.name) {
            win.indexedDB.deleteDatabase(database.name)
          }
        })
      })
    }
  })

  cy.clearLocalStorage()
  cy.clearCookies()
}

Before({ tags: '@logout' }, () => {
  clearBrowserState()
})

// Navigation
Given('the user is on the login page', () => {
  LoginPage.open()
})

Given('the user is on the organization page', () => {
  OrganizationPage.open()
})

// Login
When('the user provides the email {string}', (email) => {
  LoginPage.typeEmail(email)
})

When('the user provides the password {string}', (password) => {
  LoginPage.typePassword(password)
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

Then('the login feedback message {string} is shown', (message) => {
  LoginPage.expectFeedbackMessage(message)
})

// Organization
When('the user starts creating a new organization', () => {
  OrganizationPage.startNewOrganization()
})

When('the user enters the organization name {string}', (name) => {
  OrganizationPage.enterOrganizationName(name)
})

Then('the user saves the organization', () => {
  OrganizationPage.saveOrganization()
  OrganizationPage.rememberCreatedOrganizationId()
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
