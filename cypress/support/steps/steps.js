import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Login from '../pages/Login'

Before(() => {
  cy.resetSession()
})

Given('estou na página de login', () => {
  Login.accessLoginPage()
})

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
