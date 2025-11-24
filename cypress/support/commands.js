import LoginPage from './pages/Login'
import users from '../fixtures/users.json'

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    const performLogin = () => {
      LoginPage.open()
      LoginPage.fillCredentials({ email, password })
      LoginPage.submit()
      LoginPage.expectSuccessfulLogin()
    }

    cy.session(
      ['firebase:authUser', email],
      () => {
        cy.getCookie('firebase:authUser').then((authCookie) => {
          if (authCookie) {
            cy.log('Reusing firebase auth cookie in saved session')
            return
          }

          performLogin()
        })
      },
      {
        validate() {
          cy.getCookie('firebase:authUser').should('exist')
        },
        cacheAcrossSpecs: true,
      },
    )

    cy.visit('/admin')
    LoginPage.expectSuccessfulLogin()
  },
)

Cypress.Commands.add('logout', () => {
  cy.window().then((win) => {
    win.indexedDB
      ?.databases?.()
      .then((dbs) =>
        dbs.forEach((db) => db?.name && win.indexedDB.deleteDatabase(db.name)),
      )
  })

  cy.clearLocalStorage()
  cy.clearCookies()
})
