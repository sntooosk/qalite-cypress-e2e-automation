import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Login from '../pages/Login'
import Organization from '../pages/Organization'

Given('I am on the login page', () => {
  Login.accessLoginPage()
})

Given('I am on the Organization page', () => {
  Organization.accessOrganizationPage()
})

When('I click the new organization button', () => {
  Organization.clickNewOrganizationButton()
})

When('I type the organization name {string}', (name) => {
  Organization.typeNewOrganization(name)
})

Then('I save the organization', () => {
  Organization.saveOrganization()
  Organization.storeCreatedOrganizationId()
})

When('I click the saved organization card', () => {
  Organization.clickSavedOrganizationCard()
})

When('I open the manage organization menu', () => {
  Organization.clickButtonGerenciar()
})

Then('I delete the organization', () => {
  Organization.clickButtonApagarOrg()
})

// LOGIN STEPS

When('the user enters the email {string}', (email) => {
  Login.typeEmail(email)
})

When('the user enters the password {string}', (password) => {
  Login.typePassword(password)
})

When('the user submits the form', () => {
  Login.submitForm()
})

When('I log in with the default credentials', () => {
  cy.login()
})

Then('the login should be successful', () => {
  Login.validateSuccess()
})

Then('the message {string} should be displayed', (message) => {
  Login.validateMessage(message)
})
