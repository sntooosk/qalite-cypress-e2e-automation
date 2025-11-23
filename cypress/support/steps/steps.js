import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Login from '../pages/Login'
import Organization from '../pages/Organization'

Given('estou na página de login', () => {
  Login.accessLoginPage()
})

Given('estou na página de Organization', () => {
  Organization.accessOrganizationPage()
})

When('clico no botao', () => {
  Organization.clickNewOrganizationButton()
})

And('escrevo o nome da org', () => {
  Organization.typeNewOrganization('teste')
})

Then('clico no botao salvar', () => {
  Organization.saveOrganization()
  Organization.storeCreatedOrganizationId()
})

When('clico no card do org', () => {
  Organization.clickSavedOrganizationCard()
})

//
// LOGIN STEPS
//

When('o usuário informa o email {string}', (email) => {
  Login.typeEmail(email)
})

When('o usuário informa a senha {string}', (senha) => {
  Login.typePassword(senha)
})

When('o usuário envia o formulário', () => {
  Login.submitForm()
})

When('realizo login com as credenciais padrão', () => {
  cy.login()
})

Then('o login deve ser realizado com sucesso', () => {
  Login.validateSuccess()
})

Then('a mensagem {string} deve ser exibida', (msg) => {
  Login.validateMessage(msg)
})
